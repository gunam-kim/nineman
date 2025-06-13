import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useWebSocket from "react-use-websocket";
import axios from "axios";

const ChatRoom = () => {
    const { roomId } = useParams();
    const [ sender, setSender ] = useState("");
    const [ content, setContent ] = useState("");
    const [ messages, setMessages ] = useState([]);
    const navi = useNavigate();

    // WebSocketURL
    const socketUrl = `ws://localhost:8001/ws/chat/${roomId}`;

    const { sendJsonMessage, lastJsonMessage, readyState } = useWebSocket(
        socketUrl,
        {
            onOpen: () => console.log("웹 소켓 연결 성공"),
            onClose: () => console.log("웹 소켓 연결 종료"),
            shouldReconnect: closeEvent => true, // 자동 재연결 설정
            reconnectAttempts: 3, // 재연결 시도 횟수
            reconnectInterval: 5000, // 재연결 시도 간격 (ms)
            onBeforeOpen: instance => {
                if(!sender){
                    instance.close();
                    return false; // 닉네임이 없으면 연결하지 않음
                }
                return true; // 닉네임이 있으면 연결 허용
            },
        }
    );

    const status = {
        [WebSocket.CONNECTING]: "연결중...",
        [WebSocket.OPEN]: "연결됨",
        [WebSocket.CLOSING]: "연결 종료중...",
        [WebSocket.CLOSED]: "연결 종료됨",
    }[readyState];

    useEffect(() => {
        if(lastJsonMessage !== null){
            setMessages(prev => [...prev, lastJsonMessage]);
        }
    }, [lastJsonMessage]);

    useEffect(() => {
        const senderNickName = prompt(
            "닉네임을 입력해주세요"
        );

        if(!senderNickName){
            navi("/rooms");
            return;
        }

        // 기존 메시지를 조회
        axios
            .get(`http://localhost:8001/api/rooms/${roomId}`)
            .then((response) => {
                console.log("기존 메시지 조회 성공", response);
                setMessages(response.data);
            })
            .catch((err) => console.error("메시지 조회 실패", err));

        setSender(senderNickName);
    }, []);

    const handleSendMessage = () => {
        if(!content.trim() || readyState !== WebSocket.OPEN) return;

        const message = {
            sender : sender,
            content : content,
            roomId : roomId
        };

        sendJsonMessage(message);
        setContent('');
    };

    return (
        <>
            <div className="room">
                <div className="room-header">
                    <button>뒤로 가기</button>
                    <h3>채팅방</h3>
                    <div>현재 상태 : {status}</div>
                </div>

                <div className="message-wrap">
                    <div className="message-content">
                        {
                            messages.length === 0 ?
                            <div>아직 메세지가 존재하지 않습니다</div>
                            :
                            messages.map((msg, index) => (
                                <div key={index}
                                    className={msg.sender == sender ? "mymy" : "urur"}>
                                    <div className="sender">{msg.sender}</div>
                                    <div className="content">{msg.content}</div>
                                </div>
                            ))
                        }
                    </div>

                    <div className="message-input">
                        <input type="text"
                            value={content}
                            onChange={e => setContent(e.target.value)}
                            placeholder="메세지를 입력하세요"
                            onKeyDown={e => e.key === "Enter" && handleSendMessage()}
                        />
                        <button
                            onClick={handleSendMessage}
                            disabled={readyState !== WebSocket.OPEN}>
                                전송
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChatRoom;
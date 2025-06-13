import { use, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ChatRooms = () => {
    const [rooms, setRooms] = useState([]);
    const [newChat, setNewChat] = useState("");
    const navi = useNavigate();

    useEffect(() => {
        axios
        .get("http://localhost:8001/api/rooms")
        .then((response) => {
            console.log(response);
            setRooms([...response.data]);
        })
        .catch((err) => console.error("채팅방 조회 실패", err));
    }, []);

    const createRoom = () => {
        if(newChat.trim()){
            axios.post("http://localhost:8001/api/rooms", {name : newChat})
            .then(response => {
                setRooms([...rooms, response.data]);
                setNewChat("");
            })
            .catch((err) => console.error("채팅방 생성 실패", err));
        }
    };
    
    return (
        <>
            <div>
                <h2>채팅방 목록</h2>

                <div className="chat-form">
                    <input type="text"
                        value={newChat}
                        onChange={e => setNewChat(e.target.value)}
                        placeholder="방 이름을 입력하세요"
                        onKeyDown={e => e.key === "Enter" && createRoom()}
                    />

                    <button onClick={createRoom}>새로 만들기</button>
                </div>

                <ul>
                    {rooms.length != 0 ? (
                        rooms.map((room) => (
                            <li onClick={() => navi(`/chat/${room.id}`)} key={room.id}>
                                {room.name}
                            </li>
                        ))
                    ) : (
                        <h4>아직 방이 없어요 새로 만들어보세요</h4>
                    )}
                </ul>
            </div>
        </>
    );
};

export default ChatRooms;
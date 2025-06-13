import { useState, useEffect } from "react";
import cookies from "js-cookie";
import axios from "axios";

const Cookie = () => {
    const [cookieName, setCookieName] = useState("");
    const [cookieValue, setCookieValue] = useState("");

    const makeCookie = () => {
        if(cookieName && cookieValue){
            cookies.set(cookieName, cookieValue, { expires: 1 });
            setCookieName("");
            setCookieValue("");
            alert(`쿠키 ${cookieName}=${cookieValue}가 생성되었습니다.`);
            setCookieName("");
            setCookieValue("");
        }
    };

    const sendCookie = () => {
        axios.get("http://localhost:8001/api/cookie", {
            withCredentials: true,
        })
        .then((response) => console.log(response));
    };

    return (
        <>
            <div>
                <div>쿠키 이름</div>
                <input type="text"
                        value={cookieName}
                        onChange={(e) => setCookieName(e.target.value)}
                />
            </div>
            <div>
                <div>쿠키 값</div>
                <input type="text"
                        value={cookieValue}
                        onChange={(e) => setCookieValue(e.target.value)}
                />
            </div>
            <button onClick={makeCookie}>쿠키 만들기</button>
            <div>
                <button onClick={sendCookie}>서버로 쿠키 전달하기</button>
            </div>
        </>
    );
};

export default Cookie;
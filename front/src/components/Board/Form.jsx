import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
    const [name, setName] = useState('');
    const [content, setContent] = useState('');
    const navi = useNavigate();
    const apiUrl = window.ENV?.API_URL || "http://localhost:8001";

    // 파일 첨부 관련 state
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null);
    
    const handleNameChange = (e) => {
        setName(e.target.value);
    };
    const handleContentChange = (e) => {
        setContent(e.target.value);
    };
    const handleFileChange = (e) => {
        const uploadFile = e.target.files[0];
        setFile(uploadFile);
        if(uploadFile && uploadFile.type.startsWith("image/")){
            const reader = new FileReader();
            reader.onload = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(uploadFile);
        } else {
            setPreview(null);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name.trim() || !content.trim()) {
            alert("제목과 내용을 작성해주세요");
            return;
        }

        const formData = new FormData();
        formData.append("name", name);
        formData.append("content", content);

        if(file){
            formData.append("file", file);
        }

        axios.post(`${apiUrl}/api/req`, formData, {
            headers : {
                "Content-Type" : "multipart/form-data",
            },
        }).then((res) => {
            console.log(res.data.data);
            navi("/list");
        });
    };

    return (
        <>
            <div className="body-container">
                <h2>이름과 내용을 작성하고 버튼 클릭!</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">이름</label>
                        <input 
                        type="text" 
                        id="name" value={name} 
                        placeholder="이름을 입력해주세요!" 
                        onChange={handleNameChange}
                        required
                        />
                    </div>
                    <div>
                    <label htmlFor="content">내용</label>
                        <textarea 
                            type="text" 
                            id="content" 
                            value={content} 
                            placeholder="내용을 입력해주세요!"
                            onChange={handleContentChange}
                            required
                            style={{resize:"none"}}
                            ></textarea>
                    </div>

                    <br />

                    <div>
                        <label htmlFor="file">파일 첨부하기</label>
                        <input type="file" id="file" onChange={handleFileChange} />
                    </div>

                    {preview && (
                        <div>
                            <h3>미리보기</h3>
                            <img src={preview} style={{width: "200px", height: "200px"}} />
                        </div>
                    )}

                    <div>
                        <button type="button" onClick={() => navi(-1)}>취소</button>
                        <button type="submit">글작성하기</button>
                    </div>
                </form>

            </div>
        </>
    )

};


export default Form;
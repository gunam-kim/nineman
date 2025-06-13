import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate} from "react-router-dom";


const List = () => {

    // localhost:8080/api/req (GET방식)
    const [entity, setEntity] = useState([]);
    const apiUrl = window.ENV?.API_URL || "http://localhost:8001";
    const [flag, isFlag] = useState(false);

    useEffect(() => {
        axios.get(`${apiUrl}/api/req`).then((data) => {
            // console.log(data.data.data);
            setEntity([...data.data.data]);
        })
    }, [flag]);

    const handleDelete = id => {
        if(!window.confirm("정말 삭제하시겠습니까?")){
            return;
        }

        axios.delete(`${apiUrl}/api/req/${id}`)
            .then(() => {
                alert('삭제되었습니다');
                isFlag((flag) => !flag);
            })
            .catch(err => {
                console.error("이상하네", err);
            });
    };

    return(
        <>
            <h2>보기 화면</h2>

            {
                entity.length === 0 ? <div>작성된 글이 없습니다</div>
                :
                <div>
                    {entity.map((res) => (
                            <div key={res.id}>
                                <h3>{res.name || "이름없음"}</h3>
                                <p>{res.content}</p>
                                {res.fileUrl && (
                                <img src={res.fileUrl} style={{width : "200px", height : "200px"}} />
                                )}
                            <div style={{marginTop : "10px"}}>
                                <button onClick={() => handleDelete(res.id)}>삭제하기</button>
                            </div>
                            </div>
                    ))}
                </div>
            }            
        </>
    )
}

export default List;
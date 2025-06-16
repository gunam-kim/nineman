import { useEffect, useState } from "react";
import axios from "axios";
import PostItem from "../../Board/PostItem";


const BoardManage = () => {
  const [entity, setEntity] = useState([]);
  const [flag, isFlag] = useState(false);
  const apiUrl = window.ENV?.API_URL || "http://localhost:8001";

  useEffect(() => {
    axios
      .get(`${apiUrl}/api/req`)
      .then((data) => {
        setEntity([...data.data.data]);
      })
      .catch((err) => {
        console.error("데이터 불러오기 실패", err);
      });
  }, [flag]);

  const handleDelete = (id) => {
    if (!window.confirm("정말 삭제하시겠습니까?")) return;

    axios
      .delete(`${apiUrl}/api/req/${id}`)
      .then(() => {
        alert("삭제되었습니다");
        isFlag((prev) => !prev); // 다시 로딩
      })
      .catch((err) => {
        console.error("삭제 실패", err);
      });
  };

  return (
    <div>
      <h2>게시판 관리</h2>
      {entity.length === 0 ? (
        <div>작성된 글이 없습니다</div>
      ) : (
        <div>
          {entity.map((post) => (
            <PostItem key={post.id} post={post} onDelete={handleDelete} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BoardManage;
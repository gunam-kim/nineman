import { useState } from "react";

const PostItem = ({ post, onDelete }) => {
  const [isGray, setIsGray] = useState(false);

  const handleGrayToggle = () => {
    setIsGray(true);
  };

  return (
    <div style={{ borderBottom: "1px solid #ddd", marginBottom: "20px" }}>
      <h3 style={{ color: isGray ? "gray" : "black" }}>
        {post.name || "이름없음"}
      </h3>
      <p>{post.content}</p>
      {post.fileUrl && (
        <img
          src={post.fileUrl}
          alt="업로드 이미지"
          style={{ width: "200px", height: "200px" }}
        />
      )}
      <div style={{ marginTop: "10px" }}>
        <button onClick={() => onDelete(post.id)}>삭제하기</button>
        <button onClick={handleGrayToggle} style={{ marginLeft: "10px" }}>
          제목 회색으로
        </button>
      </div>
    </div>
  );
};

export default PostItem;
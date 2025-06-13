import { useNavigate } from "react-router-dom";
import { HeaderButton, HeaderContainer, HeaderLogo, HeaderObject } from "../../Style/Styles";

const Header = () => {
  const navi = useNavigate();

  return (
    <>
        <HeaderContainer>
            <HeaderLogo>
                LOGO
            </HeaderLogo>

            <HeaderObject>
                <ul><a href='/'>Home</a></ul>
                <ul><a href='/form'>작성</a></ul>
                <ul><a href='/list'>목록</a></ul>
                <ul><a href='/chat/:roomId'>채팅</a></ul>
            </HeaderObject>

            <HeaderButton>
                로그인
            </HeaderButton>
        </HeaderContainer>
    </>
  );
};

export default Header;
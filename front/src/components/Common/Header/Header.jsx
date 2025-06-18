import { HeaderButton, HeaderContainer, HeaderLogo, HeaderObject } from "../../Style/Styles";

const Header = () => {
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
                <ul><a href='/login'>로그인</a></ul>
                <ul><a href='/join'>회원가입</a></ul>
            </HeaderButton>
        </HeaderContainer>
    </>
  );
};

export default Header;
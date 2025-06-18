import styled from "styled-components";

export const AdminMain = styled.div`
    width: 1200px;
    height: auto;
    min-height: 1200px;
    margin: auto;
    margin-top : 30px;
    margin-bottom: 30px;
`;

/* Header */
export const HeaderContainer = styled.header`
    position: fixed;
    top: 0;
    width: 100%;
    background:rgb(51, 165, 173);
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
    justify-content:center;
`;

export const HeaderLogo = styled.div`
    width: 10%;
`;

export const HeaderObject = styled.div`
    width: 70%;
    display: flex;
    padding: 0;
    text-align: center;
    margin: 0;
    justify-content: space-evenly;
`;

export const HeaderButton = styled.div`
    width: 20%;
    display: flex;
    padding: 0;
    text-align: center;
    margin: 0;
    justify-content: space-evenly;
`;

/* 관리자 Header */
export const AdminPageHeaderContainer = styled.header`
    position: fixed;
    top: 0;
    width: 100%;
    background-color:rgb(0, 0, 0);
    display: flex;
`;

export const AdminPageHeaderObject = styled.div`
    width: 70%;
    display: flex;
    padding: 0;
    text-align: center;
    margin: 0;
    justify-content: space-evenly;
`;

export const AdminPageHeaderButton = styled.div`
    width: 20%;
    display: flex;
    padding: 0;
    text-align: center;
    margin: 0;
    justify-content: space-evenly;
`;

/* Footer */

export const FooterContainer = styled.footer`
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color:rgb(0, 0, 0);
    display: flex;
`;

export const FooterCopyright = styled.div`
    width: 100%;
    color: #fff;
    text-align: left;
    padding: 10px 0;
    font-size: 14px;
`;

export const FooterPrivacy = styled.div`
    &:hover {
        background-color: rgb(0, 0, 0);
        color: #fff;
        cursor: pointer;
    }
`;
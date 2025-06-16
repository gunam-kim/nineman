import styled from "styled-components";

/* Header */
export const HeaderContainer = styled.header`
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #020202;
    display: flex;
`;

export const HeaderLogo = styled.div`
    width: 10%;
    color: red;
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

/* Footer */

export const FooterContainer = styled.footer`
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #020202;
    display: flex;
`;

export const FooterCopyright = styled.div`
    width: 100%;
    color: #fff;
    text-align: left;
    padding: 10px 0;
    font-size: 14px;
`;
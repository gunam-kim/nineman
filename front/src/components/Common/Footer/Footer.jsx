import { FooterContainer, FooterCopyright, FooterPrivacy } from "../../Style/Styles";

const Footer = () => {

    const id = "user1234";
    const password = "password1234";
    
  return (
    <>
        <FooterContainer>
            {/* 하단 카피라이트 + 개인정보 처리방침 */}
            <FooterCopyright className="copyright">
                <p>© 2025 Positivus. All Rights Reserved.</p>

                {/* 새 창 열기 */}
                <FooterPrivacy className="privacy"
                    onClick={() => {
                        window.open(
                            '/privacy',
                            '_blank',
                        );
                    }}
                >
                    Privacy Policy
                </FooterPrivacy>
            </FooterCopyright>
        </FooterContainer>
    </>
  );
};

export default Footer;
import { FooterContainer, FooterCopyright } from "../../Style/Styles";

const Footer = () => {
  return (
    <>
        <FooterContainer>
            {/* 하단 카피라이트 + 개인정보 처리방침 */}
            <FooterCopyright className="copyright">
                <p>© 2025 Positivus. All Rights Reserved.</p>

                <a href="/privacy" className="privacy">
                    Privacy Policy
                </a>
            </FooterCopyright>
        </FooterContainer>
    </>
  );
};

export default Footer;
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: #1a1a1a;
  color: white;
  padding: 2rem 1rem;
  text-align: center;
  width: 100vw;
  box-sizing: border-box;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 1rem;
`;

const SocialLink = styled.a`
  color: white;
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #e74c3c;
  }
`;

const ContactInfo = styled.div`
  font-size: 0.9rem;
  margin-bottom: 1rem;

  p {
    margin: 0.5rem 0;
  }
`;

const Copyright = styled.p`
  font-size: 0.8rem;
  color: #666;
  margin-top: 1rem;
`;

function Footer() {
  return (
    <FooterContainer>
      <SocialLinks>
        <SocialLink href="#" aria-label="Facebook"><FaFacebook /></SocialLink>
        <SocialLink href="#" aria-label="Twitter"><FaTwitter /></SocialLink>
        <SocialLink href="#" aria-label="Instagram"><FaInstagram /></SocialLink>
        <SocialLink href="#" aria-label="LinkedIn"><FaLinkedin /></SocialLink>
      </SocialLinks>
      <ContactInfo>
        <p>Téléphone: +212 6 12 34 56 78</p>
        <p>Email: contact@marocxplore.com</p>
        <p>Adresse: 123 Rue Principale, Casablanca, Maroc</p>
      </ContactInfo>
      <Copyright>
        © {new Date().getFullYear()} MarocXplore. Tous droits réservés.
      </Copyright>
    </FooterContainer>
  );
}

export default Footer;
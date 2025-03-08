import styled from 'styled-components';

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const LogoImage = styled.img`
  height: 40px;
  width: auto;
  @media (max-width: 768px) {
    height: 30px;
  }
`;

const LogoText = styled.span`
  color: #2563eb;
  font-size: 1.5rem;
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

function Logo() {
  return (
    <LogoContainer>
      <LogoImage src="/images/logo.jpg" alt="MarocXplore Logo" />
      <LogoText>MarocXplore</LogoText>
    </LogoContainer>
  );
}

export default Logo;
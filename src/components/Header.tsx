import styled from "styled-components";
const Header = () => {
  return (
    <Container>
      <Logo src="../../assets/logo.svg" alt="Logo" />
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 6.5vh;
  position: sticky;
  top: 0;
  left: 0;
  background-color: #212121;
  align-items: center;
`;

const Logo = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 2em;
`;

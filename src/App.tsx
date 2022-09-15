import styled from "styled-components";
import logo from "./assets/logo.svg";

function App() {
  return (
    <Container>
      <Logo src={logo} />
      <Title>Seu duo está aqui.</Title>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.img`
  width: 270px;
  height: 100px;
  margin-top: 60px;
`;

const Title = styled.h1`
  font-size: 60px;
  color: white;
  font-weight: bold;
  font-family: "Inter", sans-serif;
  font-weight: 900;
`;

export default App;

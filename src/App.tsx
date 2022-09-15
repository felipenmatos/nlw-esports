import styled from "styled-components";
import logo from "./assets/logo.svg";
import img1 from "./assets/photo1.png";
import img2 from "./assets/photo2.png";
import img3 from "./assets/photo3.png";
import img4 from "./assets/photo4.png";
import img5 from "./assets/photo5.png";
import img6 from "./assets/photo6.png";

function App() {
  return (
    <Container>
      <Logo src={logo} />
      <Title>
        Seu <Span>duo</Span> está aqui.
      </Title>
      <Div>
        <Link>
          <ImgLink src={img1} />
        </Link>
        <Link>
          <ImgLink src={img2} />
        </Link>
        <Link>
          <ImgLink src={img3} />
        </Link>
        <Link>
          <ImgLink src={img4} />
        </Link>
        <Link>
          <ImgLink src={img5} />
        </Link>
        <Link>
          <ImgLink src={img6} />
        </Link>
      </Div>
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
  margin-top: 40px;
`;

const Title = styled.h1`
  font-size: 60px;
  color: white;
  font-weight: bold;
  font-family: "Inter", sans-serif;
  font-weight: 900;
  margin-top: 30px;
  display: flex;
`;

const Span = styled.h1`
  font-size: 60px;
  font-weight: bold;
  font-family: "Inter", sans-serif;
  font-weight: 900;
  margin-left: 10px;
  margin-right: 10px;
  background: linear-gradient(
    89.86deg,
    #9572fc 23.08%,
    #43e7ad 33.94%,
    #e1d55d 44.57%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

const Div = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
  height: 60px;
`;

const Link = styled.a``;

const ImgLink = styled.img``;

export default App;

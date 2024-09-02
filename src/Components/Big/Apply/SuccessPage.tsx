import styled from "styled-components";
import Header from "../Header";
import Footer from "../Footer";
import Applying from "./Applying";
import { Link, useLocation } from "react-router-dom";

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 90px 650px 330px;
  background: radial-gradient(
    circle at 50% 420px,
    #303030,
    rgb(27, 27, 27) 60%
  );
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    height: 17vw;
  }
  p:nth-child(2) {
    color: white;
    font-size: 3.2vw;
    margin-top: 1.4vw;
  }
  p:nth-child(3) {
    color: #d9d9d9;
    font-size: 1.65vw;
    margin-top: 1.4vw;
  }
`;

const Button = styled(Link)`
  width: 12vw;
  height: 3.2vw;
  background-color: #f6c015;
  border: none;
  border-radius: 3vw;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  p:nth-child(1) {
    margin: 0;
    font-size: 1.1vw;
    color: black;
  }
  margin-top: 3vw;
`;

const SuccessPage = () => {
  const location = useLocation();
  return (
    <Wrapper>
      <Header />
      <Container>
        <img src={`${process.env.PUBLIC_URL}/img/logo2.png`} />
        <p>지금은 지원 기간이 아닙니다.</p>
        <Button to="/">
          <p>홈으로 돌아가기</p>
        </Button>
      </Container>
      <Footer />
    </Wrapper>
  );
};

export default SuccessPage;

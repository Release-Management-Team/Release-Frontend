import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import SHeader from "../SHeader";
import SFooter from "../SFooter";

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 70px 500px 200px;
  background: radial-gradient(
    circle at 50% 300px,
    #303030,
    rgb(27, 27, 27) 30%
  );
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    height: 22vw;
  }
  p:nth-child(2) {
    color: white;
    font-size: 4.2vw;
    margin-top: 1.7vw;
  }
  p:nth-child(3) {
    color: #d9d9d9;
    font-size: 3vw;
    margin-top: 1.7vw;
  }
`;

const Button = styled(Link)`
  width: 18vw;
  height: 5vw;
  background-color: #f6c015;
  border: none;
  border-radius: 3vw;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  p:nth-child(1) {
    margin: 0;
    font-size: 1.6vw;
    color: black;
  }
  margin-top: 3vw;
`;

function SSuccessPage() {
  const location = useLocation();
  return (
    <Wrapper>
      <SHeader />
      <Container>
        <img src={`${process.env.PUBLIC_URL}/img/logo2.png`} />
        <p>지원해주셔서 감사합니다!</p>
        <p>1차 서류 결과</p>
        <Button to="/">
          <p>홈으로 돌아가기</p>
        </Button>
      </Container>
      <SFooter />
    </Wrapper>
  );
}

export default SSuccessPage;

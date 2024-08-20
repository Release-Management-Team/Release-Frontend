import styled from "styled-components";
import Header from "../../Components/Big/Header";
import Footer from "../../Components/Big/Footer";
import Applying from "../../Components/Big/Apply/Applying";

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 90px 900px 330px;
  background: radial-gradient(
    circle at 28% 500px,
    #303030,
    rgb(27, 27, 27) 40%
  );
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 7fr 7fr 1fr;
`;

const Description = styled.div`
  display: grid;
  grid-template-rows: 1.2fr 1fr;
  grid-template-columns: 1fr 1fr;
  gap: 1px;
`;

const LogoZone = styled.div`
  grid-column: 1 / span 2;
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

const Date = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const Target = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const Title = styled.div`
  width: 80%;
  height: 7vh;
  border-bottom: 1px solid #999999;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  p:nth-child(1) {
    color: white;
    font-size: 1.6vw;
    margin-left: 4.5px;
  }
`;

const Text = styled.div`
  width: 80%;
  p: nth-child(n + 1) {
    margin-top: 1.4vw;
    color: #d9d9d9;
    font-size: 1.1vw;
    font-weight: 400;
  }
`;

function Apply() {
  return (
    <Wrapper>
      <Header />
      <Container>
        <div></div>
        <Description>
          <LogoZone>
            <img src={`${process.env.PUBLIC_URL}/img/logo2.png`} />
            <p>지금 지원하세요!</p>
            <p>Release는 당신의 잠재력을 기다리고 있습니다.</p>
          </LogoZone>
          <Date>
            <Title>
              <p>모집 일정</p>
            </Title>
            <Text>
              <p>1차 서류</p>
              <p>1차 발표</p>
              <p>2차 면접</p>
              <p>최종 발표</p>
              <p>개강 총회</p>
            </Text>
          </Date>
          <Target>
            <Title>
              <p>모집 대상</p>
            </Title>
            <Text>
              <p>대상 1</p>
              <p>대상 2</p>
              <p>대상 3</p>
            </Text>
          </Target>
        </Description>
        <Applying />
        <div></div>
      </Container>
      <Footer />
    </Wrapper>
  );
}

export default Apply;

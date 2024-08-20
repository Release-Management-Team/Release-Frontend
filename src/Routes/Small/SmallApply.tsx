import styled from "styled-components";
import SHeader from "../../Components/Small/SHeader";
import SFooter from "../../Components/Small/SFooter";
import { useState } from "react";
import SApplying from "../../Components/Small/Apply/SApplying";

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 70px 1500px 200px;
  background: radial-gradient(
    circle at 50% 300px,
    #303030,
    rgb(27, 27, 27) 30%
  );
  @media (max-width: 600px) {
    grid-template-rows: 70px 1300px 200px;
    background: radial-gradient(
      circle at 50% 300px,
      #303030,
      rgb(27, 27, 27) 40%
    );
  }
  @media (max-width: 520px) {
    grid-template-rows: 70px 1100px 200px;
    background: radial-gradient(
      circle at 50% 300px,
      #303030,
      rgb(27, 27, 27) 40%
    );
  }
  @media (max-width: 450px) {
    grid-template-rows: 70px 1000px 200px;
    background: radial-gradient(
      circle at 50% 300px,
      #303030,
      rgb(27, 27, 27) 40%
    );
  }
`;

const GridZone = styled.div`
  display: grid;
  grid-template-columns: 3fr 5fr 3fr;
`;

const Blank = styled.div``;

const LogoZone = styled.div`
  width: 100%;
  height: 250px;
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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const Target = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;

const Title1 = styled.div`
  width: 60%;
  height: 3vh;
  border-bottom: 1px solid #999999;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  p:nth-child(1) {
    color: white;
    font-size: 2vw;
    margin-left: 4.5px;
  }
`;

const Title2 = styled.div`
  width: 60%;
  height: 3vh;
  border-bottom: 1px solid #999999;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  p:nth-child(1) {
    color: white;
    font-size: 2vw;
    margin-right: 4.5px;
  }
`;

const Text1 = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  p: nth-child(n + 1) {
    margin-top: 1.6vw;
    color: #d9d9d9;
    font-size: 1.6vw;
    font-weight: 400;
  }
`;

const Text2 = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  p: nth-child(n + 1) {
    margin-top: 1.6vw;
    color: #d9d9d9;
    font-size: 1.6vw;
    font-weight: 400;
  }
`;

function SmallApply() {
  return (
    <Wrapper>
      <SHeader />
      <GridZone>
        <Blank />
        <div>
          <LogoZone>
            <img src={`${process.env.PUBLIC_URL}/img/logo2.png`} />
            <p>지금 지원하세요!</p>
            <p>Release는 당신의 잠재력을 기다리고 있습니다.</p>
          </LogoZone>
          <Date>
            <Title1>
              <p>모집 일정</p>
            </Title1>
            <Text1>
              <p>1차 서류</p>
              <p>1차 발표</p>
              <p>2차 면접</p>
              <p>최종 발표</p>
              <p>개강 총회</p>
            </Text1>
          </Date>
          <Target>
            <Title2>
              <p>모집 대상</p>
            </Title2>
            <Text2>
              <p>대상 1</p>
              <p>대상 2</p>
              <p>대상 3</p>
            </Text2>
          </Target>
          <SApplying />
        </div>
        <Blank />
      </GridZone>
      <SFooter />
    </Wrapper>
  );
}

export default SmallApply;

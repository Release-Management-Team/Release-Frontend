import styled from "styled-components";
import { motion } from "framer-motion";
import SHeader from "../../Components/Small/SHeader";
import { useState } from "react";
import SFooter from "../../Components/Small/SFooter";
import { Link } from "react-router-dom";

interface HoverProps {
  isHovered: boolean;
}

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 70px 250px 2400px 50px 200px;
  @media (max-width: 550px) {
    grid-template-rows: 70px 200px 1700px 40px 200px;
  }
  @media (max-width: 460px) {
    grid-template-rows: 70px 170px 1400px 20px 180px;
  }
  background: radial-gradient(
    circle at 50% 300px,
    #303030,
    rgb(27, 27, 27) 60%
  );
`;

const FirstBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 15vw;
  justify-content: center;
  p:nth-child(1) {
    font-size: 7vw;
    margin-bottom: 2.5vw;
    color: white;
  }
  p:nth-child(2) {
    font-size: 3vw;
    color: #d9d9d9;
  }
`;

const BlankBox = styled.div``;

const Projects = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.7vw;
  justify-content: center;
`;

const ProjectBox = styled(motion.div)`
  width: 50vw;
  height: 40vw;
  background-color: #e1e1e1;
  border-radius: 20px;
  border: 1px solid #999999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProjectText = styled.div<HoverProps>`
  width: 40vw;
  height: 23vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1.5vw;
  color: white;

  p:nth-child(1) {
    color: ${(props) => (props.isHovered ? "#4e4e4e" : "#999999")};
    font-size: 2vw;
  }
  p:nth-child(2) {
    color: ${(props) => (props.isHovered ? "#2c2c2c" : "white")};
    font-size: 3vw;
  }
  p:nth-child(3) {
    color: ${(props) => (props.isHovered ? "#363636" : "#d9d9d9")};
    margin-top: 2.2vw;
    font-size: 1.8vw;
  }
  p:nth-child(4) {
    color: ${(props) => (props.isHovered ? "#4e4e4e" : "#999999")};
    font-size: 2.2vw;
  }
`;

const ProjectHover = styled.div`
  position: relative;
  width: 40vw;
  height: 23vw;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  color: black;
  p:nth-child(n + 1) {
    line-height: 1.9vw;
    font-weight: 400;
    font-size: 1.8vw;
  }
`;

const ProjectLink = styled.div`
  position: absolute;
  right: 0px;
  bottom: 0px;
  span:nth-child(1) {
    color: #999999;
    font-weight: 400;
    font-size: 1.5vw;
    margin-right: 0.7vw;
  }
  img:nth-child(2) {
    width: 1.5vw;
  }
`;

const BoxHover = {
  start: {
    backgroundColor: "#1c1c1c",
  },
  hover: {
    backgroundColor: "#e1e1e1",
    transition: {
      backgroundColor: { duration: 0.5 },
    },
  },
};

function ProjectBoxComponent() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <ProjectBox
      variants={BoxHover}
      initial="start"
      whileHover="hover"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {isHovered ? (
        <ProjectHover>
          <p>
            [코테 스터디원 N명이 모두 풀지 않은 문제 K개를 추천해주는 서비스]
            코테 스터디에서 가장 많이 활용하는 검증된 문제집인 tony9402님의 백준
            문제집(https://github.com/tony9402/baekjoon)에서 N명의 스터디원이
            모두 풀지 않은 문제를 알고리즘 태그 기준으로 선정하는데 도움을 줄 수
            있는 서비스입니다.
          </p>
          <Link to="https://sup-algorithm.netlify.app/">
            <ProjectLink>
              <span>세부정보 확인</span>
              <img src={`${process.env.PUBLIC_URL}/img/link.png`} />
            </ProjectLink>
          </Link>
        </ProjectHover>
      ) : (
        <ProjectText isHovered={isHovered}>
          <p>#Web</p>
          <p>SUP</p>
          <p>코딩테스트 스터디를 위한 검증된 알고리즘 문제 필터 서비스</p>
          <p>김문기</p>
        </ProjectText>
      )}
    </ProjectBox>
  );
}

function ProjectBoxComponent1() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <ProjectBox
      variants={BoxHover}
      initial="start"
      whileHover="hover"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {isHovered ? (
        <ProjectHover>
          <p>
            서강대학교 공식 홈페이지에 새로운 공지사항이 등록되면, 1분 안에
            알려주는 Slack 봇입니다.
          </p>
          <Link to="https://github.com/SEEWON/Webcat">
            <ProjectLink>
              <span>세부정보 확인</span>
              <img src={`${process.env.PUBLIC_URL}/img/link.png`} />
            </ProjectLink>
          </Link>
        </ProjectHover>
      ) : (
        <ProjectText isHovered={isHovered}>
          <p>#Application</p>
          <p>웹캣</p>
          <p>
            서강대학교 공식 홈페이지에 새로운 공지사항이 등록되면, 1분 안에
            알려주는 Slack 봇입니다.
          </p>
          <p>유시원</p>
        </ProjectText>
      )}
    </ProjectBox>
  );
}

function ProjectBoxComponent2() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <ProjectBox
      variants={BoxHover}
      initial="start"
      whileHover="hover"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {isHovered ? (
        <ProjectHover>
          <p>
            RSS 업데이트에서 내가 관심있어할 만한 소식을 정리해서 하나의 데일리
            아티클로 재구성해줍니다. LLM을 활용하여 RSS 리더를 재해석했습니다.
          </p>
          <Link to="https://garden.postica.app/baking-news-initial-developement">
            <ProjectLink>
              <span>세부정보 확인</span>
              <img src={`${process.env.PUBLIC_URL}/img/link.png`} />
            </ProjectLink>
          </Link>
        </ProjectHover>
      ) : (
        <ProjectText isHovered={isHovered}>
          <p>#AI&nbsp;&nbsp;#Web</p>
          <p>Baking News</p>
          <p>LLM이 작성해주는 데일리 RSS 뉴스레터</p>
          <p>박정한</p>
        </ProjectText>
      )}
    </ProjectBox>
  );
}

function ProjectBoxComponent3() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <ProjectBox
      variants={BoxHover}
      initial="start"
      whileHover="hover"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {isHovered ? (
        <ProjectHover>
          <p>
            약속 프로그래밍 언어의 인터프리터를 개발하였습니다. TypeScript로
            구현하였으며, 브라우저를 포함해 다양한 환경에서 실행할 수 있도록
            토크나이저부터 런타임까지 라이브러리 의존성 없이 개발하였습니다.
          </p>
          <Link to="https://github.com/rycont/yaksok.ts">
            <ProjectLink>
              <span>세부정보 확인</span>
              <img src={`${process.env.PUBLIC_URL}/img/link.png`} />
            </ProjectLink>
          </Link>
        </ProjectHover>
      ) : (
        <ProjectText isHovered={isHovered}>
          <p>#Programming Language&nbsp;&nbsp;#Interpreter</p>
          <p>yaksok.ts</p>
          <p>약속 프로그래밍 언어 인터프리터의 TypeScript 구현체</p>
          <p>박정한</p>
        </ProjectText>
      )}
    </ProjectBox>
  );
}

function ProjectBoxComponent4() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <ProjectBox
      variants={BoxHover}
      initial="start"
      whileHover="hover"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {isHovered ? (
        <ProjectHover>
          <p>😔스마트워치에서 메시지 답장하기 불편한데..</p>
          <p>
            😔 누군가 나 대신 내가 쓴 것처럼 메일을 작성해 줬으면 좋겠는데..
          </p>
          <p>➡️ ✅ 사용자 페르소나를 명확히 이해하고 반영하는 아키텍처 제공</p>
          <p>
            ➡️ ✨ 나의 습관, 말투와 문맥을 반영한 응답 생성을 통해 혁신적인
            대화형 AI 프레임워크 제공
          </p>
          <Link to="https://sogang.ac.kr/ko/detail/544697?namepage=StoryMedia&text=%EC%84%9C%EA%B0%95%20Story&configPkId=610&title=%EB%89%B4%EC%8A%A4&data=%5B%7B%22label%22%3A%22%EC%A0%84%EC%B2%B4%22%2C%22value%22%3A%22143%2C610%2C58%22%2C%22link%22%3A%22%2Fko%2Fstory%2Fmedia-center%22%7D%2C%7B%22label%22%3A%22%EC%84%9C%EA%B0%95%20%EB%89%B4%EC%8A%A4%22%2C%22value%22%3A%22143%22%2C%22linkRedirect%22%3A%22%2Fko%2Fstory%2Fmedia-center%3Ftab%3D1%22%7D%2C%7B%22label%22%3A%22%EC%84%9C%EA%B0%95%20%ED%94%BC%ED%94%8C%22%2C%22value%22%3A%22610%22%2C%22linkRedirect%22%3A%22%2Fko%2Fstory%2Fmedia-center%3Ftab%3D2%22%7D%2C%7B%22label%22%3A%22%EC%97%B0%EA%B5%AC%20%EC%84%B1%EA%B3%BC%22%2C%22value%22%3A%2258%22%2C%22linkRedirect%22%3A%22%2Fko%2Fstory%2Fmedia-center%3Ftab%3D3%22%7D%5D&activeIndex=2&redirect=/ko/story/media-center?tab=2">
            <ProjectLink>
              <span>세부정보 확인</span>
              <img src={`${process.env.PUBLIC_URL}/img/link.png`} />
            </ProjectLink>
          </Link>
        </ProjectHover>
      ) : (
        <ProjectText isHovered={isHovered}>
          <p>
            #Watch OS&nbsp;&nbsp;#LLM
            Persona&nbsp;&nbsp;#Chatbot&nbsp;&nbsp;#Dialogue System
          </p>
          <p>유저 페르소나를 위한 인터랙티브 챗봇 시스템 KIRINO</p>
          <p>
            개인의 "페르소나" 를 활용한 AI 모델로 나의 습관, 말투, 취향 등을 잘
            아는 "마치 내가" 답변한 것처럼 메시지의 답장을 생성할 수 있습니다.
          </p>
          <p>김현재, 최건, 심규환, 그 외 1인</p>
        </ProjectText>
      )}
    </ProjectBox>
  );
}

function ProjectBoxComponent5() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <ProjectBox
      variants={BoxHover}
      initial="start"
      whileHover="hover"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {isHovered ? (
        <ProjectHover>
          <p>
            Developed an AI Algorithm to achieve high-performance semantic
            segmenatation for distorted images. My team could accomplished it by
            leveraging undistorted images (Source Domain) and their
            Corresponding labels. We used SePiCo (TPAMI 2023 esi highly cited
            paper) as a method of domain adaptation.
          </p>
          <Link to="https://drive.google.com/file/d/19zF3f-9vLC4RSb9fXOn7W2s2cPoyKFHC/view?usp=drive_link">
            <ProjectLink>
              <span>세부정보 확인</span>
              <img src={`${process.env.PUBLIC_URL}/img/link.png`} />
            </ProjectLink>
          </Link>
        </ProjectHover>
      ) : (
        <ProjectText isHovered={isHovered}>
          <p>
            #Domain Adaptation&nbsp;&nbsp;#Computer Vision&nbsp;&nbsp;#Semantic
            Segmentation
          </p>
          <p>Camera Invariant Domain Adaptation (Samsung AI Challenge)</p>
          <p>
            왜곡이 존재하지 않는 이미지(Source Domain)와 레이블을 활용하여,
            왜곡된 이미지(Target Domain)에 대해서도 고성능의 이미지
            분할(Semantic Segmentation)을 수행하는 AI 알고리즘 모델 개발
          </p>
          <p>김현재, 심규환</p>
        </ProjectText>
      )}
    </ProjectBox>
  );
}

function ProjectBoxComponent6() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <ProjectBox
      variants={BoxHover}
      initial="start"
      whileHover="hover"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {isHovered ? (
        <ProjectHover>
          <p>
            ‘타이디보이(Tidyboy)’는 부산대·서울대가 연합해 부산대 전기공학과
            이승준 교수 연구실과 서울대 컴퓨터공학부 장병탁 교수 연구실의
            학생들로 구성한 팀이다. DSPL리그에 출전하여 결승 진출 (3rd place)의
            실적을 냈다. Data 수집부터 Vision과 Human Robot Interaction 등 Sota
            기술들에 이르기까지 직접 로봇으로 다양한 task를 수행함은 물론 어떠한
            기술적인, 연구적인 방향에 대한 마일스톤이 될 수 있었다.
          </p>
          <Link to="https://github.com/RoboCupAtHome/Eindhoven2024">
            <ProjectLink>
              <span>세부정보 확인</span>
              <img src={`${process.env.PUBLIC_URL}/img/link.png`} />
            </ProjectLink>
          </Link>
        </ProjectHover>
      ) : (
        <ProjectText isHovered={isHovered}>
          <p>
            #Robotics&nbsp;&nbsp;#CV&nbsp;&nbsp;#Object Detection
            (YOLO)&nbsp;&nbsp;#LiDAR&nbsp;&nbsp;#Simulation&nbsp;&nbsp;#Object
            Manipulation&nbsp;&nbsp;#grasping
          </p>
          <p>Robocup2024 Robocup@Home DSPL League</p>
          <p>
            가정환경에서 사람 일상생활을 돕는 서비스 로봇 기술을 겨루는
            종목이다. 가정환경의 감각 및 인식, 사람과의 언어 및 비언어적 소통,
            실내공간의 자율주행과 사물을 조작하는 로봇 기술 경연대회
          </p>
          <p>심규환, SNU Lab</p>
        </ProjectText>
      )}
    </ProjectBox>
  );
}

function ProjectBoxComponent7() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <ProjectBox
      variants={BoxHover}
      initial="start"
      whileHover="hover"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {isHovered ? (
        <ProjectHover>
          <p>
            2023년도 Release x CNU x Parrot 학회 연합 겨울방학 프로젝트 팀
            NLP-2의 프로젝트입니다.
          </p>
          <Link to="https://github.com/SongDiary">
            <ProjectLink>
              <span>세부정보 확인</span>
              <img src={`${process.env.PUBLIC_URL}/img/link.png`} />
            </ProjectLink>
          </Link>
        </ProjectHover>
      ) : (
        <ProjectText isHovered={isHovered}>
          <p>#Web&nbsp;&nbsp;#AI</p>
          <p>Melog</p>
          <p>일기에 드러난 감정을 분석해 음악을 추천해 주는 웹서비스입니다.</p>
          <p>박정주, 정서영, 김희진, 홍지연, 외 1인</p>
        </ProjectText>
      )}
    </ProjectBox>
  );
}

function SmallProject() {
  return (
    <Wrapper>
      <SHeader />
      <FirstBox>
        <p>Our Projects</p>
        <p>Release가 진행해 온 프로젝트들을 확인하세요.</p>
      </FirstBox>
      <Projects>
        <ProjectBoxComponent />
        <ProjectBoxComponent1 />
        <ProjectBoxComponent2 />
        <ProjectBoxComponent3 />
        <ProjectBoxComponent4 />
        <ProjectBoxComponent5 />
        <ProjectBoxComponent6 />
        <ProjectBoxComponent7 />
      </Projects>
      <BlankBox />
      <SFooter />
    </Wrapper>
  );
}

export default SmallProject;

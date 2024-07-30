import styled from "styled-components";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";

interface HoverProps {
  isHovered: boolean;
}

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 90px 1800px 330px;
  background-color: #1c1c1c;
  @media (max-width: 1100px) {
    grid-template-rows: 90px 1450px 330px;
  }
  @media (max-width: 880px) {
    grid-template-rows: 70px 1450px 330px;
  }
  @media (max-width: 940px) {
    grid-template-rows: 70px 1250px 250px;
  }
`;

const Banner = styled.div`
  background: radial-gradient(
    circle at 50% 600px,
    #303030,
    rgb(27, 27, 27) 37%
  );
  @media (max-width: 1100px) {
    background: radial-gradient(
      circle at 50% 550px,
      #303030,
      rgb(27, 27, 27) 37%
    );
  }
  @media (max-width: 940px) {
    background: radial-gradient(
      circle at 50% 500px,
      #303030,
      rgb(27, 27, 27) 37%
    );
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  margin-top: 180px;
  text-align: center;
  margin-bottom: 100px;
  p:nth-child(1) {
    font-size: 3.2vw;
    margin-bottom: 2.5vw;
    color: white;
  }
  p:nth-child(2) {
    font-size: 1.2vw;
    color: #d9d9d9;
  }
`;

const Projects = styled.div`
  display: flex;
  gap: 1.7vw;
  justify-content: center;
  margin-bottom: 20px;
`;

const ProjectBox = styled(motion.div)`
  width: 28vw;
  height: 28vw;
  background-color: #e1e1e1;
  border-radius: 20px;
  border: 1px solid #999999;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const ProjectText = styled.div<HoverProps>`
  width: 23vw;
  height: 23vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1.5vw;
  color: white;

  p:nth-child(1) {
    color: ${(props) => (props.isHovered ? "#4e4e4e" : "#999999")};
  }
  p:nth-child(2) {
    color: ${(props) => (props.isHovered ? "#2c2c2c" : "white")};
    font-size: 2.2vw;
  }
  p:nth-child(3) {
    color: ${(props) => (props.isHovered ? "#363636" : "#d9d9d9")};
    margin-top: 2.2vw;
    font-size: 1.2vw;
  }
  p:nth-child(4) {
    color: ${(props) => (props.isHovered ? "#4e4e4e" : "#999999")};
    font-size: 1vw;
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
      <ProjectText isHovered={isHovered}>
        <p>#IOS&nbsp;&nbsp;#AI챗봇</p>
        <p>AI챗봇 프로젝트</p>
        <p>쿠로미 원정대</p>
        <p>신지원, 조윤빈, 정재헌, 신현수, 김현섭</p>
      </ProjectText>
    </ProjectBox>
  );
}

function Project() {
  return (
    <Wrapper>
      <Header />
      <Banner>
        <Container>
          <Title>
            <p>Our Projects</p>
            <p>Release가 진행해 온 프로젝트들을 확인하세요.</p>
          </Title>
          <Projects>
            <ProjectBoxComponent />
            <ProjectBoxComponent />
            <ProjectBoxComponent />
          </Projects>
          <Projects>
            <ProjectBoxComponent />
            <ProjectBoxComponent />
            <ProjectBoxComponent />
          </Projects>
          <Projects>
            <ProjectBoxComponent />
            <ProjectBoxComponent />
            <ProjectBoxComponent />
          </Projects>
        </Container>
      </Banner>
      <Footer />
    </Wrapper>
  );
}

export default Project;

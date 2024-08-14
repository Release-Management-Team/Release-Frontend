import styled from "styled-components";
import { motion } from "framer-motion";
import SHeader from "../../Components/Small/SHeader";
import { useState } from "react";
import SFooter from "../../Components/Small/SFooter";

interface HoverProps {
  isHovered: boolean;
}

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 70px 250px 1200px 50px 200px;
  @media (max-width: 550px) {
    grid-template-rows: 70px 200px 1000px 40px 200px;
  }
  @media (max-width: 460px) {
    grid-template-rows: 70px 170px 800px 20px 180px;
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
  height: 28vw;
  background-color: #e1e1e1;
  border-radius: 20px;
  border: 1px solid #999999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const ProjectText = styled.div<HoverProps>`
  margin-left: 3vw;
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
    font-size: 2.6vw;
  }
  p:nth-child(2) {
    color: ${(props) => (props.isHovered ? "#2c2c2c" : "white")};
    font-size: 3vw;
  }
  p:nth-child(3) {
    color: ${(props) => (props.isHovered ? "#363636" : "#d9d9d9")};
    margin-top: 2.2vw;
    font-size: 2vw;
  }
  p:nth-child(4) {
    color: ${(props) => (props.isHovered ? "#4e4e4e" : "#999999")};
    font-size: 1.5vw;
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
        <ProjectBoxComponent />
        <ProjectBoxComponent />
        <ProjectBoxComponent />
        <ProjectBoxComponent />
        <ProjectBoxComponent />
      </Projects>
      <BlankBox />
      <SFooter />
    </Wrapper>
  );
}

export default SmallProject;

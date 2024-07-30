import { motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  p:nth-child(1) {
    font-size: 35px;
    margin-bottom: 35px;
  }
  p:nth-child(n + 2) {
    font-size: 18px;
    color: #484848;
    margin-bottom: 8px;
  }
`;

const Images = styled.div`
  width: 70vw;
  height: 350px;
  display: grid;
  margin-top: 70px;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 3fr 2fr 1fr;
  gap: 24px;
  div:nth-child(1) {
    grid-row: 1 / span 2;
  }
  div:nth-child(2) {
    grid-column: 2 / span 2;
  }
  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    div:nth-child(1) {
      grid-row: 1 / span 2;
    }
    div:nth-child(2) {
      grid-column: 2 / span 2;
    }
    div:nth-child(3) {
      grid-column: 2 / span 2;
    }
  }
`;

const BlankBase = styled.div`
  background-color: gray;
  border-radius: 30px;
`;

const Blank = motion(BlankBase);

const imageVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { ease: "easeOut" } },
};

const wrapperVariants = {
  hover: {
    transition: { staggerChildren: 0.3 },
    opacity: 1,
  },
};

function AboutRelease() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Wrapper
      variants={wrapperVariants}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(true)}
      initial="hidden"
      animate={isHovered ? "hover" : "hidden"}
    >
      <p>Release를 소개합니다</p>
      <p>
        Release는 2014년에 창립된 서강대학교 컴퓨터공학과 유일의 프로젝트
        학회로,
      </p>
      <p>다양한 사람들이 모여 함께 프로젝트를 하기 위해 설립된 학회입니다.</p>
      <p>
        전공을 불문하고 프로젝트를 하고 싶은 열정이 있는 사람, 능력이 있는
        사람을 모집 중입니다.
      </p>
      <Images>
        <Blank
          variants={imageVariants}
          initial="hidden"
          animate={isHovered ? "visible" : "hidden"}
        />
        <Blank
          variants={imageVariants}
          initial="hidden"
          animate={isHovered ? "visible" : "hidden"}
        />
        <Blank
          variants={imageVariants}
          initial="hidden"
          animate={isHovered ? "visible" : "hidden"}
        />
        <Blank
          variants={imageVariants}
          initial="hidden"
          animate={isHovered ? "visible" : "hidden"}
        />
      </Images>
    </Wrapper>
  );
}

export default AboutRelease;

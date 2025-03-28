import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  padding-right: 60px;
  padding-top: 150px;
`;

const Text = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  text-align: end;
  box-sizing: border-box;
  p:nth-child(1) {
    font-size: clamp(1px, 3.5vw, 90px);
    color: white;
  }
  p:nth-child(2) {
    font-size: clamp(1px, 1.8vw, 60px);
    color: #eeeeee;
    padding-top: 3vw;
  }
  img:nth-child(3) {
    width: 38vw;
    max-width: 1000px;
    padding-top: 2.4vw;
    position: relative;
  }
`;

const Button = styled(motion(Link))`
  width: 10.5vw;
  height: 3.5vw;
  background-color: #f6c015;
  border: none;
  border-radius: 7vw;
  margin-top: 6vw;
  margin-left: 8.5vw;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  p:nth-child(1) {
    margin: 0;
    font-size: 1.3vw;
    color: black;
  }
`;

const firstText = {
  start: {
    opacity: 0,
    y: 15,
  },
  end: {
    opacity: 1,
    y: 0,
    transition: {
      opacity: { delay: 2.7 },
      y: { delay: 2.7 },
    },
  },
};

const secondText = {
  start: {
    opacity: 0,
    y: 15,
  },
  end: {
    opacity: 1,
    y: 0,
    transition: {
      opacity: { delay: 2.7 },
      y: { delay: 2.7 },
    },
  },
};

const ThirdText = {
  start: {
    opacity: 0,
    y: 15,
  },
  end: {
    opacity: 1,
    y: 0,
    transition: {
      opacity: { delay: 2.7 },
      y: { delay: 2.7 },
    },
  },
};

const btnMotion = {
  start: {
    opacity: 0,
  },
  end: {
    opacity: 1,
    transition: {
      opacity: { delay: 3.7 },
    },
  },
};

function Intro() {
  return (
    <Wrapper>
      <Text>
        <motion.p variants={firstText} initial="start" animate="end">
          상상을 현실로 구현하다
        </motion.p>
        <motion.p variants={secondText} initial="start" animate="end">
          서강대학교 컴퓨터공학과 프로젝트 학회
        </motion.p>
        <motion.img
          variants={ThirdText}
          initial="start"
          animate="end"
          src={`${process.env.PUBLIC_URL}/img/logo3.png`}
        />
      </Text>
    </Wrapper>
  );
}

export default Intro;

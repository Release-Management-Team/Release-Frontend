import { motion } from "framer-motion";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 30px;
  width: 43vw;
  display: flex;
  flex-direction: column;
`;

const TextOne = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  text-align: center;
  box-sizing: border-box;
  p:nth-child(1) {
    font-size: 3.3vw;
    color: white;
  }
`;

const TextTwo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  text-align: end;
  box-sizing: border-box;
  p:nth-child(1) {
    font-size: 1.8vw;
    color: #eeeeee;
    padding-top: 3vw;
  }
  img:nth-child(2) {
    width: 30vw;
    padding-top: 2.4vw;
    position: relative;
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
      opacity: { delay: 2.5 },
      y: { delay: 2.5 },
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
      opacity: { delay: 2.9 },
      y: { delay: 2.9 },
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
      opacity: { delay: 3.3 },
      y: { delay: 3.3 },
    },
  },
};

function SIntro() {
  return (
    <Wrapper>
      <TextOne>
        <motion.p variants={firstText} initial="start" animate="end">
          상상을 현실로 구현하다
        </motion.p>
      </TextOne>
      <TextTwo>
        <motion.p variants={secondText} initial="start" animate="end">
          서강대학교 컴퓨터공학과 프로젝트 학회
        </motion.p>
        <motion.img
          variants={ThirdText}
          initial="start"
          animate="end"
          src={`${process.env.PUBLIC_URL}/img/logo3.png`}
        />
      </TextTwo>
    </Wrapper>
  );
}

export default SIntro;
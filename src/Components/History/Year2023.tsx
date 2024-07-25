import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";

const First = styled(motion.div)`
  width: 100%;
  height: 440px;
  display: grid;
  grid-template-columns: 5fr 2fr 7fr;
  grid-template-rows: 1fr 5.2fr;
  background-color: #373737;
  @media (max-width: 880px) {
    height: 300px;
  }
`;

const Blank = styled.div`
  background-color: orange;
`;

const Dot = styled.div`
  position: absolute;
  width: 11px;
  height: 11px;
  background-color: #f6c015;
  border-radius: 50%;
  top: -6.2px;
  left: -5px;
`;

const TextZone = styled.div`
  grid-row: 1 / span 2;
  position: relative;
`;

const TwentyThree = styled(motion.div)`
  position: absolute;
  top: 65px;
  right: calc(17%);
  p:nth-child(1) {
    color: #f6c015;
    font-size: 2.2vw;
    margin-bottom: 2.7vw;
  }
  p:nth-child(n + 2) {
    color: #d9d9d9;
    font-size: 1.1vw;
    font-weight: 400;
    margin-bottom: 1vw;
  }
`;

const ImageZone = styled.div`
  grid-row: 1 / span 2;
  grid-column: 3 / span 2;
  border-left: 1px solid #c39d25;
  position: relative;
`;

const ImageBox = styled(motion.div)`
  background-color: gray;
  width: 34vw;
  height: 19vw;
  top: 65px;
  right: calc(25%);
  border-radius: 20px;
  position: absolute;
`;

const ForLine1 = styled.div`
  border-right: 1px solid #c39d25;
  position: relative;
`;

const Year = styled.div`
  position: absolute;
  right: 1.1vw;
  bottom: 0.7vw;
  font-size: 2.15vw;
  color: #f6c015;
`;

const ForLine2 = styled.div`
  border-right: 1px solid #c39d25;
  border-top: 2.2px solid #f6c015;
  position: relative;
`;

const appearVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { ease: "easeOut" } },
};

const wrapperVariants = {
  hover: {
    transition: { staggerChildren: 0.3 },
    opacity: 1,
  },
};

function Year2023() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <First
      variants={wrapperVariants}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(true)}
      initial="hidden"
      animate={isHovered ? "hover" : "hidden"}
    >
      <TextZone>
        <TwentyThree>
          <p>00 제휴</p>
          <motion.p
            variants={appearVariants}
            initial="hidden"
            animate={isHovered ? "visible" : "hidden"}
          >
            2023년 9월,
          </motion.p>
          <motion.p
            variants={appearVariants}
            initial="hidden"
            animate={isHovered ? "visible" : "hidden"}
          >
            Release가 기업 00과 제휴하였습니다.
          </motion.p>
        </TwentyThree>
      </TextZone>
      <ForLine1>
        <Year>2023</Year>
      </ForLine1>
      <ForLine2>
        <Dot />
      </ForLine2>
      <ImageZone>
        <ImageBox
          variants={appearVariants}
          initial="hidden"
          animate={isHovered ? "visible" : "hidden"}
        ></ImageBox>
      </ImageZone>
    </First>
  );
}

export default Year2023;

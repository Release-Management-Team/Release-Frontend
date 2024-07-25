import { motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

const First = styled(motion.div)`
  width: 100%;
  height: 440px;
  display: grid;
  grid-template-columns: 7fr 2fr 5fr;
  grid-template-rows: 1fr 5.2fr;
  background: transparent;
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
  right: -5px;
`;

const TextZone = styled.div`
  grid-row: 1 / span 2;
  grid-column: 3 / span 2;
  position: relative;
`;

const NineTeen = styled(motion.div)`
  position: absolute;
  top: 65px;
  left: calc(17%);
  text-align: end;
  p:nth-child(1) {
    color: #f6c015;
    font-size: 2.2vw;
    margin-bottom: 1.1vw;
  }
  p:nth-child(2) {
    color: #f6c015;
    font-size: 2.2vw;
    margin-bottom: 2.7vw;
  }
  p:nth-child(n + 3) {
    color: #d9d9d9;
    font-size: 1.1vw;
    font-weight: 400;
    margin-bottom: 1vw;
  }
`;

const ImageZone = styled.div`
  grid-row: 1 / span 2;
  border-right: 1px solid #f6c015;
  position: relative;
`;

const ImageBox = styled(motion.div)`
  background-color: gray;
  width: 34vw;
  height: 19vw;
  top: 65px;
  left: calc(25%);
  border-radius: 20px;
  position: absolute;
`;

const ForLine1 = styled.div`
  border-left: 1px solid #f6c015;
  position: relative;
`;

const Year = styled.div`
  position: absolute;
  left: 1.1vw;
  bottom: 0.7vw;
  font-size: 2.15vw;
  color: #f6c015;
`;

const ForLine2 = styled.div`
  border-left: 1px solid #f6c015;
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

function Year2019() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <First
      variants={wrapperVariants}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(true)}
      initial="hidden"
      animate={isHovered ? "hover" : "hidden"}
    >
      <ImageZone>
        <ImageBox
          variants={appearVariants}
          initial="hidden"
          animate={isHovered ? "visible" : "hidden"}
        />
      </ImageZone>
      <ForLine1>
        <Year>2019</Year>
      </ForLine1>
      <ForLine2>
        <Dot />
      </ForLine2>
      <TextZone>
        <NineTeen>
          <p>00팀 00대회</p>
          <p>00상 수상</p>
          <motion.p
            variants={appearVariants}
            initial="hidden"
            animate={isHovered ? "visible" : "hidden"}
          >
            2019년 6월
          </motion.p>
          <motion.p
            variants={appearVariants}
            initial="hidden"
            animate={isHovered ? "visible" : "hidden"}
          >
            Release 소속 프로젝트 팀 00팀이
          </motion.p>
          <motion.p
            variants={appearVariants}
            initial="hidden"
            animate={isHovered ? "visible" : "hidden"}
          >
            00대회에서 00상을 수상하였습니다.
          </motion.p>
        </NineTeen>
      </TextZone>
    </First>
  );
}

export default Year2019;

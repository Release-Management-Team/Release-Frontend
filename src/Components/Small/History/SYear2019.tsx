import { motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

const First = styled(motion.div)`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr 7fr;
  grid-template-rows: 1fr 5fr;
`;

const Blank = styled.div`
  background-color: orange;
`;

const BoxOne = styled.div`
  grid-row: 1 / span 2;
  border-right: 2.2px solid #f6c015;
`;

const BoxTwo = styled.div`
  grid-column: 1;
`;

const YearZone = styled.div`
  position: relative;
  border-bottom: 2.2px solid #f6c015;
`;

const ContentZone = styled.div`
  grid-row: 2;
  grid-column: 2 / span 2;
`;

const Dot = styled.div`
  position: absolute;
  width: 11px;
  height: 11px;
  background-color: #f6c015;
  border-radius: 50%;
  bottom: -6.5px;
  right: -3px;
`;

const Year = styled.div`
  position: absolute;
  left: 1.1vw;
  bottom: 1.4vw;
  font-size: 3.2vw;
  color: #f6c015;
`;

const FourTeen = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  margin-right: 15vw;
  p:nth-child(1) {
    color: #f6c015;
    font-size: 4vw;
    margin-bottom: 2.7vw;
  }
  p:nth-child(n + 2) {
    color: #d9d9d9;
    font-size: 2.4vw;
    font-weight: 400;
    margin-bottom: 1vw;
  }
`;

const ImageOne = styled(motion.div)`
  margin-top: 3vw;
  background-color: gray;
  width: 60vw;
  height: 25vw;
  border-radius: 20px;
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

function SYear2019() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <First>
      <BoxOne />
      <YearZone>
        <Dot />
        <Year>2014</Year>
      </YearZone>
      <BoxTwo />
      <ContentZone>
        <FourTeen>
          <p>Release 창립</p>
          <p>2014년 3월,</p>
          <p>서강대학교 컴퓨터공학과</p>
          <p>프로젝트 학회 Release가 창립되었습니다.</p>
          <ImageOne />
        </FourTeen>
      </ContentZone>
    </First>
  );
}

export default SYear2019;

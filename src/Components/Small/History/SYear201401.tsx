import { motion, useViewportScroll } from "framer-motion";
import { useEffect, useState } from "react";
import styled from "styled-components";

const First = styled(motion.div)`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr 7fr;
  grid-template-rows: 1fr 3.8fr;
  background-color: #313131;
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
  bottom: 0.5vw;
  font-size: 2.8vw;
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
`;

const Detail = styled(motion.div)`
  p:nth-child(n + 1) {
    text-align: end;
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
  background-image: url(${process.env.PUBLIC_URL}/img/cs5.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

function SYear201401() {
  const { scrollYProgress } = useViewportScroll();
  const [isVisible1, setIsVisible1] = useState(false);
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      if (latest >= 0.04) {
        setIsVisible1(true);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <First>
      <BoxOne />
      <YearZone>
        <Dot />
        <Year>2014.01</Year>
      </YearZone>
      <BoxTwo />
      <ContentZone>
        <FourTeen>
          <p>Release 창립</p>
          {isVisible1 && (
            <Detail
              initial={{ opacity: 0, scale: 1, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <p>2014년 1월,</p>
              <p>서강대학교 컴퓨터공학과</p>
              <p>프로젝트 학회 Release 창립</p>
            </Detail>
          )}
        </FourTeen>
      </ContentZone>
    </First>
  );
}

export default SYear201401;

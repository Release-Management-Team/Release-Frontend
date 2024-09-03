import { motion, useViewportScroll } from "framer-motion";
import { useEffect, useState } from "react";
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
  background-image: url(${process.env.PUBLIC_URL}/img/cs9.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

function SYear201806() {
  const { scrollYProgress } = useViewportScroll();
  const [isVisible1, setIsVisible1] = useState(false);
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      if (latest >= 0.6) {
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
        <Year>2018.06</Year>
      </YearZone>
      <BoxTwo />
      <ContentZone>
        <FourTeen>
          <p>Web App 해커톤</p>
          {isVisible1 && (
            <Detail
              initial={{ opacity: 0, scale: 1, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <p>2018년 6월,</p>
              <p>Web App 해커톤 참가</p>
            </Detail>
          )}
          {isVisible1 && (
            <ImageOne
              initial={{ opacity: 0, scale: 1, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            />
          )}
        </FourTeen>
      </ContentZone>
    </First>
  );
}

export default SYear201806;

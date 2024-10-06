import styled from "styled-components";
import { motion, useViewportScroll } from "framer-motion";
import { useEffect, useState } from "react";

const First = styled(motion.div)`
  width: 100%;
  height: 32vh;
  max-height: 265px;
  display: grid;
  grid-template-columns: 5fr 2fr 7fr;
  grid-template-rows: 1fr 3.8fr;
  background-color: #373737;
  @media (max-width: 880px) {
    height: 180px;
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
  width: 20vw;
  top: 65px;
  right: calc(17%);
  p:nth-child(1) {
    color: #f6c015;
    font-size: 1.6vw;
    margin-bottom: 1.7vw;
  }
  p:nth-child(n + 2) {
    color: #d9d9d9;
    font-size: 1vw;
    font-weight: 400;
    margin-bottom: 0.8vw;
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
  background-image: url(${process.env.PUBLIC_URL}/img/cs5.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const ForLine1 = styled.div`
  border-right: 1px solid #c39d25;
  position: relative;
`;

const Year = styled.div`
  position: absolute;
  right: 1.1vw;
  bottom: 0.7vw;
  font-size: 1.7vw;
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

function Year201808() {
  const { scrollYProgress } = useViewportScroll();
  const [isVisible1, setIsVisible1] = useState(false);
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      if (latest >= 0.68) {
        setIsVisible1(true);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <First>
      <TextZone>
        <TwentyThree>
          <p>RSoP (Release Summer of Projects)</p>
          {isVisible1 && (
            <motion.p
              initial={{ opacity: 0, scale: 1, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              2018년 8월,
            </motion.p>
          )}
          {isVisible1 && (
            <motion.p
              initial={{ opacity: 0, scale: 1, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              RSoP (Release Summer of Projects) 진행
            </motion.p>
          )}
        </TwentyThree>
      </TextZone>
      <ForLine1>
        <Year>2018.08</Year>
      </ForLine1>
      <ForLine2>
        <Dot />
      </ForLine2>
      <ImageZone></ImageZone>
    </First>
  );
}

export default Year201808;

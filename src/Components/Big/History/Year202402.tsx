import styled from "styled-components";
import { motion, useViewportScroll } from "framer-motion";
import { useEffect, useState } from "react";

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
  width: 20vw;
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

function Year202402() {
  const { scrollYProgress } = useViewportScroll();
  const [isVisible1, setIsVisible1] = useState(false);
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      if (latest >= 0.84) {
        setIsVisible1(true);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <First>
      <TextZone>
        <TwentyThree>
          <p>RWoP (Release Winter of Projects) with CNU, Parrot</p>
          {isVisible1 && (
            <motion.p
              initial={{ opacity: 0, scale: 1, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              2024년 2월,
            </motion.p>
          )}
          {isVisible1 && (
            <motion.p
              initial={{ opacity: 0, scale: 1, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              RWoP (Release Winter of Projects) with CNU, Parrot 진행
            </motion.p>
          )}
        </TwentyThree>
      </TextZone>
      <ForLine1>
        <Year>2024.02</Year>
      </ForLine1>
      <ForLine2>
        <Dot />
      </ForLine2>
      <ImageZone>
        {isVisible1 && (
          <ImageBox
            initial={{ opacity: 0, scale: 1, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          ></ImageBox>
        )}
      </ImageZone>
    </First>
  );
}

export default Year202402;

import { motion, useViewportScroll } from "framer-motion";
import { useEffect, useState } from "react";
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
  width: 20vw;
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
  background-image: url(${process.env.PUBLIC_URL}/img/cs2.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
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

function Year201507() {
  const { scrollYProgress } = useViewportScroll();
  const [isVisible1, setIsVisible1] = useState(false);
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      if (latest >= 0.12) {
        setIsVisible1(true);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <First>
      <ImageZone>
        {isVisible1 && (
          <ImageBox
            initial={{ opacity: 0, scale: 1, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          />
        )}
      </ImageZone>
      <ForLine1>
        <Year>2015.07</Year>
      </ForLine1>
      <ForLine2>
        <Dot />
      </ForLine2>
      <TextZone>
        <NineTeen>
          <p>아두이노 해커톤</p>
          {isVisible1 && (
            <motion.p
              initial={{ opacity: 0, scale: 1, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            ></motion.p>
          )}
          {isVisible1 && (
            <motion.p
              initial={{ opacity: 0, scale: 1, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              2015년 7월,
            </motion.p>
          )}
          {isVisible1 && (
            <motion.p
              initial={{ opacity: 0, scale: 1, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              아두이노 해커톤 참가
            </motion.p>
          )}
        </NineTeen>
      </TextZone>
    </First>
  );
}

export default Year201507;

import { useEffect, useState } from "react";
import styled from "styled-components";
import { motion, useViewportScroll } from "framer-motion";
import { isVisible } from "@testing-library/user-event/dist/utils";

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Text = styled.div`
  margin-top: 15vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  text-align: start;
  margin-left: 15vw;
  p:nth-child(1) {
    color: #000000;
    font-size: 5vw;
    margin-bottom: 5vw;
  }
  p:nth-child(2) {
    font-weight: 400;
    color: #484848;
    font-size: 2.4vw;
    margin-bottom: 2.2vw;
  }
`;

const ImageBase = styled.div`
  margin-top: 70px;
  height: 100px;
  display: flex;
  justify-content: center;
  gap: 50px;
  img:nth-child(1) {
    height: 10vw;
  }
  img:nth-child(2) {
    height: 10vw;
  }
`;

const Image = motion(ImageBase);

function SSupport() {
  const { scrollYProgress } = useViewportScroll();
  const [isVisible1, setIsVisible1] = useState(false);
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      if (latest >= 0.85) {
        setIsVisible1(true);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <Wrapper>
      <Text>
        <p>제휴 및 후원</p>
        <p>Release와 함께하는 기업들입니다.</p>
      </Text>
      <Image>
        {isVisible1 && (
          <motion.img
            initial={{ opacity: 0, scale: 1, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            src={`${process.env.PUBLIC_URL}/img/support/naver.png`}
          />
        )}
        {isVisible1 && (
          <motion.img
            initial={{ opacity: 0, scale: 1, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            src={`${process.env.PUBLIC_URL}/img/support/mobis.png`}
          />
        )}
      </Image>
    </Wrapper>
  );
}

export default SSupport;

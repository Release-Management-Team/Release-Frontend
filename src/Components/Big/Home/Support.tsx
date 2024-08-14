import { useEffect, useState } from "react";
import styled from "styled-components";
import { motion, useViewportScroll } from "framer-motion";

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p:nth-child(1) {
    color: #eeeeee;
    font-size: 36px;
    margin-bottom: 36px;
  }
  p:nth-child(2) {
    color: #999999;
    font-size: 18px;
    margin-bottom: 8px;
  }
`;

const ImageBase = styled.div`
  margin-top: 70px;
  width: 600px;
  height: 170px;
  @media (max-width: 1000px) {
    width: 500px;
  }
  display: flex;
  justify-content: space-between;
  gap: 200px;
  filter: brightness(0) invert(1);
  img:nth-child(1) {
    height: 6vw;
  }
  img:nth-child(2) {
    height: 6vw;
  }
`;

const Image = motion(ImageBase);

const imageVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { ease: "easeOut" } },
};

const wrapperVariants = {
  hover: {
    transition: { staggerChildren: 0.3 },
    opacity: 1,
  },
};

function Support() {
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
      <p>제휴 및 후원</p>
      <p>Release와 함께하는 기업들입니다.</p>
      <Image>
        {isVisible1 && (
          <motion.img
            initial={{ opacity: 0, scale: 1, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            src={`${process.env.PUBLIC_URL}/img/naver.png`}
          />
        )}
        {isVisible1 && (
          <motion.img
            initial={{ opacity: 0, scale: 1, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            src={`${process.env.PUBLIC_URL}/img/mobis.png`}
          />
        )}
      </Image>
    </Wrapper>
  );
}

export default Support;

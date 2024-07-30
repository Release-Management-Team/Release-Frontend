import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

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
  @media (max-width: 1000px) {
    width: 500px;
  }
  display: flex;
  justify-content: space-between;
  gap: 250px;
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
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Wrapper
      variants={wrapperVariants}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(true)}
      initial="hidden"
      animate={isHovered ? "hover" : "hidden"}
    >
      <p>제휴 및 후원</p>
      <p>Release와 함께하는 기업들입니다.</p>
      <Image
        variants={imageVariants}
        initial="hidden"
        animate={isHovered ? "visible" : "hidden"}
      >
        <img src={`${process.env.PUBLIC_URL}/img/naver.png`} />
        <img src={`${process.env.PUBLIC_URL}/img/mobis.png`} />
      </Image>
    </Wrapper>
  );
}

export default Support;

import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

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
    color: #eeeeee;
    font-size: 5vw;
    margin-bottom: 5vw;
  }
  p:nth-child(2) {
    font-weight: 400;
    color: #999999;
    font-size: 2.4vw;
    margin-bottom: 2.2vw;
  }
`;

const ImageBase = styled.div`
  margin-top: 70px;
  display: flex;
  justify-content: center;
  gap: 50px;
  filter: brightness(0) invert(1);
  img:nth-child(1) {
    height: 10vw;
  }
  img:nth-child(2) {
    height: 10vw;
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

function SSupport() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Wrapper
      variants={wrapperVariants}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(true)}
      initial="hidden"
      animate={isHovered ? "hover" : "hidden"}
    >
      <Text>
        <p>제휴 및 후원</p>
        <p>Release와 함께하는 기업들입니다.</p>
      </Text>
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

export default SSupport;

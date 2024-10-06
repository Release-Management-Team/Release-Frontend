import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled.div`
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = styled(motion.div)`
  img {
    width: 4.5vw;
    filter: brightness(0) invert(1);
    @media (max-width: 450px) {
      width: 25px;
    }
  }
`;

function SArrow() {
  return (
    <Wrapper>
      <Icon>
        <motion.img
          src={`${process.env.PUBLIC_URL}/img/scroll_arrow.png`}
          animate={{
            y: ["2vh", "-1vh", "2vh"],
          }}
          transition={{
            duration: 2,
            times: [0, 0.2, 0.9],
            ease: ["easeIn", "easeOut"],
            repeat: Infinity,
            repeatDelay: 0.4,
          }}
        />
      </Icon>
    </Wrapper>
  );
}

export default SArrow;

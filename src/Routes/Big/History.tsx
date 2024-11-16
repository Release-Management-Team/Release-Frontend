import styled from "styled-components";
import Header from "../../Components/Big/Header";
import Footer from "../../Components/Big/Footer";
import { motion, useViewportScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Year201401 from "../../Components/Big/History/Year201401";
import Year201507 from "../../Components/Big/History/Year201507";
import Year201510 from "../../Components/Big/History/Year201510";
import Year201511 from "../../Components/Big/History/Year201511";
import Year201607 from "../../Components/Big/History/Year201607";
import Year201609 from "../../Components/Big/History/Year201609";
import Year201706 from "../../Components/Big/History/Year201706";
import Year201806 from "../../Components/Big/History/Year201806";
import Year201808 from "../../Components/Big/History/Year201808";
import Year202308 from "../../Components/Big/History/Year202308";
import Year202402 from "../../Components/Big/History/Year202402";

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 90px auto 330px;
  background-color: #1c1c1c;
  @media (max-width: 880px) {
    grid-template-rows: 70px 2700px 250px;
  }
`;

const Banner = styled.div`
  background: radial-gradient(
    circle at 50% 700px,
    #303030,
    rgb(27, 27, 27) 37%
  );
  @media (max-width: 880px) {
    background: radial-gradient(
      circle at 50% 550px,
      #303030,
      rgb(27, 27, 27) 37%
    );
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  margin-top: 180px;
  text-align: center;
  margin-bottom: 60px;
  p:nth-child(1) {
    font-size: clamp(1px, 3.3vw, 60px);
    margin-bottom: 2.5vw;
    color: white;
    @media (max-width: 880px) {
      font-size: 39px;
    }
  }
  p:nth-child(2) {
    font-size: clamp(1px, 1.5vw, 30px);
    color: #d9d9d9;
    @media (max-width: 880px) {
      font-size: 12px;
    }
  }
`;

const ShortLine = styled.div`
  width: 100%;
  height: 15px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Box1 = styled.div`
  border-right: 1px solid #f6c015;
`;

const Box2 = styled.div`
  border-left: 1px solid #f6c015;
`;

const LongLine = styled.div`
  width: 100%;
  height: 100px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Dot = styled.div`
  position: absolute;
  width: 11px;
  height: 11px;
  background-color: #f6c015;
  border-radius: 50%;
  bottom: -5px;
  right: -6.5px;
`;

const Box11 = styled.div`
  border-right: 1px solid #f6c015;
  position: relative;
`;

const Box22 = styled.div`
  border-left: 1px solid #f6c015;
`;

const Waiting = styled(motion.div)`
  height: 50vh;
  margin-top: 5vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p:nth-child(1) {
    color: white;
    font-size: 3.1vw;
    margin-bottom: 2.4vw;
  }
  p:nth-child(2) {
    color: #d9d9d9;
    font-size: 1.2vw;
    margin-bottom: 3.4vw;
  }
`;

const Button = styled(motion(Link))`
  width: 10.5vw;
  height: 3.5vw;
  background-color: #f6c015;
  border: none;
  border-radius: 7vw;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  p:nth-child(1) {
    margin: 0;
    font-size: 1.3vw;
    color: black;
  }
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

function History() {
  const { scrollYProgress } = useViewportScroll();
  const [isVisible1, setIsVisible1] = useState(false);
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      if (latest >= 0.93) {
        setIsVisible1(true);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <Wrapper>
      <Header />
      <Banner>
        <Container>
          <Title>
            <p>Our History</p>
            <p>Release가 걸어온 길을 확인하세요.</p>
          </Title>
        </Container>
        <ShortLine>
          <Box1 />
          <Box2 />
        </ShortLine>
        <Year201401 />
        <Year201507 />
        <Year201510 />
        <Year201511 />
        <Year201607 />
        <Year201609 />
        <Year201706 />
        <Year201806 />
        <Year201808 />
        <Year202308 />
        <Year202402 />
        <LongLine>
          <Box11>
            <Dot />
          </Box11>
          <Box22 />
        </LongLine>
        <Waiting>
          <p>Waiting for You!</p>
          <p>Release는 당신의 잠재력을 기다리고 있습니다!</p>
          {isVisible1 && (
            <Button
              to="/apply"
              initial={{ opacity: 0, scale: 1, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <p>지원하기</p>
            </Button>
          )}
        </Waiting>
      </Banner>
      <Footer />
    </Wrapper>
  );
}

export default History;

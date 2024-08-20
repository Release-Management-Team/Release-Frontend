import styled from "styled-components";
import { motion, useViewportScroll } from "framer-motion";
import SHeader from "../../Components/Small/SHeader";
import SFooter from "../../Components/Small/SFooter";
import SYear2014 from "../../Components/Small/History/SYear2014";
import SYear2019 from "../../Components/Small/History/SYear2019";
import SYear2023 from "../../Components/Small/History/Syear2023";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 70px 250px 50px 450px 450px 450px 50px 360px 200px;
  @media (max-width: 480px) {
    grid-template-rows: 70px 180px 30px 350px 350px 350px 30px 300px 180px;
  }
  @media (max-width: 420px) {
    grid-template-rows: 70px 180px 30px 300px 300px 300px 30px 280px 180px;
  }
  background: radial-gradient(
    circle at 50% 300px,
    #303030,
    rgb(27, 27, 27) 60%
  );
`;

const FirstBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 15vw;
  justify-content: center;
  p:nth-child(1) {
    font-size: 7vw;
    margin-bottom: 2.5vw;
    color: white;
  }
  p:nth-child(2) {
    font-size: 3vw;
    color: #d9d9d9;
  }
`;

const ShortLine = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 9fr;
`;

const ForLine = styled.div`
  border-right: 2.2px solid #f6c015;
  position: relative;
`;

const Dot = styled.div`
  position: absolute;
  width: 11px;
  height: 11px;
  background-color: #f6c015;
  border-radius: 50%;
  bottom: -8px;
  right: -6.5px;
`;

const Waiting = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 15vw;
  p:nth-child(1) {
    color: white;
    font-size: 5vw;
    margin-bottom: 3vw;
  }
  p:nth-child(n + 2) {
    font-weight: 400;
    font-size: 2.6vw;
    color: #d9d9d9;
    margin-bottom: 10vw;
  }
`;

const Button = styled(motion(Link))`
  width: 16vw;
  height: 6vw;
  background-color: #f6c015;
  border: none;
  border-radius: 7vw;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  p:nth-child(1) {
    margin: 0;
    font-size: 2vw;
    color: black;
  }
`;

function SmallHistory() {
  const { scrollYProgress } = useViewportScroll();
  const [isVisible1, setIsVisible1] = useState(false);
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      if (latest >= 0.9) {
        setIsVisible1(true);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <Wrapper>
      <SHeader />
      <FirstBox>
        <p>Our History</p>
        <p>Release가 걸어온 길을 확인하세요.</p>
      </FirstBox>
      <ShortLine>
        <ForLine />
      </ShortLine>
      <SYear2014 />
      <SYear2019 />
      <SYear2023 />
      <ShortLine>
        <ForLine>
          <Dot />
        </ForLine>
      </ShortLine>
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
      <SFooter />
    </Wrapper>
  );
}

export default SmallHistory;

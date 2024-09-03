import { motion, useTransform, useViewportScroll } from "framer-motion";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Text = styled.div`
  margin-top: 12vw;
  @media (max-width: 450px) {
    margin-top: 10vw;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  text-align: start;
  margin-left: 15vw;
  p:nth-child(1) {
    font-size: 5vw;
    margin-bottom: 5vw;
  }
  p:nth-child(n + 2) {
    font-weight: 400;
    font-size: 2.4vw;
    color: #484848;
    margin-bottom: 2.2vw;
  }
`;

const Container = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Images = styled.div`
  width: 70vw;
  height: 550px;
  @media (max-width: 450px) {
    height: 80vw;
  }
  display: grid;
  margin-top: 2vw;
  grid-template-rows: 2fr 1fr 1fr;
  grid-template-columns: 2fr 1fr;
  gap: 1.8vw;
  div:nth-child(1) {
    grid-column: 1 / span 2;
  }
  div:nth-child(2) {
    grid-column: 1 / span 2;
  }
`;

const BlankBase = styled.div`
  background-color: gray;
  border-radius: 30px;
`;

function SAboutRelease() {
  const { scrollYProgress } = useViewportScroll();
  const [isVisible1, setIsVisible1] = useState(false);
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      if (latest >= 0.17) {
        setIsVisible1(true);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <Wrapper>
      <Text>
        <p>컴공까지 왔으면 하고 싶은 걸 해야지!</p>
        <p>Release는 2014년에 창립된</p>
        <p>서강대학교 컴퓨터공학과 유일의 프로젝트 학회로,</p>
        <p>다양한 사람들이 모여</p>
        <p>함께 프로젝트를 하기 위해 설립된 학회입니다.</p>
        <p>프로젝트를 하고 싶은 열정이 있는 사람,</p>
        <p>능력이 있는 사람을 모집 중입니다.</p>
      </Text>
      {isVisible1 && (
        <Container
          initial={{ opacity: 0, scale: 1, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Images>
            <BlankBase
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/img/cs16.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
            <BlankBase
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/img/cs15.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
            <BlankBase
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/img/cs17.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
            <BlankBase
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/img/cs14.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
          </Images>
        </Container>
      )}
    </Wrapper>
  );
}

export default SAboutRelease;

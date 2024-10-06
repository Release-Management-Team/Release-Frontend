import styled from "styled-components";
import Header from "../../Components/Big/Header";
import { motion } from "framer-motion";
import Logo from "../../Components/Big/Home/Logo";
import Intro from "../../Components/Big/Home/Intro";
import AboutRelease from "../../Components/Big/Home/AboutRelease";
import Activity from "../../Components/Big/Home/Activity";
import Support from "../../Components/Big/Home/Support";
import Footer from "../../Components/Big/Footer";
import Slide from "../../Components/Big/Home/Slide";
import Arrow from "../../Components/Big/Home/Arrow";

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 90px 600px 200px 750px 750px 550px 330px;
  background-color: #1c1c1c;
  @media (max-width: 1000px) {
    grid-template-rows: 90px 400px 100px 650px 550px 500px 250px;
  }
  @media (max-width: 880px) {
    grid-template-rows: 70px 400px 100px 650px 550px 500px 250px;
  }
  background: radial-gradient(circle at 50% 25%, #303030, rgb(27, 27, 27) 20%);
`;

const Banner = styled.div`
  display: grid;
  background: transparent;
  grid-template-columns: 1fr 1fr;
`;

const SecondBox = styled.div`
  background-color: #eeeeee;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ThirdBox = styled.div`
  background-color: #1b1b1b;
  display: grid;
  grid-template-columns: 7fr 6fr;
`;

const FourthBox = styled.div`
  background-color: rgba(240, 240, 240);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  background-color: gray;
`;

function Home() {
  return (
    <Wrapper>
      <Header />
      <Banner>
        <Logo />
        <Intro />
      </Banner>
      <Arrow />
      <SecondBox>
        <AboutRelease />
      </SecondBox>
      <ThirdBox>
        <Activity />
        <Slide />
      </ThirdBox>
      <FourthBox>
        <Support />
      </FourthBox>
      <Footer />
    </Wrapper>
  );
}

export default Home;

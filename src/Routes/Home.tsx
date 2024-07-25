import styled from "styled-components";
import Header from "../Components/Header";
import { motion } from "framer-motion";
import Logo from "../Components/Home/Logo";
import Intro from "../Components/Home/Intro";
import AboutRelease from "../Components/Home/AboutRelease";
import Activity from "../Components/Home/Activity";
import Support from "../Components/Home/Support";
import Footer from "../Components/Footer";
import Slide from "../Components/Home/Slide";

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 90px 800px 750px 750px 550px 330px;
  background-color: #1c1c1c;
  @media (max-width: 1000px) {
    grid-template-rows: 90px 500px 750px 550px 500px 330px;
  }
  @media (max-width: 1000px) {
    grid-template-rows: 90px 500px 650px 550px 500px 250px;
  }
`;

const Banner = styled.div`
  display: grid;
  background: radial-gradient(circle at 50% 70%, #303030, rgb(27, 27, 27) 60%);
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
  background-color: #292929;
  display: grid;
  grid-template-columns: 7fr 6fr;
`;

const FourthBox = styled.div`
  background-color: #1c1c1c;
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

import styled from "styled-components";
import { motion, useViewportScroll } from "framer-motion";
import SHeader from "../../Components/Small/SHeader";
import SLogo from "../../Components/Small/Home/SLogo";
import SIntro from "../../Components/Small/Home/SIntro";
import SAboutRelease from "../../Components/Small/Home/SAboutRelease";
import SActivity from "../../Components/Small/Home/SActivity";
import SSlide from "../../Components/Small/Home/SSlide";
import SSupport from "../../Components/Small/Home/SSupport";
import SFooter from "../../Components/Small/SFooter";
import { useEffect, useState } from "react";
import SArrow from "../../Components/Small/Home/SArrow";

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 70px 400px 100px 950px 650px 450px 200px;
  @media (max-width: 450px) {
    grid-template-rows: 70px 280px 70px 600px 450px 300px 180px;
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
  justify-content: center;
  align-items: center;
`;

const SecondBox = styled.div`
  background-color: #eeeeee;
`;

const ThirdBox = styled.div`
  background-color: #292929;
  display: grid;
  grid-template-rows: 1fr 1fr;
`;

const FourthBox = styled.div`
  background-color: rgba(240, 240, 240);
`;

function SmallHome() {
  return (
    <>
      <Wrapper>
        <SHeader />
        <FirstBox>
          <SLogo />
          <SIntro />
        </FirstBox>
        <SArrow />
        <SecondBox>
          <SAboutRelease />
        </SecondBox>
        <ThirdBox>
          <SActivity />
          <SSlide />
        </ThirdBox>
        <FourthBox>
          <SSupport />
        </FourthBox>
        <SFooter />
      </Wrapper>
    </>
  );
}

export default SmallHome;

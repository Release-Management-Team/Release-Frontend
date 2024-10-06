import styled from "styled-components";
import SHeader from "../../Components/Small/SHeader";
import SFooter from "../../Components/Small/SFooter";
import { motion, useViewportScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 70px 430px 450px 300px 450px 500px 200px;
  @media (max-width: 450px) {
    grid-template-rows: 70px 350px 370px 270px 350px 400px 180px;
  }
  background: radial-gradient(
    circle at 50% 300px,
    #303030,
    rgb(27, 27, 27) 60%
  );
  position: relative;
`;

const Back = styled.div`
  display: flex;
  flex-direction: column;
`;

const Blank = styled.div``;

const Banner = styled.div`
  background-image: url(${process.env.PUBLIC_URL}/img/about/about8.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  width: 100%;
  position: absolute;
  top: 0;
  height: 500px;
`;

const BannerText = styled(motion.div)`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  margin-bottom: 10vw;
  p:nth-child(1) {
    color: white;
    font-size: 5vw;
  }
`;

const Mission = styled.div`
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  p:nth-child(1) {
    font-size: 5.7vw;
    margin-bottom: 5vw;
  }
  p:nth-child(n + 2) {
    font-weight: 400;
    color: #999999;
    font-size: 2.8vw;
    margin-bottom: 1.5vw;
  }
`;

const ImageZone = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 15fr;
`;

const Image1 = styled(motion.div)`
  background-image: url(${process.env.PUBLIC_URL}/img/about/about6.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
`;

const Projects = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
`;

const ProjectsText = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  p:nth-child(1) {
    font-size: 5.7vw;
    color: white;
    margin-bottom: 5vw;
    span {
      color: #999999;
    }
  }
  p:nth-child(n + 2) {
    font-size: 2.8vw;
    color: #999999;
    margin-bottom: 1.5vw;
    font-weight: 400;
  }
`;

const Button = styled(motion(Link))`
  margin-top: 30px;
  width: 25vw;
  height: 6vw;
  background: transparent;
  border: 1px solid #f6c015;
  border-radius: 7vw;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  p:nth-child(1) {
    margin: 0;
    font-size: 1.9vw;
    font-weight: 400;
    color: #b6b6b6;
  }
`;

const Image2 = styled(motion.div)`
  background-image: url(${process.env.PUBLIC_URL}/img/about/about2.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  width: 100%;
`;

const Text2 = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  margin-bottom: 10vw;
  p:nth-child(1) {
    font-size: 5vw;
    color: white;
    margin-bottom: 1.5vw;
    span {
      color: #999999;
    }
  }
  p:nth-child(2) {
    font-size: 5vw;
    color: white;
    margin-bottom: 5vw;
    span {
      color: #999999;
    }
  }
  p:nth-child(n + 3) {
    font-size: 2.5vw;
    font-weight: 400;
    color: #999999;
    margin-bottom: 1vw;
  }
`;

const Seminars = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  gap: 1.5vw;
`;

const Seminar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const SeminarText = styled(motion.div)`
  width: 45vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  p: nth-child(1) {
    font-size: 4vw;
    color: white;
    margin-bottom: 5vw;
  }
  p: nth-child(2) {
    font-size: 1.7vw;
    font-weight: 400;
    color: #999999;
    margin-bottom: 5vw;
  }
`;

const SeminarContent = styled(motion.div)`
  width: 100%;
  height: 55px;
  border-radius: 8px;
  background-color: #292929;
  position: relative;
  margin-bottom: 15px;
  p: nth-child(1) {
    position: absolute;
    top: 15px;
    left: 10px;
    font-size: 1.9vw;
    color: #d9d9d9;
    margin-bottom: 0px;
    margin-left: 20px;
  }
  p: nth-child(2) {
    position: absolute;
    bottom: 15px;
    right: 10px;
    font-size: 1.3vw;
    color: #999999;
    margin-bottom: 0px;
    margin-right: 20px;
  }
`;

function SmallAbout() {
  const { scrollYProgress } = useViewportScroll();
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      if (latest >= 0.3) {
        setIsVisible1(true);
      }
      if (latest >= 0.6) {
        setIsVisible2(true);
      }
      if (latest >= 0.8) {
        setIsVisible3(true);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <Wrapper>
      <SHeader />
      <Back>
        <Banner>
          <Blank />
          <BannerText
            initial={{ opacity: 0, scale: 1, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <p>하고 싶은 것을 할 수 있는 곳</p>
          </BannerText>
          <Blank />
        </Banner>
      </Back>
      <Mission>
        <p>Mission</p>
        <p>Release는 다양한 실력을 갖춘 사람들이 서로 소통하며</p>
        <p>새로운 지식과 경험을 쌓을 수 있는 환경을 제공하는 학회입니다.</p>
        <p></p>
        <p></p>
        <p>자신이 하고 싶은 것을 찾으려는 사람들을 위해</p>
        <p>누구나 참여할 수 있는 스터디, 세미나, 프로젝트 활동을 기획하고,</p>
        <p>
          Release만의 친목 이벤트를 통해 선후배의 경계가 없는 자유로운 문화를
          형성하여,
        </p>
        <p>학회원들이 서로 지식을 교류하고 팀을 꾸려</p>
        <p>프로젝트/대회/스타트업 등에 도전할 수 있도록 지원합니다.</p>
      </Mission>
      <ImageZone>
        <div></div>
        {isVisible1 && (
          <Image1
            initial={{ opacity: 0, scale: 1, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          />
        )}
      </ImageZone>
      <Projects>
        <Blank />
        {isVisible1 && (
          <ProjectsText
            initial={{ opacity: 0, scale: 1, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <p>
              다양한 프로젝트<span>를 진행합니다.</span>
            </p>
            <p>Release에서는 자신이 진행하고 싶은 프로젝트가 있다면</p>
            <p>팀원을 모아 함께 프로젝트를 진행할 수 있습니다.</p>
            <p>그러기 위한 곳이니까요!</p>
            <Button to="/project">
              <p>지난 프로젝트 확인하기</p>
            </Button>
          </ProjectsText>
        )}
        <Blank />
      </Projects>
      {isVisible2 ? (
        <Image2
          initial={{ opacity: 0, scale: 1, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Blank />
          <Text2
            initial={{ opacity: 0, scale: 1, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.7 }}
          >
            <p>
              최신 기술 동향<span>과 </span>
            </p>
            <p>
              심도 있는 전문 지식
              <span>을 공유합니다.</span>
            </p>
            <p>학회원들은 스터디를 열어 자신이 원하는 분야를</p>
            <p>다른 학회원들과 함께 탐구하거나,</p>
            <p>세미나를 통해 자신이 관심을 가지고,</p>
            <p>좋아하는 내용에 대해 발표할 수 있습니다.</p>
          </Text2>
          <Blank />
        </Image2>
      ) : (
        <Blank />
      )}
      {/* <Seminars>
        <Blank />
        {isVisible3 ? (
          <Seminar>
            <SeminarText
              initial={{ opacity: 0, scale: 1, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <p>지난 학기 개최되었더 세미나</p>
              <p>지난 학기, Release에서 총 00개의 세미나가 개최되었습니다.</p>
            </SeminarText>
            <SeminarContent
              initial={{ opacity: 0, scale: 1, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.7 }}
            >
              <p>AI 혁신과 미래 : 인공지능의 최신 동향</p>
              <p>서강대학교 신지원</p>
            </SeminarContent>
            <SeminarContent
              initial={{ opacity: 0, scale: 1, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.7 }}
            >
              <p>블록체인과 분산 시스템의 진화</p>
              <p>서강대학교 신지원</p>
            </SeminarContent>
            <SeminarContent
              initial={{ opacity: 0, scale: 1, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.7 }}
            >
              <p>사이버 보안의 현재와 미래</p>
              <p>서강대학교 신지원</p>
            </SeminarContent>
            <SeminarContent
              initial={{ opacity: 0, scale: 1, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.7 }}
            >
              <p>클라우드 컴퓨팅</p>
              <p>서강대학교 신지원</p>
            </SeminarContent>
            <SeminarContent
              initial={{ opacity: 0, scale: 1, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.7 }}
            >
              <p>빅데이터 분석과 머신러닝 응용</p>
              <p>서강대학교 신지원</p>
            </SeminarContent>
          </Seminar>
        ) : (
          <Blank />
        )}
        <Blank />
      </Seminars> */}
      <SFooter />
    </Wrapper>
  );
}

export default SmallAbout;

import styled from "styled-components";
import Header from "../../Components/Big/Header";
import Footer from "../../Components/Big/Footer";
import { useViewportScroll, motion } from "framer-motion";
import { useEffect, useState } from "react";

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 4000px 330px;
  background-color: #1c1c1c;
  @media (max-width: 880px) {
    grid-template-rows: 3000px 250px;
  }
`;

const Back = styled.div`
  background: radial-gradient(
    circle at 50% 1300px,
    #303030,
    rgb(27, 27, 27) 20%
  );
  @media (max-width: 880px) {
    background: radial-gradient(
      circle at 50% 900px,
      #303030,
      rgb(27, 27, 27) 20%
    );
  }
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Banner = styled.div`
  background-image: url(${process.env.PUBLIC_URL}/img/bg1.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  position: absolute;
  top: 0;
  height: 850px;
  @media (max-width: 880px) {
    height: 645px;
  }
`;

const BannerZone = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const BannerText = styled(motion.div)`
  position: absolute;
  bottom: 14vw;
  left: 6.2vw;
  p:nth-child(1) {
    color: white;
    font-size: 3.3vw;
  }
`;

const Mission = styled.div`
  height: 630px;
  margin-top: 760px;
  @media (max-width: 880px) {
    height: 510px;
    margin-top: 555px;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  p:nth-child(1) {
    font-size: 3.3vw;
    margin-bottom: 3vw;
  }
  p:nth-child(n + 2) {
    color: #d9d9d9;
    font-size: 1.6vw;
    margin-bottom: 0.7vw;
  }
`;

const ImageZone1 = styled.div`
  height: 420px;
  @media (max-width: 880px) {
    height: 310px;
  }
  display: grid;
  grid-template-columns: 3fr 2fr;
`;

const Image1 = styled(motion.div)`
  background-image: url(${process.env.PUBLIC_URL}/img/bg2.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
`;

const Project = styled.div`
  height: 380px;
  @media (max-width: 880px) {
    height: 270px;
  }
  position: relative;
  display: flex;
  align-itms: center;
  justify-content: end;
`;

const ProjectText = styled(motion.div)`
  text-align: end;
  margin-right: 60px;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;
  p:nth-child(1) {
    font-size: 3.3vw;
    color: white;
    margin-bottom: 2.7vw;
    span {
      color: #999999;
    }
  }
  p:nth-child(n + 2) {
    font-size: 1.5vw;
    color: #d9d9d9;
    margin-bottom: 1vw;
  }
`;

const Button = styled.button`
  margin-top: 30px;
  width: 15vw;
  height: 3.3vw;
  background: transparent;
  border: 1px solid #f6c015;
  border-radius: 7vw;
  display: flex;
  justify-content: center;
  align-items: center;
  p:nth-child(1) {
    margin: 0;
    font-size: 1.15vw;
    font-weight: 400;
    color: #b6b6b6;
  }
`;

const ImageZone2 = styled(motion.div)`
  height: 800px;
  @media (max-width: 880px) {
    height: 615px;
  }
  background-image: url(${process.env.PUBLIC_URL}/img/bg3.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  position: relative;
`;

const Text2 = styled(motion.div)`
  position: absolute;
  left: 6.2vw;
  bottom: 3.2vw;
  p:nth-child(1) {
    font-size: 3.3vw;
    color: white;
    margin-bottom: 2.7vw;
    span {
      color: #999999;
    }
  }
  p:nth-child(n + 2) {
    font-size: 1.5vw;
    color: #d9d9d9;
    margin-bottom: 1vw;
  }
`;

const Seminar = styled.div`
  height: 840px;
  @media (max-width: 880px) {
    height: 625px;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5vw;
`;

const SeminarContent = styled(motion.div)`
  width: 60vw;
  height: 65px;
  border-radius: 8px;
  background-color: #292929;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p: nth-child(1) {
    font-size: 1.6vw;
    color: #d9d9d9;
    margin-bottom: 0px;
    margin-left: 20px;
  }
  p: nth-child(2) {
    font-size: 1.2vw;
    color: #999999;
    margin-bottom: 0px;
    margin-right: 20px;
  }
`;

const Blank = styled.div`
  height: 800px;
  @media (max-width: 880px) {
    height: 615px;
  }
`;

const Blank2 = styled.div`
  height: 840px;
  @media (max-width: 880px) {
    height: 625px;
  }
`;

const SeminarText = styled(motion.div)`
  width: 45vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p: nth-child(1) {
    font-size: 2.2vw;
    color: white;
    margin-bottom: 1.5vw;
  }
  p: nth-child(2) {
    font-size: 1.2vw;
    color: #d9d9d9;
    margin-bottom: 4vw;
  }
`;

function About() {
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
      <Back>
        <Header />
        <Banner>
          <BannerZone>
            <BannerText
              initial={{ opacity: 0, scale: 1, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <p>상상을 현실로 구현하다</p>
            </BannerText>
          </BannerZone>
        </Banner>
        <Mission>
          <p>Mission</p>
          <p>
            Release는 2014년에 창립된 서강대학교 컴퓨터공학과 유일의 프로젝트
            학회로,
          </p>
          <p>
            다양한 사람들이 모여 함께 프로젝트를 하기 위해 설립된 학회입니다.
          </p>
          <p>
            전공을 불문하고 프로젝트를 하고 싶은 열정이 있는 사람, 능력이 있는
            사람을 모집 중입니다.
          </p>
        </Mission>
        <ImageZone1>
          {isVisible1 && (
            <Image1
              initial={{ opacity: 0, scale: 1, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            />
          )}
        </ImageZone1>
        <Project>
          {isVisible1 && (
            <ProjectText
              initial={{ opacity: 0, scale: 1, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <p>
                다양한 프로젝트<span>를 진행합니다.</span>
              </p>
              <p>
                Release에서는 웹 개발, 모바일 앱, 데이터 분석 등 다양한
                프로젝트를 함께 진행합니다.
              </p>
              <p>
                각자의 관심사와 목표에 맞춰 팀을 구성하고, 실제로 작동하는
                결과물을 만들어내는 것을 목표로 합니다.
              </p>
              <p>이를 통해 실무 경험을 쌓고, 협업 능력을 키울 수 있습니다.</p>
              <Button>
                <p>지난 프로젝트 확인하기</p>
              </Button>
            </ProjectText>
          )}
        </Project>
        {isVisible2 ? (
          <ImageZone2
            initial={{ opacity: 0, scale: 1, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Text2
              initial={{ opacity: 0, scale: 1, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.7 }}
            >
              <p>
                최신 기술 동향<span>과 </span>심도 있는 전문 지식
                <span>을 공유합니다.</span>
              </p>
              <p>
                Release에서는 정기적으로 세미나를 개최하고, 스터디 모임을 가지며
              </p>
              <p>
                최신 기술 동향을 탐구하고 심도 있는 전문 지식을 나누고 있습니다.
              </p>
              <p>
                세미나에서는 각 분야의 전문가들이 참여해 고급 정보를 제공하며,
                이를 통해 회원들의 역량 강화를 도모합니다.
              </p>
            </Text2>
          </ImageZone2>
        ) : (
          <Blank />
        )}
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
          <Blank2 />
        )}
      </Back>
      <Footer />
    </Wrapper>
  );
}

export default About;

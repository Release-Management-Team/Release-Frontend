import styled from "styled-components";
import Header from "../../Components/Big/Header";
import Footer from "../../Components/Big/Footer";
import SHeader from "../../Components/Small/SHeader";
import SFooter from "../../Components/Small/SFooter";

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 70px 430px 450px 300px 450px 500px 550px 200px;
  @media (max-width: 450px) {
    grid-template-rows: 70px 350px 370px 270px 350px 400px 450px 150px;
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

const Banner = styled.div`
  background-image: url(${process.env.PUBLIC_URL}/img/bg1.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  position: absolute;
  top: 0;
  height: 500px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
`;

const BannerText = styled.div`
  margin-left: 15vw;
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

const ImageZone = styled.div`
  display: grid;
  grid-template-columns: 1fr 15fr;
`;

const Image1 = styled.div`
  background-image: url(${process.env.PUBLIC_URL}/img/bg2.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
`;

const Projects = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const ProjectsText = styled.div`
  margin-left: 15vw;
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

const Button = styled.button`
  margin-top: 30px;
  width: 25vw;
  height: 6vw;
  background: transparent;
  border: 1px solid #f6c015;
  border-radius: 7vw;
  display: flex;
  justify-content: center;
  align-items: center;
  p:nth-child(1) {
    margin: 0;
    font-size: 2.1vw;
    font-weight: 400;
    color: #b6b6b6;
  }
`;

const Image2 = styled.div`
  background-image: url(${process.env.PUBLIC_URL}/img/bg3.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
`;

const Text2 = styled.div`
  margin-left: 15vw;
  margin-bottom: 10vw;
  p:nth-child(1) {
    font-size: 3.3vw;
    color: white;
    margin-bottom: 1.5vw;
    span {
      color: #999999;
    }
  }
  p:nth-child(2) {
    font-size: 3.3vw;
    color: white;
    margin-bottom: 5vw;
    span {
      color: #999999;
    }
  }
  p:nth-child(n + 3) {
    font-size: 1.5vw;
    font-weight: 400;
    color: #999999;
    margin-bottom: 1vw;
  }
`;

const Seminar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5vw;
`;

const SeminarText = styled.div`
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

const SeminarContent = styled.div`
  width: 45vw;
  height: 55px;
  border-radius: 8px;
  background-color: #292929;
  position: relative;
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
  return (
    <Wrapper>
      <SHeader />
      <Back>
        <Banner>
          <BannerText>
            <p>상상을 현실로 구현하다</p>
          </BannerText>
        </Banner>
      </Back>
      <Mission>
        <p>Mission</p>
        <p>Release는 2014년에 창립된</p>
        <p>서강대학교 컴퓨터공학과 유일의 프로젝트 학회로,</p>
        <p>다양한 사람들이 모여</p>
        <p>함께 프로젝트를 하기 위해 설립된 학회입니다.</p>
        <p>전공을 불문하고 프로젝트를 하고 싶은 열정이 있는 사람,</p>
        <p>능력이 있는 사람을 모집 중입니다.</p>
      </Mission>
      <ImageZone>
        <div></div>
        <Image1 />
      </ImageZone>
      <Projects>
        <ProjectsText>
          <p>
            다양한 프로젝트<span>를 진행합니다.</span>
          </p>
          <p>Release에서는 웹 개발, 모바일 앱, 데이터 분석 등</p>
          <p>다양한 프로젝트를 함께 진행합니다.</p>
          <p>각자의 관심사와 목표에 맞춰 팀을 구성하고,</p>
          <p>실제로 작동하는 결과물을 만들어내는 것을 목표로 합니다.</p>
          <p>이를 통해 실무 경험을 쌓고, 협업 능력을 키울 수 있습니다.</p>
          <Button>
            <p>지난 프로젝트 확인하기</p>
          </Button>
        </ProjectsText>
      </Projects>
      <Image2>
        <Text2>
          <p>
            최신 기술 동향<span>과 </span>
          </p>
          <p>
            심도 있는 전문 지식
            <span>을 공유합니다.</span>
          </p>
          <p>
            Release에서는 정기적으로 세미나를 개최하고, 스터디 모임을 가지며
          </p>
          <p>
            최신 기술 동향을 탐구하고 심도 있는 전문 지식을 나누고 있습니다.
          </p>
          <p>
            세미나에서는 각 분야의 전문가들이 참여해 고급 정보를 제공하며, 이를
            통해 회원들의 역량 강화를 도모합니다.
          </p>
        </Text2>
      </Image2>
      <Seminar>
        <SeminarText>
          <p>지난 학기 개최되었더 세미나</p>
          <p>지난 학기, Release에서 총 00개의 세미나가 개최되었습니다.</p>
        </SeminarText>
        <SeminarContent>
          <p>AI 혁신과 미래 : 인공지능의 최신 동향</p>
          <p>서강대학교 신지원</p>
        </SeminarContent>
        <SeminarContent>
          <p>블록체인과 분산 시스템의 진화</p>
          <p>서강대학교 신지원</p>
        </SeminarContent>
        <SeminarContent>
          <p>사이버 보안의 현재와 미래</p>
          <p>서강대학교 신지원</p>
        </SeminarContent>
        <SeminarContent>
          <p>클라우드 컴퓨팅</p>
          <p>서강대학교 신지원</p>
        </SeminarContent>
        <SeminarContent>
          <p>빅데이터 분석과 머신러닝 응용</p>
          <p>서강대학교 신지원</p>
        </SeminarContent>
      </Seminar>
      <SFooter />
    </Wrapper>
  );
}

export default SmallAbout;

import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #292929;
  display: grid;
  grid-template-columns: 4fr 6fr;
  position: relative;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  left: 5.5vw;
  top: 6vw;
  position: absolute;
  gap: 50px;
`;

const FirstInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  img {
    width: 9vw;
    margin-bottom: 1.2vw;
  }
`;

const PlusInfo = styled.div`
  display: flex;
  gap: 15px;
  p {
    font-size: 1.7vw;
    color: white;
    margin-right: 3.5vw;
  }
`;

const SecondInfo = styled.div`
  p {
    font-weight: 400;
    font-size: 1.4vw;
    color: white;
  }
`;

const Phone = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 400;
  gap: 15px;
  font-size: 1vw;
`;

function SFooter() {
  return (
    <Wrapper>
      <Container>
        <FirstInfo>
          <img src={`${process.env.PUBLIC_URL}/img/logo4.png`} />
          <PlusInfo>
            <p>서강대학교 컴퓨터공학과 프로젝트 학회</p>
            <Phone>
              <p>sogangrelease@gmail.com</p>
              <p>서강대학교 아담샬(AS)관 1016호</p>
            </Phone>
          </PlusInfo>
        </FirstInfo>
        <SecondInfo>
          <p>© 2024 Release All rights reserved.</p>
        </SecondInfo>
      </Container>
    </Wrapper>
  );
}

export default SFooter;

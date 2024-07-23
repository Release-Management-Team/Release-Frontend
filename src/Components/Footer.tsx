import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #292929;
  padding-left: 70px;
  padding-top: 90px;
  display: flex;
  flex-direction: column;
  color: white;
  gap: 15px;
  img {
    width: 120px;
  }
  p:nth-child(3) {
    margin-top: 70px;
    font-weight: 400;
    font-size: 13px;
  }
`;

const SecondText = styled.div`
  display: flex;
  gap: 80px;
`;

const Phone = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 400;
  gap: 15px;
  font-size: 14px;
`;

function Footer() {
  return (
    <Wrapper>
      <img src="../img/logo3.png" />
      <SecondText>
        <p>서강대학교 컴퓨터공학과 프로젝트 학회</p>
        <Phone>
          <p>02-000-0000&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;00@sogang.ac.kr</p>
          <p>서강대학교 00관 00호</p>
        </Phone>
      </SecondText>
      <p>© 2024 Release All rights reserved.</p>
    </Wrapper>
  );
}

export default Footer;

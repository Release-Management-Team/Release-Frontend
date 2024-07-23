import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p:nth-child(1) {
    color: #eeeeee;
    font-size: 36px;
    margin-bottom: 36px;
  }
  p:nth-child(2) {
    color: #999999;
    font-size: 18px;
    margin-bottom: 8px;
  }
`;

const Image = styled.div`
  margin-top: 70px;
  width: 800px;
  display: flex;
  justify-content: space-between;
  gap: 250px;
  filter: brightness(0) invert(1);
  img:nth-child(1) {
    height: 110px;
  }
  img:nth-child(2) {
    height: 110px;
  }
`;

function Support() {
  return (
    <Wrapper>
      <p>제휴 및 후원</p>
      <p>Release와 함께하는 기업들입니다.</p>
      <Image>
        <img src="../img/naver.png" />
        <img src="../img/mobis.png" />
      </Image>
    </Wrapper>
  );
}

export default Support;

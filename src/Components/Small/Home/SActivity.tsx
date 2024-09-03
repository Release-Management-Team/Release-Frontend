import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  margin-bottom: 25px;
`;

const Text = styled.div`
  display: flex;
  margin-left: 15vw;
  flex-direction: column;
  align-items: start;
  p:nth-child(1) {
    font-size: 5vw;
    margin-bottom: 35px;
    color: #eeeeee;
  }
  p:nth-child(n + 2) {
    font-weight: 400;
    font-size: 2.4vw;
    color: #484848;
    margin-bottom: 12px;
    color: #999999;
  }
`;

function SActivity() {
  return (
    <Wrapper>
      <Text>
        <p>Release의 다양한 활동</p>
        <p>Release에서는</p>
        <p>스터디, 세미나, 프로젝트, 그리고 여러 가지 친목 활동 등</p>
        <p>다양한 활동들을 진행하고 있습니다.</p>
      </Text>
    </Wrapper>
  );
}

export default SActivity;

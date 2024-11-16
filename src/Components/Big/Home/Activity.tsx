import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
`;

const First = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  p:nth-child(1) {
    color: #eeeeee;
    font-size: clamp(1px, 2.4vw, 55px);
    margin-bottom: 36px;
  }
  p:nth-child(n + 2) {
    color: #999999;
    font-size: clamp(1px, 1.3vw, 30px);
    margin-bottom: 8px;
  }
`;

function Activity() {
  return (
    <Wrapper>
      <First>
        <Text>
          <p>Release의 다양한 활동</p>
          <p>
            Release에서는 스터디, 세미나, 프로젝트, 그리고 여러 가지 친목 활동
            등
          </p>
          <p>다양한 활동들을 진행하고 있습니다.</p>
        </Text>
      </First>
    </Wrapper>
  );
}

export default Activity;

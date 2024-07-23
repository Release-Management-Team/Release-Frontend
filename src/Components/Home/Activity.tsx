import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
`;

const First = styled.div`
  padding-left: 80px;
  padding-top: 300px;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  p:nth-child(1) {
    color: #eeeeee;
    font-size: 36px;
    margin-bottom: 36px;
  }
  p:nth-child(n + 2) {
    color: #999999;
    font-size: 18px;
    margin-bottom: 8px;
  }
`;

function Activity() {
  return (
    <Wrapper>
      <First>
        <Text>
          <p>Release의 다양한 활동</p>
          <p>Release에서는 정기적으로 스터디, 세미나, 프로젝트 등의</p>
          <p>다양한 활동들을 진행하고 있습니다.</p>
        </Text>
      </First>
    </Wrapper>
  );
}

export default Activity;

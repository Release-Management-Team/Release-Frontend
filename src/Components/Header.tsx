import styled from "styled-components";

const Nav = styled.div`
  position: sticky;
  top: 0;
  background-color: rgba(27, 27, 27, 0.7);
  backdrop-filter: blur(5px);
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 10px;
  box-sizing: border-box;
`;

const Logo = styled.div`
  z-index: 2;
  display: flex;
  align-items: center;
  padding-left: 70px;
  img {
    height: 32px;
  }
`;

const Contents = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 70px;
`;

const Content = styled.div`
  background-color: #f6c015;
  width: 80px;
  text-align: center;
`;

function Header() {
  return (
    <Nav>
      <Logo>
        <img src="../img/logo2.png" />
      </Logo>
      <Contents>
        <Content>About us</Content>
        <Content>History</Content>
        <Content>Project</Content>
        <Content>Members</Content>
        <Content>지원하기</Content>
      </Contents>
    </Nav>
  );
}

export default Header;

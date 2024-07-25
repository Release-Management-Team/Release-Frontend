import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

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
  img:nth-child(1) {
    height: 28px;
  }
  img:nth-child(2) {
    margin-left: 7px;
    height: 14px;
  }
`;

const Contents = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 70px;
`;

interface ContentProps {
  active: boolean;
}

const Content = styled(Link)<ContentProps>`
  width: 5vw;
  text-align: center;
  text-decoration: none;
  color: #d9d9d9;
  color: ${(props) => (props.active ? "#f6c015" : "#d9d9d9")};
  p:nth-child(1) {
    margin: 0;
    font-size: 1.2vw;
  }
`;

const Box = styled.div`
  width: 5vw;
  text-align: center;
  color: #d9d9d9;
  p:nth-child(1) {
    margin: 0;
    font-size: 1.2vw;
  }
`;

const Button = styled.button`
  width: 8.5vw;
  height: 3.2vw;
  background-color: #f6c015;
  border: none;
  border-radius: 0.5vw;
  display: flex;
  justify-content: center;
  align-items: center;
  p:nth-child(1) {
    margin: 0;
    font-size: 1.3vw;
    color: black;
  }
`;

function Header() {
  const location = useLocation();
  return (
    <Nav>
      <Logo>
        <Link to="/">
          <img src="../img/logo2.png" />
          <img src="../img/logo3.png" />
        </Link>
      </Logo>
      <Contents>
        <Box>
          <p>About us</p>
        </Box>
        <Content to="/history" active={location.pathname === "/history"}>
          <p>History</p>
        </Content>
        <Content to="/project" active={location.pathname === "/project"}>
          <p>Project</p>
        </Content>
        <Box>
          <p>Members</p>
        </Box>
        <Button>
          <p>지원하기</p>
        </Button>
      </Contents>
    </Nav>
  );
}

export default Header;

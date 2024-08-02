import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Nav = styled.div`
  position: sticky;
  height: 70px;
  top: 0;
  background-color: rgba(27, 27, 27, 0.3);
  backdrop-filter: blur(5px);
  z-index: 1;
  padding: 10px;
  box-sizing: border-box;
`;

const NavArea = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Logo = styled.div`
  z-index: 2;
  display: flex;
  align-items: center;
  padding-left: 70px;
  img:nth-child(1) {
    height: 20px;
  }
  img:nth-child(2) {
    margin-left: 7px;
    height: 10px;
  }
`;

const Menu = styled.div`
  filter: brightness(0) invert(1);
  display: flex;
  justify-content: end;
  align-items: center;
  padding-right: 70px;
  img:nth-child(1) {
    height: 40px;
  }
`;

const MenuBar = styled(motion.div)`
  position: fixed;
  top: 70px;
  width: 100%;
  height: 300px;
  background-color: rgba(27, 27, 27, 0.3);
  backdrop-filter: blur(5px);
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  color: white;
`;

const Contents = styled.div``;

function SHeader() {
  const [Clicked, setClicked] = useState(false);
  const clickMenu = () => setClicked(!Clicked);

  return (
    <>
      <Nav>
        <NavArea>
          <Logo>
            <Link to="/">
              <img src={`${process.env.PUBLIC_URL}/img/logo2.png`} />
              <img src={`${process.env.PUBLIC_URL}/img/logo3.png`} />
            </Link>
          </Logo>
          <Menu onClick={clickMenu}>
            <img src={`${process.env.PUBLIC_URL}/img/menu.png`} />
          </Menu>
        </NavArea>
      </Nav>
      <AnimatePresence>
        {Clicked && (
          <MenuBar
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p>About us</p>
            <p>History</p>
            <p>Project</p>
            <p>Members</p>
            <p>지원하기</p>
          </MenuBar>
        )}
      </AnimatePresence>
    </>
  );
}

export default SHeader;

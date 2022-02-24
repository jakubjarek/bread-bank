import { createPortal } from 'react-dom';
import styled from 'styled-components';
import useSidebar from '../Sidebar/useSidebar';

import Hamburger from '../../atoms/Hamburger/Hamburger';
import Sidebar from '../Sidebar/Sidebar';
import getWindowWidth from '../../../helpers/getWindowWidth';

const StyledNav = styled.nav`
  width: 100%;
  padding: 6px 1rem;
  display: flex;

  @media screen and (min-width: 1310px) {
    position: fixed;
    top: 0;
    left: 0;
    padding: 0;
  }
`;

const HamburgerContainer = styled.div`
  margin-left: auto;

  @media screen and (min-width: 1310px) {
    display: none;
  }
`;

function Navigation() {
  const { isOpen, handleOpenSidebar, handleCloseSidebar } = useSidebar();
  const windowWidth = getWindowWidth();

  const sidebarMobile = (
    <>
      {isOpen
        ? createPortal(
            <Sidebar handleCloseSidebar={handleCloseSidebar} />,
            document.getElementById('modal-container')
          )
        : null}
    </>
  );

  return (
    <StyledNav>
      <HamburgerContainer>
        <Hamburger onClick={handleOpenSidebar} />
      </HamburgerContainer>
      {windowWidth >= 1310 ? <Sidebar /> : sidebarMobile}
    </StyledNav>
  );
}

export default Navigation;

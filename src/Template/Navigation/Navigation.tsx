import { createPortal } from 'react-dom';
import styled from 'styled-components';

import useWindowWidth from '../../shared/hooks/useWindowWidth';
import { useSidebar } from '../Sidebar/useSidebar';

import Hamburger from '../../shared/components/Hamburger/Hamburger';
import Sidebar from '../Sidebar/Sidebar';

function Navigation() {
  const { isOpen, openSidebar, closeSidebar } = useSidebar();
  const windowWidth = useWindowWidth();

  const sidebarMobile = (
    <>
      {isOpen
        ? createPortal(
            <Sidebar handleClose={closeSidebar} />,
            document.getElementById('modal-container') as HTMLElement
          )
        : null}
    </>
  );

  return (
    <Nav>
      {windowWidth >= 910 ? null : <Hamburger handleClick={openSidebar} />}
      {windowWidth >= 910 ? <Sidebar /> : sidebarMobile}
    </Nav>
  );
}

export default Navigation;

const Nav = styled.nav`
  width: 100%;
  padding: 1rem;
  padding-bottom: 0;
  display: flex;

  @media screen and (min-width: 910px) {
    position: fixed;
    top: 0;
    left: 0;
    padding: 0;
  }
`;

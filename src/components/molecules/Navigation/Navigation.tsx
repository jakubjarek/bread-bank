import { createPortal } from 'react-dom';
import styled from 'styled-components';
import useSidebar from '../../organisms/Sidebar/useSidebar';
import Hamburger from '../Hamburger/Hamburger';
import Sidebar from '../../organisms/Sidebar/Sidebar';
import useWindowWidth from '../../../hooks/useWindowWidth';

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

function Navigation() {
  const { isOpen, handleOpenSidebar, handleCloseSidebar } = useSidebar();
  const windowWidth = useWindowWidth();

  const sidebarMobile = (
    <>
      {isOpen
        ? createPortal(
            <Sidebar handleCloseSidebar={handleCloseSidebar} />,
            document.getElementById('modal-container') as HTMLElement
          )
        : null}
    </>
  );

  return (
    <Nav>
      {windowWidth >= 910 ? null : <Hamburger handleClick={handleOpenSidebar} />}
      {windowWidth >= 910 ? <Sidebar /> : sidebarMobile}
    </Nav>
  );
}

export default Navigation;

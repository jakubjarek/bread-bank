import { useState } from 'react';
import { createPortal } from 'react-dom';

import styled from 'styled-components';

import Hamburger from '../../atoms/Hamburger/Hamburger';
import Sidebar from '../Sidebar/Sidebar';

const StyledNav = styled.nav`
  width: 100%;
  padding: 6px 0;
  display: flex;
`;
const HamburgerContainer = styled.div`
  margin-left: auto;
`;

function Navigation() {
  const [isSidebar, setIsSidebar] = useState(false);
  const toggleSidebar = () => setIsSidebar((p) => !p);

  return (
    <>
      <StyledNav>
        <HamburgerContainer>
          <Hamburger onClick={toggleSidebar} />
        </HamburgerContainer>
      </StyledNav>
      {isSidebar
        ? createPortal(
            <Sidebar handleClose={toggleSidebar} />,
            document.getElementById('modal-container')
          )
        : null}
    </>
  );
}

export default Navigation;

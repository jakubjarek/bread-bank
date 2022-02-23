import styled from 'styled-components';

import Hamburger from '../../atoms/Hamburger/Hamburger';

const StyledNav = styled.nav`
  width: 100%;
  padding: 6px 0;
  display: flex;
`;
const HamburgerContainer = styled.div`
  margin-left: auto;
`;

function Navigation() {
  return (
    <StyledNav>
      <HamburgerContainer>
        <Hamburger />
      </HamburgerContainer>
    </StyledNav>
  );
}

export default Navigation;

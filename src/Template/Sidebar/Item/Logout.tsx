import styled from 'styled-components';
import { useSidebar } from '../useSidebar';

import { BiLogOutCircle } from 'react-icons/bi';
import { Container, Icon, Text } from './SidebarItem.styles';

//firebase
import { auth } from '../../../firebase';
import { signOut } from 'firebase/auth';

const Logout = () => {
  const { closeSidebar } = useSidebar();

  const handleClick = () => {
    signOut(auth);
    closeSidebar();
  };

  return (
    <Wrapper onClick={handleClick}>
      <Container>
        <LogoutIcon>
          <BiLogOutCircle />
        </LogoutIcon>
        <Text>Sign out</Text>
      </Container>
    </Wrapper>
  );
};

export default Logout;

const Wrapper = styled.div`
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.lighterGray};
`;

const LogoutIcon = styled(Icon)`
  svg {
    fill: ${({ theme }) => theme.color.red};
  }
`;

import styled from 'styled-components';
import { useSidebar } from '../useSidebar';

import { BiLogOutCircle } from 'react-icons/bi';
import { Container, Icon, Text } from './SidebarItem.styles';

type IProps = {
  handleLogout: () => void;
};

const Logout = ({ handleLogout }: IProps) => {
  const { closeSidebar } = useSidebar();

  const handleClick = () => {
    handleLogout();
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
  background-color: #e7e7e7;
`;

const LogoutIcon = styled(Icon)`
  svg {
    fill: ${({ theme }) => theme.color.red};
  }
`;

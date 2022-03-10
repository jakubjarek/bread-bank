import styled from 'styled-components';
import { useAuth } from '../../../hooks/useAuth';
import SidebarItem from '../../atoms/SidebarItem/SidebarItem';
import Spacer from '../../atoms/Divider/Divider';
import { BiLogOutCircle } from 'react-icons/bi';
import { authItems } from './sidebar-items';

export const User = styled.div`
  padding: 2px 1rem;
  color: white;
  background-color: black;
  margin-top: 0.5rem;
  margin-bottom: 0.25rem;

  & p {
    margin: 0;
  }
`;

const AuthSidebarContent = () => {
  const { logOut } = useAuth();

  return (
    <>
      <User>
        <p>JOHN DOE</p>
        <p>Balance: $30.213,31</p>
      </User>
      <SidebarItem
        text={'Log Out'}
        icon={<BiLogOutCircle fill={'red'} />}
        handleClick={logOut}
      />
      <Spacer>Account</Spacer>
      <ul style={{ margin: '0', padding: '0' }}>
        {authItems.map(({ text, icon }) => (
          <SidebarItem key={text} text={text} icon={icon} />
        ))}
      </ul>
    </>
  );
};

export default AuthSidebarContent;

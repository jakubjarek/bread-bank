import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'Auth/useAuth';

import SidebarItem from './Item/SidebarItem';
import SidebarItemLogout from './SidebarItemLogout';
import Divider from 'shared/components/Divider';

import { BiLogOutCircle } from 'react-icons/bi';
import { authItems } from './sidebar-items';

const AuthSidebarContent = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut();
    navigate('/');
  };

  return (
    <>
      <User>
        <p>JOHN DOE</p>
        <p>Balance: $30.213,31</p>
      </User>
      <SidebarItemLogout
        text={'Log Out'}
        icon={<BiLogOutCircle fill={'red'} />}
        handleLogout={handleLogout}
      />
      <Divider>Account</Divider>
      <ul>
        {authItems.map(({ text, icon, path }) => (
          <SidebarItem key={text} text={text} icon={icon} navigateTo={path} />
        ))}
      </ul>
    </>
  );
};

export default AuthSidebarContent;

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

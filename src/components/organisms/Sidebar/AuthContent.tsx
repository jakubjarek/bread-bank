import styled from 'styled-components';
import { useAuth } from '../../../hooks/useAuth';
import SidebarItem from '../../atoms/SidebarItem/SidebarItem';
import Divider from '../../atoms/Divider/Divider';
import { BiLogOutCircle } from 'react-icons/bi';
import { authItems } from './sidebar-items';
import { useNavigate } from 'react-router-dom';

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
      <SidebarItem
        text={'Log Out'}
        icon={<BiLogOutCircle fill={'red'} />}
        handleClick={handleLogout}
        navigateTo="/"
      />
      <Divider>Account</Divider>
      <ul style={{ margin: '0', padding: '0' }}>
        {authItems.map(({ text, icon, path }) => (
          <SidebarItem key={text} text={text} icon={icon} navigateTo={path} />
        ))}
      </ul>
    </>
  );
};

export default AuthSidebarContent;

import styled from 'styled-components';
import { useAuth } from '../../../hooks/useAuth';
import SidebarItem from '../../atoms/SidebarItem/SidebarItem';
import Divider from '../../atoms/Divider/Divider';
import { BiLogOutCircle } from 'react-icons/bi';
import { authItems } from './sidebar-items';
import { NavLink } from 'react-router-dom';

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
      <Divider>Account</Divider>
      <ul style={{ margin: '0', padding: '0' }}>
        {authItems.map(({ text, icon, path }) => (
          <NavLink key={text} to={path}>
            <SidebarItem text={text} icon={icon} />
          </NavLink>
        ))}
      </ul>
    </>
  );
};

export default AuthSidebarContent;

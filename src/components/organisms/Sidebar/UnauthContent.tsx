import { NavLink } from 'react-router-dom';
import Divider from '../../atoms/Divider/Divider';
import { unauthItems } from './sidebar-items';
import SidebarItem from '../../atoms/SidebarItem/SidebarItem';

const UnauthSidebarContent = () => {
  return (
    <>
      <Divider>Browse</Divider>
      <ul style={{ margin: '0', padding: '0' }}>
        {unauthItems.map(({ text, icon, path }) => (
          <NavLink key={path} to={path}>
            <SidebarItem text={text} icon={icon} />
          </NavLink>
        ))}
      </ul>
    </>
  );
};

export default UnauthSidebarContent;

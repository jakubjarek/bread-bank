import Spacer from '../../atoms/Divider/Divider';
import { unauthItems } from './sidebar-items';
import SidebarItem from '../../atoms/SidebarItem/SidebarItem';
import { Link } from 'react-router-dom';

const UnauthSidebarContent = () => {
  return (
    <>
      <Spacer>Browse</Spacer>
      <ul style={{ margin: '0', padding: '0' }}>
        {unauthItems.map(({ text, icon, path }) => (
          <Link key={path} to={path}>
            <SidebarItem text={text} icon={icon} />
          </Link>
        ))}
      </ul>
    </>
  );
};

export default UnauthSidebarContent;

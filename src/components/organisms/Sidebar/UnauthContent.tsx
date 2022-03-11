import Divider from '../../atoms/Divider/Divider';
import { unauthItems } from './sidebar-items';
import SidebarItem from '../../atoms/SidebarItem/SidebarItem';

const UnauthSidebarContent = () => {
  return (
    <>
      <Divider>Browse</Divider>
      <ul style={{ margin: '0', padding: '0' }}>
        {unauthItems.map(({ text, icon, path }) => (
          <SidebarItem key={text} text={text} icon={icon} navigateTo={path} />
        ))}
      </ul>
    </>
  );
};

export default UnauthSidebarContent;

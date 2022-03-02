import Spacer from '../../atoms/Spacer/Spacer';
import { unauthItems } from '../../organisms/Sidebar/sidebar-items';
import SidebarItem from '../../atoms/SidebarItem/SidebarItem';

const UnauthSidebarContent = () => {
  return (
    <>
      <Spacer>Browse</Spacer>
      <ul style={{ margin: '0', padding: '0' }}>
        {unauthItems.map(({ text, icon }) => (
          <SidebarItem key={text} text={text} icon={icon} />
        ))}
      </ul>
    </>
  );
};

export default UnauthSidebarContent;

import { useAuth } from '../../Auth/useAuth';
import useWindowWidth from '../../shared/hooks/useWindowWidth';
import Logo from '../../shared/components/Logo';
import SidebarButton from './Button/SidebarButton';
import AuthSidebarContent from './AuthContent';
import { MdOutlineNotificationsActive } from 'react-icons/md';
import { FiSettings } from 'react-icons/fi';
import * as S from './Sidebar.styles';

import Divider from '../../shared/components/Divider';
import { unauthItems } from './sidebar-items';
import SidebarItem from './Item/SidebarItem';

interface IProps {
  handleClose?: () => void;
}

function Sidebar({ handleClose }: IProps) {
  const { user } = useAuth();
  const windowWidth = useWindowWidth();

  return (
    <>
      <S.FixedContainer>
        <S.Header>
          <S.Logo>
            <Logo />
          </S.Logo>
          <S.Icons>
            <SidebarButton icon={<MdOutlineNotificationsActive />} notificationCount={5} />
            <SidebarButton icon={<FiSettings />} />
          </S.Icons>
        </S.Header>
        {user ? <AuthSidebarContent /> : null}
        <Divider>Browse</Divider>
        <ul>
          {unauthItems.map(({ text, icon, path }) => (
            <SidebarItem key={text} text={text} icon={icon} navigateTo={path} />
          ))}
        </ul>
      </S.FixedContainer>
      {windowWidth < 910 ? <S.Backdrop onClick={handleClose}></S.Backdrop> : null}
    </>
  );
}

export default Sidebar;

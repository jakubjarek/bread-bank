import { useAuth } from '../../../hooks/useAuth';
import useWindowWidth from '../../../hooks/useWindowWidth';
import Logo from '../../atoms/Logo';
import SidebarButton from '../../atoms/SidebarButton/SidebarButton';
import AuthSidebarContent from './AuthContent';
import UnauthSidebarContent from './UnauthContent';
import { MdOutlineNotificationsActive } from 'react-icons/md';
import { FiSettings } from 'react-icons/fi';
import * as S from './Sidebar.styles';

function Sidebar({ handleCloseSidebar }: { handleCloseSidebar?: () => void }) {
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
        {<UnauthSidebarContent />}
      </S.FixedContainer>
      {windowWidth < 910 ? <S.Backdrop onClick={handleCloseSidebar}></S.Backdrop> : null}
    </>
  );
}

export default Sidebar;

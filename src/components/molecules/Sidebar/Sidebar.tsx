import { useAuth } from '../../../hooks/useAuth';
import SectionSpacer from '../../atoms/SectionSpacer/SectionSpacer';
import SidebarItem from '../../atoms/SidebarItem/SidebarItem';
import useWindowWidth from '../../../hooks/useWindowWidth';
import Logo from '../../atoms/Logo';
import {
  SidebarContainer,
  Header,
  LogoWrapper,
  IconsContainer,
  IconWrapper,
  Overlay,
  UsernameContainer,
} from './Sidebar.styles';

import { MdOutlineNotificationsActive } from 'react-icons/md';
import { FiSettings } from 'react-icons/fi';
import { BiLogOutCircle, BiCalculator } from 'react-icons/bi';
import { AiOutlineHome, AiOutlinePhone } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { GiReceiveMoney, GiClick } from 'react-icons/gi';
import { FaExchangeAlt } from 'react-icons/fa';

const unauthenticatedItems = [
  {
    text: 'Starting Screen',
    icon: <AiOutlineHome />,
  },
  {
    text: 'See Locations',
    icon: <GoLocation />,
  },
  {
    text: 'Quick Loan',
    icon: <GiReceiveMoney />,
  },
  {
    text: 'Exchange Rates',
    icon: <FaExchangeAlt />,
  },
  {
    text: 'Currency Converter',
    icon: <BiCalculator />,
  },
  {
    text: 'Contact',
    icon: <AiOutlinePhone />,
  },
  {
    text: 'Make An Appointment',
    icon: <GiClick />,
  },
];

function Sidebar({ handleCloseSidebar }: { handleCloseSidebar?: () => void }) {
  const { user, logOut } = useAuth();
  const windowWidth = useWindowWidth();

  const authenticatedContent = (
    <div key={'authenticated'}>
      <UsernameContainer>
        <p>JOHN DOE</p>
        <p>Balance: $30.213,31</p>
      </UsernameContainer>
      <SidebarItem
        key={'logout'}
        text={'Log Out'}
        icon={<BiLogOutCircle fill={'red'} />}
        handleClick={logOut}
      />
    </div>
  );

  const unauthenticatedContent = (
    <div key={'unauthenticated'}>
      <SectionSpacer>Browse</SectionSpacer>
      <ul style={{ margin: '0', padding: '0' }}>
        {unauthenticatedItems.map(({ text, icon }) => (
          <SidebarItem key={text} text={text} icon={icon} />
        ))}
      </ul>
    </div>
  );

  return (
    <>
      <SidebarContainer>
        <Header>
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
          <IconsContainer>
            <IconWrapper>
              <MdOutlineNotificationsActive />
            </IconWrapper>
            <IconWrapper>
              <FiSettings />
            </IconWrapper>
          </IconsContainer>
        </Header>
        {user ? [authenticatedContent, unauthenticatedContent] : unauthenticatedContent}
      </SidebarContainer>
      {windowWidth < 1310 ? <Overlay onClick={handleCloseSidebar}></Overlay> : null}
    </>
  );
}

export default Sidebar;

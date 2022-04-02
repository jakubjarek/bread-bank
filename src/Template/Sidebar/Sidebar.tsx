import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { AiFillGithub } from 'react-icons/ai';

import { unauthItems, authItems } from './sidebar-items';
import { useAuth } from 'Auth/useAuth';
import useWindowWidth from 'shared/hooks/useWindowWidth';
import * as S from './Sidebar.styles';

import SidebarItem from './Item/SidebarItem';
import SidebarButton from './Button/SidebarButton';
import Logout from './Item/Logout';
import Divider from 'shared/components/Divider';
import Logo from 'shared/components/Logo';

interface IProps {
  handleClose?: () => void;
}

function Sidebar({ handleClose }: IProps) {
  const navigate = useNavigate();
  const { user, logOut } = useAuth();
  const windowWidth = useWindowWidth();

  const handleLogout = () => {
    logOut();
    navigate('/');
  };

  const AuthenticatedContent = (
    <>
      <Logout handleLogout={handleLogout} />
      <Divider>Account</Divider>
      <ul>
        {authItems.map(({ text, icon, path }) => (
          <SidebarItem key={text} text={text} icon={icon} navigateTo={path} />
        ))}
      </ul>
      <Divider />
    </>
  );

  return (
    <>
      <S.FixedContainer>
        <S.Header>
          <S.Logo>
            <Logo />
          </S.Logo>
          <SidebarButton icon={<FiSettings />} />
        </S.Header>
        {user ? AuthenticatedContent : null}
        <ul>
          {unauthItems.map(({ text, icon, path }) => (
            <SidebarItem key={text} text={text} icon={icon} navigateTo={path} />
          ))}
        </ul>
        <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'center' }}>
          <RepoLink
            href="https://github.com/jakubjarek/bread-bank"
            rel="norefferer"
            target="_blank"
          >
            <AiFillGithub /> Github repo
          </RepoLink>
        </div>
      </S.FixedContainer>
      {windowWidth < 910 ? <S.Backdrop onClick={handleClose}></S.Backdrop> : null}
    </>
  );
}

export default Sidebar;

const RepoLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  width: 50%;
  background: #e7e7e7;
  text-align: center;
  padding: 0.5rem 0;
  border-radius: 5px;
  color: ${({ theme }) => theme.color.black};
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSize.m};
`;
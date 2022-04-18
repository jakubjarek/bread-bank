import styled from 'styled-components';
import { FiSettings } from 'react-icons/fi';
import { AiFillGithub } from 'react-icons/ai';

import { unauthItems, authItems } from './sidebar-items';
import useWindowWidth from 'shared/hooks/useWindowWidth';
import { useAuth } from 'Auth/useAuth';
import { toMoneyString } from 'shared/utils/toMoneyString';
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
  const { user, accounts, details } = useAuth();
  const windowWidth = useWindowWidth();

  const AuthenticatedContent = (
    <>
      <S.UserInfo>
        <S.UserName>
          {details?.firstName} {details?.lastName}
        </S.UserName>
        <S.UserBalance>{toMoneyString(accounts?.main)} EUR</S.UserBalance>
      </S.UserInfo>
      <Logout />
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
  background: ${({ theme }) => theme.color.lighterGray};
  text-align: center;
  padding: 0.5rem 0;
  border-radius: 5px;
  color: ${({ theme }) => theme.color.black};
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSize.m};
`;

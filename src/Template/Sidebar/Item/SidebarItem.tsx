import { useSidebar } from '../useSidebar';
import * as S from './SidebarItem.styles';

interface IProps {
  icon: React.ReactNode;
  text: string;
  navigateTo: string;
}

const SidebarItem = ({ icon, text, navigateTo }: IProps) => {
  const { closeSidebar } = useSidebar();

  return (
    <S.Li>
      <S.StyledNavLink to={navigateTo} onClick={closeSidebar}>
        <S.Container>
          <S.Icon>{icon}</S.Icon>
          <S.Text>{text}</S.Text>
        </S.Container>
      </S.StyledNavLink>
    </S.Li>
  );
};

export default SidebarItem;

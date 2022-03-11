import * as S from './SidebarItem.styled';

type Props = {
  icon: React.ReactNode;
  text: string;
  navigateTo: string;
};

const SidebarItem = ({ icon, text, navigateTo }: Props) => {
  return (
    <S.Li>
      <S.StyledNavLink to={navigateTo}>
        <S.Container>
          <S.Icon>{icon}</S.Icon>
          <S.Text>{text}</S.Text>
        </S.Container>
      </S.StyledNavLink>
    </S.Li>
  );
};

export default SidebarItem;

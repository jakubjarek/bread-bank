import * as S from './SidebarItem.styled';

type Props = {
  icon: React.ReactNode;
  text: string;
  navigateTo: string;
  handleClick?: () => void;
};

const SidebarItem = ({ icon, text, navigateTo, handleClick }: Props) => {
  return (
    <S.Li onClick={handleClick}>
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

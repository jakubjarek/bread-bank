import * as S from './SidebarItem.styled';

type Props = {
  icon: React.ReactNode;
  text: string;
  handleLogout: () => void;
};

const SidebarItem = ({ icon, text, handleLogout }: Props) => {
  return (
    <S.LogoutLi onClick={handleLogout}>
      <S.Container>
        <S.Icon>{icon}</S.Icon>
        <S.Text>{text}</S.Text>
      </S.Container>
    </S.LogoutLi>
  );
};

export default SidebarItem;

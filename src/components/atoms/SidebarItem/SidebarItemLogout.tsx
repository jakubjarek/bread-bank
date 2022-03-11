import { useSidebar } from '../../organisms/Sidebar/useSidebar';
import * as S from './SidebarItem.styled';

type Props = {
  icon: React.ReactNode;
  text: string;
  handleLogout: () => void;
};

const SidebarItem = ({ icon, text, handleLogout }: Props) => {
  const { closeSidebar } = useSidebar();

  const handleClick = () => {
    handleLogout();
    closeSidebar();
  };

  return (
    <S.LogoutLi onClick={handleClick}>
      <S.Container>
        <S.Icon>{icon}</S.Icon>
        <S.Text>{text}</S.Text>
      </S.Container>
    </S.LogoutLi>
  );
};

export default SidebarItem;

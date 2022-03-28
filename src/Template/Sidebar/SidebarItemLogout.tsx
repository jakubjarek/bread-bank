import { useSidebar } from './useSidebar';

import * as S from './Item/SidebarItem.styles';

type IProps = {
  icon: React.ReactNode;
  text: string;
  handleLogout: () => void;
};

const SidebarItem = ({ icon, text, handleLogout }: IProps) => {
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

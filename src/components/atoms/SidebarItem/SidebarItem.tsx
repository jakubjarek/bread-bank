import * as S from './SidebarItem.styled';

type Props = {
  icon: React.ReactNode;
  text: string;
  handleClick?: () => void;
};

const SidebarItem = ({ icon, text, handleClick }: Props) => {
  return (
    <S.Li onClick={handleClick}>
      <S.Container>
        <S.Icon>{icon}</S.Icon>
        <S.Text>{text}</S.Text>
      </S.Container>
    </S.Li>
  );
};

export default SidebarItem;

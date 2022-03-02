import * as S from './SidebarButton.styled';

type Props = {
  icon: React.ReactNode;
  notificationCount?: number;
};

const SidebarButton = ({ icon, notificationCount }: Props) => {
  return (
    <S.Wrapper>
      {icon}
      {notificationCount ? (
        <S.NotificationNumber>{notificationCount}</S.NotificationNumber>
      ) : null}
    </S.Wrapper>
  );
};

export default SidebarButton;

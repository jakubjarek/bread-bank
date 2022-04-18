import { useAuth } from 'Auth/useAuth';
import { toMoneyString } from 'shared/utils/toMoneyString';

import * as S from './Authenticated.styles';
import Divider from 'shared/components/Divider';

const Authenticated = () => {
  const { accounts } = useAuth();

  const NoHistory = (
    <div style={{ paddingBlock: '1rem' }}>
      <div style={{ color: 'gray' }}>No history from today</div>
    </div>
  );

  return (
    <>
      <S.InfoContainer>
        <p>Account balance:</p>
        <p>{toMoneyString(accounts?.main)} EUR</p>
      </S.InfoContainer>
      <S.NewTransaciton>New transaction</S.NewTransaciton>
      <Divider>Today's history</Divider>
      <S.HistoryContainer>{NoHistory}</S.HistoryContainer>
    </>
  );
};

export default Authenticated;

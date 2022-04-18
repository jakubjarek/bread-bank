import { Outlet } from 'react-router-dom';

import * as S from './Savings.styles';

import { toMoneyString } from 'shared/utils/toMoneyString';
import { useAuth } from 'Auth/useAuth';

const Savings = () => {
  const { accounts } = useAuth();

  return (
    <>
      <S.InfoContainer>
        <p>Savings account balance:</p>
        <p>{toMoneyString(accounts?.saving)} EUR</p>
      </S.InfoContainer>
      <S.ButtonGroup>
        <S.StyledLink to="transfer">Transfer</S.StyledLink>
        <S.StyledLink to="withdraw">Withdraw</S.StyledLink>
      </S.ButtonGroup>
      <Outlet />
    </>
  );
};

export default Savings;

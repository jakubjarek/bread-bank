import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { RiMoreFill } from 'react-icons/ri';

import { toMoneyString } from 'shared/utils/toMoneyString';
import * as S from './Transaction.styles';

export interface TransactionType {
  id: string;
  received: boolean;
  amount: number;
  receiver: string;
  sender: string;
}

const Transaction = ({ id, received, amount, receiver, sender }: TransactionType) => {
  return (
    <S.Container title="Show transaction details">
      <S.Row>
        <S.Amount received={received}>
          {!received && '-'}
          { toMoneyString(amount)} EUR
        </S.Amount>
        <RiMoreFill />
      </S.Row>
      <S.Participant>
        {received ? <BsArrowLeft size={14} /> : <BsArrowRight size={14} />}
        {received ? sender : receiver}
      </S.Participant>
    </S.Container>
  );
};

export default Transaction;

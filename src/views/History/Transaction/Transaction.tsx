import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { RiMoreFill } from 'react-icons/ri';

import { toMoneyString } from 'shared/utils/toMoneyString';
import * as S from './Transaction.styles';

export interface TransactionType {
  id: string;
  type: 'receive' | 'send';
  amount: number;
  receiver: string;
  sender: string;
  date: {
    seconds: number;
    nanoseconds: number;
  };
}

const Transaction = ({ data }: { data: TransactionType }) => {
  const { type, amount, receiver, sender } = data;

  return (
    <S.Container title="Show transaction details">
      <S.Row>
        <S.Amount type={type}>
          {type === 'send' && '-'}
          {toMoneyString(amount)} EUR
        </S.Amount>
        <RiMoreFill />
      </S.Row>
      <S.Participant>
        {type === 'receive' ? <BsArrowLeft size={14} /> : <BsArrowRight size={14} />}
        {type === 'receive' ? sender : receiver}
      </S.Participant>
    </S.Container>
  );
};

export default Transaction;

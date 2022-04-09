import * as S from './Transaction.styles';

import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { RiMoreFill } from 'react-icons/ri';

const Transaction = () => {
  // remove after passing transaction data as a prop
  const received = false;

  const icon = received ? <BsArrowLeft size={14} /> : <BsArrowRight size={14} />;

  return (
    <S.Container title="Show transaction details">
      <S.Row>
        <S.Amount received={received}>{received ? '' : '-'}45,00 EUR</S.Amount>
        <RiMoreFill />
      </S.Row>
      <S.Participant>
        {icon}
        Gabe Newell
      </S.Participant>
    </S.Container>
  );
};

export default Transaction;

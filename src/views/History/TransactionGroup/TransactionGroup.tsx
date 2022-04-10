import * as S from './TransactionGroup.styles';
import Transaction, { TransactionType } from '../Transaction/Transaction';
import { Link } from 'react-router-dom';

interface IProps {
  date: string;
  transactions: TransactionType[];
}

const TransactionGroup = ({ date, transactions }: IProps) => {
  return (
    <S.Container>
      <S.DateColumn>
        <S.Date>
          <S.DayAbbrev>Mon</S.DayAbbrev>
          <S.DayNumber>24</S.DayNumber>
          <S.Month>05.2022</S.Month>
        </S.Date>
        <S.VerticalBar />
      </S.DateColumn>
      <S.TransactionsColumn>
        {transactions.map((t) => (
          <Link key={t.id} to={`transactions/${t.id}`}>
            <Transaction
              id={t.id}
              received={t.received}
              amount={t.amount}
              receiver={t.receiver}
              sender={t.sender}
            />
          </Link>
        ))}
      </S.TransactionsColumn>
    </S.Container>
  );
};

export default TransactionGroup;

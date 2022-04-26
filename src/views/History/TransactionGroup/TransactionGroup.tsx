import { Link } from 'react-router-dom';

import * as S from './TransactionGroup.styles';
import Transaction, { TransactionType } from '../Transaction/Transaction';

interface IProps {
  date: string;
  transactions: TransactionType[];
}

const TransactionGroup = ({ date, transactions }: IProps) => {
  // date's format is 'Mar 30 05 2022'
  const [dayAbbrev, dayNumber, month, year] = date.split(' ');

  return (
    <S.Container>
      <S.DateColumn>
        <S.Date>
          <S.DayAbbrev>{dayAbbrev}</S.DayAbbrev>
          <S.DayNumber>{dayNumber}</S.DayNumber>
          <S.Month>
            {month}.{year}
          </S.Month>
        </S.Date>
        <S.VerticalBar />
      </S.DateColumn>
      <S.TransactionsColumn>
        {transactions.map((transaction) => (
          <Link key={transaction.id} to={`transactions/${transaction.id}`}>
            <Transaction data={transaction} />
          </Link>
        ))}
      </S.TransactionsColumn>
    </S.Container>
  );
};

export default TransactionGroup;

import * as S from './TransactionGroup.styles';
import { TransactionType } from '../Transaction/Transaction';

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
      <S.TransactionsColumn>{/* transactions go here */}</S.TransactionsColumn>
    </S.Container>
  );
};

export default TransactionGroup;

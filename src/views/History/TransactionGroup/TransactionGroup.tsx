import * as S from './TransactionGroup.styles';

// it should take 2 props:
// - date
// - array of transactions
const TransactionGroup = () => {
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

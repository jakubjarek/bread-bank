import * as S from './Hamburger.styled';

const Hamburger = ({ handleClick }: { handleClick: () => void }) => {
  return (
    <S.Wrapper onClick={handleClick}>
      <S.Lines>
        <S.Line />
        <S.Line />
        <S.Line />
      </S.Lines>
    </S.Wrapper>
  );
};

export default Hamburger;

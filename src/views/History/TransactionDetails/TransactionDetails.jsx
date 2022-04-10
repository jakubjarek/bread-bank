import { RiCloseFill, RiLink } from 'react-icons/ri';

import * as S from './TransactionDetails.styles';

const TransactionDetails = () => {
  return (
    <S.Container>
      <S.TopRow>
        <S.TransactionId>e3Ri2Rm13qE9r</S.TransactionId>
        <S.ButtonGroup>
          <S.Button>
            <RiLink size={18} />
            <span>Copy number</span>
          </S.Button>
          <S.Button>
            <RiCloseFill size={18} />
          </S.Button>
        </S.ButtonGroup>
      </S.TopRow>
      <S.HeadingSection>
        <S.Heading>Transaction details:</S.Heading>
        <S.Subheading>⭐ You transferred 300,00 EUR to Gabe Newell ⭐</S.Subheading>
      </S.HeadingSection>
      <S.Details>
        <S.DetailsItem>
          <S.ItemTitle>title:</S.ItemTitle>
          <S.ItemText>Take this, I'm doing business.</S.ItemText>
        </S.DetailsItem>
      </S.Details>
    </S.Container>
  );
};

export default TransactionDetails;

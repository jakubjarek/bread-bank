import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { RiCloseFill, RiLink } from 'react-icons/ri';

import { TransactionType } from '../Transaction/Transaction';

import * as S from './TransactionDetails.styles';
import Modal from 'shared/components/Modal/Modal';

const TransactionDetails = () => {
  const [data, setData] = useState<TransactionType | null>(null);

  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    // GET request using transaction id to get specified data
  }, [params]);

  const handleClose = () => {
    navigate('/history');
  };

  return (
    <>
      <Modal
        handleOutsideClick={handleClose}
        renderContent={
          <S.Container>
            <S.TopRow>
              <S.TransactionId>{data?.id}</S.TransactionId>
              <S.ButtonGroup>
                <S.Button>
                  <RiLink size={18} />
                  <span>Copy number</span>
                </S.Button>
                <S.Button onClick={handleClose}>
                  <RiCloseFill size={18} />
                </S.Button>
              </S.ButtonGroup>
            </S.TopRow>
            <S.HeadingSection>
              <S.Heading>Transaction details:</S.Heading>
              <S.Subheading>
                ⭐{' '}
                {data?.received
                  ? `You received ${data?.amount} EUR from ${data?.sender}`
                  : `You transferred ${data?.amount} EUR to ${data?.receiver}`}{' '}
                ⭐
              </S.Subheading>
            </S.HeadingSection>
            <S.Details>
              <S.DetailsItem>
                <S.ItemTitle>title:</S.ItemTitle>
                <S.ItemText>Take this, I'm doing business.</S.ItemText>
              </S.DetailsItem>
              <S.DetailsItem>
                <S.ItemTitle>amount:</S.ItemTitle>
                <S.ItemText>{data?.amount} EUR</S.ItemText>
              </S.DetailsItem>
              <S.DetailsItem>
                <S.ItemTitle>receiver:</S.ItemTitle>
                <S.ItemText>{data?.receiver}</S.ItemText>
              </S.DetailsItem>
              <S.DetailsItem>
                <S.ItemTitle>sender:</S.ItemTitle>
                <S.ItemText>{data?.sender}</S.ItemText>
              </S.DetailsItem>
            </S.Details>
          </S.Container>
        }
      />
    </>
  );
};

export default TransactionDetails;

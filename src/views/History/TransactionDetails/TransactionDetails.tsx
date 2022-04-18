import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { RiCloseFill, RiLink } from 'react-icons/ri';

import { TransactionType } from '../Transaction/Transaction';

import * as S from './TransactionDetails.styles';
import Modal from 'shared/components/Modal/Modal';

import { data } from '../History';

const TransactionDetails = () => {
  const [transactionData, setData] = useState<TransactionType | undefined>(undefined);

  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    const f = data.find((t) => t.id === params.transactionId);
    setData(f);
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
              <S.TransactionId>{transactionData?.id}</S.TransactionId>
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
                {transactionData?.received
                  ? `You received ${transactionData?.amount} EUR from ${transactionData?.sender}`
                  : `You transferred ${transactionData?.amount} EUR to ${transactionData?.receiver}`}{' '}
              </S.Subheading>
            </S.HeadingSection>
            <S.Details>
              <S.DetailsItem>
                <S.ItemTitle>title:</S.ItemTitle>
                <S.ItemText>Title here. Title here.</S.ItemText>
              </S.DetailsItem>
              <S.DetailsItem>
                <S.ItemTitle>amount:</S.ItemTitle>
                <S.ItemText>{transactionData?.amount} EUR</S.ItemText>
              </S.DetailsItem>
              <S.DetailsItem>
                <S.ItemTitle>receiver:</S.ItemTitle>
                <S.ItemText>{transactionData?.receiver}</S.ItemText>
              </S.DetailsItem>
              <S.DetailsItem>
                <S.ItemTitle>sender:</S.ItemTitle>
                <S.ItemText>{transactionData?.sender}</S.ItemText>
              </S.DetailsItem>
            </S.Details>
          </S.Container>
        }
      />
    </>
  );
};

export default TransactionDetails;

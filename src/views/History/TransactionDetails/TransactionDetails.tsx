import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { RiCloseFill, RiLink } from 'react-icons/ri';

import { TransactionType } from '../Transaction/Transaction';
import useDoc from 'useDoc';

import * as S from './TransactionDetails.styles';
import Modal from 'shared/components/Modal/Modal';
import Spinner from 'shared/components/Spinner';

const TransactionDetails = () => {
  const [transactionData, setData] = useState<TransactionType>();
  const navigate = useNavigate();
  const { transactionId } = useParams();
  const [data, loading, error] = useDoc('transactions');

  useEffect(() => {
    if (loading || error) return;

    if (data) {
      // Simulate fetching for a specified transaction using it's ID.
      const all: TransactionType[] = Object.values(data);
      const specific = all.find((t) => t.id === transactionId);
      setData(specific);
    }
  }, [loading, data, error, transactionId]);

  const handleClose = () => {
    navigate('/history');
  };

  if (error) {
    return (
      <div>
        Something went wrong... 😕
        <br />
        {error}
      </div>
    );
  }

  return (
    <>
      <Modal
        handleOutsideClick={handleClose}
        renderContent={
          <S.Container>
            {loading ? (
              <S.LoadingContainer>
                <Spinner />
              </S.LoadingContainer>
            ) : (
              <>
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
                    {transactionData?.type === 'receive'
                      ? `You received ${transactionData?.amount} EUR from ${transactionData?.sender}`
                      : `You transferred ${transactionData?.amount} EUR to ${transactionData?.receiver}`}{' '}
                  </S.Subheading>
                </S.HeadingSection>
                <S.Details>
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
              </>
            )}
          </S.Container>
        }
      />
    </>
  );
};

export default TransactionDetails;

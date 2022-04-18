import { useNavigate } from 'react-router-dom';

import * as S from '../Withdraw/Withdraw.styles';

import Input from 'shared/components/Input/Input';
import Modal from 'shared/components/Modal/Modal';
import { RiCloseFill } from 'react-icons/ri';
import React, { useState } from 'react';

import { useAuth } from 'Auth/useAuth';
import { toMoneyString } from 'shared/utils/toMoneyString';
import { toTwoDecimals } from 'shared/utils/toTwoDecimals';

// firebase
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../../firebase';

const Withdraw = () => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState(0);
  const [error, setError] = useState('');
  const { accounts, user } = useAuth();

  const handleModalClose = () => navigate('/savings');

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setAmount(parseInt(value, 10));
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (amount < 1) {
      setError('Amount has to be greater than 0.');
      return;
    }

    if (isNaN(amount)) {
      setError("Amount can't be empty.");
      return;
    }

    if (amount > accounts.saving) {
      setError("Amount can't be geater than the savings account balance.");
      return;
    }

    // update accounts
    const accountRef = doc(db, 'accounts', user.uid);
    await updateDoc(accountRef, {
      main: toTwoDecimals(accounts.main + Number(amount)),
      saving: toTwoDecimals(accounts.saving - Number(amount)),
    });

    // add to history
    const historyRef = doc(db, 'history', user.uid);

    handleModalClose();
  };

  return (
    <>
      <Modal
        handleOutsideClick={handleModalClose}
        renderContent={
          <S.Container>
            <S.TopRow>
              <S.CloseButton onClick={handleModalClose}>
                <RiCloseFill size={18} />
              </S.CloseButton>
            </S.TopRow>
            <h2>
              Withraw money from you savings account and transfer it to your main account.
            </h2>
            <p>Main account balance: {toMoneyString(accounts.main)} EUR</p>
            <form>
              <Input
                placeholder="Amount"
                label="Amount to withdraw"
                type="number"
                value={amount}
                onChange={handleAmountChange}
                invalid={Boolean(error.length)}
              />
              <S.ErrorMessage>{error}</S.ErrorMessage>
              <S.SubmitButton type="submit" onClick={handleSubmit}>
                Transfer
              </S.SubmitButton>
            </form>
          </S.Container>
        }
      />
    </>
  );
};

export default Withdraw;

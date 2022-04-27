import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { doc, updateDoc } from 'firebase/firestore';
import { RiCloseFill } from 'react-icons/ri';

import { db } from '../../../firebase';
import { useAuth } from 'Auth/useAuth';
import { toMoneyString } from 'shared/utils/toMoneyString';
import { toTwoDecimals } from 'shared/utils/toTwoDecimals';

import * as S from './Operation.styles';
import Input from 'shared/components/Input/Input';
import Modal from 'shared/components/Modal/Modal';

interface IProps {
  type: 'transfer' | 'withdraw';
}

const Operation = ({ type }: IProps) => {
  const [amount, setAmount] = useState(0);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { accounts, user } = useAuth();

  const headingText =
    type === 'transfer'
      ? 'Transfer to your savings account from your main account'
      : 'Withdraw from your savings account';

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

    if (amount > accounts.main) {
      setError("Amount can't be geater than the current balance.");
      return;
    }

    // update accounts
    const accountRef = doc(db, 'accounts', user.uid);
    await updateDoc(accountRef, {
      main: toTwoDecimals(accounts.main + (type === 'transfer' ? -amount : +amount)),
      saving: toTwoDecimals(accounts.saving + (type === 'transfer' ? +amount : -amount)),
    });


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

            <h2>{headingText}</h2>

            {type === 'transfer' ? (
              <p>Main account balance: {toMoneyString(accounts.main)} EUR</p>
            ) : (
              <p>Savings account balance: {toMoneyString(accounts.saving)}</p>
            )}

            <form>
              <Input
                placeholder="Amount"
                label={type === 'transfer' ? 'Amount to transfer' : 'Amount to withdraw'}
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

export default Operation;

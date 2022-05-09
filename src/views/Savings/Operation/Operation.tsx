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
import useAccountControlledInput from 'shared/hooks/useAccountControlledInput';

type OperationType = 'transfer' | 'withdraw';

const Operation = ({ type }: { type: OperationType }) => {
  const isTransfer = type === 'transfer';
  const navigate = useNavigate();
  const { accounts, user } = useAuth();

  const { value, handleValueChange, isInputValid, error } = useAccountControlledInput(
    isTransfer ? accounts!.main : accounts!.saving
  );

  const updateAccounts = async () => {
    const accountRef = doc(db, 'accounts', user!.uid);
    await updateDoc(accountRef, {
      main: toTwoDecimals(accounts!.main + (isTransfer ? -value : +value)),
      saving: toTwoDecimals(accounts!.saving + (isTransfer ? +value : -value)),
    });
  };

  const handleModalClose = () => navigate('/savings');

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!isInputValid()) return;
    if (typeof value !== 'number') return;

    await updateAccounts();
    handleModalClose();
  };

  const headingText = isTransfer
    ? 'Transfer to your savings account'
    : 'Withdraw from your savings account';

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

            {isTransfer ? (
              <p>Main account balance: {toMoneyString(accounts!.main)} EUR</p>
            ) : (
              <p>Savings account balance: {toMoneyString(accounts!.saving)} EUR</p>
            )}

            <form>
              <Input
                placeholder="Amount"
                label={isTransfer ? 'Amount to transfer' : 'Amount to withdraw'}
                type="number"
                value={value}
                onChange={handleValueChange}
                invalid={Boolean(error.length)}
              />
              <S.ErrorMessage>{error}</S.ErrorMessage>
              <S.SubmitButton type="submit" onClick={handleSubmit}>
                {isTransfer ? 'Transfer' : 'Withdraw'}
              </S.SubmitButton>
            </form>
          </S.Container>
        }
      />
    </>
  );
};

export default Operation;

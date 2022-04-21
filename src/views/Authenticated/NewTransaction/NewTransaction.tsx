import { useState } from 'react';
import * as S from './NewTransaction.styles';

import Input from 'shared/components/Input/Input';
import { useAuth } from 'Auth/useAuth';
import { toTwoDecimals } from 'shared/utils/toTwoDecimals';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../../firebase';

interface IProps {
  handleModalClose: () => void;
}

const NewTransaction = ({ handleModalClose }: IProps) => {
  const [amount, setAmount] = useState(0);
  const [error, setError] = useState('');
  const { user, accounts } = useAuth();

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
      main: toTwoDecimals(accounts.main + -amount),
    });

    // add to history
    const historyRef = doc(db, 'history', user.uid);

    handleModalClose();
  };

  return (
    <S.Container>
      <h2>Create new transaction</h2>
      <p>
        You probably should have an option to select a person to which the transaction will get
        send.
        <br />
        But our bank is very...<i>✨special✨</i>.
      </p>
      <S.FormContainer onSubmit={handleSubmit}>
        <div>
          <S.LabelMock>First name</S.LabelMock>
          <S.InputMock>Jane</S.InputMock>
        </div>
        <div>
          <S.LabelMock>Last name</S.LabelMock>
          <S.InputMock>Doe</S.InputMock>
        </div>
        <div>
          <S.LabelMock>Account number</S.LabelMock>
          <S.InputMock>2555 240494 1123 0000 2241</S.InputMock>
        </div>
        <div>
          <Input
            invalid={Boolean(error.length)}
            type="number"
            label="Amount"
            value={amount}
            onChange={handleAmountChange}
          />
        </div>
        <span style={{ color: 'red' }}>{error}</span>
        <S.SubmitButton type="submit" onClick={handleSubmit}>
          Send transaction
        </S.SubmitButton>
      </S.FormContainer>
    </S.Container>
  );
};

export default NewTransaction;

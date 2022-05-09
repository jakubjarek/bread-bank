import { useAuth } from 'Auth/useAuth';
import useAccountControlledInput from 'shared/hooks/useAccountControlledInput';
import updateHistory from './utils/updateHistory';
import updateAccounts from './utils/updateAccounts';

import * as S from './NewTransaction.styles';
import Input from 'shared/components/Input/Input';

interface IProps {
  handleModalClose: () => void;
}

const NewTransaction = ({ handleModalClose }: IProps) => {
  const { user, accounts } = useAuth();
  const { value, handleValueChange, isInputValid, error } = useAccountControlledInput(
    accounts!.main
  );

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!isInputValid()) return;
    if (typeof value !== 'number') return;

    updateAccounts(value, user, accounts);
    updateHistory(value, user);

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
            value={value}
            onChange={handleValueChange}
            type="number"
            label="Amount"
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

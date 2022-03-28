import styled, { css } from 'styled-components';

const Savings = () => {
  return (
    <>
      <h3>Savings account balance:</h3>
      <h2>€ 1.213,69</h2>
      <ButtonGroup>
        <Transfer>Transfer</Transfer>
        <Withdraw>Withdraw</Withdraw>
      </ButtonGroup>
    </>
  );
};

export default Savings;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ButtonStyles = css`
  background: white;
  border: 2px solid black;
  border-radius: 5px;
  font-family: 'Inter';
  flex-basis: 50%;
  padding: 0.5rem 0;
  cursor: pointer;
  font-weight: bold;

  &:hover,
  &:focus {
    box-shadow: inset 0 0 0 2px black;
  }
`;

const Transfer = styled.button`
  ${ButtonStyles}
`;

const Withdraw = styled.button`
  ${ButtonStyles}
`;

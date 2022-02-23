import styled from 'styled-components';

const WrapperButton = styled.button`
  cursor: pointer;
  border: none;
  background: none;
  padding: 4px 6px;
  width: 2.25rem;
  height: 2.25rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover,
  &:focus {
    box-shadow: inset 0 0 0 3px black;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Line = styled.span`
  display: block;
  width: 100%;
  height: 3px;
  background: black;
`;

function Hamburger({ onClick }) {
  return (
    <WrapperButton onClick={onClick}>
      <Container>
        <Line />
        <Line />
        <Line />
      </Container>
    </WrapperButton>
  );
}

export default Hamburger;

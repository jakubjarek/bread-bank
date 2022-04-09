import styled from 'styled-components';
import useExchangeRates from 'shared/hooks/useExchangeRates';

const Rates = () => {
  const { rates, error } = useExchangeRates();

  return (
    <>
      {error ? (
        <p>Something went wrong...</p>
      ) : (
        <Container>
          <Column>
            <ColumnContent>
              {Object.keys(rates).map((r) => (
                <p key={r}>1 {r}</p>
              ))}
            </ColumnContent>
          </Column>
          <Column>
            <ColumnContent>
              {Object.values(rates).map((r) => (
                <p key={r}>{r} EUR</p>
              ))}
            </ColumnContent>
          </Column>
        </Container>
      )}
    </>
  );
};

export default Rates;

const ColumnContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
`;

const Column = styled.div`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

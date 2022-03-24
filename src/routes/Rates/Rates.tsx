import styled from 'styled-components';
import RouteHeading from '../../components/atoms/RouteHeading/RouteHeading';
import useExchangeRates from '../../hooks/useExchangeRates';

const Rates = () => {
  const { rates, error } = useExchangeRates();

  return (
    <div>
      <RouteHeading>Our Exchange Rates</RouteHeading>
      <SubheadBar>
        <p>Data source:</p>
        <a href="https://exchangerate.host/#/">exchangerate.host</a>
      </SubheadBar>
      {error ? (
        <p>Something went wrong...</p>
      ) : (
        <Container>
          <Column>
            <h2>Currencies</h2>
            {Object.keys(rates).map((r) => (
              <p key={r}>1 {r}</p>
            ))}
          </Column>
          <Column>
            <h2>Euro</h2>
            {Object.values(rates).map((r) => (
              <p key={r}>{r}</p>
            ))}
          </Column>
        </Container>
      )}
    </div>
  );
};

export default Rates;

const SubheadBar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: white;
  background-color: black;
  padding: 0.5rem 0.75rem;

  & p {
    margin: 0;
  }

  & a {
    text-decoration: underline;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Column = styled.div`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

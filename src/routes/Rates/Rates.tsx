import { useState, useEffect } from 'react';
import styled from 'styled-components';

const SYMBOLS = `EUR,PLN,USD,GBP,CHF,AUD,CAD,CZK,DKK,HUF,JPY,NOK,RUB,SEK`;
const DECIMAL_PLACES = 3;

const Rates = () => {
  const [rates, setRates] = useState<{ [key: string]: string }>({});
  const [date, setDate] = useState('');

  useEffect(() => {
    const getRates = async () => {
      try {
        const fetchedData = await (
          await fetch(
            `https://api.exchangerate.host/latest?symbols=${SYMBOLS}&places=${DECIMAL_PLACES}`
          )
        ).json();
        setRates(fetchedData.rates);
        setDate(fetchedData.date);
      } catch (error) {
        console.log(error);
      }
    };

    getRates();
  }, []);

  return (
    <div>
      <h1 style={{ marginTop: '0' }}>Our Exchange Rates</h1>
      <SubheadBar>
        <p>{date}</p>
        <a href="https://exchangerate.host/#/">exchangerate.host</a>
      </SubheadBar>
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

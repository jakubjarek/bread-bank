import { useState, useEffect } from 'react';
import styled from 'styled-components';

const SYMBOLS = ` PLN,USD,GBP,CHF,AUD,CAD,CZK,DKK,HUF,JPY,NOK,RUB,SEK`;
const DECIMAL_PLACES = 3;

const Rates = () => {
  const [rates, setRates] = useState({});

  useEffect(() => {
    const getRates = async () => {
      const fetchedData = await (
        await fetch(
          `https://api.exchangerate.host/latest?symbols=${SYMBOLS}&places=${DECIMAL_PLACES}`
        )
      ).json();
      setRates(fetchedData.rates);
    };

    getRates();
  }, []);

  const keys = Object.keys(rates);
  const values: string[] = Object.values(rates);

  return (
    <div>
      <h1>Exchange Rates</h1>
      <FlexContainer>
        <FlexChild>
          <h2>Currencies</h2>
          {keys.map((r) => (
            <p key={r}>{r}</p>
          ))}
        </FlexChild>
        <FlexChild>
          <h2>Euro</h2>
          {values.map((r) => (
            <p key={r}>{r}</p>
          ))}
        </FlexChild>
      </FlexContainer>
    </div>
  );
};

export default Rates;

const FlexContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FlexChild = styled.div`
  flex-basis: 50%;
`;

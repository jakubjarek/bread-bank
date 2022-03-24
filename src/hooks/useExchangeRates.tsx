import { useState, useEffect } from 'react';

const SYMBOLS = `EUR,PLN,USD,GBP,CHF,AUD,CAD,CZK,DKK,HUF,JPY,NOK,RUB,SEK`;
const DECIMAL_PLACES = 2;

const useExchangeRates = () => {
  const [rates, setRates] = useState<{ [key: string]: number }>({});
  const [error, setError] = useState(false);

  useEffect(() => {
    const getRates = async () => {
      try {
        const fetchedData = await (
          await fetch(
            `https://api.exchangerate.host/latest?symbols=${SYMBOLS}&places=${DECIMAL_PLACES}`
          )
        ).json();

        const dataRates = fetchedData.rates;
        setRates(dataRates);
      } catch (err) {
        console.log(err);
        setError(true);
      }
    };

    getRates();
  }, []);

  return { rates, error };
};

export default useExchangeRates;

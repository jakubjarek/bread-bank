import { useState, useEffect } from 'react';
import * as S from './Converter.styles';

const SYMBOLS = `EUR,PLN,USD,GBP,CHF,AUD,CAD,CZK,DKK,HUF,JPY,NOK,RUB,SEK`;
const DECIMAL_PLACES = 2;

// not really accurate
const toTwoDecimals = (num: number) => Number(num.toFixed(2));

interface IState {
  // empty string so the input can be - in fact - empty
  'value.first': number | '';
  'value.second': number | '';
  'symbol.first': string;
  'symbol.second': string;
}

const Converter = () => {
  const [rates, setRates] = useState<{ [key: string]: number }>({});
  const [values, setValues] = useState<IState>({
    'value.first': 1,
    'value.second': 1,
    'symbol.first': 'EUR',
    'symbol.second': 'USD',
  });

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
        setValues((p) => ({ ...p, 'value.second': dataRates['USD'] }));
      } catch (error) {
        console.log(error);
      }
    };

    getRates();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { value, name } = e.target;

    // If we set one of the inputs to be empty set them both to be empty.
    if (!value) {
      setValues((p) => ({ ...p, 'value.first': '', 'value.second': '' }));
      return;
    }

    switch (name) {
      case 'value.first':
        setValues((p) => ({
          ...p,
          [name]: +value,
          'value.second': toTwoDecimals(
            (+value * rates[p['symbol.second']]) / rates[p['symbol.first']]
          ),
        }));
        return;

      case 'value.second':
        setValues((prevState) => ({
          ...prevState,
          [name]: +value,
          'value.first': toTwoDecimals(
            (+value * rates[prevState['symbol.first']]) / rates[prevState['symbol.second']]
          ),
        }));
        return;

      case 'symbol.first':
        setValues((prevState) => ({
          ...prevState,
          [name]: value,
          'value.second': toTwoDecimals(
            (+prevState['value.second'] * rates[prevState['symbol.first']]) / rates[value]
          ),
        }));
        return;

      case 'symbol.second':
        setValues((prevState) => ({
          ...prevState,
          [name]: value,
          'value.second': toTwoDecimals(
            (+prevState['value.first'] * rates[value]) / rates[prevState['symbol.first']]
          ),
        }));
        return;
    }
  };

  return (
    <div>
      <h1>Currency Converter</h1>
      <S.Wrapper>
        <S.Column>
          <S.Input
            type="number"
            name="value.first"
            value={values['value.first']}
            onChange={handleInputChange}
          />
          <S.Input
            type="number"
            name="value.second"
            value={values['value.second']}
            onChange={handleInputChange}
          />
        </S.Column>

        <S.Column>
          <S.Select
            name="symbol.first"
            value={values['symbol.first']}
            onChange={handleInputChange}
          >
            {Object.keys(rates).map((r) => (
              <option key={r}>{r}</option>
            ))}
          </S.Select>

          <S.Select
            name="symbol.second"
            value={values['symbol.second']}
            onChange={handleInputChange}
          >
            {Object.keys(rates).map((r) => (
              <option key={r}>{r}</option>
            ))}
          </S.Select>
        </S.Column>
      </S.Wrapper>
    </div>
  );
};

export default Converter;

import { useState } from 'react';
import useExchangeRates from 'shared/hooks/useExchangeRates';
import { toTwoDecimals } from 'shared/utils/toTwoDecimals';
import * as S from './Converter.styles';

interface IState {
  // empty string so the input can be - in fact - empty
  'value.first': number | '';
  'value.second': number | '';
  'symbol.first': string;
  'symbol.second': string;
}

const Converter = () => {
  const { rates, error } = useExchangeRates();
  const [values, setValues] = useState<IState>({
    'value.first': 1,
    'value.second': 1,
    'symbol.first': 'EUR',
    'symbol.second': 'EUR',
  });

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
    <>
      {error ? (
        <p>Something went wrong...</p>
      ) : (
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
      )}
    </>
  );
};

export default Converter;

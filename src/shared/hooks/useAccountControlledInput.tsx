import { useState } from 'react';

const useAccountControlledInput = (account: any) => {
  const [value, setValue] = useState<number | ''>(0);
  const [error, setError] = useState('');

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (!value) {
      setValue('');
      return;
    }

    setValue(+value);
  };

  const isInputValid = () => {
    if (!value) {
      setError('Amount has to be a number.');
      return false;
    }

    if (value < 1) {
      setError('Amount has to be greater than 0.');
      return false;
    }

    if (value > account) {
      setError("Amount can't be geater than the current balance.");
      return false;
    }

    return true;
  };

  return { value, handleValueChange, isInputValid, error };
};

export default useAccountControlledInput;

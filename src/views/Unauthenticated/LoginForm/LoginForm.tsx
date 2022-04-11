import React, { useState } from 'react';

import * as S from './LoginForm.styles';

import Spinner from 'shared/components/Spinner';
import Input from 'shared/components/Input/Input';

// firebase
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase';

const FIREBASE_ERROR_MESSAGES = {
  'auth/invalid-email': 'E-mail is invalid',
  'auth/wrong-password': 'Password is invalid',
  'auth/user-not-found': 'No user with that email found',
};

const ERROR_MESSAGES = {
  'blank-email': "E-mail can't be blank",
  'blank-password': "Password can't be blank",
};

const INPUT_NAME = {
  email: 'login.email',
  password: 'login.password',
};

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [invalid, setInvalid] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    switch (name) {
      case INPUT_NAME.email:
        setEmail(value);
        return;
      case INPUT_NAME.password:
        setPassword(value);
        return;
    }
  };

  const handleLogIn = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    // Clear current errors so we get
    // new error stack on each check
    setErrors([]);

    if (!email || !password) {
      !email && setErrors((p) => [...p, ERROR_MESSAGES['blank-email']]);
      !password && setErrors((p) => [...p, ERROR_MESSAGES['blank-password']]);
      setInvalid(true);
      return;
    }

    setLoading(true);

    try {
      setInvalid(false);
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error: any) {
      console.log(error.code);
      setLoading(false);
      setInvalid(true);
      setEmail('');
      setPassword('');

      //@ts-ignore
      setErrors((p) => [...p, FIREBASE_ERROR_MESSAGES[error.code]]);
    }
  };

  return (
    <S.Wrapper>
      <S.ErrorList>
        {errors?.map((e) => (
          <S.ErrorItem key={e}>{e}</S.ErrorItem>
        ))}
      </S.ErrorList>
      <S.Form>
        <Input
          inputId={INPUT_NAME.email}
          name={INPUT_NAME.email}
          label={'E-mail address'}
          placeholder={'E-mail address'}
          type={'email'}
          invalid={invalid}
          value={email}
          handleChange={handleInputChange}
        />

        <Input
          inputId={INPUT_NAME.password}
          name={INPUT_NAME.password}
          label={'Password'}
          placeholder={'Password'}
          type={'password'}
          invalid={invalid}
          value={password}
          handleChange={handleInputChange}
        />
        <S.Submit disabled={loading} onClick={handleLogIn}>
          Log In
        </S.Submit>
      </S.Form>
      {loading ? (
        <S.LoadingBackdrop>
          <Spinner />
        </S.LoadingBackdrop>
      ) : null}
    </S.Wrapper>
  );
}

export default LoginForm;

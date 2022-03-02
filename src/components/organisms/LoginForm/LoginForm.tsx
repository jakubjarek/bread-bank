import { useState } from 'react';
import { useAuth } from '../../../hooks/useAuth';
import Input from '../../molecules/Input/Input';
import * as S from './LoginForm.styles';

function LoginForm() {
  const [usernameValidity, setUsernameValidity] = useState({ invalid: false, message: '' });
  const [passwordValidity, setPasswordValidity] = useState({ invalid: false, message: '' });
  const [usernameValue, setUsernameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const { logIn } = useAuth();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUsernameValue(e.target.value);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPasswordValue(e.target.value);

  const handleLogIn = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (usernameValue === 'user' && passwordValue === 'pass') {
      logIn({ login: 'user', password: 'pass' });
      return;
    }

    if (usernameValue === 'user' && passwordValue !== 'pass') {
      setUsernameValidity({ invalid: false, message: '' });
    }

    if (passwordValue === 'pass' && usernameValue !== 'user') {
      setPasswordValidity({ invalid: false, message: '' });
    }

    if (usernameValue !== 'user') {
      setUsernameValidity({ invalid: true, message: 'No user with that e-mail.' });
    }

    if (passwordValue !== 'pass') {
      setPasswordValidity({ invalid: true, message: 'Password is invalid. Try again.' });
    }
  };

  return (
    <S.Wrapper>
      <S.Form>
        <Input
          inputId={'login.username'}
          label={'Username'}
          placeholder={'Username'}
          type={'email'}
          invalid={usernameValidity.invalid}
          invalidMessage={usernameValidity.message}
          value={usernameValue}
          handleChange={handleEmailChange}
        />

        <Input
          inputId={'login.password'}
          label={'Password'}
          placeholder={'Password'}
          type={'password'}
          invalid={passwordValidity.invalid}
          invalidMessage={passwordValidity.message}
          value={passwordValue}
          handleChange={handlePasswordChange}
        />
        <S.Submit onClick={handleLogIn}>Log In</S.Submit>
        <div style={{ paddingTop: '0.25rem', fontSize: '12px' }}>
          Psst! It's username: <b>user</b> password: <b>pass</b>
        </div>
      </S.Form>
    </S.Wrapper>
  );
}

export default LoginForm;

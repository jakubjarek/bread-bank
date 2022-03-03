import { useState } from 'react';
import { useAuth } from '../../../hooks/useAuth';
import LoadingSpinner from '../../atoms/LoadingSpinner/LoadingSpinner';
import Input from '../../molecules/Input/Input';
import * as S from './LoginForm.styles';

function LoginForm() {
  const [usernameValidity, setUsernameValidity] = useState({ invalid: false, message: '' });
  const [passwordValidity, setPasswordValidity] = useState({ invalid: false, message: '' });
  const [usernameValue, setUsernameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [loading, setLoading] = useState(false);

  const { logIn } = useAuth();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUsernameValue(e.target.value);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPasswordValue(e.target.value);

  const handleLogIn = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (!usernameValue || !passwordValue) {
      return;
    }

    setLoading(true);

    try {
      await logIn({ login: usernameValue, password: passwordValue });
    } catch (error) {
      setUsernameValidity({ invalid: true, message: String(error) });
      setPasswordValidity({ invalid: true, message: String(error) });
      setUsernameValue('');
      setPasswordValue('');
      setLoading(false);
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
        <S.Submit disabled={loading} onClick={handleLogIn}>
          Log In
        </S.Submit>
        <div style={{ paddingTop: '0.25rem', fontSize: '12px' }}>
          Psst! It's username: <b>user</b> password: <b>pass</b>
        </div>
      </S.Form>
      {loading ? (
        <S.LoadingBackdrop>
          <LoadingSpinner />
        </S.LoadingBackdrop>
      ) : null}
    </S.Wrapper>
  );
}

export default LoginForm;

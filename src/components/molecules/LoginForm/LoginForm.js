import { useState } from 'react';
import { useAuth } from '../../../hooks/useAuth';
import Input from '../../atoms/Input/Input';

import { FormWrapper, StyledForm, LoginButton } from './LoginForm.styles';

function LoginForm() {
  const [emailValidity, setEmailValidity] = useState({ invalid: false, message: '' });
  const [passwordValidity, setPasswordValidity] = useState({ invalid: false, message: '' });
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const { logIn } = useAuth();

  const handleEmailChange = (e) => setEmailValue(e.target.value);

  const handlePasswordChange = (e) => setPasswordValue(e.target.value);

  const handleLogIn = (e) => {
    e.preventDefault();

    if (emailValue === 'user' && passwordValue === 'pass') {
      logIn('user', 'pass');
      return;
    }

    if (emailValue === 'user' && passwordValue !== 'pass') {
      setEmailValidity({ invalid: false, message: '' });
    }

    if (passwordValue === 'pass' && emailValue !== 'user') {
      setPasswordValidity({ invalid: false, message: '' });
    }

    if (emailValue !== 'user') {
      setEmailValidity({ invalid: true, message: 'No user with that e-mail.' });
    }

    if (passwordValue !== 'pass') {
      setPasswordValidity({ invalid: true, message: 'Password is invalid. Try again.' });
    }
  };

  return (
    <FormWrapper>
      <StyledForm>
        <Input
          inputId={'login.email'}
          label={'E-mail address'}
          placeholder={'E-mail address'}
          type={'email'}
          invalid={emailValidity.invalid}
          invalidMessage={emailValidity.message}
          value={emailValue}
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

        <div>
          <LoginButton onClick={handleLogIn}>Log In</LoginButton>
          <span>Just press the button, logic not implemented :^)</span>
        </div>
      </StyledForm>
    </FormWrapper>
  );
}

export default LoginForm;

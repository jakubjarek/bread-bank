import { useAuth } from '../../../hooks/useAuth';
import Input from '../../atoms/Input/Input';

import { FormWrapper, StyledForm, InputWrapper, LoginButton } from './LoginForm.styles';

function LoginForm() {
  const { logIn } = useAuth();

  const handleLogIn = (e) => {
    e.preventDefault();
    logIn('user', 'pass');
  };

  return (
    <FormWrapper>
      <StyledForm>
        <InputWrapper>
          <Input
            inputId={'login.email'}
            label={'E-mail address'}
            placeholder={'E-mail address'}
            type={'email'}
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            inputId={'login.password'}
            label={'Password'}
            placeholder={'Password'}
            type={'password'}
          />
        </InputWrapper>
        <div>
          <LoginButton onClick={handleLogIn}>Log In</LoginButton>
          <span>Just press the button, logic not implemented :^)</span>
        </div>
      </StyledForm>
    </FormWrapper>
  );
}

export default LoginForm;

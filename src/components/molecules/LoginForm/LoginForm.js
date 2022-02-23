import Input from '../../atoms/Input/Input';

import { FormWrapper, StyledForm, InputWrapper, LoginButton } from './LoginForm.styles';

function LoginForm() {
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
          <LoginButton>Log In</LoginButton>
        </div>
      </StyledForm>
    </FormWrapper>
  );
}

export default LoginForm;

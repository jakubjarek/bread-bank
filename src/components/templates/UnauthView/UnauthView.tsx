import Logo from '../../atoms/Logo';
import LoginForm from '../../organisms/LoginForm/LoginForm';
import * as S from './UnauthView.styles';

const Unauthenticated = () => {
  return (
    <>
      <S.Logo>
        <Logo />
      </S.Logo>
      <S.Welcome>
        <S.Message>Welcome back</S.Message>
      </S.Welcome>
      <LoginForm />
    </>
  );
};

export default Unauthenticated;

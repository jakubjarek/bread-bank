import Logo from '../../atoms/Logo';
import LoginForm from '../../organisms/LoginForm/LoginForm';
import * as S from './Unauthenticated.styles';

const Unauthenticated = () => {
  return (
    <S.Container>
      <S.Logo>
        <Logo />
      </S.Logo>
      <S.Welcome>
        <S.Message>Welcome back</S.Message>
      </S.Welcome>
      <LoginForm />
    </S.Container>
  );
};

export default Unauthenticated;

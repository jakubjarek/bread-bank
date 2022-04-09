import Logo from '../../shared/components/Logo';
import LoginForm from '../../Template/LoginForm/LoginForm';
import * as S from './Unauthenticated.styles';

const Unauthenticated = () => {
  return (
    <>
      <S.Logo>
        <Logo />
      </S.Logo>
      <S.Welcome>
        <S.Message>Log in to access more features</S.Message>
      </S.Welcome>

      <LoginForm />
      <div style={{ margin: '0.5rem 0 0', fontSize: '14px' }}>
        Hey! It's username: <b>user</b> password: <b>pass</b>
      </div>
    </>
  );
};

export default Unauthenticated;

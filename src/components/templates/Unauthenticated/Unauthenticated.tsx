import Logo from '../../atoms/Logo';
import LoginForm from '../../organisms/LoginForm/LoginForm';

import {
  Container,
  LogoWrapper,
  WelcomeContainer,
  WelcomeMessage,
} from './Unauthenticated.styles';

const Unauthenticated = () => {
  return (
    <Container>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>

      <WelcomeContainer>
        <WelcomeMessage>Welcome back</WelcomeMessage>
      </WelcomeContainer>

      <LoginForm />
    </Container>
  );
};

export default Unauthenticated;

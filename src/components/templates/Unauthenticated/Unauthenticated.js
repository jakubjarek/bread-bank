import { ReactComponent as Logo } from '../../../assets/images/bread-bank-logo.svg';
import LoginForm from '../../molecules/LoginForm/LoginForm';

import {
  Container,
  LogoWrapper,
  WelcomeContainer,
  WelcomeMessage,
} from './Unauthenticated.styles';

function Unauthenticated() {
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
}

export default Unauthenticated;

import { ReactComponent as Logo } from '../../../assets/images/bread-bank-logo.svg';
import LoginForm from '../../molecules/LoginForm/LoginForm';
import Navigation from '../../molecules/Navigation/Navigation';

import {
  Container,
  LogoWrapper,
  WelcomeContainer,
  WelcomeMessage,
  ContentContainer,
} from './Unauthenticated.styles';

function Unauthenticated() {
  return (
    <Container>
      <Navigation />
      <ContentContainer>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>

        <WelcomeContainer>
          <WelcomeMessage>Welcome back</WelcomeMessage>
        </WelcomeContainer>

        <LoginForm />
      </ContentContainer>
    </Container>
  );
}

export default Unauthenticated;

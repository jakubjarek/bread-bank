import styled from 'styled-components';
import { useAuth } from '../../../hooks/useAuth';
import Navigation from '../../molecules/Navigation/Navigation';
import Unauthenticated from '../Unauthenticated/Unauthenticated';

const AppWrapper = styled.div`
  max-width: 35rem;
  margin: 0 auto;
  margin-top: 2rem;
`;

function Root() {
  const auth = useAuth();

  return (
    <AppWrapper>
      <Navigation />
      {auth.user ? <h1>AMOOGUS??</h1> : <Unauthenticated />}
    </AppWrapper>
  );
}

export default Root;

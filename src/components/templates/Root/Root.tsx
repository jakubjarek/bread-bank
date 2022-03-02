import styled from 'styled-components';
import { useAuth } from '../../../hooks/useAuth';
import Navigation from '../../molecules/Navigation/Navigation';
import Authenticated from '../Authenticated/Authenticated';
import Unauthenticated from '../Unauthenticated/Unauthenticated';

const Container = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (min-width: 910px) {
    margin-left: 350px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 35rem;
  margin-top: 2rem;
`;

const Root = () => {
  const auth = useAuth();

  return (
    <>
      <Navigation />
      <Container>
        <Wrapper>{auth.user ? <Authenticated /> : <Unauthenticated />}</Wrapper>
      </Container>
    </>
  );
};

export default Root;

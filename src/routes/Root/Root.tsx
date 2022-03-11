import styled from 'styled-components';
import Navigation from '../../components/molecules/Navigation/Navigation';

import Routes from '../Routes';

const Root = () => {
  return (
    <AppWrapper>
      <Navigation />
      <Wrapper>
        <Routes />
      </Wrapper>
    </AppWrapper>
  );
};

export default Root;

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 910px) {
    margin-left: 350px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 35rem;
`;

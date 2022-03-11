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
  margin-left: 350px; // sidebar width
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 35rem;
`;

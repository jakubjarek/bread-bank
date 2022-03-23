import styled from 'styled-components';
import Navigation from '../../components/molecules/Navigation/Navigation';
import { SidebarProvider } from '../../components/organisms/Sidebar/useSidebar';

import Routes from '../Routes';

const Root = () => {
  return (
    <AppWrapper>
      <SidebarProvider>
        <Navigation />
      </SidebarProvider>
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
  margin-top: 2rem;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

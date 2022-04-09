import styled from 'styled-components';

import { SidebarProvider } from './Sidebar/useSidebar';
import Navigation from './Navigation/Navigation';
import RouteTemplate from './RouteTemplate/RouteTemplate';

interface IProps {
  children: React.ReactNode;
}

const Template = ({ children }: IProps) => {
  return (
    <AppWrapper>
      <SidebarProvider>
        <Navigation />
      </SidebarProvider>
      <RouteTemplate>{children}</RouteTemplate>
    </AppWrapper>
  );
};

export default Template;

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 910px) {
    margin-left: ${({ theme }) => theme.size.sidebar};
  }
`;

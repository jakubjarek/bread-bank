import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { AuthProvider } from 'Auth/useAuth';
import GlobalStyle from '../theme/GlobalStyle';
import NormalizeStyle from '../theme/NormalizeStyle';
import theme from '../theme/theme';

const AppProviders = ({ children }: { children: JSX.Element }) => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <NormalizeStyle />
        <AuthProvider>{children}</AuthProvider>
      </ThemeProvider>
    </Router>
  );
};

export default AppProviders;

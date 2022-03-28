import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { AuthProvider } from '../../Auth/useAuth';
import GlobalStyle from '../GlobalStyle';
import NormalizeStyle from '../NormalizeStyle';
import theme from '../../shared/utils/theme';



const AppProviders = ({ children }: { children: JSX.Element }) => {
  return (
    <Router>
      <AuthProvider>
        <GlobalStyle />
        <NormalizeStyle />
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </AuthProvider>
    </Router>
  );
};

export default AppProviders;

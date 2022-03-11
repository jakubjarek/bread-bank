import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from '../hooks/useAuth';
import GlobalStyle from '../assets/styles/GlobalStyle';
import NormalizeStyle from '../assets/styles/NormalizeStyle';
import { ThemeProvider } from 'styled-components';
import theme from '../assets/styles/theme';

const AppProviders: React.FC = ({ children }) => {
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

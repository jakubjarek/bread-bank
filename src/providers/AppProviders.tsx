import { ThemeProvider } from 'styled-components';
import { AuthProvider } from '../hooks/useAuth';
import theme from '../assets/styles/theme';
import { BrowserRouter as Router } from 'react-router-dom';

const AppProviders: React.FC = ({ children }) => {
  return (
    <Router>
      <AuthProvider>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </AuthProvider>
    </Router>
  );
};

export default AppProviders;

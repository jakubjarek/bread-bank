import { ThemeProvider } from 'styled-components';
import { AuthProvider } from '../hooks/useAuth';
import theme from '../assets/styles/theme';

const AppProviders: React.FC = ({ children }) => {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </AuthProvider>
  );
};

export default AppProviders;

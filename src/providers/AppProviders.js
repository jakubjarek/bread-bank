import { ThemeProvider } from 'styled-components';
import { AuthProvider } from '../hooks/useAuth';
import theme from '../assets/styles/theme';

function AppProviders({ children }) {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </AuthProvider>
  );
}

export default AppProviders;

import { useAuth } from 'Auth/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

// Taken from react-router docs example.
// https://stackblitz.com/github/remix-run/react-router/tree/main/examples/auth?file=src/App.tsx

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  let auth = useAuth();
  let location = useLocation();

  if (!auth.user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;

import { Routes as RouterRoutes, Route } from 'react-router-dom';
import { useAuth } from 'Auth/useAuth';
import RequireAuth from './RequireAuth';

import AuthView from './views/AuthView';
import UnauthView from './views/UnauthView';

import Rates from 'routes/Rates';
import Converter from 'routes/Converter';
import Contact from 'routes/Contact';
import Savings from 'routes/Savings';
import Accounts from 'routes/Accounts';
import History from 'routes/History/History';

const Routes = () => {
  const auth = useAuth();

  return (
    <RouterRoutes>
      <Route path="/" element={auth.user ? <AuthView /> : <UnauthView />} />

      <Route path="rates" element={<Rates />} />
      <Route path="converter" element={<Converter />} />
      <Route path="contact" element={<Contact />} />
      <Route
        path="accounts"
        element={
          <RequireAuth>
            <Accounts />
          </RequireAuth>
        }
      />
      <Route
        path="savings"
        element={
          <RequireAuth>
            <Savings />
          </RequireAuth>
        }
      />
      <Route
        path="history"
        element={
          <RequireAuth>
            <History />
          </RequireAuth>
        }
      />

      <Route
        path="*"
        element={
          <main style={{ padding: '1rem' }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </RouterRoutes>
  );
};

export default Routes;

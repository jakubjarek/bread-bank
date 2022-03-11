import { Routes as RouterRoutes, Route } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import RequireAuth from './RequireAuth';

import AuthView from '../components/templates/AuthView/AuthView';
import UnauthView from '../components/templates/UnauthView/UnauthView';

import Locations from './Locations/Locations';
import Loans from './Loans/Loans';
import Rates from './Rates/Rates';
import Converter from './Converter/Converter';
import Contact from './Contact/Contact';
import Appointments from './Appointments/Appointments';
import Savings from './Savings/Savings';
import Accounts from './Accounts/Accounts';
import History from './History/History';
import Notifications from './Notifications/Notifications';

const Routes = () => {
  const auth = useAuth();

  return (
    <RouterRoutes>
      <Route path="/" element={auth.user ? <AuthView /> : <UnauthView />} />
      <Route path="locations" element={<Locations />} />
      <Route path="loans" element={<Loans />} />
      <Route path="rates" element={<Rates />} />
      <Route path="converter" element={<Converter />} />
      <Route path="contact" element={<Contact />} />
      <Route path="appointments" element={<Appointments />} />
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
        path="notifications"
        element={
          <RequireAuth>
            <Notifications />
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

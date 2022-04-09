import { Routes as RouterRoutes, Route } from 'react-router-dom';
import { useAuth } from 'Auth/useAuth';
import { Navigate, useLocation, Outlet } from 'react-router-dom';

import AuthView from './views/AuthView';
import UnauthView from './views/UnauthView';

import Rates from 'routes/Rates';
import Converter from 'routes/Converter';
import Contact from 'routes/Contact';
import Savings from 'routes/Savings';

import History from 'routes/History/History';

const Routes = () => {
  const auth = useAuth();

  return (
    <RouterRoutes>
      <Route path="/" element={auth.user ? <AuthView /> : <UnauthView />} />
      <Route path="rates" element={<Rates />} />
      <Route path="converter" element={<Converter />} />
      <Route path="contact" element={<Contact />} />

      {/* protected routes */}
      <Route element={<RequireAuth />}>
        <Route path="savings" element={<Savings />} />
        <Route path="history" element={<History />} />
      </Route>

      {/* no match route */}
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

function RequireAuth() {
  let location = useLocation();
  const token = localStorage.getItem('token');

  return token ? <Outlet /> : <Navigate to="/" state={{ from: location }} replace />;
}

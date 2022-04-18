import { Routes as RouterRoutes, Route } from 'react-router-dom';
import { useAuth } from 'Auth/useAuth';
import { Navigate, useLocation, Outlet } from 'react-router-dom';

import Authenticated from 'views/Authenticated/Authenticated';
import Unauthenticated from 'views/Unauthenticated/Unauthenticated';
import Rates from 'views/Rates';
import Converter from 'views/Converter';
import Contact from 'views/Contact';
import Savings from 'views/Savings/Savings';
import Transfer from 'views/Savings/Transfer/Transfer';
import Withdraw from 'views/Savings/Withdraw/Withdraw';
import History from 'views/History/History';
import TransactionDetails from 'views/History/TransactionDetails/TransactionDetails';

const Routes = () => {
  const auth = useAuth();

  return (
    <RouterRoutes>
      <Route path="/" element={auth.user ? <Authenticated /> : <Unauthenticated />} />
      <Route path="rates" element={<Rates />} />
      <Route path="converter" element={<Converter />} />
      <Route path="contact" element={<Contact />} />

      {/* protected routes */}
      <Route element={<RequireAuth />}>
        <Route path="savings" element={<Savings />}>
          <Route path="transfer" element={<Transfer />} />
          <Route path="withdraw" element={<Withdraw />} />
        </Route>
        <Route path="history" element={<History />}>
          <Route path="transactions/:transactionId" element={<TransactionDetails />} />
        </Route>
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
  const { user } = useAuth();

  return user ? <Outlet /> : <Navigate to="/" state={{ from: location }} replace />;
}

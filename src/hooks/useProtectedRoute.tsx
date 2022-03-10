import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './useAuth';

const useProtectedRoute = () => {
  const location = useLocation();
  const auth = useAuth();

  if (!auth.user) {
    return { protect: true, redirect: <Navigate to="/" state={{ from: location }} replace /> };
  }

  return { protect: false, redirect: null };
};

export default useProtectedRoute;

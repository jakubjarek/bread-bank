import useProtectedRoute from '../../hooks/useProtectedRoute';

const Savings = () => {
  const { protect, redirect } = useProtectedRoute();

  return <>{protect ? redirect : <div>Savings</div>}</>;
};

export default Savings;

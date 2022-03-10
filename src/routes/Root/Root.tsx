import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../../hooks/useAuth';
import Navigation from '../../components/molecules/Navigation/Navigation';

// Routes
import AuthView from '../../components/templates/AuthView/AuthView';
import UnauthView from '../../components/templates/UnauthView/UnauthView';
import Locations from '../Locations/Locations';
import Loans from '../Loans/Loans';
import Rates from '../Rates/Rates';
import Converter from '../Converter/Converter';
import Contact from '../Contact/Contact';
import Appointments from '../Appointments/Appointments';

const Root = () => {
  const auth = useAuth();

  return (
    <AppWrapper>
      <Navigation />
      <Wrapper>
        <Routes>
          <Route path="/" element={auth.user ? <AuthView /> : <UnauthView />} />
          <Route path="locations" element={<Locations />} />
          <Route path="loans" element={<Loans />} />
          <Route path="rates" element={<Rates />} />
          <Route path="converter" element={<Converter />} />
          <Route path="contact" element={<Contact />} />
          <Route path="appointments" element={<Appointments />} />
          <Route
            path="*"
            element={
              <main style={{ padding: '1rem' }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </Wrapper>
    </AppWrapper>
  );
};

export default Root;

const AppWrapper = styled.div`
  margin-left: 350px; // sidebar width
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 35rem;
  margin-left: 350px;
`;

import AppProviders from './providers/AppProviders';
import Template from 'Template/Template';
import Routes from './Routes';

const App = () => {
  return (
    <AppProviders>
      <Template>
        <Routes />
      </Template>
    </AppProviders>
  );
};

export default App;

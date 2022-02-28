import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/templates/Root/Root';
import { GlobalStyle } from './assets/styles/GlobalStyle';
import AppProviders from './providers/AppProviders';

ReactDOM.render(
  <React.StrictMode>
    <AppProviders>
      <GlobalStyle />
      <Root />
    </AppProviders>
  </React.StrictMode>,
  document.getElementById('root')
);

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  
  *, *::after, *::before {
    box-sizing: inherit;
  }
  
  body {
    margin: 0;
    padding: 0;
    overflow-y: hidden;
    font-family: 'Inter', sans-serif;
  }
  
  a, button, input {
    font-family: 'Inter', sans-serif;
  }
`;

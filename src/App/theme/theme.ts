import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  color: {
    white: '#ffffff',
    lightGray: '#f5f5f5',
    lighterGray: '#e7e7e7',
    gray: '#858585',
    darkGray: '#404040',
    black: '#000d26',
    red: '#e30000',
    green: '#199c3c',
    backdropLight: '#00000022',
    backdropDark: '#00000077',
    buttonDisabled: '#adadad',
  },
  fontSize: {
    xxl: '34px',
    xl: '24px',
    l: '18px',
    m: '14px',
    s: '12px',
  },
  size: {
    sidebar: '300px',
  },
  shadow: {
    border: `inset 0 0 0 2px #111111`,
    borderInvalid: `inset 0 0 0 2px #e30000`,
  },
};

export default theme;

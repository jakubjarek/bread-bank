import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      white: string;
      lightGray: string;
      gray: string;
      black: string;
      red: string;
      green: string;
      backdropLight: string;
      backdropDark: string;
      buttonDisabled: string;
    };
    fontSize: {
      xxl: string;
      xl: string;
      l: string;
      m: string;
      s: string;
    };
    size: {
      sidebar: string;
    };
    shadow: {
      border: string;
      borderInvalid: string;
    };
  }
}

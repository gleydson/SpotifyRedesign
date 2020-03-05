import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      backgroundPrimary: string;
      backgroundSecondary: string;
      text: string;
      disable: string;
    };

    fonts: {
      fontFamily: string;
      big: string;
      medium: string;
      small: string;
      letterSpacing: string;
    };
  }
}

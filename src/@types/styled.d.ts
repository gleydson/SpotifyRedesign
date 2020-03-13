import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      backgroundPrimary: string;
      backgroundSecondary: string;
      text: string;
      regular: string;
      dark: string;
      darker: string;
    };

    fonts: {
      fontFamilyBold: string | undefined;
      fontFamilyItalic: string;
      fontFamilyLight: string;
      fontFamilyMedium: string;
      big: string;
      medium: string;
      small: string;
      smaller: string;
      letterSpacing: string;
    };

    metrics: {
      widthScreen: number;
      heightScreen: number;
    };
  }
}

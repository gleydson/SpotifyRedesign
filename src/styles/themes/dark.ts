import { Platform, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

export default {
  colors: {
    primary: '#25A84E',
    backgroundPrimary: '#101010',
    backgroundSecondary: '#191918',
    text: '#EEE',
    regular: '#999',
    dark: '#555',
    darker: '#222',
  },
  fonts: {
    fontFamilyBold: Platform.select({
      ios: 'IBM Plex Mono',
      android: 'IBM Plex Mono Bold',
    }),
    fontFamilyItalic: 'IBM Plex Mono Italic',
    fontFamilyLight: 'IBM Plex Mono Light',
    fontFamilyMedium: 'IBM Plex Mono Medium',
    big: '20px',
    medium: '16px',
    small: '12px',
    smaller: '8px',
    letterSpacing: '2px',
  },
  metrics: {
    widthScreen: width,
    heightScreen: height,
  },
};

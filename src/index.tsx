import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';

import { ThemeProvider } from 'styled-components';

import dark from '@styles/themes/dark';

import Routes from './routes';

export default function App() {
  return (
    <ThemeProvider theme={dark}>
      <NavigationContainer>
        <StatusBar
          backgroundColor={dark.colors.backgroundPrimary}
          barStyle="light-content"
        />
        <Routes />
      </NavigationContainer>
    </ThemeProvider>
  );
}

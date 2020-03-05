import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import HomeScreen from '@screens/home';
import PlayerScreen from '@screens/player';
import PaylistScreen from '@screens/playlist';

const MainStack = createStackNavigator();

export default function Routes() {
  return (
    <MainStack.Navigator initialRouteName="Home" headerMode="none">
      <MainStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Library' }}
      />
      <MainStack.Screen name="Playlist" component={PaylistScreen} />
      <MainStack.Screen name="Player" component={PlayerScreen} />
    </MainStack.Navigator>
  );
}

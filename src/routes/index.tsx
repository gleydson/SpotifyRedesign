import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import PlayerScreen from '@screens/player';
import PaylistScreen from '@screens/playlist';

import HomeScreen from './tabs';

const MainStack = createStackNavigator();

export default function Routes() {
  return (
    <MainStack.Navigator
      screenOptions={{ gestureEnabled: true, cardOverlayEnabled: true }}
      headerMode='none'
      mode='modal'
    >
      <MainStack.Screen
        name='Home'
        component={HomeScreen}
        options={{ title: 'Podcast' }}
      />
      <MainStack.Screen name='Playlist' component={PaylistScreen} />
      <MainStack.Screen name='Player' component={PlayerScreen} />
    </MainStack.Navigator>
  );
}

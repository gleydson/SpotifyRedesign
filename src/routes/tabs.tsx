import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { ThemeContext } from 'styled-components';

import TabBar from '@components/tabBar';
import Home from '@screens/home';

const Tab = createBottomTabNavigator();
const styles = StyleSheet.create({
  container: { alignItems: 'center', flex: 1, justifyContent: 'center' },
});

function Podcast() {
  return (
    <View style={styles.container}>
      <Text>Podcast</Text>
    </View>
  );
}

function Profile() {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
    </View>
  );
}

export default function Tabs() {
  const theme = useContext(ThemeContext);
  return (
    <Tab.Navigator
      initialRouteName='Library'
      tabBar={props => <TabBar {...props} />}
      tabBarOptions={{
        allowFontScaling: true,
        showIcon: true,
        showLabel: true,
        keyboardHidesTabBar: false,
      }}
    >
      <Tab.Screen
        name='Podcast'
        options={{
          tabBarLabel: 'Podcast',
          tabBarIcon: ({ focused, size }) => (
            <Icon
              name='radio'
              color={focused ? theme.colors.primary : theme.colors.dark}
              size={size}
            />
          ),
        }}
        component={Podcast}
      />
      <Tab.Screen
        name='Library'
        options={{
          tabBarLabel: 'Library',
          tabBarIcon: ({ focused, size }) => (
            <Icon
              name='speaker'
              color={focused ? theme.colors.primary : theme.colors.dark}
              size={size}
            />
          ),
        }}
        component={Home}
      />
      <Tab.Screen
        name='Profile'
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ focused, size }) => (
            <Icon
              name='user'
              color={focused ? theme.colors.primary : theme.colors.dark}
              size={size}
            />
          ),
        }}
        component={Profile}
      />
    </Tab.Navigator>
  );
}

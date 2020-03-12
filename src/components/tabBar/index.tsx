import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import { useSafeArea } from 'react-native-safe-area-context';

import { Container, TabItem, Label } from './styled';

const tabBar: React.SFC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
  showLabel,
  labelStyle,
  showIcon,
}) => {
  const insets = useSafeArea();
  return (
    <Container bottomSafe={insets.bottom}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        let label = '';

        const Icon = options.tabBarIcon;
        if (
          typeof options.tabBarLabel === 'string' &&
          options.tabBarLabel !== undefined
        ) {
          label = options.tabBarLabel;
        } else if (options.title !== undefined) {
          label = options.title;
        } else {
          label = route.name;
        }

        const isFocused = state.index === index;

        function onPress() {
          if (!isFocused) {
            navigation.navigate(route.name);
          }
        }

        return (
          <TabItem
            key={label}
            accessibilityRole='button'
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
          >
            {showIcon && <Icon focused={isFocused} size={30} color='' />}
            {showLabel && (
              <Label style={labelStyle} isFocused={isFocused}>
                {label}
              </Label>
            )}
          </TabItem>
        );
      })}
    </Container>
  );
};

export default tabBar;

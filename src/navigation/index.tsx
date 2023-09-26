import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import tabs, { ITabApp } from './tabs';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        {tabs.map(({ name_icon, name_tab, component }: ITabApp) => {
          return (
            <Tab.Screen
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Icon name={name_icon} size={size} color={color} />
                ),
              }}
              name={name_tab} component={component} />
          )
        })}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

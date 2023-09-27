import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import tabs, { ITabApp } from './tabs';
import PokemonDetail from '../screens/Catalag/PokemonDetail';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      {tabs.map(({ name_icon, name_tab, component }: ITabApp) => (
        <Tab.Screen
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name={name_icon} size={size} color={color} />
            ),
          }}
          name={name_tab} component={component} />
      ))}
    </Tab.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tabs">
        <Stack.Screen name="Tabs" component={TabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="PokemonDetail" component={PokemonDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HubMainScreen from './HubMainScreen';
import HubDetailsScreen from './HubDetailsScreen';

const HubStack = createStackNavigator();

export default function HubScreen() {
  return (
    <HubStack.Navigator
      screenOptions={({ route }) => ({
        headerShown: route.name !== 'HubMain', // Hide header for PlatformMain screen
      })}
    >
      <HubStack.Screen
        name="HubMain"
        component={HubMainScreen}
        options={{ title: 'Hub' }}
      />
      <HubStack.Screen
        name="HubDetails"
        component={HubDetailsScreen}
        options={{ title: 'Hub Details' }}
      />
    </HubStack.Navigator>
  );
}
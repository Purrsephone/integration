import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PlatformsMainScreen from './src/screens/PlatformsMainScreen';
import PlatformDetailsScreen from './src/screens/PlatformDetailsScreen';

const PlatformsStack = createStackNavigator();

export default function PlatformsScreen() {
  return (
    <PlatformsStack.Navigator
      screenOptions={({ route }) => ({
        headerShown: route.name !== 'PlatformMain', // Hide header for PlatformMain screen
      })}
    >
      <PlatformsStack.Screen
        name="PlatformMain"
        component={PlatformsMainScreen}
        options={{ title: 'Platforms' }}
      />
      <PlatformsStack.Screen
        name="PlatformDetails"
        component={PlatformDetailsScreen}
        options={{ title: 'Platform Details' }}
      />
    </PlatformsStack.Navigator>
  );
}
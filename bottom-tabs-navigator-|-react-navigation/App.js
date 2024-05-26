import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import PlatformsScreen from './PlatformsStack'; 


// Create stack navigator for Events component
const PlatformsStack = createStackNavigator();



// Main Events screen with list of events
function PlatformsMainScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Main Platforms Screen</Text>
      <Button
        title="Go to Specific Platform"
        onPress={() => navigation.navigate('PlatformDetails')}
      />
    </View>
  );
}

// Event details screen
function PlatformDetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Platform Details Screen</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

/*
// Events screen navigator
function PlatformsScreen() {
  return (
    <PlatformsStack.Navigator>
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
*/

function InboxScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Inbox!</Text>
    </View>
  );
}


function FeedScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed!</Text>
    </View>
  );
}

function HubScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Hub!</Text>
    </View>
  );
}
function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Inbox" component={InboxScreen} />
      <Tab.Screen name="Platforms" component={PlatformsScreen} />
      <Tab.Screen name="Hub" component={HubScreen} />
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

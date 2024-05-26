import React from 'react';
import { Button, Text, View } from 'react-native';

export default function HubDetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Hub Details Screen</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

import React from 'react';
import { Button, Text, View } from 'react-native';

export default function HubMainScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Main Hub Screen</Text>
      <Button
        title="Go to Specific Hub"
        onPress={() => navigation.navigate('HubDetails')}
      />
    </View>
  );
}

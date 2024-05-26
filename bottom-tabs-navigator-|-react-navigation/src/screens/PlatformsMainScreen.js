import React from 'react';
import { Button, Text, View } from 'react-native';

export default function PlatformsMainScreen({ navigation }) {
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

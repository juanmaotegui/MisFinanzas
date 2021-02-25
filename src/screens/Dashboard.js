import React from 'react';
import { View } from 'react-native';
import { Widget } from '../components';
import { RED, GREEN, YELLOW } from '../colors';

function Dashboard() {
  return (
    <View style={{ backgroundColor: 'rgb(40,36,57)', flex: 1 }}>
      <Widget />
    </View>
  );
}

export { Dashboard };

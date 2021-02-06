import React from 'react';
import { View, Text } from 'react-native';

function Record({ id, title, date, amount }) {
  console.log(title, amount, date);
  return (
    <View>
      <Text>{title}</Text>
      <Text>{amount}</Text>
      <Text>{new Date(date).toDateString()}</Text>
    </View>
  );
}

export default Record;

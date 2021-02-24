import React from 'react';
import { View, Text } from 'react-native';

function Record({ id, title, date, amount }) {
  return (
    <View>
      <Text>{title}</Text>
      <Text>{amount}</Text>
      <Text>
        {date ? new Date(date.seconds * 1000).toLocaleString() : ' - '}
      </Text>
    </View>
  );
}

export default Record;

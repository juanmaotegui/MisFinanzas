import React from 'react';
import { FlatList } from 'react-native';
import Item from './item';
import Item2 from './item2';

export default function List(props) {
  return (
    <FlatList
      style={{ padding: 15 }}
      data={props.data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Item2 item={item} onPress={props.onPress} />}
    />
  );
}

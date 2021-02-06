import React from 'react';
import { FlatList } from 'react-native';
import Item2 from './item2';
import Item from './item';

export default function List(props) {
  return (
    <FlatList
      data={props.data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Item item={item} onPress={props.onPress} />}
    />
  );
}

import React from 'react';
import { FlatList, View } from 'react-native';
import Item from './Item';

export default function List(props) {
  return (
    <View style={{ padding: 10, marginBottom: 50 }}>
      <FlatList
        data={props.data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Item item={item} onPress={props.onPress} />}
      />
    </View>
  );
}

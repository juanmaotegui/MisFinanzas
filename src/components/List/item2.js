import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Item7(props) {
  const { id, title, date, amount } = props.item;
  return (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => props.onPress()}>
      <View style={{ flex: 3 }}>
        <Text style={styles.itemTitle}>{title}</Text>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Text style={styles.itemText}>04/02/2021</Text>
          <Text style={styles.itemText}>Mamá</Text>
        </View>
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.itemAmount}>U$ -{amount}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    borderRadius: 3,
    padding: 10,
    minHeight: 70,
    flexDirection: 'row',
    borderBottomColor: '#dedede',
    borderBottomWidth: 1,
  },
  itemTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 20,
    flex: 1,
  },
  itemAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    // color: '#39754b',
    // color: '#e3bb1e',
    color: '#e03d3d',
  },
  itemText: {
    flex: 1,
    color: '#969696',
    fontSize: 14,
  },
});

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Item2({ id, title, date, amount }) {
  return (
    <View style={styles.itemContainer}>
      <View style={{ flex: 3 }}>
        <Text style={styles.itemTitle}>{title}</Text>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Text style={styles.itemText}>04/02/2021</Text>
          <Text style={styles.itemText}>Mamá</Text>
        </View>
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.itemAmount}>U$ {amount}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    borderRadius: 3,
    backgroundColor: '#dbdbdb',
    marginVertical: 8,
    padding: 10,
    minHeight: 70,
    flexDirection: 'row',
    borderTopColor: '#36a34e',
    borderTopWidth: 3,
  },
  itemTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 15,
    flex: 1,
  },
  itemAmount: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemText: {
    flex: 1,
    color: '#969696',
    fontSize: 14,
  },
});

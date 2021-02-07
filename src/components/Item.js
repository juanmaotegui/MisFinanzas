import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { GREEN, YELLOW, RED } from '../colors';

export default function Item(props) {
  /**
   * type = 0 - ingresos, 1 - gastos, 2 - deuda
   * creditor = acreedor, a quien se le debe
   */
  const { id, title, date, amount, currency, type, creditor } = props.item;

  /** Segun el tipo de moneda, retorna el simbolo */
  const formatCurrency = () => {
    switch (currency) {
      case 'UYU':
        return 'U$';
      case 'USD':
        return 'US$';
      default:
        return '#';
    }
  };

  /** Segun que tipo de registro sea, le da formato */
  const formatAmount = () => {
    if (type == 1) {
      return `${formatCurrency()} -${amount}`;
    }

    return `${formatCurrency()} ${amount}`;
  };

  /** Segun el tipo de registro, es el color en el monto */
  const amountColor = () => {
    switch (type) {
      case 0:
        return GREEN;
      case 1:
        return RED;
      case 2:
        return YELLOW;
      default:
        return '#000';
    }
  };

  return (
    <TouchableOpacity
      disabled={!props.onPress}
      style={styles.itemContainer}
      onPress={() => props.onPress()}>
      <View style={{ flex: 3 }}>
        <Text style={styles.itemTitle}>{title}</Text>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Text style={styles.itemText}>04/02/2021</Text>
          {creditor ? <Text style={styles.itemText}>{creditor}</Text> : null}
        </View>
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={[styles.itemAmount, { color: amountColor() }]}>
          {formatAmount()}
        </Text>
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
  },
  itemText: {
    flex: 1,
    color: '#969696',
    fontSize: 14,
  },
});

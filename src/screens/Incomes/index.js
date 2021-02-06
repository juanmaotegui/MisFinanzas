import React, { Component } from 'react';
import { Text, View } from 'react-native';
import List from '../../components/List';

const data = [
  {
    amount: '31900',
    date: { seconds: 1612577456 },
    id: '69fIrJbN1h1qgmaAWKiC',
    title: 'Cobro sueldo enero',
    type: 0,
  },
  {
    amount: '31900',
    date: { seconds: 1612577456 },
    id: '69fIrJbN1h1qgmaAWKiC3',
    title: 'Cobro sueldo enero',
    type: 0,
  },
  {
    amount: '31900',
    date: { seconds: 1612577456 },
    id: '69fIrJbN1h1qgmaAWKiC4',
    title: 'Cobro sueldo enero',
    type: 0,
  },
  {
    amount: '31900',
    date: { seconds: 1612577456 },
    id: '69fIrJbN1h1qgmaAWKiC',
    title: 'Cobro sueldo enero',
    type: 0,
  },
  {
    amount: '31900',
    date: { seconds: 1612577456 },
    id: '69fIrJbN1h1qgmaAWKiC3',
    title: 'Cobro sueldo enero',
    type: 0,
  },
  {
    amount: '31900',
    date: { seconds: 1612577456 },
    id: '69fIrJbN1h1qgmaAWKiC4',
    title: 'Cobro sueldo enero',
    type: 0,
  },
  {
    amount: '31900',
    date: { seconds: 1612577456 },
    id: '69fIrJbN1h1qgmaAWKiC',
    title: 'Cobro sueldo enero',
    type: 0,
  },
  {
    amount: '31900',
    date: { seconds: 1612577456 },
    id: '69fIrJbN1h1qgmaAWKiC3',
    title: 'Cobro sueldo enero',
    type: 0,
  },
  {
    amount: '31900',
    date: { seconds: 1612577456 },
    id: '69fIrJbN1h1qgmaAWKiC4',
    title: 'Cobro sueldo enero',
    type: 0,
  },
  {
    amount: '31900',
    date: { seconds: 1612577456 },
    id: '69fIrJbN1h1qgmaAWKiC',
    title: 'Cobro sueldo enero',
    type: 0,
  },
  {
    amount: '31900',
    date: { seconds: 1612577456 },
    id: '69fIrJbN1h1qgmaAWKiC3',
    title: 'Cobro sueldo enero',
    type: 0,
  },
  {
    amount: '31900',
    date: { seconds: 1612577456 },
    id: '69fIrJbN1h1qgmaAWKiC4',
    title: 'Cobro sueldo enero',
    type: 0,
  },
];

export default class Incomes extends Component {
  render() {
    return (
      <View style={{ padding: 10 }}>
        <List data={data} />
      </View>
    );
  }
}

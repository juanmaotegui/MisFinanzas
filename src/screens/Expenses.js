import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import List from '../components/List';
import { RED } from '../colors';
import Header from '../components/Header';
// import FloatButton from '../components/FloatButton';

const actions = [
  {
    text: 'Gasto',
    name: 'btn_expense',
    position: 1,
    onPress: () => console.log('CLickes'),
  },
];

export default function Expenses() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    getRecords(1).then((list) => {
      setExpenses(list);
    });
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Header backgroundColor={RED} title="GASTOS" />
      <List data={expenses} />
      {/* <FloatButton actions={actions} singleAction={true} /> */}
    </View>
  );
}

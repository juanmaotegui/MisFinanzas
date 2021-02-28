import React, { useState, useEffect, useRef } from 'react';
import { View } from 'react-native';
import { RED, DARKEST_GREY } from '../colors';
import { getRecords } from '../firebase';
import { Header, List } from '../components';

function Expenses() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    updateRecordsList();
  }, []);

  const updateRecordsList = () => {
    getRecords(1).then((list) => {
      setExpenses(list);
    });
  };

  return (
    <View style={{ flex: 1, backgroundColor: DARKEST_GREY }}>
      <Header backgroundColor={RED} title="GASTOS" />
      <List data={expenses} />
    </View>
  );
}

export { Expenses };

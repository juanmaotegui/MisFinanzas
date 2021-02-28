import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { YELLOW, DARKEST_GREY } from '../colors';
import { getRecords } from '../firebase';
import { Header, List } from '../components';

function Debts() {
  const [debts, setDebts] = useState([]);

  useEffect(() => {
    updateRecordsList();
  }, []);

  const updateRecordsList = () => {
    getRecords(2).then((list) => {
      setDebts(list);
    });
  };

  return (
    <View style={{ flex: 1, backgroundColor: DARKEST_GREY }}>
      <Header backgroundColor={YELLOW} title="DEUDAS" />
      <List data={debts} />
    </View>
  );
}

export { Debts };

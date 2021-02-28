import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { GREEN, DARKEST_GREY } from '../colors';
import { getRecords } from '../firebase';
import { Header, List } from '../components';

function Incomes() {
  const [incomes, setIncomes] = useState([]);

  useEffect(() => {
    updateRecordsList();
  }, []);

  const updateRecordsList = () => {
    getRecords(0).then((list) => {
      setIncomes(list);
    });
  };

  return (
    <View style={{ flex: 1, backgroundColor: DARKEST_GREY }}>
      <Header backgroundColor={GREEN} title="INGRESOS" />
      <List data={incomes} />
    </View>
  );
}

export { Incomes };

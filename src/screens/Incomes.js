import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import List from '../components/List';
import { GREEN } from '../colors';
import Header from '../components/Header';
import FloatButton from '../components/FloatButton';
import { getRecords } from '../firebase';
// import AddRecordModal from '../components/AddRecordModal';

const actions = [
  {
    text: 'Inreso',
    name: 'btn_incom',
    position: 1,
    onPress: () => console.log('CLickes'),
  },
];

export default function Incomes() {
  const [incomes, setIncomes] = useState([]);

  useEffect(() => {
    getRecords(0).then((list) => {
      setIncomes(list);
    });
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Header backgroundColor={GREEN} title="INGRESOS" />
      <List data={incomes} />
      {/* <AddRecordModal /> */}
      <FloatButton actions={actions} singleAction={true} />
    </View>
  );
}

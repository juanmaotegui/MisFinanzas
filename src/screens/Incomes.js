import React, { useState, useEffect, useRef } from 'react';
import { View } from 'react-native';
import List from '../components/List';
import { GREEN } from '../colors';
import Header from '../components/Header';
import FloatButton from '../components/FloatButton';
import { getRecords } from '../firebase';
import AddRecordModal from '../components/AddRecordModal';

export default function Incomes() {
  const childRef = useRef();
  const [incomes, setIncomes] = useState([]);

  useEffect(() => {
    getRecords(0).then((list) => {
      setIncomes(list);
    });
  }, []);

  const actions = [
    {
      text: 'Inreso',
      name: 'btn_incom',
      position: 1,
      onPress: () => childRef.current.open(),
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      <Header backgroundColor={GREEN} title="INGRESOS" />
      <List data={incomes} />
      <AddRecordModal ref={childRef} />
      <FloatButton actions={actions} singleAction={true} visible={true} />
    </View>
  );
}

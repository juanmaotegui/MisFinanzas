import React, { useState, useEffect, useRef } from 'react';
import { View } from 'react-native';
import { RED } from '../colors';
import { getRecords } from '../firebase';
import { Header, List, AddRecordModal, FloatButton } from '../components';

function Expenses() {
  const childRef = useRef();
  const [expenses, setExpenses] = useState([]);
  const [fabVisible, setFabVisible] = useState(true);

  useEffect(() => {
    updateRecordsList();
  }, []);

  const updateRecordsList = () => {
    getRecords(1).then((list) => {
      setExpenses(list);
    });
  };

  const actions = [
    {
      text: 'Gasto',
      name: 'btn_expense',
      position: 1,
      onPress: () => childRef.current.open(),
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      <Header backgroundColor={RED} title="GASTOS" />
      <List data={expenses} />
      <AddRecordModal
        ref={childRef}
        type={1}
        onClose={() => {
          setFabVisible(true);
          updateRecordsList();
        }}
        onOpen={() => {
          setFabVisible(false);
        }}
      />
      <FloatButton actions={actions} singleAction={true} visible={fabVisible} />
    </View>
  );
}

export { Expenses };

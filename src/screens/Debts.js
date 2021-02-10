import React, { useState, useEffect, useRef } from 'react';
import { View } from 'react-native';
import List from '../components/List';
import { YELLOW } from '../colors';
import Header from '../components/Header';
import FloatButton from '../components/FloatButton';
import { getRecords } from '../firebase';
import AddRecordModal from '../components/AddRecordModal';

function Debts() {
  const childRef = useRef();
  const [debts, setDebts] = useState([]);
  const [fabVisible, setFabVisible] = useState(true);

  useEffect(() => {
    updateRecordsList();
  }, []);

  const updateRecordsList = () => {
    getRecords(2).then((list) => {
      setDebts(list);
    });
  };

  const actions = [
    {
      text: 'Deudas',
      name: 'btn_debts',
      position: 1,
      onPress: () => childRef.current.open(),
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      <Header backgroundColor={YELLOW} title="DEUDAS" />
      <List data={debts} />
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

export { Debts };

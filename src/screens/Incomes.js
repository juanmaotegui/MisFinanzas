import React, { useState, useEffect, useRef } from 'react';
import { View } from 'react-native';
import { GREEN } from '../colors';
import { getRecords } from '../firebase';
import { Header, List, AddRecordModal, FloatButton } from '../components';

function Incomes() {
  const childRef = useRef();
  const [incomes, setIncomes] = useState([]);
  const [fabVisible, setFabVisible] = useState(true);

  useEffect(() => {
    updateRecordsList();
  }, []);

  const updateRecordsList = () => {
    getRecords(0).then((list) => {
      setIncomes(list);
    });
  };

  const actions = [
    {
      text: 'Inreso',
      name: 'btn_incomes',
      position: 1,
      onPress: () => childRef.current.open(),
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      <Header backgroundColor={GREEN} title="INGRESOS" />
      <List data={incomes} />
      <AddRecordModal
        ref={childRef}
        type={0}
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

export { Incomes };

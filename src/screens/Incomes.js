import React, { useState, useEffect, useRef } from 'react';
import { View } from 'react-native';
import List from '../components/List';
import { GREEN } from '../colors';
import Header from '../components/Header';
import FloatButton from '../components/FloatButton';
import { getRecords } from '../firebase';
import AddRecordModal from '../components/AddRecordModal';
import BottomNavBar from '../components/BottomNavBar';

export default function Incomes() {
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
      onPress: () => {
        childRef.current.open();
        setFabVisible(false);
      },
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
      />
      <FloatButton actions={actions} singleAction={true} visible={fabVisible} />
    </View>
  );
}

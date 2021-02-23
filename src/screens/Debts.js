import React, { useState, useEffect, useRef } from 'react';
import { View } from 'react-native';
import { YELLOW } from '../colors';
import { getRecords } from '../firebase';
import { Header, List, AddRecordModal, FloatButton } from '../components';
import MatComIcon from 'react-native-vector-icons/MaterialCommunityIcons';

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
      icon: <MatComIcon name="plus" size={30} color="#FFF" />,
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

import React, { useRef } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import MatIcon from 'react-native-vector-icons/MaterialIcons';
import { FloatButton, AddRecordModal } from '../components';
import { GREY, PURPLE, TURQUOISE, WHITE, DARK_GREY } from '../colors';

function BottomNavBar({ state, descriptors, navigation }) {
  const childRef = useRef();

  const actions = [
    {
      text: 'Gasto',
      name: 'btn_expense',
      icon: <MatIcon name="add" size={30} color={WHITE} />,
      position: 1,
      onPress: () => childRef.current.open(),
    },
  ];

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
          <MatIcon
            name="dashboard"
            size={30}
            color={state.index == 0 ? TURQUOISE : GREY}
          />
        </TouchableOpacity>

        <FloatButton
          actions={actions}
          singleAction={true}
          visible={true}
          color={PURPLE}
          position="center"
        />

        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <MatIcon
            name="settings"
            size={30}
            color={state.index == 1 ? TURQUOISE : GREY}
          />
        </TouchableOpacity>
      </View>

      <AddRecordModal ref={childRef} type={0} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: TURQUOISE,
    borderTopWidth: 1,
    backgroundColor: DARK_GREY,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 50,
  },
});

export { BottomNavBar };

import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import MatIcon from 'react-native-vector-icons/MaterialIcons';
import { FloatButton } from '../components';
import { AQUA, DARK_GREY, PURPLE, BLACK, DARKEST_PURPLE } from '../colors';

function BottomNavBar({ state, descriptors, navigation }) {
  const actions = [
    {
      text: 'Gasto',
      name: 'btn_expense',
      icon: <MatIcon name="add" size={30} color={BLACK} />,
      position: 1,
    },
  ];

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
        <MatIcon
          name="dashboard"
          size={30}
          color={state.index == 0 ? PURPLE : DARK_GREY}
        />
      </TouchableOpacity>

      <FloatButton
        actions={actions}
        singleAction={true}
        visible={true}
        color={AQUA}
        position="center"
      />

      <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
        <MatIcon
          name="settings"
          size={30}
          color={state.index == 1 ? PURPLE : DARK_GREY}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: PURPLE,
    borderTopWidth: 1,
    backgroundColor: DARKEST_PURPLE,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 50,
  },
});

export { BottomNavBar };

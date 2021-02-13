import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Incomes, Expenses, Debts } from '../screens';
import { BottomNavBar } from '../components';
import { View, Text } from 'react-native';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator tabBar={(props) => <BottomNavBar {...props} />}>
      <Tab.Screen name="INGRESOS" component={Incomes} />
      <Tab.Screen name="GASTOS" component={Expenses} />
      <Tab.Screen name="DEUDAS" component={Debts} />
    </Tab.Navigator>
  );
}

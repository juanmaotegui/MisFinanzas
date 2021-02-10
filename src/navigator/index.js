import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Incomes, Expenses, Debts } from '../screens';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="INGRESOS" component={Incomes} />
      <Tab.Screen name="GASTOS" component={Expenses} />
      <Tab.Screen name="DEUDAS" component={Debts} />
    </Tab.Navigator>
  );
}

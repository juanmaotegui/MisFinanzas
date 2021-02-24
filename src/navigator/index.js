import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Incomes, Expenses, Debts } from '../screens';
// import { BottomNavBar } from '../components';
import MatComIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

// <Tab.Navigator tabBar={(props) => <BottomNavBar {...props} />}>

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="INGRESOS"
        component={Incomes}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MatComIcon name="cash-plus" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="GASTOS"
        component={Expenses}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MatComIcon name="cash-minus" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="DEUDAS"
        component={Debts}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MatComIcon name="account-cash-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Incomes, Expenses, Debts, Dashboard } from '../screens';
import { BottomNavBar } from '../components';
import MatComIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// <Tab.Navigator tabBar={(props) => <BottomNavBar {...props} />}>

function DashboardStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Incomes" component={Incomes} />
      <Stack.Screen name="Expenses" component={Expenses} />
      <Stack.Screen name="Debts" component={Debts} />
    </Stack.Navigator>
  );
}

export default function TabNavigator() {
  return (
    <Tab.Navigator tabBar={(props) => <BottomNavBar {...props} />}>
      <Tab.Screen
        name="Dashboard"
        component={DashboardStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MatComIcon name="view-dashboard" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Incomes}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MatComIcon name="cash-plus" color={color} size={size} />
          ),
        }}
      />
      {/* <Tab.Screen
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
      /> */}
    </Tab.Navigator>
  );
}

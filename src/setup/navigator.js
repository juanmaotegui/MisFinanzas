import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Incomes, Expenses, Debts, Dashboard, Settings } from '../screens';
import { BottomNavBar } from '../components';
import MatComIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

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

const Navigator = () => {
  return (
    <NavigationContainer>
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
          name="Settings"
          component={Settings}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MatComIcon name="cash-plus" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;

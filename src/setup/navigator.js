import React from 'react';
import { Animated } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {
  Incomes,
  Expenses,
  Debts,
  Dashboard,
  Settings,
  Record,
} from '../screens';
import { BottomNavBar } from '../components';
import MatComIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const BottomTab = createBottomTabNavigator();
const DashboardStack = createStackNavigator();
const MainStack = createStackNavigator();

const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

const forSlide = ({ current, next, inverted, layouts: { screen } }) => {
  const progress = Animated.add(
    current.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    }),
    next
      ? next.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
          extrapolate: 'clamp',
        })
      : 0,
  );

  return {
    cardStyle: {
      transform: [
        {
          translateY: Animated.multiply(
            progress.interpolate({
              inputRange: [0, 1, 2],
              outputRange: [
                screen.height, // Focused, but offscreen in the beginning
                0, // Fully focused
                screen.height * -0.3, // Fully unfocused
              ],
              extrapolate: 'clamp',
            }),
            inverted,
          ),
        },
      ],
    },
  };
};

function DashboardStackNav() {
  return (
    <DashboardStack.Navigator headerMode="none">
      <DashboardStack.Screen name="Dashboard" component={Dashboard} />
      <DashboardStack.Screen name="Incomes" component={Incomes} />
      <DashboardStack.Screen name="Expenses" component={Expenses} />
      <DashboardStack.Screen name="Debts" component={Debts} />
    </DashboardStack.Navigator>
  );
}

function BottomTabNav() {
  return (
    <BottomTab.Navigator tabBar={(props) => <BottomNavBar {...props} />}>
      <BottomTab.Screen
        name="Dashboard"
        component={DashboardStackNav}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MatComIcon name="view-dashboard" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MatComIcon name="cash-plus" color={color} size={size} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

const Navigator = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator headerMode="none">
        <MainStack.Screen name="Dashboard" component={BottomTabNav} />
        <MainStack.Screen
          name="Record"
          component={Record}
          options={{ cardStyleInterpolator: forSlide }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Incomes from './src/screens/Incomes';
import Expenses from './src/screens/Expenses';

const App: () => React$Node = () => {
  return (
    <>
      <NavigationContainer>
        <StatusBar backgroundColor="#949494" />
        <SafeAreaView style={{ flex: 1 }}>
          <Expenses />
        </SafeAreaView>
      </NavigationContainer>
    </>
  );
};

export default App;

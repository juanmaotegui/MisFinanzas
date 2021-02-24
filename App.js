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
import { Incomes, Expenses } from './src/screens';
import TabNavigator from './src/navigator';

const App: () => React$Node = () => {
  return (
    <>
      <NavigationContainer>
        <StatusBar backgroundColor="#949494" />
        <SafeAreaView style={{ flex: 1 }}>
          {/* <Incomes /> */}
          <TabNavigator />
        </SafeAreaView>
      </NavigationContainer>
    </>
  );
};

export default App;

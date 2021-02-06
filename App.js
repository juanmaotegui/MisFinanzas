/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Incomes from './src/screens/Incomes';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar backgroundColor="#34deeb" />
      <SafeAreaView>
        <Incomes />
      </SafeAreaView>
    </>
  );
};

export default App;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import Setup from './src/setup';
import { SafeAreaView, StatusBar } from 'react-native';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar hidden backgroundColor="#949494" />
      <SafeAreaView style={{ flex: 1 }}>
        <Setup />
      </SafeAreaView>
    </>
  );
};

export default App;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import TodoListComponent from './components/TodoListComponent';

import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, Text} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic"></ScrollView>
    </SafeAreaView>
  );
};

export default App;

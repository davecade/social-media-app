import React from 'react';
import {SafeAreaView} from 'react-native';
import Title from './components/Title/Title';

const App = (): JSX.Element => {
  return (
    <SafeAreaView>
      <Title title="Let's Explore" />
    </SafeAreaView>
  );
};

export default App;

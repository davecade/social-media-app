import React from 'react';
import {SafeAreaView, View} from 'react-native';
import UserStories from './components/UserStories/UserStories';
import Header from './components/Header/Header';
import UserPostList from './components/UserPostList/UserPostList';
import globalStyles from './assets/styles/globalStyles';

const App = (): JSX.Element => {
  return (
    <SafeAreaView style={globalStyles.flex}>
      <View style={globalStyles.flex}>
        <Header heading="Let's Explore" />
        <UserStories />
        <UserPostList />
      </View>
    </SafeAreaView>
  );
};

export default App;

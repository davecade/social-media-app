import React from 'react';
import {SafeAreaView} from 'react-native';
import UserStories from './components/UserStories/UserStories';
import Header from './components/Header/Header';
import UserPostList from './components/UserPostList/UserPostList';

const App = (): JSX.Element => {
  return (
    <SafeAreaView>
      <Header heading="Let's Explore" />
      <UserStories />
      <UserPostList />
    </SafeAreaView>
  );
};

export default App;

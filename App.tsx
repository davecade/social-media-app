import React from 'react';
import {SafeAreaView} from 'react-native';
import UserStories from './components/UserStories/UserStories';
import Header from './components/Header/Header';
import UserPosts from './components/UserPosts/UserPosts';

const App = (): JSX.Element => {
  return (
    <SafeAreaView>
      <Header heading="Let's Explore" />
      <UserStories />
      <UserPosts />
    </SafeAreaView>
  );
};

export default App;

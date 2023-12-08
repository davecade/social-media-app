import React, {useState} from 'react';
import {Platform, SafeAreaView, StatusBar, Switch, View} from 'react-native';
import UserStories from './components/UserStories/UserStories';
import Header from './components/Header/Header';
import UserPostList from './components/UserPostList/UserPostList';
import globalStyles from './assets/styles/globalStyles';

const App = (): JSX.Element => {
  const [isOn, setIsOn] = useState(false);
  return (
    <SafeAreaView style={globalStyles.flex}>
      <StatusBar
        backgroundColor={'red'} // Only changes android
        barStyle={'dark-content'} // changes both android and ios
      />
      <View style={globalStyles.flex}>
        <Header heading="Let's Explore" />
        <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
          <Switch
            style={Platform.OS === 'android' && {transform: [{scale: 1.3}]}}
            value={isOn}
            onValueChange={value => setIsOn(value)}
            trackColor={{false: '#767577', true: '#81b0ff'}}
            ios_backgroundColor={'#767577'}
          />
        </View>
        <UserStories />
        <UserPostList />
      </View>
    </SafeAreaView>
  );
};

export default App;

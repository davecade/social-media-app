import React from 'react';
import {SafeAreaView, StyleSheet, TouchableOpacity, View} from 'react-native';
import Title from './components/Title/Title';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';

const App = (): JSX.Element => {
  return (
    <SafeAreaView>
      <View style={style.container}>
        <Title title="Let's Explore" />
        <TouchableOpacity style={style.iconContainer}>
          <FontAwesomeIcon icon={faEnvelope} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    marginLeft: 27,
    marginRight: 17,
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconContainer: {
    padding: 10,
  },
});

export default App;

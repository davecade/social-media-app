import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import Title from './components/Title/Title';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import globalStyles from './assets/styles/globalStyles';

const App = (): JSX.Element => {
  return (
    <SafeAreaView>
      <View style={globalStyles.container}>
        <Title title="Let's Explore" />
        <TouchableOpacity style={globalStyles.messageIcon}>
          <FontAwesomeIcon icon={faEnvelope} size={20} color={'#898DAE'} />
          <View style={globalStyles.messageNumberContainer}>
            <Text style={globalStyles.messageNumber}>2</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default App;

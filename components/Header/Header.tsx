import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Title from '../Title/Title';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import globalStyles from '../../assets/styles/globalStyles';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';

type HeaderProps = {
  heading: string;
};

const Header = ({heading}: HeaderProps) => {
  return (
    <View style={globalStyles.container}>
      <Title title={heading} />
      <TouchableOpacity style={globalStyles.messageIcon}>
        <FontAwesomeIcon icon={faEnvelope} size={23} color={'#898DAE'} />
        <View style={globalStyles.messageNumberContainer}>
          <Text style={globalStyles.messageNumber}>2</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

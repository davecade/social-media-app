import {Image, View, Text} from 'react-native';
import React from 'react';
import {UserStory} from '../../data';
import styles from './style';

type UserAvatarProps = {
  userStory: UserStory;
};

const UserAvatar = ({userStory}: UserAvatarProps) => {
  const {id, firstName, profileImage} = userStory;

  return (
    <View key={id} style={styles.avatarContainer}>
      <View style={styles.imageContainer}>
        <Image source={profileImage} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{firstName}</Text>
      </View>
    </View>
  );
};

export default UserAvatar;

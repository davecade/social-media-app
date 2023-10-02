import {Image, View, Text} from 'react-native';
import React from 'react';
import {UserStory} from '../../data';
import styles from './style';

type UserAvatarProps = {
  userStory: UserStory;
  size?: 'small' | 'medium' | 'large';
};

const UserAvatar = ({userStory, size}: UserAvatarProps) => {
  const {firstName, profileImage} = userStory;
  let avatarSize = 60;

  switch (size) {
    case 'small':
      avatarSize = 50;
      break;
    case 'medium':
      avatarSize = 60;
      break;
    case 'large':
      avatarSize = 70;
      break;
  }

  return (
    <View style={styles.avatarContainer}>
      <View
        style={[styles.avatarBorder, {width: avatarSize, height: avatarSize}]}>
        <View>
          <Image source={profileImage} style={styles.image} />
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{firstName}</Text>
      </View>
    </View>
  );
};

export default UserAvatar;

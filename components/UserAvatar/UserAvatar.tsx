import {Image, View} from 'react-native';
import React from 'react';
import styles from './style';

type UserAvatarProps = {
  profileImage: any;
  size?: 'small' | 'medium' | 'large';
};

const UserAvatar = ({profileImage, size}: UserAvatarProps) => {
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
    <View
      style={[styles.avatarBorder, {width: avatarSize, height: avatarSize}]}>
      <View>
        <Image source={profileImage} style={styles.image} />
      </View>
    </View>
  );
};

export default UserAvatar;

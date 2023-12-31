import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import UserAvatar from '../UserAvatar/UserAvatar';
import {UserPostType} from '../../data/types';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faBookmark,
  faEllipsis,
  faHeart,
  faMessage,
} from '@fortawesome/free-solid-svg-icons';
import styles from './style';

type UserPostProps = {
  post: UserPostType;
};

const UserPost = ({post}: UserPostProps) => {
  const {firstName, lastName, profileImage, image, location, likes} = post;

  return (
    <View style={styles.postContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.postHeader}>
          <UserAvatar profileImage={profileImage} size="small" />
          <View style={styles.textContainer}>
            <Text style={styles.nameText}>{`${firstName} ${lastName}`}</Text>
            <Text style={styles.locationText}>{location}</Text>
          </View>
        </View>
        <View>
          <FontAwesomeIcon icon={faEllipsis} size={23} color={'#898DAE'} />
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
      </View>
      <View style={styles.customerInteractions}>
        <View style={styles.likesContainer}>
          <TouchableOpacity>
            <FontAwesomeIcon icon={faHeart} color="#C4C4C4" />
          </TouchableOpacity>
          <Text>{likes}</Text>
        </View>
        <View style={styles.likesContainer}>
          <TouchableOpacity>
            <FontAwesomeIcon icon={faMessage} color="#C4C4C4" />
          </TouchableOpacity>

          <Text>{likes}</Text>
        </View>
        <View style={styles.likesContainer}>
          <TouchableOpacity>
            <FontAwesomeIcon icon={faBookmark} color="#C4C4C4" />
          </TouchableOpacity>

          <Text>{likes}</Text>
        </View>
      </View>
    </View>
  );
};

export default UserPost;

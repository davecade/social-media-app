import {FlatList, Text, View} from 'react-native';
import React from 'react';
import globalStyles from '../../assets/styles/globalStyles';
import usePagination from '../../hooks/usePagination';
import {userStoriesData} from '../../data/data';
import UserAvatar from '../UserAvatar/UserAvatar';
import LoadingComponent from '../LoadingIcon/LoadingIcon';
import styles from './style';

const UserStories = () => {
  const userStoriesPageSize = 6;

  const {
    renderedData: userStoriesRenderedData,
    fetchNextPage: fetchNextUserStories,
    isLoading: isLoadingUserStories,
  } = usePagination({
    pageSize: userStoriesPageSize,
    initialPage: 1,
    data: userStoriesData,
  });

  return (
    <View style={globalStyles.container}>
      <FlatList
        onEndReached={fetchNextUserStories}
        showsHorizontalScrollIndicator={false}
        data={userStoriesRenderedData}
        horizontal={true}
        renderItem={({item}) => {
          return (
            <View style={styles.avatarContainer}>
              <UserAvatar profileImage={item.profileImage} size="medium" />
              <View style={styles.textContainer}>
                <Text style={styles.text}>{item.firstName}</Text>
              </View>
            </View>
          );
        }}
        keyExtractor={item => `UserStory-${item.id}`}
      />
      {isLoadingUserStories && <LoadingComponent />}
    </View>
  );
};

export default UserStories;

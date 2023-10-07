import {FlatList, View} from 'react-native';
import React from 'react';
import globalStyles from '../../assets/styles/globalStyles';
import usePagination from '../../hooks/usePagination';
import {userPostsData} from '../../data/data';
// import LoadingComponent from '../LoadingIcon/LoadingIcon';
import {UserPostType} from '../../data/types';
import UserPost from '../UserPost/UserPost';
// import Header from '../Header/Header';
// import UserStories from '../UserStories/UserStories';

const UserPosts = () => {
  const userPostsPageSize = 4;

  const {
    renderedData: userPostsRenderedData,
    fetchNextPage: fetchNextUserPosts,
  } = usePagination<UserPostType>({
    pageSize: userPostsPageSize,
    initialPage: 1,
    data: userPostsData,
  });

  return (
    <View style={[globalStyles.container, globalStyles.flex]}>
      <FlatList
        // ListHeaderComponent={() => (
        //   <>
        //     <Header heading="Let's Explore" />
        //     <UserStories />
        //   </>
        // )}
        style={globalStyles.flex}
        onEndReached={fetchNextUserPosts}
        showsVerticalScrollIndicator={false}
        data={userPostsRenderedData}
        horizontal={false}
        renderItem={({item}) => {
          return <UserPost post={item} />;
        }}
        keyExtractor={item => `UserPost-${item.id}`}
      />
    </View>
  );
};

export default UserPosts;

import React from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Title from './components/Title/Title';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import globalStyles from './assets/styles/globalStyles';
import {userStories} from './data';
import UserAvatar from './components/UserAvatar/UserAvatar';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import usePagination from './hooks/usePagination';
import LoadingComponent from './components/LoadingIcon/LoadingIcon';

const App = (): JSX.Element => {
  const userStoriesPageSize = 4;

  const {
    renderedData: userStoriesRenderedData,
    fetchNextPage: fetchNextUserStories,
    isLoading: isLoadingUserStories,
  } = usePagination({
    pageSize: userStoriesPageSize,
    initialPage: 1,
    data: userStories,
  });

  return (
    <SafeAreaView>
      <View style={globalStyles.container}>
        <Title title="Let's Explore" />
        <TouchableOpacity style={globalStyles.messageIcon}>
          <FontAwesomeIcon icon={faEnvelope} size={23} color={'#898DAE'} />
          <View style={globalStyles.messageNumberContainer}>
            <Text style={globalStyles.messageNumber}>2</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={globalStyles.container}>
        <FlatList
          //onEndReachedThreshold={0.5} // this 0.5 means that when you are at 50% of the end of the list it will trigger the onEndReached function
          onEndReached={fetchNextUserStories}
          showsHorizontalScrollIndicator={false}
          data={userStoriesRenderedData}
          horizontal={true}
          renderItem={({item}) => {
            return <UserAvatar userStory={item} size="medium" />;
          }}
          keyExtractor={item => item.id.toString()}
        />
        {isLoadingUserStories && <LoadingComponent />}
      </View>
    </SafeAreaView>
  );
};

export default App;

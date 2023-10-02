import React, {useEffect, useState} from 'react';
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
import {UserStory, userStories} from './data';
import UserAvatar from './components/UserAvatar/UserAvatar';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
//import LoadingComponent from './components/LoadingIcon/LoadingIcon';

const App = (): JSX.Element => {
  const userStoriesPageSize = 4;
  const [userStoriesCurrentPage, setUserStoriesCurrentPage] =
    useState<number>(1);
  const [userStoriesRenderedData, setUserStoriesRenderedData] = useState<
    UserStory[]
  >([]);
  const [isLoadingUserStories, setIsLoadingUserStories] =
    useState<boolean>(false);

  const pagination = (
    database: UserStory[],
    currentPage: number,
    pageSize: number,
  ) => {
    const start = (currentPage - 1) * pageSize;
    const end = start + pageSize;
    if (start >= database.length) {
      return [];
    }

    return database.slice(start, end);
  };

  useEffect(() => {
    setIsLoadingUserStories(true);
    const getInitialUserStories = pagination(
      userStories,
      1,
      userStoriesPageSize,
    );
    setUserStoriesRenderedData(getInitialUserStories);
    setIsLoadingUserStories(false);
  }, []);

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
          onEndReached={() => {
            if (isLoadingUserStories) {
              return;
            }

            setIsLoadingUserStories(true);
            setTimeout(() => {
              const contentToAppend = pagination(
                userStories,
                userStoriesCurrentPage + 1,
                userStoriesPageSize,
              );

              if (contentToAppend.length > 0) {
                setUserStoriesRenderedData(prev => [
                  ...prev,
                  ...contentToAppend,
                ]);
                setUserStoriesCurrentPage(userStoriesCurrentPage + 1);
                setIsLoadingUserStories(false);
              }
            }, 500);
          }}
          showsHorizontalScrollIndicator={false}
          data={userStoriesRenderedData}
          horizontal={true}
          renderItem={({item}) => (
            <UserAvatar
              key={`UserStory-${item.id}`}
              userStory={item}
              size="medium"
            />
          )}
          keyExtractor={item => item.id.toString()}
        />
        {/* {isLoadingUserStories && <LoadingComponent />} */}
      </View>
    </SafeAreaView>
  );
};

export default App;

import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';

const styles = StyleSheet.create({
  postContainer: {
    paddingVertical: 20,
    borderBottomColor: '#E5E5E5',
    borderBottomWidth: 1,
    borderTopColor: '#E5E5E5',
    borderTopWidth: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    borderRadius: 25,
  },
  textContainer: {
    paddingLeft: 10,
  },
  nameText: {
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: 16,
  },
  locationText: {
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: 12,
    color: '#79869F',
  },
  customerInteractions: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingTop: 10,
  },
  likesContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 20,
  },
});

export default styles;

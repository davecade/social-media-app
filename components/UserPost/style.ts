import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const styles = StyleSheet.create({
  postContainer: {
    paddingVertical: verticalScale(20),
    borderBottomColor: '#E5E5E5',
    borderBottomWidth: 1,
    borderTopColor: '#E5E5E5',
    borderTopWidth: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: verticalScale(10),
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
    borderRadius: horizontalScale(25),
  },
  textContainer: {
    paddingLeft: horizontalScale(10),
  },
  nameText: {
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: 16,
  },
  locationText: {
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: scaleFontSize(12),
    color: '#79869F',
  },
  customerInteractions: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingTop: verticalScale(10),
  },
  likesContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: horizontalScale(20),
  },
});

export default styles;

import {StyleSheet} from 'react-native';
import {getFontFamily} from '../fonts/helper';
import {horizontalScale, scaleFontSize, verticalScale} from './scaling';

const globalStyles = StyleSheet.create({
  container: {
    marginLeft: horizontalScale(27),
    marginRight: horizontalScale(17),
    marginTop: verticalScale(30),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  messageIcon: {
    padding: horizontalScale(10),
    backgroundColor: '#F9FAFB',
    borderRadius: horizontalScale(50),
  },
  messageNumberContainer: {
    backgroundColor: '#F35BAC',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: horizontalScale(10),
    height: verticalScale(10),
    borderRadius: horizontalScale(50),
    position: 'absolute',
    right: 7,
    top: 9,
  },
  messageNumber: {
    color: '#FFF',
    fontSize: scaleFontSize(6),
    fontFamily: getFontFamily('Inter', '600'),
  },
  flex: {
    flex: 1,
  },
});

export default globalStyles;

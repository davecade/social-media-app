import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const styles = StyleSheet.create({
  avatarContainer: {
    padding: horizontalScale(4),
    alignItems: 'center',
  },
  avatarBorder: {
    borderWidth: 1,
    borderColor: '#F35BAC',
    borderRadius: horizontalScale(50),
    padding: horizontalScale(3),
  },
  textContainer: {
    paddingTop: verticalScale(8),
  },
  text: {
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: scaleFontSize(14),
    color: '#022150',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default styles;

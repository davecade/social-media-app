import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';

const styles = StyleSheet.create({
  avatarContainer: {
    padding: 4,
    alignItems: 'center',
  },
  avatarBorder: {
    borderWidth: 1,
    borderColor: '#F35BAC',
    borderRadius: 50,
    padding: 4,
  },
  textContainer: {
    paddingTop: 8,
  },
  text: {
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: 14,
    color: '#022150',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default styles;

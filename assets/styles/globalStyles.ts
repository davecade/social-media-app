import {StyleSheet} from 'react-native';
import {getFontFamily} from '../fonts/helper';

const globalStyles = StyleSheet.create({
  container: {
    marginLeft: 27,
    marginRight: 17,
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  messageIcon: {
    padding: 10,
    backgroundColor: '#F9FAFB',
    borderRadius: 50,
  },
  messageNumberContainer: {
    backgroundColor: '#F35BAC',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: 10,
    height: 10,
    borderRadius: 50,
    position: 'absolute',
    right: 7,
    top: 9,
  },
  messageNumber: {
    color: '#FFF',
    fontSize: 6,
    fontFamily: getFontFamily('Inter', '600'),
  },
  flex: {
    flex: 1,
  },
});

export default globalStyles;

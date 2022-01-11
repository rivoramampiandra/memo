import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
    justifyContent: 'space-between',
    paddingLeft: 10,
  },
  activeItem: {
    borderLeftWidth: 7,
    borderLeftColor: '#25B0BB',
    borderStyle: 'solid',
  },
  logoContainer: {
    backgroundColor: '#F1F9FF',
    borderRadius: 75,
    alignItems: 'center',
    justifyContent: 'center',
    width: 55,
    height: 55,
  },
  logo: {width: 40, height: 40},
  contentText: {
    borderRightWidth: 2,
    borderRightColor: '#000',
    margin: 5,
  },
});

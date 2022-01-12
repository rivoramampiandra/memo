import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: '10%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25,
    zIndex: 99,
  },
  back: {
    position: 'relative',
    left: '-55%',
  },
  logo: {
    maxWidth: '70%',
    height: '100%',
    alignSelf: 'center',
    alignContent: 'center',
  },
  navContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  navTitle: {
    fontSize: 20,
    fontWeight: '500',
  },
});

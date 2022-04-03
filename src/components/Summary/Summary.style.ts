import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ededed',
    borderRadius: 10,
    padding: 19,
    flexDirection: 'column',
    alignItems: 'center',
    margin: 5,
    flexGrow: 1,
    maxWidth: '100%',
    justifyContent: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 13,
    marginRight: 13,
  },
  image: {
    width: 32,
    height: 32,
  },
  largeImage: {
    width: 42,
    height: 42,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  count: {
    fontSize: 40,
    fontWeight: '600',
    fontFamily: 'Montserrat-Bold',
    // marginRight: 16,
    // alignItems: 'flex-end',
  },
});

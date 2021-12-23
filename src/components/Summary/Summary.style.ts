import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#ededed',
    borderRadius: 10,
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 5,
    flexGrow: 1,
  },
  titleContainer: {
    flexDirection: 'row',
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
    alignItems: 'flex-end',
  },
  count: {
    fontSize: 40,
    fontWeight: '700',
    marginRight: 16,
  },
});

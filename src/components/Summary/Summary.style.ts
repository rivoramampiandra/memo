import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ededed',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    margin: 5,
    flexGrow: 1,
    maxWidth: '100%',
  },
  titleContainer: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 12,
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
    alignItems: 'flex-end',
  },
});

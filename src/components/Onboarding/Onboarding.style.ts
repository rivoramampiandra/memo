import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 0.7,
    justifyContent: 'center',
    maxWidth: '90%',
  },
  dot: {
    height: 10,
    borderRadius: 5,
    backgroundColor: '#60BDAC',
    marginHorizontal: 8,
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
  },
});

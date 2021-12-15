import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    borderBottomRightRadius: 15,
  },
  miniDivider: {
    width: '40%',
    borderBottomWidth: 1,
    borderBottomColor: '#24272D',
    borderBottomStyle: 'solid',
  },
  activeListe: {
    borderLeftColor: 'red',
    borderLeftWidth: 5,
    borderLeftStyle: 'solid',
  },
  listContainer: {},
  textContainer: {
    color: '#24272D',
  },
  logo: {
    height: 50,
  },
});

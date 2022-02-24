import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    borderBottomRightRadius: 15,
    padding: 25,
  },
  item: {
    paddingVertical: 10,
    paddingLeft: 12,
    marginVertical: 6,
  },
  textItem: {
    textTransform: 'uppercase',
  },
  activeItem: {
    borderLeftWidth: 4,
    borderLeftStyle: 'solid',
    borderLeftColor: '#30AAC7',
  },
  miniDivider: {
    width: '25%',
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
  footer: {
    flex: 0.2,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    paddingVertical: 16,
  },
});

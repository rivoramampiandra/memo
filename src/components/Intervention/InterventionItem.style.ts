import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderWidth: 2,
    borderColor: '#bfbfbf',
    borderRadius: 12,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  imageContainer: {
    width: '15%',
  },
  itemImage: {
    width: 32,
    height: 32,
  },
  titleContainer: {
    width: '60%',
  },
  title: {
    fontSize: 16,
  },
  subtitle: {
    fontSize: 12,
  },
  distanceContainer: {
    width: '15%',
  },
  distance: {
    textAlign: 'right',
  },
  iconContainer: {
    width: '5%',
  },
  iconChevron: {
    width: 32,
    height: 32,
  },
});

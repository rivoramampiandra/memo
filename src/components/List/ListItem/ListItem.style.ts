import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#BFBFBF',
    borderRadius: 10,
    marginVertical: 8,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    color: '#BFBFBF',
    fontSize: 14,
    fontWeight: '500',
  },
  value: {
    color: '#24272D',
    fontSize: 14,
    fontWeight: '500',
  },
  icon: {
    width: 24,
    height: 24,
  },
});

import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#fff',
  },
  defaultIcon: {width: 32, height: 32},
  addButton: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginBottom: 16,
  },
  addButtonText: {fontSize: 16, fontWeight: '600', marginLeft: 12},
  logo: {
    height: 40,
  },
  footer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

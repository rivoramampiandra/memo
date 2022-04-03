import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    zIndex: 1,
    elevation: 5,
  },
  modalContent: {
    marginTop: 40,
    paddingHorizontal: 30,
  },
  buttonClose: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});

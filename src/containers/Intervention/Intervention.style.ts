import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  closeBtn: {
    position: 'relative',
    right: 80,
  },
  close: {
    fontSize: 14,
    color: '#036BF7',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '500',
    // marginLeft: 16,
    alignContent: 'center',
  },
  outlinedButton: {
    padding: 12,
    width: '80%',
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 19,
    borderColor: '#707070',
  },
  btnTextOutlined: {
    textAlign: 'center',
    fontWeight: 'bold',
  },

  //intervention
  interventionContainer: {
    borderWidth: 2,
    borderColor: '#bfbfbf',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 8,
    flex: 1,
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  //Intervention ITEM
  itemImage: {
    width: 32,
    height: 32,
    marginRight: 32,
  },
  closeIcon: {
    width: 24,
    height: 24,
    alignSelf: 'flex-end',
  },
  title: {
    fontSize: 18,
  },
  //Intervention ITEM

  //No ITEM
  noItemImage: {width: '100%', height: 250},
  noItemText: {textAlign: 'center', fontSize: 16},
  //No ITEM
});

import {StatusBar, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: '#fff',
  },
  titleContainer: {
    marginBottom: 12,
  },
  title: {
    fontSize: 16,
  },
  btnText: {
    color: '#fff',
    textAlign: 'center',
  },
  btnTextOutlined: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  bold: {
    fontWeight: '800',
  },
  horizontalFlex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  conditionText: {
    color: '#036BF7',
  },
  button: {
    backgroundColor: '#60BDAC',
    padding: 12,
    width: '80%',
    alignSelf: 'center',
    borderRadius: 10,
    marginVertical: 19,
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
  documentPicture: {
    height: 100,
  },
  close: {
    position: 'absolute',
    right: 60,
    top: -10,
    zIndex: 10,
  },
  closeIcon: {
    width: 24,
    height: 24,
  },
  docInfoContainer: {flex: 1, padding: 20},
  imageContainer: {alignSelf: 'center', position: 'relative'},
});

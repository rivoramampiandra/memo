import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#fff',
  },
  logo: {
    height: '10%',
    alignSelf: 'center',
  },
  title: {
    fontSize: 16,
    marginBottom: 12,
  },
  input: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#60BDAC',
    padding: 12,
    width: '80%',
    alignSelf: 'center',
    borderRadius: 10,
    marginVertical: 19,
  },
  horizontalFlex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  loginOption: {
    justifyContent: 'space-between',
  },
  signUpOption: {
    alignSelf: 'center',
  },
  signup: {
    color: '#036BF7',
  },
  btnText: {
    color: '#fff',
    textAlign: 'center',
  },
  bold: {
    fontWeight: '800',
  },
});

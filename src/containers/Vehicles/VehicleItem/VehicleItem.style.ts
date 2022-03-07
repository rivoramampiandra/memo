import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
  activeIndicator: {
    height: '100%',
    width: 5,
    marginRight: 12,
    opacity: 0,
  },
  iosActiveItem: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
  androidActiveItem: {
    shadowColor: '#171717',
    elevation: 20,
  },
  logoContainer: {
    backgroundColor: '#F1F9FF',
    borderRadius: 75,
    alignItems: 'center',
    justifyContent: 'center',
    width: 55,
    height: 55,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  logo: {width: 40, height: 40},
  contentText: {
    borderRightWidth: 1,
    borderRightColor: '#000',
    marginLeft: 36,
    width: '30%',
  },
});

import {StatusBar, StyleSheet, useWindowDimensions} from 'react-native';
import DimensionsStyle from '../../utils/dimensionsUtils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 0,
    backgroundColor: '#fff',
  },
  defaultStyle: {},
  androidStyle: {},
  iosStyle: {
    paddingTop: DimensionsStyle.safeAreaTopHeight,
  },
});

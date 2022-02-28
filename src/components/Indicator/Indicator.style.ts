import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  indicatorContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 12,
  },
  textdefault: {fontSize: 30, fontWeight: '700'},
  highlightText: {
    marginLeft: 32,
  },
  metricContainer: {
    flexDirection: 'row',
    marginTop: 10,
    position: 'relative',
    left: -8,
  },
  unit: {
    width: 1,
    backgroundColor: '#24272D',
  },
  minUnit: {
    height: 8,
  },
  maxUnit: {
    height: 16,
  },
  unitText: {
    fontSize: 10,
    fontWeight: '600',
    flex: 1,
    minHeight: 30,
    color: '#24272D',
  },
  gradientContainer: {
    flex: 1,
    padding: 10,
    borderRadius: 30,
  },
  linkbutton: {
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    fontFamily: 'Montserat',
  },
});

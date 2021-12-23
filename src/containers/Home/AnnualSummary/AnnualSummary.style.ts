import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
  },
  summaryContainer: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 16,
  },
  topSummary: {
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomSummary: {
    flexGrow: 1,
    flexDirection: 'column',
  },
});

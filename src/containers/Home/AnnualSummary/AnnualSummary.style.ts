import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
  },
  summaryContainer: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 16,
  },
  topSummary: {
    flex: 1,
    flexDirection: 'row',
  },
  bottomSummary: {
    flexGrow: 1,
    flexDirection: 'column',
  },
  half: {
    width: '47%',
  },
});

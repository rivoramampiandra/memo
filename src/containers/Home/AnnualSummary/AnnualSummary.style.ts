import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
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
    maxWidth: '47%',
  },
});

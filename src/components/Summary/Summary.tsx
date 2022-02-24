import {Text} from '@ui-kitten/components';
import React from 'react';
import {View} from 'react-native';
import {styles} from './Summary.style';
import SummaryIndex from './SummaryIndex';

interface ISummary {
  title: string;
  unit?: string | undefined;
  count: string;
  type: string;
  size: 'default' | 'large';
  style?: any;
}

const Summary = (props: ISummary) => {
  const {title, unit, count, type, size, style} = props;
  return (
    <View style={[styles.container, style]}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        <SummaryIndex
          type={type}
          style={(size === 'large' ? styles.largeImage : styles.image) as any}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.count}>{count}</Text>
        <Text>{unit}</Text>
      </View>
    </View>
  );
};

export default Summary;

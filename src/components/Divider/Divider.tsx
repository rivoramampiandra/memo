import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './Divider.style';

const Divider = () => {
  return (
    <View style={styles.divider}>
      <Text style={styles.text}>OU</Text>
    </View>
  );
};

export default Divider;

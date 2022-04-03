import {View, StyleSheet} from 'react-native';
import React from 'react';
import {CheckBox, Text} from '@ui-kitten/components';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

const Checkbox = (props: any) => {
  return (
    <View style={styles.container}>
      <CheckBox {...props} />
      <Text category="c2" style={{marginLeft: 18}}>
        {props.label}
      </Text>
      {props.children}
    </View>
  );
};

export default Checkbox;

import {View} from 'react-native';
import React from 'react';
import {Text} from '@ui-kitten/components';

const EmptyElement = (props: {text: string}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 100,
      }}>
      <Text category="label">{props.text}</Text>
    </View>
  );
};

export default EmptyElement;

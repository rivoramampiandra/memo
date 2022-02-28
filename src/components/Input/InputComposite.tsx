import {Icon} from '@ui-kitten/components';
import React from 'react';
import {TextInput, TextInputProps, View} from 'react-native';
import {styles} from './Input.style';

const InputComposite = (props: TextInputProps) => {
  return (
    <View style={[styles.input, styles.composite]}>
      <Icon name="search-outline" fill="#8E8F92" style={styles.compositeIcon} />
      <TextInput
        {...props}
        style={{flex: 1, fontFamily: 'Montserrat-Regular', fontSize: 12}}
      />
    </View>
  );
};

export default InputComposite;

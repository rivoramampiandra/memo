import React from 'react';
import {TextInput, TextInputProps} from 'react-native';
import {styles} from './Input.style';

const Input = (props: TextInputProps) => {
  return <TextInput {...props} style={styles.input} />;
};

export default Input;

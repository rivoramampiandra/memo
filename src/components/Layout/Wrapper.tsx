import React, {ReactElement} from 'react';
import {SafeAreaView} from 'react-native';

const Wrapper = ({children}: any) => {
  return <SafeAreaView style={{flex: 1, padding: 20}}>{children}</SafeAreaView>;
};

export default Wrapper;

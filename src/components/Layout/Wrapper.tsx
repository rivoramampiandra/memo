import React, {ReactElement} from 'react';
import {SafeAreaView} from 'react-native';

const Wrapper = (component: ReactElement) => {
  return <SafeAreaView>{component}</SafeAreaView>;
};

export default Wrapper;

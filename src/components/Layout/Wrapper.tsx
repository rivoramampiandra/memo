import React from 'react';
import {Platform, SafeAreaView, useWindowDimensions, View} from 'react-native';
// import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './Wrapper.style';

const Wrapper = ({children}: any) => {
  const {height} = useWindowDimensions();

  return (
    <SafeAreaView
      // mode="padding"
      // edges={['bottom']}
      style={[
        {backgroundColor: '#fff', flex: 1},
        Platform.OS === 'ios' && styles.iosStyle,
      ]}>
      <View style={{...styles.container, height}}>{children}</View>
    </SafeAreaView>
  );
};

export default Wrapper;

import React from 'react';
import {useWindowDimensions, View} from 'react-native';
import {styles} from './Home.style';

const HomeItem = (props: any) => {
  const {width, height} = useWindowDimensions();
  return (
    <View
      style={[
        {
          width: width - 0.1 * width,
          height: height - 0.15 * height,
        },
        styles.homeItemContent,
      ]}>
      {props.component}
    </View>
  );
};

export default HomeItem;

import React from 'react';
import {View, Text, useWindowDimensions, Animated} from 'react-native';
import {styles} from './Onboarding.style';

const Paginator = ({data, scrollX}: any) => {
  const {width} = useWindowDimensions();
  return (
    <View style={{flexDirection: 'row', height: 64}}>
      {data.map((_: any, i: number) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 10, 10],
          extrapolate: 'clamp',
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            style={[styles.dot, {width: dotWidth, opacity}]}
            key={i}
          />
        );
      })}
    </View>
  );
};

export default Paginator;

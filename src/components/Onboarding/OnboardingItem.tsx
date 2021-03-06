import {Text} from '@ui-kitten/components';
import React from 'react';
import {View, useWindowDimensions, Image} from 'react-native';
import {styles} from './Onboarding.style';

const OnboardingItem = (props: any) => {
  const {item} = props;
  const {width} = useWindowDimensions();
  return (
    <View style={[styles.container, {width: width - 0.1 * width}]}>
      <Image
        source={item.image}
        style={[styles.image, {width, resizeMode: 'contain'}]}
      />
      <View>
        <Text category="h1" style={styles.title}>
          {item.title}
        </Text>
        <Text category="p1" style={styles.description}>
          {item.description}
        </Text>
      </View>
    </View>
  );
};

export default OnboardingItem;

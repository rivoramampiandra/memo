import {Text} from '@ui-kitten/components';
import React from 'react';
import {Image, View} from 'react-native';
import {styles} from './VehicleItem.style';

const VehicleItem = (props: any) => {
  const {withCloseButton = false, active = false} = props;
  const {name, register_number, distance, logo, description, created_at} =
    props.item;

  return (
    <View
      style={[
        styles.container,
        withCloseButton && active && styles.activeItem,
      ]}>
      <View style={{width: '20%'}}>
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo} resizeMode="center" />
        </View>
      </View>
      <View
        style={[
          styles.contentText,
          {
            width: '40%',
          },
        ]}>
        <Text>{name}</Text>
        <Text>{register_number}</Text>
        <Text>{distance} km</Text>
      </View>
      <View style={{width: '30%'}}>
        <Text style={{flexShrink: 1}}>
          {description} {created_at}
        </Text>
      </View>
    </View>
  );
};

export default VehicleItem;

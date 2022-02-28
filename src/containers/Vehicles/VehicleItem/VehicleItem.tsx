import {Text} from '@ui-kitten/components';
import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import image from '../../../constant/image';
import {styles} from './VehicleItem.style';
import LinearGradient from 'react-native-linear-gradient';

const VehicleItem = (props: any) => {
  const {withCloseButton = false, active = false} = props;
  // const {name, register_number, distance, logo, description, created_at} =
  //   props.item;
  const {carEntityId, lastMileageValidated, licencePlate, immatriculationDate} =
    props.item;

  const getImatriculationDate = () => {
    return new Date(immatriculationDate).getFullYear();
  };

  return (
    <TouchableOpacity>
      <View
        style={[
          styles.container,
          withCloseButton && active && styles.activeItem,
        ]}>
        <View style={{width: '20%'}}>
          <View style={styles.logoContainer}>
            <Image
              source={image.MERCEDES}
              style={styles.logo}
              resizeMode="center"
            />
          </View>
        </View>
        <View
          style={[
            styles.contentText,
            {
              width: '40%',
            },
          ]}>
          <Text category="c1">
            {'Mercedes EQX'}-{carEntityId}
          </Text>
          <Text category="c2">{licencePlate}</Text>
          <Text category="c2">{lastMileageValidated} km</Text>
        </View>
        <View style={{width: '30%'}}>
          <Text style={{flexShrink: 1}} category="c2">
            {'1.8 TFSI 118kW 160 ch'} {getImatriculationDate()}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default VehicleItem;

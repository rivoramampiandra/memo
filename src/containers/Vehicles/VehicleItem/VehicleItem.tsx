import {Text} from '@ui-kitten/components';
import React from 'react';
import {Image, Platform, TouchableOpacity, View} from 'react-native';
import image from '../../../constant/image';
import {styles} from './VehicleItem.style';
import LinearGradient from 'react-native-linear-gradient';
import {useAppDispatch, useAppSelector} from '../../../store/hooks';
import {changeCar, getCurrentCar} from '../../../store/reducers/carSlice';
import {AsyncStorageUtils} from '../../../utils/asyncStorageUtils';
import {carBrand} from '../../../constant/carModel';

const VehicleItem = (props: any) => {
  const {withCloseButton = false, active = false} = props;
  const {
    carEntityId,
    lastMileageValidated,
    licencePlate,
    immatriculationDate,
    carModel,
  } = props.item;

  const dispatch = useAppDispatch();
  const currentCar = useAppSelector(getCurrentCar);

  const getImatriculationDate = () => {
    return new Date(immatriculationDate).getFullYear();
  };

  const handleClickCar = async () => {
    if (!withCloseButton) return;
    dispatch(
      changeCar({
        id: carEntityId,
        model: (carModel && carModel.model) || null,
        brand: (carModel && carModel.brand) || null,
      }),
    );
    await AsyncStorageUtils.currentCar(carEntityId);
  };

  const isCurrent = withCloseButton && currentCar.id === carEntityId;

  return (
    <TouchableOpacity onPress={handleClickCar}>
      <View
        style={[
          styles.container,
          isCurrent &&
            (Platform.OS === 'ios'
              ? styles.iosActiveItem
              : styles.androidActiveItem),
        ]}>
        <LinearGradient
          colors={['#00CB8F', '#30AAC7']}
          start={{x: 1, y: 0}}
          end={{x: 0, y: 1}}
          style={{...styles.activeIndicator, opacity: isCurrent ? 1 : 0}}
        />
        <View style={styles.subContainer}>
          <View style={styles.logoContainer}>
            <Image
              source={(carModel && carBrand[carModel.brand]) || image.MERCEDES}
              style={styles.logo}
              resizeMode="center"
            />
          </View>
          <View style={styles.contentText}>
            <Text category="c1">
              {carModel ? carModel.brand : `Car-${carEntityId}`}
            </Text>
            <Text category="c2">{licencePlate}</Text>
            <Text category="c2">{lastMileageValidated} km</Text>
          </View>
          <View style={{width: '30%', marginLeft: 12}}>
            <Text category="c2">
              {'1.8 TFSI 118kW 160 ch'} {getImatriculationDate()}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default VehicleItem;

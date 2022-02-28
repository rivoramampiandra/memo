import {useDrawerStatus} from '@react-navigation/drawer';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {Icon, Text} from '@ui-kitten/components';
import React, {useEffect, useState} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import image from '../../../constant/image';
import {CarService} from '../../../services/car.service';
import {AsyncStorageUtils} from '../../../utils/asyncStorageUtils';
import {styles} from './Header.style';

const HeaderNav = () => {
  const isDrawerOpen = useDrawerStatus() === 'open';
  const navigation = useNavigation();

  const handleOpenDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  const getCurrentCar = async () => {
    return await AsyncStorageUtils.getCurrentCarId();
  };

  const getCarInfo = async () => {
    const carId = await getCurrentCar();
    console.log(
      '🚀 ~ file: HeaderNav.tsx ~ line 25 ~ getCarInfo ~ carId',
      carId,
    );
    if (!carId) throw new Error('Car introuvable');
    return await CarService.getCar(Number(carId));
  };

  useEffect(() => {
    getCurrentCar().then(() => {
      getCarInfo().then(res => {
        console.log(
          '🚀 ~ file: HeaderNav.tsx ~ line 32 ~ getCarInfo ~ res',
          res,
        );
      });
    });
  }, []);

  return (
    <View style={styles.navContainer}>
      <TouchableOpacity onPress={handleOpenDrawer}>
        <Icon
          name={!isDrawerOpen ? 'menu-outline' : 'close-outline'}
          fill="#000"
          style={{width: 32, height: 32}}
        />
      </TouchableOpacity>
      <Text category="h1">Ma peugeot 206</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Intervention' as any)}>
        <Image
          source={image.ADD_FILE}
          style={{width: 32, height: 32}}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderNav;

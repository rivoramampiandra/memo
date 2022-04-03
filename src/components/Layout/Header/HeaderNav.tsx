import {useDrawerStatus} from '@react-navigation/drawer';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {Icon, Text} from '@ui-kitten/components';
import React, {useEffect, useState} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import image from '../../../constant/image';
import {useAppSelector} from '../../../store/hooks';
import {getCurrentCar} from '../../../store/reducers/carSlice';
import {styles} from './Header.style';

const HeaderNav = () => {
  const isDrawerOpen = useDrawerStatus() === 'open';
  const navigation = useNavigation();
  const currentCar = useAppSelector(getCurrentCar);

  const handleOpenDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  const getCarInfo = async () => {};

  useEffect(() => {}, []);

  return (
    <View style={styles.navContainer}>
      <TouchableOpacity onPress={handleOpenDrawer}>
        <Icon
          name={!isDrawerOpen ? 'menu-outline' : 'close-outline'}
          fill="#000"
          style={{width: 32, height: 32}}
        />
      </TouchableOpacity>
      {currentCar && currentCar.id && (
        <Text category="h1">
          Ma{' '}
          {currentCar.model && currentCar.brand
            ? `${currentCar.brand} ${currentCar.model}`
            : `car ${currentCar.id || ''}`}
        </Text>
      )}
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

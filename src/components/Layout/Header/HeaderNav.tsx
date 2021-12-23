import {useDrawerStatus} from '@react-navigation/drawer';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {Icon, Text} from '@ui-kitten/components';
import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import image from '../../../constant/image';
import {styles} from './Header.style';

const HeaderNav = (props: any) => {
  const isDrawerOpen = useDrawerStatus() === 'open';
  const navigation = useNavigation();

  const handleOpenDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };
  return (
    <View style={styles.navContainer}>
      <TouchableOpacity onPress={handleOpenDrawer}>
        <Icon
          name={!isDrawerOpen ? 'menu-outline' : 'close-outline'}
          fill="#000"
          style={{width: 32, height: 32}}
        />
      </TouchableOpacity>
      <Text style={styles.navTitle}>Ma peugeot 206</Text>
      <TouchableOpacity>
        <Icon
          name="file-text-outline"
          fill="#000"
          style={{width: 32, height: 32}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderNav;

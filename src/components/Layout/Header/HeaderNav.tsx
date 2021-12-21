import {Icon} from '@ui-kitten/components';
import React from 'react';
import {View, Image, Text} from 'react-native';
import image from '../../../constant/image';
import {styles} from './Header.style';

const HeaderNav = () => {
  return (
    <View>
      <View>
        <Icon name="menu-outline" fill="#000" style={{width: 32, height: 32}} />
      </View>
      <Text>Ma peugeot 206</Text>
      <Icon
        name="file-text-outline"
        fill="#000"
        style={{width: 32, height: 32}}
      />
    </View>
  );
};

export default HeaderNav;

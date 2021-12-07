import {Icon} from '@ui-kitten/components';
import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {styles} from './Header.style';

const Header = ({navigation, goBack = false}: any) => {
  return (
    <View style={styles.container}>
      {goBack && (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.back}>
          <Icon
            name="arrow-ios-back"
            fill="#000"
            style={{width: 24, height: 24}}
          />
        </TouchableOpacity>
      )}
      <Image
        source={require('../../../assets/images/h-logo.png')}
        style={styles.logo}
        resizeMode={'center'}
      />
    </View>
  );
};

export default Header;

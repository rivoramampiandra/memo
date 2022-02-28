import React from 'react';
import {Text} from '@ui-kitten/components';
import {Image, View} from 'react-native';
import image from '../../constant/image';
import {styles} from './Intervention.style';

const NoIntervention = () => {
  return (
    <View>
      <Image
        source={image.NO_ITEM}
        style={styles.noItemImage}
        resizeMode="contain"
      />
      <Text style={styles.noItemText}>
        Malheureusement nous n’avons pas détecté d’intervention…
      </Text>
    </View>
  );
};

export default NoIntervention;

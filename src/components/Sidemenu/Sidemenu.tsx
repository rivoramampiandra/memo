import {Divider} from '@ui-kitten/components';
import React from 'react';
import {View, Text, Image, useWindowDimensions} from 'react-native';
import images from '../../constant/image';
import {styles} from './sidemenu.style';
const Sidemenu = (props: any) => {
  const width = useWindowDimensions();

  return (
    <View style={styles.container}>
      <View>
        <Text>Accueil</Text>
        <Divider />
        <Text>Contrôlez le kilometrage</Text>
        <Divider />
        <Text>Mes véhivules</Text>
        <Divider />
        <Text>Paramètres</Text>
        <Divider />
        <Text>Nous contacter</Text>
        <Divider />
        <Text>CGU ET CGV</Text>
        <Divider />
        <Text>DECONNEXION</Text>
        <Divider />
      </View>
      <View>
        <Image source={images.LOGO} style={styles.logo} resizeMode="contain" />
        <Text>Version 1.0</Text>
      </View>
    </View>
  );
};

export default Sidemenu;

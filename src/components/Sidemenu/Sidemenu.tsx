import {Divider, Text} from '@ui-kitten/components';
import React from 'react';
import {View, Image, useWindowDimensions, TouchableOpacity} from 'react-native';
import images from '../../constant/image';
import {styles} from './sidemenu.style';

const Sidemenu = (props: any) => {
  const width = useWindowDimensions();

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity style={[styles.item, styles.activeItem]}>
          <Text style={styles.textItem}>Accueil</Text>
          <Divider style={styles.miniDivider} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.textItem}>Contrôlez le kilometrage</Text>
          <Divider style={styles.miniDivider} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.textItem}>Mes véhivules</Text>
          <Divider style={styles.miniDivider} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.textItem}>Paramètres</Text>
          <Divider style={styles.miniDivider} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.textItem}>Nous contacter</Text>
          <Divider style={styles.miniDivider} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.textItem}>CGU ET CGV</Text>
          <Divider style={styles.miniDivider} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.textItem}>DECONNEXION</Text>
          <Divider style={styles.miniDivider} />
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Image source={images.LOGO} style={styles.logo} resizeMode="center" />
        <Text>Version 1.0</Text>
      </View>
    </View>
  );
};

export default Sidemenu;

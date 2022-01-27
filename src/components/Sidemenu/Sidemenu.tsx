import {Divider, Text} from '@ui-kitten/components';
import React, {useState} from 'react';
import {View, Image, TouchableOpacity, ScrollView} from 'react-native';
import images from '../../constant/image';
import Conditions from '../Modal/Content/Conditions';
import Modal from '../Modal/Modal';
import {styles} from './sidemenu.style';

const Sidemenu = (props: any) => {
  const {navigation} = props;

  const goto = (path: string) => {
    if (!path) return;
    navigation.navigate(path);
  };

  const [modalVisibility, setModalVisibility] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          style={[styles.item, styles.activeItem]}
          onPress={() => goto('Home')}>
          <Text style={styles.textItem}>Accueil</Text>
          <Divider style={styles.miniDivider} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.item}
          onPress={() => goto('Kilometrage')}>
          <Text style={styles.textItem}>Contrôlez le kilometrage</Text>
          <Divider style={styles.miniDivider} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => goto('Vehicles')}>
          <Text style={styles.textItem}>Mes véhivules</Text>
          <Divider style={styles.miniDivider} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => goto('Setting')}>
          <Text style={styles.textItem}>Paramètres</Text>
          <Divider style={styles.miniDivider} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.textItem}>Nous contacter</Text>
          <Divider style={styles.miniDivider} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.item}
          onPress={() => setModalVisibility(true)}>
          <Text style={styles.textItem}>CGU ET CGV</Text>
          <Divider style={styles.miniDivider} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => goto('SignIn')}>
          <Text style={styles.textItem}>DECONNEXION</Text>
          <Divider style={styles.miniDivider} />
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.footer}>
        <Image source={images.LOGO} style={styles.logo} resizeMode="center" />
        <Text>Version 1.0</Text>
      </View>

      <Modal
        modalVisibility={modalVisibility}
        closeModal={() => setModalVisibility(false)}
        component={<Conditions />}
      />
    </View>
  );
};

export default Sidemenu;

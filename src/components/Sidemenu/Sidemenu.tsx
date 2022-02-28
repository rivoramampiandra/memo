import {Divider, Text} from '@ui-kitten/components';
import React, {useState} from 'react';
import {View, Image, TouchableOpacity, ScrollView} from 'react-native';
import images from '../../constant/image';
import {AuthService} from '../../services/auth.service';
import {useAppDispatch} from '../../store/hooks';
import {setSignOut} from '../../store/reducers/authSlice';
import Conditions from '../Modal/Content/Conditions';
import Modal from '../Modal/Modal';
import {styles} from './sidemenu.style';

const Sidemenu = (props: any) => {
  const {navigation} = props;
  const dispatch = useAppDispatch();

  const goto = (path: string) => {
    if (!path) return;
    navigation.navigate(path);
  };

  const [modalVisibility, setModalVisibility] = useState(false);

  const logout = async () => {
    await AuthService.logout();
    dispatch(setSignOut());
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          style={[styles.item, styles.activeItem]}
          onPress={() => goto('Home')}>
          <Text style={styles.textItem} category="c1">
            Accueil
          </Text>
          <Divider style={styles.miniDivider} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.item}
          onPress={() => goto('Kilometrage')}>
          <Text style={styles.textItem} category="c1">
            Contrôlez le kilometrage
          </Text>
          <Divider style={styles.miniDivider} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => goto('Vehicles')}>
          <Text style={styles.textItem} category="c1">
            Mes véhivules
          </Text>
          <Divider style={styles.miniDivider} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => goto('Setting')}>
          <Text style={styles.textItem} category="c1">
            Paramètres
          </Text>
          <Divider style={styles.miniDivider} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.textItem} category="c1">
            Nous contacter
          </Text>
          <Divider style={styles.miniDivider} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.item}
          onPress={() => setModalVisibility(true)}>
          <Text style={styles.textItem} category="c1">
            CGU ET CGV
          </Text>
          <Divider style={styles.miniDivider} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={logout}>
          <Text style={styles.textItem} category="c1">
            DECONNEXION
          </Text>
          <Divider style={styles.miniDivider} />
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.footer}>
        <Image source={images.LOGO} style={styles.logo} resizeMode="center" />
        <Text category="c1" appearance="hint">
          Version 1.0
        </Text>
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

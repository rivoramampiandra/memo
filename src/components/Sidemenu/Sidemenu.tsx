import {useNavigationState, useRoute} from '@react-navigation/native';
import {Divider, Text} from '@ui-kitten/components';
import React, {useEffect, useState} from 'react';
import {View, Image, TouchableOpacity, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
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

  const routes = [
    {
      path: 'Home',
      label: 'Accueil',
    },
    {
      path: 'Kilometrage',
      label: 'Contrôlez le kilometrage',
    },
    {
      path: 'Vehicles',
      label: 'Mes véhivules',
    },
    {
      path: 'Setting',
      label: 'Paramètres',
    },
    {
      path: '',
      label: 'Nous contacter',
    },
  ];

  const GRADIENT_COLORS = ['#00CB8F', '#30AAC7'];

  const screenName = useNavigationState(
    state => state && state.routes[state.index].name,
  );

  const isCurrent = (path: string) =>
    path === screenName ? {opacity: 1} : {opacity: 0};

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {routes.map((route, index) => (
          <TouchableOpacity
            key={index}
            style={styles.item}
            onPress={() => goto(route.path)}>
            <LinearGradient
              colors={GRADIENT_COLORS}
              start={{x: 1, y: 0}}
              end={{x: 0, y: 1}}
              style={[styles.activeIndicator, isCurrent(route.path)]}
            />
            <View style={styles.itemTextContainer}>
              <Text style={styles.textItem} category="c1">
                {route.label}
              </Text>
              <Divider style={styles.miniDivider} />
            </View>
          </TouchableOpacity>
        ))}
        <TouchableOpacity
          style={styles.item}
          onPress={() => setModalVisibility(true)}>
          <LinearGradient
            colors={GRADIENT_COLORS}
            start={{x: 1, y: 0}}
            end={{x: 0, y: 1}}
            style={{...styles.activeIndicator, opacity: 0}}
          />
          <View style={styles.itemTextContainer}>
            <Text style={styles.textItem} category="c1">
              CGU ET CGV
            </Text>
            <Divider style={styles.miniDivider} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={logout}>
          <LinearGradient
            colors={GRADIENT_COLORS}
            start={{x: 1, y: 0}}
            end={{x: 0, y: 1}}
            style={{...styles.activeIndicator, opacity: 0}}
          />
          <View style={styles.itemTextContainer}>
            <Text style={styles.textItem} category="c1">
              DECONNEXION
            </Text>
            <Divider style={styles.miniDivider} />
          </View>
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

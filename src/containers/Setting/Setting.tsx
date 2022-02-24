import {Button, Text} from '@ui-kitten/components';
import React from 'react';
import {View, ScrollView, FlatList} from 'react-native';
import Input from '../../components/Input/Input';
import HeaderNav from '../../components/Layout/Header/HeaderNav';
import Wrapper from '../../components/Layout/Wrapper';
import image from '../../constant/image';
import ItemWithDelete from './ItemWithDelete';

const vehicles = [
  {
    name: 'Renault Laguna',
    register_number: 'AB-400-EJ',
    distance: '160 624',
    logo: image.RENAULT,
    description: '1.8 TFSI 118kW 160 ch',
    created_at: '2008',
  },
  {
    name: 'Audi A4 Avant',
    register_number: 'AB-400-EJ',
    distance: '160 624',
    logo: image.AUDI,
    description: '1.8 TFSI 118kW 160 ch',
    created_at: '2008',
  },
  {
    name: 'Peugeot 206',
    register_number: 'AB-400-EJ',
    distance: '160 624',
    logo: image.PEUGEOT,
    description: '1.8 TFSI 118kW 160 ch',
    created_at: '2008',
  },
  {
    name: 'Peugeot 3008',
    register_number: 'AB-400-EJ',
    distance: '160 624',
    logo: image.PEUGEOT,
    description: '1.8 TFSI 118kW 160 ch',
    created_at: '2021',
  },
];

const Setting = () => {
  return (
    <Wrapper>
      <HeaderNav />
      <ScrollView
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}>
        <View style={{marginVertical: 16}}>
          <Text category="s1">Mes informations</Text>
        </View>
        <View style={{marginVertical: 16}}>
          <View>
            <Text category="label">Nom</Text>
            <Input />
          </View>
          <View>
            <Text category="label">Prénom</Text>
            <Input />
          </View>
          <View>
            <Text category="label">Email</Text>
            <Input />
          </View>
          <View>
            <Text category="label">Ancien mot de passse</Text>
            <Input secureTextEntry />
          </View>
          <View>
            <Text category="label">Confirmation mot de passe</Text>
            <Input secureTextEntry />
          </View>
        </View>
        <View style={{marginVertical: 16}}>
          <Text style={{fontSize: 20}}>Mes véhicules</Text>
          <View style={{flex: 1}}>
            <FlatList
              nestedScrollEnabled={true}
              data={vehicles}
              scrollEnabled={false}
              renderItem={({item}) => <ItemWithDelete item={item} />}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Button
            style={{flex: 1, marginHorizontal: 5, borderRadius: 10}}
            status="primary">
            Enregistrer
          </Button>
          <Button style={{flex: 1, borderRadius: 10}} status="danger">
            Annuler
          </Button>
        </View>
      </ScrollView>
    </Wrapper>
  );
};

export default Setting;

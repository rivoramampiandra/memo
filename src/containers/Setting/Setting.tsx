import {Button, Text} from '@ui-kitten/components';
import React, {useEffect, useState} from 'react';
import {View, ScrollView, FlatList} from 'react-native';
import Input from '../../components/Input/Input';
import HeaderNav from '../../components/Layout/Header/HeaderNav';
import Wrapper from '../../components/Layout/Wrapper';
import image from '../../constant/image';
import {CarService} from '../../services/car.service';
import {useAppSelector} from '../../store/hooks';
import {getCurrentUser} from '../../store/reducers/authSlice';
import ItemWithDelete from './ItemWithDelete';

const defaultValues = {
  email: '',
  password: '',
};

const Setting = () => {
  const {firstName, lastName} = useAppSelector(getCurrentUser);
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const getCars = async () => {
      const cars: any = await CarService.getCars();
      if (!cars) return;
      setVehicles(cars);
    };
    getCars();
  }, []);

  const renderItem = ({item}: any) => <ItemWithDelete item={item} />;

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
            <Input editable={false} value={lastName || ''} />
          </View>
          <View>
            <Text category="label">Prénom</Text>
            <Input editable={false} value={firstName || ''} />
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
          <Text category="s1">Mes véhicules</Text>
          <View style={{flex: 1}}>
            <FlatList
              data={vehicles}
              scrollEnabled={false}
              renderItem={renderItem}
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

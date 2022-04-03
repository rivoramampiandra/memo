import {useNavigation} from '@react-navigation/native';
import {Button, Text} from '@ui-kitten/components';
import React, {useEffect, useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {View, ScrollView, FlatList, Image} from 'react-native';
import {globalStyle} from '../../assets/style';
import Input from '../../components/Input/Input';
import HeaderNav from '../../components/Layout/Header/HeaderNav';
import Wrapper from '../../components/Layout/Wrapper';
import image from '../../constant/image';
import {EMAIL_PATTER} from '../../constant/pattern';
import {CarService} from '../../services/car.service';
import {UserService} from '../../services/user.service';
import {useAppSelector} from '../../store/hooks';
import {getCurrentUser, getUserId} from '../../store/reducers/authSlice';
import ItemWithDelete from './ItemWithDelete';
import {styles} from './Setting.style';

const Setting = () => {
  const {firstName, lastName, email} = useAppSelector(getCurrentUser);
  const [vehicles, setVehicles] = useState([]);
  const navigation = useNavigation();
  const userId = useAppSelector(getUserId);
  const [error, setError] = useState<boolean | null>(null);

  const getCars = async () => {
    const cars: any = await CarService.getCars();
    if (!cars) return;
    setVehicles(cars);
  };

  useEffect(() => {
    getCars();
    return () => {
      initError();
    };
  }, []);

  const defaultValues = {
    email: '',
    password: '',
    confirmPassword: '',
  };

  const {
    control,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm({
    defaultValues,
  });

  const onSubmit = async (data: any) => {
    try {
      await updateUserInfo(data);
    } catch (error) {
      console.error(error);
    }
  };

  const updateUserInfo = async (data: {password: string; email: string}) => {
    try {
      await Promise.all([
        data.email && UserService.updateEmail(Number(userId), data.email),
        data.password && UserService.updatePassword(data.password),
      ]);
      reset(defaultValues);
    } catch (error) {
      return error;
    }
  };

  const handleDeleteCar = async (carId: number) => {
    try {
      await CarService.softDeleteCar(Number(userId), carId);
      await getCars();
    } catch (error) {
      console.error(error);
    }
  };

  const renderItem = ({item}: any) => (
    <ItemWithDelete
      item={item}
      handleDelete={() => handleDeleteCar(item.carEntityId)}
    />
  );

  const initError = () => setError(null);

  return (
    <Wrapper>
      <View>
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
              <Text category="label">E-mail</Text>
              <Controller
                control={control}
                rules={{
                  required: false,
                  pattern: EMAIL_PATTER,
                }}
                render={({field: {onChange, onBlur, value}}) => (
                  <Input
                    onBlur={onBlur}
                    onChangeText={e => {
                      onChange(e);
                      initError();
                    }}
                    value={email || ''}
                  />
                )}
                name="email"
              />
              {errors.email && (
                <Text style={globalStyle.textError} category="label">
                  Email invalide.
                </Text>
              )}
            </View>
            <View>
              <Text category="label">Ancien mot de passse</Text>
              <Input secureTextEntry editable={false} />
            </View>
            <View>
              <Text category="label">Nouveau mot de passe</Text>
              <Controller
                control={control}
                rules={{
                  required: false,
                }}
                render={({field: {onChange, onBlur, value}}) => (
                  <>
                    <Input
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      secureTextEntry
                    />
                  </>
                )}
                name="password"
              />
              {errors.password && (
                <Text style={globalStyle.textError}>Ce champ est requis</Text>
              )}
            </View>
            <View>
              <Text category="label">Confirmation de mot de passe</Text>

              <Controller
                control={control}
                rules={{
                  required: false,
                }}
                render={({field: {onChange, onBlur, value}}) => (
                  <Input
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    secureTextEntry
                  />
                )}
                name="confirmPassword"
              />
              {errors.confirmPassword && (
                <Text style={globalStyle.textError}>
                  Le mot de passe doit être identique
                </Text>
              )}
            </View>
          </View>
          <View>
            {error && (
              <Text style={globalStyle.textError} category="c2">
                Mot de passe ou email invalide !
              </Text>
            )}
          </View>
          <View style={{marginTop: 16, marginBottom: '20%'}}>
            <Text category="s1">Mes véhicules</Text>
            <View style={{flex: 1}}>
              {vehicles &&
                vehicles.map((vehicle: any, index: number) => (
                  <ItemWithDelete
                    key={index}
                    item={vehicle}
                    handleDelete={() => handleDeleteCar(vehicle.carEntityId)}
                  />
                ))}
            </View>
          </View>
        </ScrollView>
        <View
          style={{
            position: 'absolute',
            bottom: 26,
            width: '100%',
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Button
              onPress={handleSubmit(onSubmit)}
              style={{flex: 1, marginHorizontal: 5, borderRadius: 10}}
              status="primary">
              Enregistrer
            </Button>
            <Button
              style={{flex: 1, borderRadius: 10}}
              status="danger"
              onPress={() => navigation.goBack()}>
              Annuler
            </Button>
          </View>
        </View>
      </View>
    </Wrapper>
  );
};

export default Setting;

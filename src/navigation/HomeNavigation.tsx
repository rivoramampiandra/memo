import React, {useEffect} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../containers/Home/Home';
import Sidemenu from '../components/Sidemenu/Sidemenu';
import {Kilometrage} from '../containers/Kilometrage';
import {Intervention} from '../containers/Intervention';
import {Vehicles} from '../containers/Vehicles';
import {Setting} from '../containers/Setting';
import {History} from '../containers/History';
import {PDFViewer} from '../containers/PDFViewer';
import {Promotions} from '../containers/Promotion';
import AddCar from '../containers/Vehicles/AddCar/AddCar';
import {useNavigation} from '@react-navigation/native';
import {AsyncStorageUtils} from '../utils/asyncStorageUtils';
import {useAppDispatch, useAppSelector} from '../store/hooks';
import {changeCar, getCurrentCar} from '../store/reducers/carSlice';
import {CarService} from '../services/car.service';
import HeaderNav from '../components/Layout/Header/HeaderNav';
import MainStackNavigation from './MainNavigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const {Navigator, Screen} = createDrawerNavigator();

const HomeStack = createNativeStackNavigator();

const HomeNavigator = () => {};

const HomeNavigation = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const {currentCar} = useAppSelector(getCurrentCar);

  useEffect(() => {
    const getAsynCar = async () => {
      const carId: string | null = await AsyncStorageUtils.getCurrentCarId();
      if (!carId) navigation.navigate('Vehicles' as any);
      const car = await CarService.getCar(Number(carId) || null);
      dispatch(
        changeCar({
          id: Number(carId),
          model: car.data.carModel ? car.data.carModel.model : null,
          brand: car.data.carModel ? car.data.carModel.brand : null,
        }),
      );
    };
    getAsynCar();
  }, [currentCar]);

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: '#fff',
          borderBottomRightRadius: 12,
        },
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
      }}
      initialRouteName="Home"
      drawerContent={props => <Sidemenu {...props} />}>
      <Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: () => <HeaderNav />,
        }}
      />
      <Screen name="Setting" component={Setting} />
      <Screen name="Kilometrage" component={Kilometrage} />
      <Screen name="Intervention" component={Intervention} />
      <Screen name="Vehicles" component={Vehicles} />
      <Screen name="PDFViewer" component={PDFViewer} />
      <Screen name="History" component={History} />
      <Screen name="Promotions" component={Promotions} />
      <Screen name="AddCar" component={AddCar} />
    </Navigator>
  );
};

export default HomeNavigation;

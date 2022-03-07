import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {History} from '../containers/History';
import Home from '../containers/Home/Home';
import {Intervention} from '../containers/Intervention';
import {Kilometrage} from '../containers/Kilometrage';
import {PDFViewer} from '../containers/PDFViewer';
import {Promotions} from '../containers/Promotion';
import {Setting} from '../containers/Setting';
import {Vehicles} from '../containers/Vehicles';
import AddCar from '../containers/Vehicles/AddCar/AddCar';
import HomeNavigation from './HomeNavigation';

const {Screen, Navigator} = createNativeStackNavigator();

function MainStackNavigation() {
  return (
    <Navigator
      screenOptions={
        {
          //@ts-ignore: next-line
          // headerMode: 'screen' as string,
          // headerTintColor: 'transparent',
          // headerStyle: {backgroundColor: 'transparent'},
        }
      }>
      <Screen name="Home" component={HomeNavigation} />
      <Screen name="Kilometrage" component={Kilometrage} />
      <Screen name="Intervention" component={Intervention} />
      <Screen name="Vehicles" component={Vehicles} />
      <Screen name="Setting" component={Setting} />
      <Screen name="PDFViewer" component={PDFViewer} />
      <Screen name="History" component={History} />
      <Screen name="Promotions" component={Promotions} />
      <Screen name="AddCar" component={AddCar} />
    </Navigator>
  );
}

export default MainStackNavigation;

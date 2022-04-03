import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {useWindowDimensions} from 'react-native';
import HeaderNav from '../components/Layout/Header/HeaderNav';
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
  const {height} = useWindowDimensions();
  return (
    <Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          // * remove bottom border of header in React
          // elevation: 0,
          // shadowOpacity: 0,
          // borderBottomWidth: 0,
          backgroundColor: '#fff',
        },
        headerTintColor: '#000',
        headerBackTitle: 'Back',
      }}>
      <Screen
        name="DrawerHome"
        component={HomeNavigation}
        options={{headerShown: true}}
      />
      <Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: () => <HeaderNav />,
        }}
      />
      <Screen name="Kilometrage" component={Kilometrage} />
      <Screen name="Intervention" component={Intervention} />
      <Screen name="Vehicles" component={Vehicles} />
      <Screen
        name="Setting"
        component={Setting}
        options={{
          headerTitle: () => <HeaderNav />,
        }}
      />
      <Screen name="PDFViewer" component={PDFViewer} />
      <Screen name="History" component={History} />
      <Screen name="Promotions" component={Promotions} />
      <Screen name="AddCar" component={AddCar} />
    </Navigator>
  );
}

export default MainStackNavigation;

import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../containers/Home/Home';
import Sidemenu from '../components/Sidemenu/Sidemenu';
import SignIn from '../containers/Auth/SignIn/SignIn';
import AuthNavigation from './AuthNavigation';
import {Kilometrage} from '../containers/Kilometrage';
import {Intervention} from '../containers/Intervention';
import {Vehicles} from '../containers/Vehicles';
import {Setting} from '../containers/Setting';
import SignUp from '../containers/Auth/SignUp/SignUp';
import {History} from '../containers/History';
import {PDFViewer} from '../containers/PDFViewer';

const {Navigator, Screen} = createDrawerNavigator();

const HomeNavigation = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: '#fff',
          borderBottomRightRadius: 12,
        },
      }}
      initialRouteName="SignIn"
      drawerContent={props => <Sidemenu {...props} />}>
      <Screen name="AuthNavigation" component={AuthNavigation} />
      <Screen name="Home" component={Home} />
      <Screen name="Kilometrage" component={Kilometrage} />
      <Screen name="SignIn" component={SignIn} />
      <Screen name="SignUp" component={SignUp} />
      <Screen name="Intervention" component={Intervention} />
      <Screen name="Vehicles" component={Vehicles} />
      <Screen name="Setting" component={Setting} />
      <Screen name="PDFViewer" component={PDFViewer} />
      <Screen name="History" component={History} />
    </Navigator>
  );
};

export default HomeNavigation;

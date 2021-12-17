import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../containers/Home/Home';
import Sidemenu from '../components/Sidemenu/Sidemenu';
import {NavigationContainer} from '@react-navigation/native';
import SignIn from '../containers/Auth/SignIn/SignIn';
import AuthNavigation from './AuthNavigation';

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
      <Screen name="SignIn" component={SignIn} />
    </Navigator>
  );
};

export default HomeNavigation;

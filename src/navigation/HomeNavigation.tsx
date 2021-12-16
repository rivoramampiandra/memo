import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../containers/Home/Home';
import Sidemenu from '../components/Sidemenu/Sidemenu';
import {NavigationContainer} from '@react-navigation/native';
import SignIn from '../containers/Auth/SignIn/SignIn';

const {Navigator, Screen} = createDrawerNavigator();

const HomeNavigation = () => {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="Home"
        drawerContent={props => <Sidemenu {...props} />}>
        <Screen name="Home" component={Home} />
        <Screen name="SignIn" component={SignIn} />
      </Navigator>
    </NavigationContainer>
  );
};

export default HomeNavigation;

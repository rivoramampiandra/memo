import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import SignIn from '../containers/Auth/SignIn/SignIn';
import SignUp from '../containers/Auth/SignUp/SignUp';
import Home from '../containers/Home/Home';
import HomeNavigation from './HomeNavigation';

const {Screen, Navigator} = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <Navigator initialRouteName="SignIn" screenOptions={{headerShown: false}}>
      <Screen name="SignIn" component={SignIn} />
      <Screen name="SignUp" component={SignUp} />
      <Screen name="Home" component={Home} />
      <Screen name="HomeNavigation" component={HomeNavigation} />
    </Navigator>
  );
};

export default AuthNavigation;

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import SignIn from '../containers/Auth/SignIn/SignIn';
import SignUp from '../containers/Auth/SignUp/SignUp';

const {Screen, Navigator} = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <Navigator initialRouteName="SignIn" screenOptions={{headerShown: false}}>
      <Screen name="SignIn" component={SignIn} />
      <Screen name="SignUp" component={SignUp} />
    </Navigator>
  );
};

export default AuthNavigation;

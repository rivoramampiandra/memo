import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import SignIn from '../containers/Auth/SignIn/SignIn';
import SignUp from '../containers/Auth/SignUp/SignUp';
import AddCar from '../containers/Vehicles/AddCar/AddCar';

const {Screen, Navigator} = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <Navigator initialRouteName="SignIn" screenOptions={{headerShown: false}}>
      <Screen name="SignIn" component={SignIn} />
      <Screen name="SignUp" component={SignUp} />
      <Screen name="AddCar" component={AddCar} />
    </Navigator>
  );
};

export default AuthNavigation;

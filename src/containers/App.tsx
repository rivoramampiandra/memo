import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import SignIn from './Auth/SignIn';
import SignUp from './Auth/SignUp/SignUp';

const {Screen, Navigator} = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Navigator initialRouteName="SignIn" screenOptions={{headerShown: false}}>
        <Screen name="SignIn" component={SignIn} />
        <Screen name="SignUp" component={SignUp} />
      </Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;

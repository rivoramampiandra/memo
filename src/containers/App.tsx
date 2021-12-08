import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import SignIn from './Auth/SignIn/SignIn';
import SignUp from './Auth/SignUp/SignUp';
import Conditions from './Conditions/Conditions';
import Home from './Home/Home';

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
        <Screen name="Home" component={Home} />
        <Screen name="Conditions" component={Conditions} />
      </Navigator>
    </NavigationContainer>
  );
};

export default App;

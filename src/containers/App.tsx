import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import SignIn from './Auth/SignIn/SignIn';
import SignUp from './Auth/SignUp/SignUp';
import * as eva from '@eva-design/eva';
import {default as defaultTheme} from '../theme/default-theme.json';
import {default as mapping} from '../../mapping.json';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import HomeNavigation from '../navigation/HomeNavigation';
import Home from './Home/Home';

const {Screen, Navigator} = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider
        {...eva}
        theme={{...eva.light, ...defaultTheme}}
        customMapping={mapping as any}>
        <NavigationContainer>
          <Navigator
            initialRouteName="SignIn"
            screenOptions={{headerShown: false}}>
            <Screen name="SignIn" component={SignIn} />
            <Screen name="SignUp" component={SignUp} />
            <Screen name="Home" component={Home} />
          </Navigator>
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
};

export default App;

import {NavigationContainer} from '@react-navigation/native';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import * as eva from '@eva-design/eva';
import {default as defaultTheme} from '../theme/default-theme.json';
import {default as mapping} from '../../mapping.json';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import 'react-native-gesture-handler';
import AuthNavigation from '../navigation/AuthNavigation';

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
          <AuthNavigation />
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
};

export default App;

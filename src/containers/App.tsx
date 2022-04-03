import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import * as eva from '@eva-design/eva';
import {default as defaultTheme} from '../theme/default-theme.json';
import {default as mapping} from '../../mapping.json';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {Provider} from 'react-redux';
import {store} from '../store';
import AppRoute from '../navigation/AppRoute';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {LogBox} from 'react-native';

//FIXME: remove after update react-native-gesture handler
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider
        {...eva}
        theme={{...eva.light, ...defaultTheme}}
        customMapping={mapping as any}>
        <AppRoute />
      </ApplicationProvider>
    </Provider>
  );
};

export default App;

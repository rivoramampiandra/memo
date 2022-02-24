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

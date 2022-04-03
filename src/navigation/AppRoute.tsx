import React, {createContext, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigation from './AuthNavigation';
import {AsyncStorageUtils} from '../utils/asyncStorageUtils';
import {getLoginState, setLogin, setSignIn} from '../store/reducers/authSlice';
import {useAppDispatch, useAppSelector} from '../store/hooks';
import MainStackNavigation from './MainNavigation';
import HomeNavigation from './HomeNavigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export const AuthContext = createContext([]);

const AppRoute = () => {
  const loginState = useAppSelector(getLoginState);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const bootstrapAsync = async () => {
      try {
        const userToken = await AsyncStorageUtils.getToken();
        const userId = await AsyncStorageUtils.getUserID();
        const firstName = await AsyncStorageUtils.getUserFirstName();
        const lastName = await AsyncStorageUtils.getUserLastName();
        dispatch(setLogin(!!userToken));
        dispatch(setSignIn({id: Number(userId), lastName, firstName}));
      } catch (error) {}
    };
    bootstrapAsync();
  }, [loginState]);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {loginState ? <MainStackNavigation /> : <AuthNavigation />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default AppRoute;

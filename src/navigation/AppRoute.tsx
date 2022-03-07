import React, {createContext, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeNavigation from './HomeNavigation';
import AuthNavigation from './AuthNavigation';
import {AsyncStorageUtils} from '../utils/asyncStorageUtils';
import {getLoginState, setLogin, setSignIn} from '../store/reducers/authSlice';
import {useAppDispatch, useAppSelector} from '../store/hooks';

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
    <NavigationContainer>
      {loginState ? <HomeNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
};

export default AppRoute;

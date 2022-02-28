import React, {createContext, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeNavigation from './HomeNavigation';
import AuthNavigation from './AuthNavigation';
import {AsyncStorageUtils} from '../utils/asyncStorageUtils';
import {getLoginState, setLogin} from '../store/reducers/authSlice';
import {useAppDispatch, useAppSelector} from '../store/hooks';

export const AuthContext = createContext([]);

const AppRoute = () => {
  const loginState = useAppSelector(getLoginState);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;
      try {
        userToken = await AsyncStorageUtils.getToken();
        dispatch(setLogin(!!userToken));
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

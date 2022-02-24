import React, {createContext, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeNavigation from './HomeNavigation';
import AuthNavigation from './AuthNavigation';
import {AsyncStorageUtils} from '../utils/asyncStorageUtils';
import {getLoginState, setSignIn} from '../store/reducers/authSlice';
import {useAppDispatch, useAppSelector} from '../store/hooks';

export const AuthContext = createContext([]);

const AppRoute = () => {
  const loginState = useAppSelector(getLoginState);
  const [logged, setLogged] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;
      try {
        userToken = await AsyncStorageUtils.getToken();
        setLogged(!!userToken);
        dispatch(setSignIn({isLoggedIn: !!userToken}));
      } catch (error) {}
    };
    bootstrapAsync();
  }, []);

  return (
    <NavigationContainer>
      {logged ? <HomeNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
};

export default AppRoute;

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useContext, useEffect} from 'react';
import SignIn from '../containers/Auth/SignIn/SignIn';
import SignUp from '../containers/Auth/SignUp/SignUp';
import Home from '../containers/Home/Home';
import {AuthContext} from '../providers/AuthProvider';
import {AsyncStorageUtils} from '../utils/asyncStorageUtils';

const {Screen, Navigator} = createNativeStackNavigator();

const AuthNavigation = () => {
  const {token, setToken} = useContext(AuthContext);

  useEffect(() => {
    AsyncStorageUtils.getToken().then(res => {
      setToken(res);
    });
  }, []);

  return (
    <Navigator initialRouteName="SignIn" screenOptions={{headerShown: false}}>
      {token ? (
        <>
          <Screen name="SignIn" component={SignIn} />
          <Screen name="SignUp" component={SignUp} />
        </>
      ) : (
        <>
          <Screen name="Home" component={Home} />
        </>
      )}
    </Navigator>
  );
};

export default AuthNavigation;

import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, Text, useColorScheme} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaView>
      <Text>Login</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;

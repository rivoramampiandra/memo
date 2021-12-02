import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, Text, useColorScheme} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';

const App = () => {
  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await RNBootSplash.hide({fade: true});
    });
  }, []);

  return (
    <SafeAreaView>
      <Text>Login</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;

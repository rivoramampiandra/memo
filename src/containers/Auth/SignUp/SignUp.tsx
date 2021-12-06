import React from 'react';
import {Button, SafeAreaView, Text} from 'react-native';

const SignUp = ({navigation}: any) => {
  return (
    <SafeAreaView>
      <Text>Sing Up</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
};

export default SignUp;

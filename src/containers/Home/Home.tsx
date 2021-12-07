import React, {useState} from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import Onboarding from '../../components/Onboarding/Onboarding';
import {styles} from './Home.style';

const Home = () => {
  const [firstLogin, setFirstLogin] = useState(false);
  const [done, setDone] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      {firstLogin && done ? (
        <ScrollView>
          <Text>Home</Text>
        </ScrollView>
      ) : (
        <Onboarding setDone={setDone} setFirstLogin={setFirstLogin} />
      )}
    </SafeAreaView>
  );
};

export default Home;

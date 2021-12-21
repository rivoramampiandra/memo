import {DrawerActions} from '@react-navigation/native';
import {Text} from '@ui-kitten/components';
import React, {useState} from 'react';
import {SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
import Onboarding from '../../components/Onboarding/Onboarding';
import {styles} from './Home.style';

const Home = (props: any) => {
  const [firstLogin, setFirstLogin] = useState(false);
  const [done, setDone] = useState(false);

  const handleOpenDrawer = () => {
    props.navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <SafeAreaView style={styles.container}>
      {!firstLogin && done ? (
        <ScrollView>
          <Text>Home</Text>
          <TouchableOpacity onPress={handleOpenDrawer}>
            <Text>Open</Text>
          </TouchableOpacity>
        </ScrollView>
      ) : (
        <Onboarding setDone={setDone} setFirstLogin={setFirstLogin} />
      )}
    </SafeAreaView>
  );
};

export default Home;

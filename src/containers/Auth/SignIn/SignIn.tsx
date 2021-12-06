import CheckBox from '@react-native-community/checkbox';
import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Input from '../../../components/Input/Input';
import Header from '../../../components/Layout/Header/Header';
import {styles} from './SignIn.style';

const SignIn = ({navigation}: any) => {
  const [rememberMe, setRememberMe] = useState(false);

  const handleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1}}>
        <Header navigation={navigation} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={[styles.bold, styles.title]}>Se connecter</Text>
          <View>
            <Text>E-mail</Text>
            <Input />
          </View>
          <View>
            <Text>Mot de passe</Text>
            <Input />
          </View>
          <View style={[styles.horizontalFlex, styles.loginOption]}>
            <View style={[styles.horizontalFlex]}>
              <CheckBox
                value={rememberMe}
                onValueChange={() => handleRememberMe()}
              />
              <Text>Se souvenir de moi</Text>
            </View>
            <TouchableOpacity>
              <Text>Mot de passe oublié ?</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={styles.button}>
            <Text style={{...styles.btnText, ...styles.bold}}>
              Se connecter
            </Text>
          </TouchableOpacity>
          <View style={[styles.horizontalFlex, styles.signUpOption]}>
            <Text>Pas de compte ? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <Text style={styles.signup}>Inscrivez-vous</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;

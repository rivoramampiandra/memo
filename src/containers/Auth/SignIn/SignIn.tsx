import CheckBox from '@react-native-community/checkbox';
import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './SignIn.style';

const SignIn = ({navigation}: any) => {
  const [rememberMe, setRememberMe] = useState(false);

  const handleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1}}>
        <Image
          source={require('../../../assets/images/h-logo.png')}
          style={styles.logo}
          resizeMode={'center'}
        />
        <Text style={[styles.bold, styles.title]}>Login</Text>
        <View>
          <Text>E-mail</Text>
          <TextInput style={styles.input} />
        </View>
        <View>
          <Text>Mot de passe</Text>
          <TextInput style={styles.input} />
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
          onPress={() => navigation.navigate('SignUp')}
          style={styles.button}>
          <Text style={{...styles.btnText, ...styles.bold}}>Se connecter</Text>
        </TouchableOpacity>
        <View style={[styles.horizontalFlex, styles.signUpOption]}>
          <Text>Pas de compte ? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.signup}>Inscrivez-vous</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;

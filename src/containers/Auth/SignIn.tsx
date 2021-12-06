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

const SignIn = ({navigation}: any) => {
  const [rememberMe, setRememberMe] = useState(false);

  const handleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1}}>
        <Image
          source={require('../../assets/images/h-logo.png')}
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

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#fff',
  },
  logo: {
    maxWidth: '80%',
    height: '10%',
    alignSelf: 'center',
  },
  title: {
    fontSize: 16,
    marginTop: '15%',
    marginBottom: 12,
  },
  input: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#60BDAC',
    padding: 12,
    width: '80%',
    alignSelf: 'center',
    borderRadius: 10,
    marginVertical: 19,
  },
  horizontalFlex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  loginOption: {
    justifyContent: 'space-between',
  },
  signUpOption: {
    alignSelf: 'center',
  },
  signup: {
    color: '#036BF7',
  },
  btnText: {
    color: '#fff',
    textAlign: 'center',
  },
  bold: {
    fontWeight: '800',
  },
});

export default SignIn;

import CheckBox from '@react-native-community/checkbox';
import {Text} from '@ui-kitten/components';
import React, {useEffect, useState} from 'react';
import {useForm, Controller} from 'react-hook-form';
import {SafeAreaView, ScrollView, TouchableOpacity, View} from 'react-native';
import Input from '../../../components/Input/Input';
import Header from '../../../components/Layout/Header/Header';
import {AsyncStorageUtils} from '../../../utils/asyncStorageUtils';
import {styles} from './SignIn.style';

const SignIn = ({navigation}: any) => {
  const [rememberMe, setRememberMe] = useState(false);

  const handleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  useEffect(() => {
    AsyncStorageUtils.checkFirstConnection();
  }, []);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
    // navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1}}>
        <Header navigation={navigation} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={[styles.bold, styles.title]}>Se connecter</Text>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <>
                <Text>E-mail</Text>
                <Input onBlur={onBlur} onChangeText={onChange} value={value} />
              </>
            )}
            name="email"
          />
          {errors.email && <Text>This is required.</Text>}
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <>
                <Text>Mot de passe</Text>
                <Input
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  secureTextEntry
                />
              </>
            )}
            name="password"
          />
          {errors.password && <Text>This is required.</Text>}
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
            onPress={() => handleSubmit(onSubmit)}
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

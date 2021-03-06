// import CheckBox from '@react-native-community/checkbox';
import {Text} from '@ui-kitten/components';
import React, {useEffect, useState} from 'react';
import {useForm, Controller} from 'react-hook-form';
import {SafeAreaView, ScrollView, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {globalStyle} from '../../../assets/style';
import Checkbox from '../../../components/Checkbox/Checkbox';
import Input from '../../../components/Input/Input';
import Header from '../../../components/Layout/Header/Header';
import Wrapper from '../../../components/Layout/Wrapper';
import {EMAIL_PATTER} from '../../../constant/pattern';
import {AuthService} from '../../../services/auth.service';
import {setSignIn} from '../../../store/reducers/authSlice';
import {AsyncStorageUtils} from '../../../utils/asyncStorageUtils';
import {styles} from './SignIn.style';

const SignIn = ({navigation}: any) => {
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState<boolean | null>(null);
  const dispatch = useDispatch();

  const handleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  useEffect(() => {
    AsyncStorageUtils.checkFirstConnection();

    return () => {
      reset(defaultValues);
    };
  }, []);

  const defaultValues = {
    email: '',
    password: '',
  };

  const {
    control,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm({
    defaultValues,
  });

  const onSubmit = async (data: any) => {
    try {
      const res = await AuthService.login(data);
      if (!res) return;
      dispatch(
        setSignIn({
          isLoggedIn: true,
          firstName: res.firstName,
          lastName: res.lastName,
        }),
      );
      AsyncStorageUtils.setUserID(res.id);
      AsyncStorageUtils.setUserFirstName(res.firstName);
      AsyncStorageUtils.setUserLastName(res.lastName);
    } catch (error) {
      setError(true);
    }
  };

  const initError = () => setError(null);

  return (
    <Wrapper>
      <View style={{flex: 1}}>
        <Header navigation={navigation} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={[styles.title]} category="s2">
            Se connecter
          </Text>
          <View>
            <Text category="label">E-mail</Text>
            <Controller
              control={control}
              rules={{
                required: true,
                pattern: EMAIL_PATTER,
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <Input
                  onBlur={onBlur}
                  onChangeText={e => {
                    onChange(e);
                    initError();
                  }}
                  value={value}
                />
              )}
              name="email"
            />
            {errors.email && (
              <Text style={globalStyle.textError} category="label">
                Email invalide.
              </Text>
            )}
          </View>
          <View>
            <Text category="label">Mot de passe</Text>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <Input
                  onBlur={onBlur}
                  onChangeText={e => {
                    onChange(e);
                    initError();
                  }}
                  value={value}
                  secureTextEntry
                />
              )}
              name="password"
            />
            {errors.password && (
              <Text style={globalStyle.textError} category="c2">
                Mot de passe invalide.
              </Text>
            )}
          </View>
          <View>
            {error && (
              <Text style={globalStyle.textError} category="c2">
                Mot de passe ou email invalide !
              </Text>
            )}
          </View>

          <View style={[styles.horizontalFlex, styles.loginOption]}>
            <Checkbox
              checked={rememberMe}
              onChange={() => handleRememberMe()}
              label="Se souvenir de moi"
            />
            <TouchableOpacity>
              <Text category="c2">Mot de passe oubli?? ?</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={handleSubmit(onSubmit)}
            style={styles.button}>
            <Text style={{...styles.btnText, ...styles.bold}}>
              Se connecter
            </Text>
          </TouchableOpacity>
          <View style={[styles.horizontalFlex, styles.signUpOption]}>
            <Text category="label">Pas de compte ? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <Text style={styles.signup} category="label">
                Inscrivez-vous
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </Wrapper>
  );
};

export default SignIn;

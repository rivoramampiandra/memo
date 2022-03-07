import CheckBox from '@react-native-community/checkbox';
import {Text} from '@ui-kitten/components';
import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import Input from '../../../../components/Input/Input';
import Conditions from '../../../../components/Modal/Content/Conditions';
import Modal from '../../../../components/Modal/Modal';
import {styles} from '../SignUp.style';
import {useForm, Controller} from 'react-hook-form';
import {EMAIL_PATTER} from '../../../../constant/pattern';
import {globalStyle} from '../../../../assets/style';
import {AuthService} from '../../../../services/auth.service';
import {useAppDispatch} from '../../../../store/hooks';
import {setSignIn} from '../../../../store/reducers/authSlice';

const Step1 = (props: any) => {
  const {step, handleValidation} = props;
  const [modalVisibility, setModalVisibility] = useState(false);
  const [error, setError] = useState<boolean | null>(null);
  const dispatch = useAppDispatch();

  const defaultValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptNotif: false,
    acceptCondition: false,
  };

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues,
  });

  const onSubmit = async (data: any) => {
    try {
      const tempDate = new Date().toLocaleDateString('fr');

      const res: any = await AuthService.signup({
        email: data.email,
        familyName: data.lastName,
        firstName: data.firstName,
        birthdate: tempDate,
        password: data.password,
        gender: 'M',
      });

      if (!res) return;
      dispatch(
        setSignIn({
          tempPassword: data.password,
          email: data.email,
          id: res.data.id,
        }),
      );
      handleValidation(step + 1);
    } catch (e) {
      console.log('🚀 ~ file: Step1.tsx ~ line 63 ~ onSubmit ~ e', e);
      setError(true);
    }
  };

  return (
    <View>
      <View>
        <Text category="label">Nom</Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <Input onBlur={onBlur} onChangeText={onChange} value={value} />
          )}
          name="lastName"
        />
        {errors.lastName && (
          <Text style={globalStyle.textError}>Ce champ est requis</Text>
        )}
      </View>
      <View>
        <Text category="label">Prénom</Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <Input onBlur={onBlur} onChangeText={onChange} value={value} />
          )}
          name="firstName"
        />
        {errors.firstName && (
          <Text style={globalStyle.textError}>Ce champ est requis</Text>
        )}
      </View>
      <View>
        <Text category="label">E-mail</Text>
        <Controller
          control={control}
          rules={{
            required: true,
            pattern: EMAIL_PATTER,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <Input onBlur={onBlur} onChangeText={onChange} value={value} />
          )}
          name="email"
        />
        {errors.email && (
          <Text style={globalStyle.textError}>Email invalide</Text>
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
            <>
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
        {errors.password && (
          <Text style={globalStyle.textError}>Ce champ est requis</Text>
        )}
      </View>
      <View>
        <Text category="label">Confirmation de mot de passe</Text>

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <Input
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry
            />
          )}
          name="confirmPassword"
        />
        {errors.confirmPassword && (
          <Text style={globalStyle.textError}>
            Le mot de passe doit être identique
          </Text>
        )}
      </View>
      <View>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <View style={[styles.horizontalFlex]}>
              <CheckBox
                value={value}
                onValueChange={value => {
                  onChange(value);
                }}
              />
              <Text category="label">
                Accepter de recevoir des notifications
              </Text>
            </View>
          )}
          name="acceptNotif"
        />
        {errors.acceptNotif && (
          <Text style={globalStyle.textError}>Veuillez acceptez.</Text>
        )}
      </View>
      <View>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <View style={styles.horizontalFlex}>
              <CheckBox
                value={value}
                onValueChange={value => {
                  onChange(value);
                }}
              />
              <Text category="label">Accepter les </Text>
              <TouchableOpacity onPress={() => setModalVisibility(true)}>
                <Text style={styles.conditionText} category="label">
                  conditions general d'utilisation{' '}
                </Text>
              </TouchableOpacity>
            </View>
          )}
          name="acceptCondition"
        />
        {errors.acceptCondition && (
          <Text style={globalStyle.textError}>Veuillez acceptez.</Text>
        )}
      </View>

      <View>
        {error && (
          <Text style={globalStyle.textError} category="c3">
            Erreur du serveur
          </Text>
        )}
      </View>

      <TouchableOpacity onPress={handleSubmit(onSubmit)} style={styles.button}>
        <Text style={{...styles.btnText, ...styles.bold}}>Démarrer</Text>
      </TouchableOpacity>

      <Modal
        modalVisibility={modalVisibility}
        closeModal={() => setModalVisibility(false)}
        component={<Conditions />}
      />
    </View>
  );
};

export default Step1;

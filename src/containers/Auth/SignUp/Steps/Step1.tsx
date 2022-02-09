import CheckBox from '@react-native-community/checkbox';
import {Text} from '@ui-kitten/components';
import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import Input from '../../../../components/Input/Input';
import Conditions from '../../../../components/Modal/Content/Conditions';
import Modal from '../../../../components/Modal/Modal';
import {styles} from '../SignUp.style';
import {useForm, Controller} from 'react-hook-form';

const Step1 = ({navigation}: any) => {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [acceptNotification, setAcceptNotification] = useState<boolean>(false);
  const [acceptCondition, setAcceptCondition] = useState<boolean>(false);

  const toogleAcceptNotification = () =>
    setAcceptNotification(!acceptNotification);
  const toogleAcceptCondition = () => setAcceptCondition(!acceptCondition);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      acceptNotif: false,
      acceptCondition: false,
    },
  });

  return (
    <View>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <>
            <Text>Nom</Text>
            <Input onBlur={onBlur} onChangeText={onChange} value={value} />
          </>
        )}
        name="lastName"
      />
      {errors.lastName && <Text>This is required.</Text>}
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <>
            <Text>Prénom</Text>
            <Input onBlur={onBlur} onChangeText={onChange} value={value} />
          </>
        )}
        name="firstName"
      />
      {errors.firstName && <Text>This is required.</Text>}
      {/* //TODO: add email validation pattern */}
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
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <>
            <Text>Confirmation de mot de passe</Text>
            <Input
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry
            />
          </>
        )}
        name="confirmPassword"
      />
      {errors.confirmPassword && (
        <Text>This is required and need to match with password</Text>
      )}
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <View style={[styles.horizontalFlex]}>
            <CheckBox
              value={value}
              onValueChange={() => toogleAcceptNotification()}
            />
            <Text>Accepter de recevoir des notifications</Text>
          </View>
        )}
        name="acceptNotif"
      />
      {errors.acceptNotif && <Text>This is required.</Text>}

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <View style={styles.horizontalFlex}>
            <CheckBox
              value={value}
              onValueChange={() => toogleAcceptCondition()}
            />
            <Text>Accepter les </Text>
            <TouchableOpacity onPress={() => setModalVisibility(true)}>
              <Text style={styles.conditionText}>
                conditions general d'utilisation{' '}
              </Text>
            </TouchableOpacity>
          </View>
        )}
        name="acceptCondition"
      />
      {errors.acceptCondition && <Text>This is required.</Text>}

      <Modal
        modalVisibility={modalVisibility}
        closeModal={() => setModalVisibility(false)}
        component={<Conditions />}
      />
    </View>
  );
};

export default Step1;

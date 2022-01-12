import CheckBox from '@react-native-community/checkbox';
import {Text} from '@ui-kitten/components';
import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import Input from '../../../../components/Input/Input';
import Conditions from '../../../../components/Modal/Content/Conditions';
import Modal from '../../../../components/Modal/Modal';
import {styles} from '../SignUp.style';

const Step1 = ({navigation}: any) => {
  const handleAccept = () => {};
  const [modalVisibility, setModalVisibility] = useState(false);

  return (
    <View>
      <View>
        <Text>Nom</Text>
        <Input />
      </View>
      <View>
        <Text>Prénom</Text>
        <Input />
      </View>
      <View>
        <Text>E-mail</Text>
        <Input />
      </View>
      <View>
        <Text>Mot de passe</Text>
        <Input secureTextEntry />
      </View>
      <View>
        <Text>Confirmation de mot de passe</Text>
        <Input />
      </View>
      <View style={[styles.horizontalFlex]}>
        <CheckBox value={true} onValueChange={() => handleAccept()} />
        <Text>Accepter de recevoir des notifications</Text>
      </View>
      <View style={[styles.horizontalFlex]}>
        <CheckBox value={true} onValueChange={() => handleAccept()} />
        <Text>Accepter les </Text>
        <TouchableOpacity onPress={() => setModalVisibility(true)}>
          <Text style={styles.conditionText}>
            conditions general d'utilisation{' '}
          </Text>
        </TouchableOpacity>
      </View>
      <Modal
        modalVisibility={modalVisibility}
        closeModal={() => setModalVisibility(false)}
        component={<Conditions />}
      />
    </View>
  );
};

export default Step1;

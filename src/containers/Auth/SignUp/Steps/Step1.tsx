import CheckBox from '@react-native-community/checkbox';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Input from '../../../../components/Input/Input';
import {styles} from '../SignUp.style';

const Step1 = ({navigation}: any) => {
  const handleAccept = () => {};
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
        <Input />
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
        <TouchableOpacity onPress={() => navigation.navigate('Conditions')}>
          <Text style={styles.conditionText}>
            conditions general d’utilisation{' '}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Step1;

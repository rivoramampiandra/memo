import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Divider} from '../../../../components/Divider';
import Input from '../../../../components/Input/Input';
import {styles} from '../SignUp.style';
import Step2Picture from './Step2Picture';

const Step2 = (props: any) => {
  const [pictureMode, setPictureMode] = useState(false);
  const handleOpenCamera = () => {};

  return (
    <View style={{flex: 1}}>
      {!pictureMode ? (
        <>
          <View>
            <Text>Plaque d’immatriculation (A.)</Text>
            <Input />
          </View>
          <View>
            <Text>Date 1 ère immatriculation (B.)</Text>
            <Input />
          </View>
          <View>
            <Text>Numéro d’identification V.I.N. (E.)</Text>
            <Input />
          </View>
          <View>
            <Text>Numéro de formule (Recto)</Text>
            <Input />
          </View>
          <Divider />
          <View>
            <TouchableOpacity
              onPress={() => setPictureMode(true)}
              style={styles.outlinedButton}>
              <Text style={styles.btnTextOutlined}>
                {' '}
                Photo de votre carte grise
              </Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <Step2Picture />
      )}
    </View>
  );
};

export default Step2;

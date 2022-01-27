import {Text} from '@ui-kitten/components';
import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Divider} from '../../../../components/Divider';
import Input from '../../../../components/Input/Input';
import {styles} from '../SignUp.style';
import Step2Picture from './Step2Picture';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const Step2 = (props: any) => {
  const [pictureMode, setPictureMode] = useState(false);
  const handleOpenCamera = () => {};

  const takePicture = () => {
    launchCamera({mediaType: 'photo'}, res => {
      setPictureMode(true);
    });
  };

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
              onPress={takePicture}
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

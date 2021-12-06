import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../../../components/Layout/Header/Header';
import {styles} from './SignUp.style';
import Step1 from './Steps/Step1';
import Step2 from './Steps/Step2';

const steps = [
  {
    subTitle: 'étape 1/2 - vos informations',
    buttonText: "Passer à l'étape 2",
  },
  {
    subTitle: 'étape 2/2 - vos voitures',
    buttonText: 'Démarrer',
  },
];

const SignUp = ({navigation}: any) => {
  const [step, setStep] = useState(1);
  const [subTitle, setSubTitle] = useState(steps[0].subTitle);
  const [buttonText, setButtonText] = useState(steps[0].buttonText);
  const handleValidation = (value: number) => {
    if (step === 2) {
      navigation.navigate('Home');
      setStep(1);
      return;
    }
    setSubTitle(steps[value - 1].subTitle);
    setButtonText(steps[value - 1].buttonText);
    setStep(value);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} goBack />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Text style={[styles.bold, styles.title]}>S'inscrire</Text>
          <Text>{subTitle}</Text>
        </View>
        <View>{step === 1 && <Step1 navigation={navigation} />}</View>
        <View>{step === 2 && <Step2 />}</View>
        <View>
          <TouchableOpacity
            onPress={() => handleValidation(step + 1)}
            style={styles.button}>
            <Text style={{...styles.btnText, ...styles.bold}}>
              {buttonText}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;

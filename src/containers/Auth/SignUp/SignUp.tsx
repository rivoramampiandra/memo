import {Text} from '@ui-kitten/components';
import React, {useState} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import Header from '../../../components/Layout/Header/Header';
import {styles} from './SignUp.style';
import Step1 from './Steps/Step1';
import Step2 from './Steps/Step2';

const steps = [
  {
    subTitle: 'Etape 1/2 - vos informations',
    buttonText: "Passer à l'étape 2",
  },
  {
    subTitle: 'Etape 2/2 - vos voitures',
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
    setStep(value);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} goBack />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.titleContainer}>
          <Text style={[styles.title]} category="s2">
            S'inscrire
          </Text>
          <Text category="label">{subTitle}</Text>
        </View>
        <View>
          {step === 1 && (  
            <Step1
              navigation={navigation}
              step={step}
              handleValidation={handleValidation}
            />
          )}
        </View>
        <View>
          {step === 2 && (
            <Step2 step={step} handleValidation={handleValidation} />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;

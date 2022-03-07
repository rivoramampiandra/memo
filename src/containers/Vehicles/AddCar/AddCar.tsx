import {useNavigation} from '@react-navigation/native';
import {Spinner, Text} from '@ui-kitten/components';
import React, {useEffect, useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {View, TouchableOpacity, Platform, Image} from 'react-native';
import {ImagePickerResponse, launchCamera} from 'react-native-image-picker';
import {globalStyle} from '../../../assets/style';
import {Divider} from '../../../components/Divider';
import Input from '../../../components/Input/Input';
import Header from '../../../components/Layout/Header/Header';
import Wrapper from '../../../components/Layout/Wrapper';
import {AuthService} from '../../../services/auth.service';
import {CarService} from '../../../services/car.service';
import {useAppSelector} from '../../../store/hooks';
import {
  getTempPassword,
  getUserEmail,
  getUserId,
} from '../../../store/reducers/authSlice';
import Step2Picture from '../../Auth/SignUp/Steps/Step2Picture';
import {styles} from './AddCar.style';

const AddCar = (props: any) => {
  const {handleValidation, step} = props;
  const [pictureMode, setPictureMode] = useState(false);
  const [pictureUri, setPictureUri] = useState(false);
  const [error, setError] = useState<boolean | null>(null);
  const [ocrdata, setOcrData] = useState({});
  const password = useAppSelector(getTempPassword);
  const userId = useAppSelector(getUserId);
  const email = useAppSelector(getUserEmail);
  const [scanLoading, setScanLoading] = useState(false);
  const navigation = useNavigation();

  const defaultValues = {
    immatriculation: '',
    immatriculationDate: '',
    licenseplate: '',
    formule: '',
  };

  const {
    control,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm({
    defaultValues,
  });

  const addCar = async (scanResult: any) => {
    try {
      const data = {
        VIN: scanResult.VIN,
        brand: scanResult.brand,
        cylindree: '',
        dateMEC: scanResult.immatriculationDate,
        formule: '',
        carteGrise: scanResult.immat,
        model: scanResult.model,
        powerCV: scanResult.horsePower,
        powerKW: scanResult.KWPower,
        typeFuel: scanResult.energy,
        hasClim: true,
      };
      if (!userId || !email || !password) throw new Error();
      await CarService.addTemporaryCar(userId, data);
      await AuthService.login({
        email,
        password,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const [pictureTemp, setPictureTemp] = useState(null);

  const scanVehicleCard = async (pictureBlob: any) => {
    try {
      let formData = new FormData();
      console.log(
        '🚀 ~ file: AddCar.tsx ~ line 84 ~ scanVehicleCard ~ pictureBlob.uri',
        pictureBlob.uri,
      );
      setPictureTemp(pictureBlob.uri);
      const payload = {
        uri:
          Platform.OS === 'android'
            ? pictureBlob?.uri
            : pictureBlob?.uri.replace('file://', ''),
        type: pictureBlob.type,
        name: pictureBlob.fileName,
      };
      console.log(
        '🚀 ~ file: AddCar.tsx ~ line 88 ~ scanVehicleCard ~ payload',
        payload,
      );

      formData.append('carteGrise', payload);
      return await CarService.ocrScanCard(formData);
    } catch (error: any) {
      console.error(error.message);
    }
  };

  const takePicture = async () => {
    try {
      const res: ImagePickerResponse = await launchCamera({mediaType: 'photo'});
      if (!res || !res.assets || !res.assets[0]) {
        throw new Error('Erreur de la camera');
      } else {
        setScanLoading(true);
        const scanResult = await scanVehicleCard(res.assets[0]);
        if (!scanResult) {
          console.log(
            '🚀 ~ file: AddCar.tsx ~ line 104 ~ takePicture ~ scanResult',
            scanResult,
          );
          //TODO: display error

          setScanLoading(false);
          return;
        }
        setOcrData(scanResult);
        await addCar(scanResult);
        setPictureMode(true);
        const uriValue: any = res.assets[0].uri;
        setPictureUri(uriValue);
        setScanLoading(false);
      }
    } catch (error) {
      console.error('error', JSON.stringify(error));
      setScanLoading(false);
      setError(true);
    }
  };

  const initError = () => setError(null);

  const onSubmit = async (data: any) => {
    handleValidation(step + 1);
  };

  return (
    <Wrapper>
      <Header navigation={navigation} goBack />
      {pictureTemp && (
        <>
          <Text>{pictureTemp}</Text>
          <Image source={{uri: pictureTemp}} />
        </>
      )}
      <View style={{flex: 1}}>
        {!pictureMode ? (
          <>
            <View>
              <Text category="label">Plaque d’immatriculation (A.)</Text>
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
                  />
                )}
                name="immatriculation"
              />
              {errors.immatriculation && (
                <Text style={globalStyle.textError} category="c3">
                  Ce champ est requis
                </Text>
              )}
            </View>
            <View>
              <Text category="label">Date 1 ère immatriculation (B.)</Text>
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
                  />
                )}
                name="immatriculationDate"
              />
              {errors.immatriculationDate && (
                <Text style={globalStyle.textError} category="c3">
                  Ce champ est requis
                </Text>
              )}
            </View>
            <View>
              <Text category="label">Numéro d’identification V.I.N. (E.)</Text>
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
                  />
                )}
                name="licenseplate"
              />
              {errors.licenseplate && (
                <Text style={globalStyle.textError} category="c3">
                  Ce champ est requis
                </Text>
              )}
            </View>
            <View>
              <Text category="label">Numéro de formule (Recto)</Text>
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
                  />
                )}
                name="formule"
              />
              {errors.formule && (
                <Text style={globalStyle.textError} category="c3">
                  Ce champ est requis
                </Text>
              )}
            </View>
            <Divider />
            <View>
              <TouchableOpacity
                onPress={takePicture}
                style={styles.outlinedButton}>
                <Text style={styles.btnTextOutlined} category="c1">
                  {' '}
                  Photo de votre carte grise
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                onPress={handleSubmit(onSubmit)}
                style={styles.button}
                disabled={scanLoading}>
                {scanLoading ? (
                  <Spinner status="basic" style={{margin: 'auto'}} />
                ) : (
                  <Text style={{...styles.btnText, ...styles.bold}}>
                    Démarrer
                  </Text>
                )}
              </TouchableOpacity>
            </View>
          </>
        ) : (
          <Step2Picture imageUri={pictureUri} ocrdata={ocrdata} />
        )}
      </View>
    </Wrapper>
  );
};

export default AddCar;

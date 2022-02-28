import {Text} from '@ui-kitten/components';
import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Divider} from '../../../../components/Divider';
import Input from '../../../../components/Input/Input';
import {styles} from '../SignUp.style';
import Step2Picture from './Step2Picture';
import {launchCamera} from 'react-native-image-picker';
import {useAppSelector} from '../../../../store/hooks';
import {
  getTempPassword,
  getUserEmail,
  getUserId,
} from '../../../../store/reducers/authSlice';
import {Controller, useForm} from 'react-hook-form';
import {globalStyle} from '../../../../assets/style';
import {getFileFromURI} from '../../../../utils/imageUtils';
import {CarService} from '../../../../services/car.service';
import {AuthService} from '../../../../services/auth.service';

const Step2 = (props: any) => {
  const {handleValidation, step} = props;
  const [pictureMode, setPictureMode] = useState(false);
  const [pictureUri, setPictureUri] = useState(false);
  const handleOpenCamera = () => {};
  const [error, setError] = useState<boolean | null>(null);
  const [ocrdata, setOcrData] = useState({});
  const password = useAppSelector(getTempPassword);
  const userId = useAppSelector(getUserId);
  const email = useAppSelector(getUserEmail);

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

  const scanVehicleCard = async (pictureBlob: Blob) => {
    try {
      let data = new FormData();
      data.append('carteGrise', pictureBlob);
      return await CarService.ocrScanCard(data);
    } catch (error) {
      console.error(error);
    }
  };

  const takePicture = async () => {
    launchCamera({mediaType: 'photo'}, async (res: any) => {
      try {
        const pictureBlob = await getFileFromURI(res.assets[0].uri);
        const scanResult = await scanVehicleCard(pictureBlob);
        if (!scanResult) {
          //TODO: display error
          console.warn('Scan error');
          return;
        }
        setOcrData(scanResult);
        await addCar(scanResult);
        setPictureMode(true);
        setPictureUri(res.assets[0].uri);
      } catch (error) {
        setError(true);
      }
    });
  };

  const initError = () => setError(null);

  const onSubmit = async (data: any) => {
    handleValidation(step + 1);
  };

  return (
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
              style={styles.button}>
              <Text style={{...styles.btnText, ...styles.bold}}>Démarrer</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <Step2Picture imageUri={pictureUri} ocrdata={ocrdata} />
      )}
    </View>
  );
};

export default Step2;

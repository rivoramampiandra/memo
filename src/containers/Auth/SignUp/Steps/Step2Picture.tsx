import {useNavigation} from '@react-navigation/native';
import {Icon, Spinner, Text} from '@ui-kitten/components';
import React, {useState} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import ListItem from '../../../../components/List/ListItem/ListItem';
import {InvoiceService} from '../../../../services/invoice.service';
import {styles} from '../SignUp.style';

const Step2Picture = (props: any) => {
  const {imageUri, ocrdata, callback} = props;
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const executeAction = callback();

  const handleSubmit = async () => {
    try {
      setLoading(true);
      //TODO: add invoice step1
      // await InvoiceService.addInvoiceStep1()
      //TODO: add invoice step2
      // await InvoiceService.addInvoiceStep2()
      //TODO: go to home
      executeAction();
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.docInfoContainer}>
      <View style={styles.imageContainer}>
        <TouchableOpacity style={styles.close}>
          <Icon
            name="close-circle-outline"
            fill="#000"
            style={styles.closeIcon}
          />
        </TouchableOpacity>
        <Image
          source={{uri: imageUri}}
          style={styles.documentPicture}
          resizeMode="center"
        />
      </View>
      <View style={{marginVertical: 24}}>
        <ListItem label={'Plaque d’immatriculation'} value={ocrdata.imat} />
        <ListItem
          label={'Date 1 ère immatriculation'}
          value={ocrdata.dateMEC}
        />
        <ListItem
          label={'Numéro d’identification V.I.N.'}
          value={ocrdata.VIN}
        />
        <ListItem label={'Numéro de formule '} value={'null'} />
      </View>
      {callback && (
        <View>
          <TouchableOpacity
            onPress={handleSubmit}
            style={styles.button}
            disabled={loading}>
            {loading ? (
              <Spinner status="basic" style={{margin: 'auto'}} />
            ) : (
              <Text style={{...styles.btnText, ...styles.bold}}>Démarrer</Text>
            )}
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Step2Picture;

import {Button, Icon, Text} from '@ui-kitten/components';
import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Platform,
} from 'react-native';
import Wrapper from '../../components/Layout/Wrapper';
import {styles} from './Intervention.style';
import {launchCamera} from 'react-native-image-picker';
import {Divider} from '../../components/Divider';
import Input from '../../components/Input/Input';
import {InputComposite} from '../../components/Input';
import image from '../../constant/image';
import NoIntervention from './NoIntervention';
import InterventionItem from './InterventioItem';
import {InvoiceService} from '../../services/invoice.service';

const data: any = [
  {
    id: 1,
    image: image.BATTERY,
    title: 'Batterie',
    description: 'Contrôle d’usure / remplacement',
  },
  {
    id: 2,
    image: image.BATTERY,
    title: 'Batterie',
    description: 'Contrôle d’usure / remplacement',
  },
  {
    id: 3,
    image: image.BATTERY,
    title: 'Batterie',
    description: 'Contrôle d’usure / remplacement',
  },
];

const Intervention = (props: any) => {
  const [] = useState();

  const scanInvoice = async (picture: any) => {
    try {
      let formData = new FormData();
      const payload = {
        uri:
          Platform.OS === 'android'
            ? picture.uri
            : picture.uri.replace('file://', ''),
        type: picture.type,
        name: picture.fileName,
      };
      formData.append('invoice', payload);
      return await InvoiceService.scanIvoice(formData);
    } catch (error) {
      console.error(error);
    }
  };

  const takePicture = async () => {
    const picture = await launchCamera({mediaType: 'photo'});
    if (!picture) throw new Error('Erreur de scan');
    const scanResult = await scanInvoice(picture);
    console.log(
      '🚀 ~ file: Intervention.tsx ~ line 67 ~ takePicture ~ scanResult',
      scanResult,
    );
    if (!scanResult) {
      //TODO: add error message or asking to rescan
      return;
    }
    //TODO: add invoice step1
    // await InvoiceService.addInvoiceStep1(scanResult)
    //TODO: add invoice step2
    // await InvoiceService.addInvoiceStep2(scanResult)
  };

  return (
    <Wrapper>
      <View>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            onPress={() => props.navigation.goBack()}
            style={styles.closeBtn}>
            <Text style={styles.close}>Fermer</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle} category="h1">
            Ajout intervention
          </Text>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled={true}>
          <View style={{marginBottom: 50}}>
            <View>
              <TouchableOpacity
                onPress={takePicture}
                style={styles.outlinedButton}>
                <Text style={styles.btnTextOutlined}>
                  Photo de votre facture
                </Text>
              </TouchableOpacity>
            </View>
            <Divider />
            <View>
              <Text style={{fontSize: 16, marginVertical: 12}}>
                Renseigner manuellement
              </Text>
              <View>
                <Text category="label">Date</Text>
                <Input />
              </View>
              <View>
                <Text category="label">Kilomètre</Text>
                <Input />
              </View>
              <View>
                <Text category="label">
                  Quel prestations avec vous réalisee(s)
                </Text>
                <InputComposite placeholder="vidange, plaquettes avant..." />
              </View>
            </View>
            <View style={{marginVertical: 12}}>
              {/* {data.length > 0 ? (
                <FlatList
                  data={data}
                  showsVerticalScrollIndicator={false}
                  showsHorizontalScrollIndicator={false}
                  bounces={false}
                  scrollEnabled={false}
                  renderItem={({item}) => <InterventionItem item={item} />}
                />
              ) : ( */}
              <NoIntervention />
              {/* )} */}
            </View>
          </View>
        </ScrollView>
        <View
          style={{
            position: 'absolute',
            bottom: 12,
            width: '100%',
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Button
              style={{flex: 1, marginHorizontal: 5, borderRadius: 10}}
              status="primary">
              Enregistrer
            </Button>
            <Button
              style={{flex: 1, borderRadius: 10}}
              status="danger"
              onPress={() => props.navigation.goBack()}>
              Annuler
            </Button>
          </View>
        </View>
      </View>
    </Wrapper>
  );
};

export default Intervention;

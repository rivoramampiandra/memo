import {useNavigation, useRoute} from '@react-navigation/native';
import {Button, Card, Divider, Icon, Modal, Text} from '@ui-kitten/components';
import React, {useState} from 'react';
import {View, TouchableOpacity, Image, useWindowDimensions} from 'react-native';
import {Indicator} from '../../components/Indicator';
import Wrapper from '../../components/Layout/Wrapper';
import image from '../../constant/image';
import TimelineContainer from './Timeline/Timeline';

const Notification = () => {
  const navigation = useNavigation();
  const [modalVisibility_, setModalVisibility_] = useState(false);
  const {width} = useWindowDimensions();

  return (
    <View style={{position: 'absolute', bottom: 0}}>
      <View style={{flexDirection: 'row', flex: 1, marginBottom: 14}}>
        <Icon
          name="info-outline"
          fill="#000"
          style={{width: 16, height: 16, marginLeft: 12}}
        />
        <View style={{width: '90%'}}>
          <Text style={{fontSize: 12, marginBottom: 14}}>
            Le coût moyen de cette intervention varie selon les modèles et les
            réparateurs, comptez entre :
          </Text>
          <Text style={{fontWeight: 'bold', fontSize: 14, marginBottom: 14}}>
            {' '}
            50 € et 100 €
          </Text>
          <Text style={{fontSize: 12, marginBottom: 14}}>
            La non-réalisation de cette intervention peut présenter un risque
            vital pour l'automobiliste. Une défaillance des disques influe sur
            les performances de freinage et allonge les distances de freinage.
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Button
          style={{flex: 1, marginHorizontal: 5, borderRadius: 10}}
          status="primary"
          onPress={() => setModalVisibility_(true)}>
          Tout va bien
        </Button>
        <Button
          style={{flex: 1, borderRadius: 10}}
          status="danger"
          onPress={() => navigation.navigate('Promotions' as any)}>
          Faire le nécessaire
        </Button>
      </View>
      <Modal
        visible={modalVisibility_}
        style={{width: width, position: 'absolute', top: '0%', left: '0%'}}
        onBackdropPress={() => setModalVisibility_(false)}>
        <Card>
          <Text style={{textAlign: 'center'}}>Disque de frein avant </Text>
          <Divider style={{marginVertical: 16}} />
          <View>
            <Text status="primary" style={{fontSize: 14, fontWeight: 'bold'}}>
              La pièce est en bon état ?
            </Text>
            <Text>
              Nous allons mettre à jour vos indicateurs vous serez alerté dans
              10 000 km.{' '}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 24,
            }}>
            <Button
              onPress={() => setModalVisibility_(false)}
              style={{flex: 1, marginHorizontal: 5}}
              status="basic"
              appearance="outline">
              Annuler
            </Button>
            <Button
              style={{flex: 1}}
              status="primary"
              onPress={() => {
                setModalVisibility_(false);
                navigation.navigate('Home' as any);
              }}>
              continuer
            </Button>
          </View>
        </Card>
      </Modal>
    </View>
  );
};

const STATUS = {
  WARNING: 'warning',
  DEFAULT: 'default',
};

// const NotifModal = ({modalVisibility, setModalVisibility}: any) => {
//   const navigation = useNavigation();
//   return (

//   );
// };

const History = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {status}: any = route.params;

  return (
    <Wrapper>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 16,
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{position: 'relative', right: 80}}>
          <Icon
            name="arrow-ios-back-outline"
            fill="#000"
            style={{width: 24, height: 24}}
          />
        </TouchableOpacity>
        <Text style={{fontSize: 18}} category="s1">
          Synthèse de freinage
        </Text>
      </View>
      <View style={{flex: 1}}>
        <View style={{flex: 1}}>
          <View style={{marginVertical: 16}}>
            {status !== STATUS.WARNING ? (
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 14,
                  fontFamily: 'Montserrat-Medium',
                }}>
                Selon nos prédictions: il vous reste <Text>30 000 km</Text>{' '}
                avant de changer vos freins
              </Text>
            ) : (
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 14,
                  fontFamily: 'Montserrat-Medium',
                }}>
                <Text status={'danger'}>Attention </Text>
                <Text>: vous auriez du remplacer depuis </Text>
                <Text status={'danger'}>100 km</Text>
              </Text>
            )}
          </View>
          <View
            style={{
              height: '10%',
              alignItems: 'center',
              justifyContent: 'center',
              marginVertical: 24,
            }}>
            <Image
              source={image.BRAKE_DISC}
              style={{width: 150}}
              resizeMode="contain"
            />
          </View>
          <View style={{flex: 1}}>
            <Indicator status={status} />
            {status === STATUS.WARNING ? (
              <Notification />
            ) : (
              <>{/* <TimelineContainer /> */}</>
            )}
          </View>
        </View>
      </View>
    </Wrapper>
  );
};

export default History;

import {Icon} from '@ui-kitten/components';
import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import ListItem from '../../../../components/List/ListItem/ListItem';
import {styles} from '../SignUp.style';

const Step2Picture = (props: any) => {
  const {imageUri, ocrdata} = props;

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
    </View>
  );
};

export default Step2Picture;

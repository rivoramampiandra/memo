import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import ListItem from '../../../../components/List/ListItem/ListItem';
import {styles} from '../SignUp.style';

const Step2Picture = (props: any) => {
  return (
    <View style={styles.docInfoContainer}>
      <View style={styles.imageContainer}>
        <TouchableOpacity style={styles.close}>
          <Text>X</Text>
        </TouchableOpacity>
        <Image
          source={require('../../../../assets/images/temp.png')}
          style={styles.documentPicture}
          resizeMode="center"
        />
      </View>
      <View style={{marginVertical: 24}}>
        <ListItem label={'Plaque d’immatriculation'} value={'EW - 800 - EJ'} />
        <ListItem
          label={'Date 1 ère immatriculation'}
          value={'01 / 01 / 2009'}
        />
        <ListItem
          label={'Numéro d’identification V.I.N.'}
          value={'VFSIV2009ASIV2009'}
        />
        <ListItem label={'Numéro de formule '} value={'2009AS05284'} />
      </View>
    </View>
  );
};

export default Step2Picture;

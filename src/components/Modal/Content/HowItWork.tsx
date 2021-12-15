import {Icon, Text} from '@ui-kitten/components';
import React from 'react';
import {View} from 'react-native';
import {howItWorkStyles as styles} from './HowItWork.style';

const HowItWork = () => {
  return (
    <View>
      <View style={styles.titleContainer}>
        <Icon name="info-outline" fill="#000" style={{width: 18, height: 18}} />
        <Text style={styles.title}>Comment lire le curseur?</Text>
      </View>
      <View style={styles.content}>
        <Text>
          Cette jauge vous permet de savoir où vous vous positionnez par rapport
          à la durée de vie de la pièce.
        </Text>
      </View>
      <View style={styles.content}>
        <Text>
          Curseur dans le
          <Text status="primary" style={styles.highlight}>
            {' '}
            vert
          </Text>
          : pas d'intequietude dans le
          <Text status="warning" style={styles.highlight}>
            {' '}
            orange {''}
          </Text>
          préparez l'intervention dans le
          <Text status="danger" style={styles.highlight}>
            {' '}
            rouge
          </Text>
          : une intervention est à réaliser
        </Text>
      </View>
    </View>
  );
};

export default HowItWork;

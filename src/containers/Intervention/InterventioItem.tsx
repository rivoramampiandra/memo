import {Icon, Text} from '@ui-kitten/components';
import React from 'react';
import {Image, View} from 'react-native';
import {styles} from './Intervention.style';

const InterventionItem = (props: any): React.ReactElement => {
  const {image, title, description} = props.item;
  return (
    <View style={styles.interventionContainer}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image source={image} style={styles.itemImage} resizeMode="contain" />
        <View>
          <Text style={styles.title} category="p1">
            {title}
          </Text>
          <Text category="p1">{description}</Text>
        </View>
      </View>
      <Icon name="close-outline" fill="#000" style={styles.closeIcon} />
    </View>
  );
};

export default InterventionItem;

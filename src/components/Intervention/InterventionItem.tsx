import {useNavigation} from '@react-navigation/native';
import {Icon, Text} from '@ui-kitten/components';
import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {styles} from './InterventionItem.style';

interface IIntervention {
  item: {
    title: string;
    subtitle: string;
    image: any;
    distance: string;
    type: string;
  };
  rest?: any;
}

const InterventionItem = (props: any) => {
  const {title, subtitle, image: imageURL, type, distance, status} = props.item;
  // const {navigation} = props;
  const navigation = useNavigation();
  const getStatusColor = (type: string) => {
    const color: any = {
      default: 'primary',
      warning: 'warning',
      critical: 'danger',
    };
    return type ? color[type] : color['default'];
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {!imageURL ? (
          <Icon
            name="shield-off-outline"
            fill="#000"
            style={styles.itemImage}
          />
        ) : (
          <Image
            source={imageURL}
            resizeMode="contain"
            style={styles.itemImage}
          />
        )}
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      <View style={styles.distanceContainer}>
        <Text status={getStatusColor(type)} style={styles.distance}>
          {distance}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() =>
          //@ts-ignore: next-line
          navigation.navigate('History' as string, {status: status})
        }>
        <Icon
          name="chevron-right-outline"
          fill="#000"
          style={styles.iconChevron}
        />
      </TouchableOpacity>
    </View>
  );
};

export default InterventionItem;

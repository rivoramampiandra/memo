import {Icon} from '@ui-kitten/components';
import {TouchableOpacity, View} from 'react-native';
import VehicleItem from '../Vehicles/VehicleItem/VehicleItem';
import {styles} from './Setting.style';
import React from 'react';

const ItemWithDelete = (props: any) => {
  const {item} = props;
  const handleDelete = () => {
    console.log('delete');
  };

  return (
    <View style={styles.withdeleteContainer}>
      <View style={{width: '90%'}}>
        <VehicleItem item={item} />
      </View>
      <View style={{width: '10%'}}>
        <TouchableOpacity onPress={() => handleDelete}>
          <Icon name="close-outline" style={styles.defaultIcon} fill="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ItemWithDelete;

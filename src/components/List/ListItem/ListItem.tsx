import {Icon, Text} from '@ui-kitten/components';
import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {styles} from './ListItem.style';

const ListItem = (props: any) => {
  const {label, value} = props;
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.label} category="label">
          {label}
        </Text>
        <Text style={styles.value} category="label">
          {value}
        </Text>
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => true}>
          <Icon name="edit-outline" fill="#000" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => true}>
          <Icon name="close-outline" fill="#000" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ListItem;

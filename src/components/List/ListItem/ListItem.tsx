import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './ListItem.style';

const ListItem = (props: any) => {
  const {label, value} = props;
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => true}>
          <Text>X</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => true}>
          <Text>X</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ListItem;

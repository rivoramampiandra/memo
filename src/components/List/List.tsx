import React from 'react';
import {View} from 'react-native';
import ListItem from './ListItem/ListItem';

const List = ({data}: any) => {
  return (
    <View>
      {data.map((item: any) => (
        <ListItem></ListItem>
      ))}
    </View>
  );
};

export default List;

import {Divider, Icon, Text} from '@ui-kitten/components';
import React, {useRef, useState} from 'react';
import {Image, View, TouchableOpacity, FlatList} from 'react-native';
import Wrapper from '../../components/Layout/Wrapper';
import image from '../../constant/image';
import VehicleItem from './VehicleItem/VehicleItem';
import {styles} from './Vehicles.style';

const vehicles = [
  {
    name: 'Renault Laguna',
    register_number: 'AB-400-EJ',
    distance: '160 624',
    logo: image.RENAULT,
    description: '1.8 TFSI 118kW 160 ch',
    created_at: '2008',
  },
  {
    name: 'Audi A4 Avant',
    register_number: 'AB-400-EJ',
    distance: '160 624',
    logo: image.AUDI,
    description: '1.8 TFSI 118kW 160 ch',
    created_at: '2008',
  },
  {
    name: 'Mercedes EQX',
    register_number: 'AB-400-EJ',
    distance: '160 624',
    logo: image.MERCEDES,
    description: '1.8 TFSI 118kW 160 ch',
    created_at: '2018',
  },
  {
    name: 'Peugeot 3008',
    register_number: 'AB-400-EJ',
    distance: '160 624',
    logo: image.PEUGEOT,
    description: '1.8 TFSI 118kW 160 ch',
    created_at: '2021',
  },
];

const Vehicles = (props: any) => {
  const [currentItem, setCurrentItem] = useState(null);
  const listRef = useRef(null);

  const listItemChanged = useRef(({listItems}: any) => {
    setCurrentItem(listItems);
  }).current;

  return (
    <Wrapper>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Icon
            name="arrow-ios-back-outline"
            fill="#000"
            style={styles.defaultIcon}
          />
        </TouchableOpacity>

        <Text style={{fontSize: 20}}>Ma peugeot 206</Text>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Intervention')}>
          <Image
            source={image.ADD_FILE}
            style={styles.defaultIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <Divider />
      <View>
        <FlatList
          data={vehicles}
          renderItem={({item}) => <VehicleItem item={item} withCloseButton />}
        />
      </View>
      <View>
        <TouchableOpacity style={styles.addButton}>
          <Image source={image.ADD_CAR} style={styles.defaultIcon} />
          <Text style={styles.addButtonText}>Ajouter une voiture</Text>
        </TouchableOpacity>
      </View>
    </Wrapper>
  );
};

export default Vehicles;

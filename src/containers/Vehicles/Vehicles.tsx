import {useNavigation} from '@react-navigation/native';
import {Divider, Icon, Text} from '@ui-kitten/components';
import React, {useEffect, useState} from 'react';
import {
  Image,
  View,
  TouchableOpacity,
  useWindowDimensions,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import image from '../../constant/image';
import {CarService} from '../../services/car.service';
import {useAppSelector} from '../../store/hooks';
import {getCurrentCar} from '../../store/reducers/carSlice';
import VehicleItem from './VehicleItem/VehicleItem';
import {styles} from './Vehicles.style';

const Vehicles = (props: any) => {
  const [vehicles, setVehicles] = useState([]);
  const currentCar = useAppSelector(getCurrentCar);
  const navigation = useNavigation();

  useEffect(() => {
    const getCars = async () => {
      const cars: any = await CarService.getCars();
      if (!cars) return;
      setVehicles(cars);
    };
    getCars();
  }, []);

  const {height, width} = useWindowDimensions();

  return (
    <SafeAreaView style={{backgroundColor: '#fff', height}}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Home' as any)}>
          <Icon
            name="arrow-ios-back-outline"
            fill="#000"
            style={styles.defaultIcon}
          />
        </TouchableOpacity>

        <Text category="h1">
          Ma{' '}
          {currentCar.model && currentCar.brand
            ? `${currentCar.brand} ${currentCar.model}`
            : `car ${currentCar.id}`}
        </Text>
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            paddingBottom: 36,
            backgroundColor: '#fff',
          }}>
          {vehicles.map((item: any) => (
            <VehicleItem key={item.carEntityId} item={item} withCloseButton />
          ))}
        </View>
        <View style={{backgroundColor: '#fff', marginTop: 10}}>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => navigation.navigate('AddCar' as any)}>
            <Image source={image.ADD_CAR} style={styles.defaultIcon} />
            <Text style={styles.addButtonText} category="p2">
              Ajouter une voiture
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={{position: 'absolute', bottom: '5%', width: width}}>
        <View style={styles.footer}>
          <Image source={image.LOGO} style={styles.logo} resizeMode="center" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Vehicles;

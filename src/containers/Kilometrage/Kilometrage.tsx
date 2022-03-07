import {Button, Icon, Text} from '@ui-kitten/components';
import React, {RefObject, useEffect, useRef, useState} from 'react';
import {View, TouchableOpacity, useWindowDimensions, Image} from 'react-native';
import Wrapper from '../../components/Layout/Wrapper';
import {launchCamera} from 'react-native-image-picker';
//@ts-ignore:next-line
import Picker from 'react-native-roll-picker';
import {styles} from './Kilometrage.style';
import image from '../../constant/image';
import {CarService} from '../../services/car.service';
import {getCurrentCar} from '../../store/reducers/carSlice';
import {useAppSelector} from '../../store/hooks';
import {getUserId} from '../../store/reducers/authSlice';

type PickerRefType = HTMLElement | null | undefined;

const Kilometrage = (props: any) => {
  const {navigation} = props;
  const {height} = useWindowDimensions();
  const car = useAppSelector(getCurrentCar);
  const userId = useAppSelector(getUserId);
  const {id} = useAppSelector(getCurrentCar);
  const [distance, setDistance] = useState(String(0).padStart(6));

  const defaultRange = {
    rowIndex0: '1',
    rowIndex1: '2',
    rowIndex2: '0',
    rowIndex3: '0',
    rowIndex4: '0',
    rowIndex5: '0',
  };

  const [range, setRange] = useState(defaultRange);

  const _Picker0: RefObject<PickerRefType> = useRef();
  const _Picker1: RefObject<PickerRefType> = useRef();
  const _Picker2: RefObject<PickerRefType> = useRef();
  const _Picker3: RefObject<PickerRefType> = useRef();
  const _Picker4: RefObject<PickerRefType> = useRef();
  const _Picker5: RefObject<PickerRefType> = useRef();

  const takePicture = () => {
    launchCamera({mediaType: 'photo'}, res => {
      console.log(res);
    });
  };

  const PICKER_DATA = [
    {index: '0'},
    {index: '1'},
    {index: '2'},
    {index: '3'},
    {index: '4'},
    {index: '5'},
    {index: '6'},
    {index: '7'},
    {index: '8'},
    {index: '9'},
  ];

  const getCarInfo = async () => {
    const {data} = await CarService.getCar(id);
    if (!data) return;
    // setDistance(data.mileage);
    normalizeMileageRange(data.mileage.toString());
  };

  const normalizeMileageRange = (value: string) => {
    const rangeData = value.split('');
    setRange({
      rowIndex0: rangeData[0],
      rowIndex1: rangeData[1],
      rowIndex2: rangeData[2],
      rowIndex3: rangeData[3],
      rowIndex4: rangeData[4],
      rowIndex5: rangeData[5],
    });
  };

  const updateDistance = async () => {
    try {
      if (userId && car.id && distance && Number(distance) !== 0) {
        await CarService.updateMilleage(userId, car.id, Number(distance));
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {}, [range]);

  const handleUpdateMileage = () => {
    const dataRange = Object.values(range).join('');
    if (range && Number(dataRange) > 0) {
      setDistance(dataRange);
      if (Number(dataRange) > 0) {
        updateDistance();
      }
    }
  };

  useEffect(() => {
    if (id) {
      console.log('first id', id);
      getCarInfo();
    }
  }, [id]);

  return (
    <Wrapper>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon
            name="arrow-ios-back-outline"
            fill="#000"
            style={styles.defaultIcon}
          />
        </TouchableOpacity>
        <View>
          <Text category="h1">Kilometrage global</Text>
        </View>
        <TouchableOpacity onPress={takePicture}>
          <Image
            source={image.ADD_PHOTO}
            style={{width: 32, height: 32}}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      {/* <View>
        <Text>{distance}</Text>
      </View> */}
      <View style={[styles.pickerContainer, {height: height * 0.4}]}>
        <Picker
          data={PICKER_DATA}
          ref={_Picker0}
          name="index"
          onRowChange={(index: any) => {
            setRange({...range, rowIndex0: index});
          }}
        />
        <Picker
          data={PICKER_DATA}
          ref={_Picker1}
          name="index"
          onRowChange={(index: any) => {
            setRange({...range, rowIndex1: index});
          }}
        />
        <Picker
          data={PICKER_DATA}
          ref={_Picker2}
          name="index"
          onRowChange={(index: any) => {
            setRange({...range, rowIndex2: index});
          }}
        />
        <Picker
          data={PICKER_DATA}
          ref={_Picker3}
          name="index"
          onRowChange={(index: any) => {
            setRange({...range, rowIndex3: index});
          }}
        />
        <Picker
          data={PICKER_DATA}
          ref={_Picker4}
          name="index"
          onRowChange={(index: any) => {
            setRange({...range, rowIndex4: index});
          }}
        />
        <Picker
          data={PICKER_DATA}
          ref={_Picker5}
          name="index"
          onRowChange={(index: any) => {
            setRange({...range, rowIndex5: index});
          }}
        />
        <Text>Km</Text>
      </View>
      <Button onPress={handleUpdateMileage}>Enregistrer</Button>
    </Wrapper>
  );
};

export default Kilometrage;

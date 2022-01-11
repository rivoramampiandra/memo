import {Button, Icon, Text} from '@ui-kitten/components';
import React, {useEffect, useRef, useState} from 'react';
import {View, TouchableOpacity, useWindowDimensions} from 'react-native';
import Wrapper from '../../components/Layout/Wrapper';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
//@ts-ignore:next-line
import Picker from 'react-native-roll-picker';
import {styles} from './Kilometrage.style';

const Kilometrage = (props: any) => {
  const {navigation} = props;
  const {height} = useWindowDimensions();
  const [distance, setDistance] = useState(String(40).padStart(6));
  const defaultRange = {
    rowIndex0: '0',
    rowIndex1: '0',
    rowIndex2: '0',
    rowIndex3: '0',
    rowIndex4: '0',
    rowIndex5: '0',
  };
  const [range, setRange] = useState(defaultRange);
  const _Picker0: any = useRef();
  const _Picker1: any = useRef();
  const _Picker2: any = useRef();
  const _Picker3: any = useRef();
  const _Picker4: any = useRef();
  const _Picker5: any = useRef();

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

  const updateDistance = () => {
    const dataRange = Object.values(range).join('');
    setDistance(dataRange);
  };

  const initDistance = () => {
    const dataDistance = '320000';
    const rangePicker = dataDistance.split('');
    setRange({
      rowIndex0: rangePicker[0],
      rowIndex1: rangePicker[1],
      rowIndex2: rangePicker[2],
      rowIndex3: rangePicker[3],
      rowIndex4: rangePicker[4],
      rowIndex5: rangePicker[5],
    });
    setDistance(dataDistance);
  };

  useEffect(() => {
    if (range) {
      updateDistance();
    }
  }, [range]);

  useEffect(() => {}, [_Picker0]);

  return (
    <Wrapper>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon
            name="chevron-left-outline"
            fill="#000"
            style={styles.defaultIcon}
          />
        </TouchableOpacity>
        <View>
          <Text category={'h6'}>Kilometrage global</Text>
        </View>
        <TouchableOpacity onPress={takePicture}>
          <Icon name="camera-outline" fill="#000" style={styles.defaultIcon} />
        </TouchableOpacity>
      </View>
      {/* <Text>{distance}</Text> */}
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
      <Button>Enregistrer</Button>
    </Wrapper>
  );
};

export default Kilometrage;

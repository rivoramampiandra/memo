import {Button, Icon, Text} from '@ui-kitten/components';
import React from 'react';
import {View, TouchableOpacity, useWindowDimensions} from 'react-native';
import Wrapper from '../../components/Layout/Wrapper';

const Kilometrage = (props: any) => {
  const {navigation} = props;
  const {height} = useWindowDimensions();
  return (
    <Wrapper>
      <View
        style={{
          flexDirection: 'row',
          paddingVertical: 5,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon
            name="chevron-left-outline"
            fill="#000"
            style={{width: 32, height: 32}}
          />
        </TouchableOpacity>
        <View>
          <Text>Kilometrage</Text>
        </View>
        <TouchableOpacity>
          <Icon
            name="camera-outline"
            fill="#000"
            style={{width: 32, height: 32}}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: height * 0.4,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>320 000 km</Text>
      </View>
      <Button>Enregistrer</Button>
    </Wrapper>
  );
};

export default Kilometrage;

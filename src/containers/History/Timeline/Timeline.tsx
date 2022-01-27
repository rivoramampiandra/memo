import {useNavigation} from '@react-navigation/native';
import {Icon, Text} from '@ui-kitten/components';
import React from 'react';
import {TouchableOpacity, useWindowDimensions, View} from 'react-native';
import Timeline from 'react-native-timeline-flatlist';

const data = [
  {
    label: '',
    date: '',
    description: '',
    status: '',
  },
  {
    label: '104 624 km',
    date: '14 avril',
    description: 'Disque de frein avant',
    status: 'ok',
  },
  {
    label: '104624 km',
    date: '14 avril',
    description: 'Disque de frein avant',
    status: 'ok',
  },
  {
    label: '104624 km',
    date: '14 avril',
    description: 'Disque de frein avant',
    status: 'ok',
  },
  {
    label: '104624 km',
    date: '14 avril',
    description: 'Disque de frein avant',
    status: 'ok',
  },
  {
    label: '104 624 km',
    date: '14 avril',
    description: 'Disque de frein avant',
    status: 'ok',
  },
];

const TimelienContent = (rowData: any, sectionID: any, rowID: any) => {
  const data: any = rowData;
  return (
    <View style={{flexDirection: 'row'}}>
      {data.label ? (
        <Icon
          name="checkmark-outline"
          fill="#60BDAC"
          style={{width: 32, height: 32}}
        />
      ) : null}
      <View style={{marginLeft: 0}}>
        <Text style={{fontSize: 13, marginBottom: 12}}>{data.label}</Text>
        <Text style={{fontSize: 11}}>{data.date}</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            flex: 1,
          }}>
          <Text style={{fontSize: 14}}>{data.description}</Text>
          {data.label ? (
            <Icon
              name="info-outline"
              fill="#000"
              style={{width: 16, height: 16, marginLeft: 12}}
            />
          ) : null}
        </View>
      </View>
    </View>
  );
};

const TimelineContainer = () => {
  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  return (
    <View
      style={{
        marginTop: 12,
        justifyContent: 'center',
        flex: 1,
        height: height * 0.12,
      }}>
      <TouchableOpacity onPress={() => navigation.navigate('PDFViewer' as any)}>
        <Text style={{fontSize: 16, marginBottom: 16}}>
          Historique des opérations{' '}
        </Text>
      </TouchableOpacity>
      <Timeline
        data={data}
        circleColor="#000"
        lineColor="#000"
        renderDetail={TimelienContent}
        timeStyle={{
          textAlign: 'center',
          padding: 5,
          marginRight: 12,
          fontSize: 12,
        }}
      />
    </View>
  );
};

export default TimelineContainer;

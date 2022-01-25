import {Text} from '@ui-kitten/components';
import React from 'react';
import {FlatList, ScrollView, useWindowDimensions, View} from 'react-native';
import {styles} from '../Home.style';
import {upcoming, toReplace} from '../../../constant/intervention-mock';
import {InterventionItem} from '../../../components/Intervention';
import {PieChart} from 'react-native-svg-charts';
import Svg from 'react-native-svg';
import {Sunburst} from '../../../components/Chart';

const Dashboard = () => {
  return (
    <View style={{flex: 1}}>
      <Text style={styles.containerTitle}>TABLEAU DE BORD</Text>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}>
        <Sunburst />
      </View>
      <View style={{flex: 1}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <Text>A remplacer</Text>
            <FlatList
              data={toReplace}
              renderItem={({item}) => <InterventionItem item={item} />}
            />
          </View>
          <View>
            <Text>Intervention à venir</Text>
            <FlatList
              data={upcoming}
              renderItem={({item}) => <InterventionItem item={item} />}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Dashboard;

import {Text} from '@ui-kitten/components';
import React from 'react';
import {FlatList, ScrollView, View} from 'react-native';
import {styles} from '../Home.style';
import {upcoming, toReplace} from '../../../constant/intervention-mock';
import {InterventionItem} from '../../../components/Intervention';
import {Sunburst} from '../../../components/Chart';

const Dashboard = () => {
  return (
    <View style={{flex: 1}}>
      <Text style={styles.containerTitle} category="s1">
        TABLEAU DE BORD
      </Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}>
          <Sunburst />
        </View>
        <View style={{flex: 1, marginTop: 38}}>
          <View>
            <Text category="p2">A remplacer</Text>
            <FlatList
              data={toReplace}
              renderItem={({item}) => <InterventionItem item={item} />}
            />
          </View>
          <View>
            <Text style={{marginTop: 33}} category="p2">
              Intervention à venir
            </Text>
            <FlatList
              scrollEnabled={false}
              data={upcoming}
              renderItem={({item}) => <InterventionItem item={item} />}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Dashboard;

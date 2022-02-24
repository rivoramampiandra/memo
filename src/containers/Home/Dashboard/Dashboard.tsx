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
        <View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              padding: 10,
            }}>
            <Sunburst />
          </View>
          <View style={{flex: 1, marginTop: 38}}>
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
                scrollEnabled={false}
                data={upcoming}
                renderItem={({item}) => <InterventionItem item={item} />}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Dashboard;

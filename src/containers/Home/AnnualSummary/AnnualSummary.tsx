import {Text} from '@ui-kitten/components';
import React from 'react';
import {FlatList, ScrollView, View} from 'react-native';
import {InterventionItem} from '../../../components/Intervention';
import {Summary} from '../../../components/Summary';
import {upcoming} from '../../../constant/intervention-mock';
import {styles} from './AnnualSummary.style';

const AnnualSummary = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Text style={styles.title} category="s1">
            Synthèse Annuelle
          </Text>
          <View style={styles.summaryContainer}>
            <View style={styles.topSummary}>
              <Summary
                title="Budget annuel"
                type="default"
                unit="€"
                count="540"
                size="default"
                style={styles.half}
              />
              <Summary
                title="Interventions faites"
                type="default"
                unit={''}
                count="8"
                size="default"
                style={styles.half}
              />
            </View>
            <View style={styles.bottomSummary}>
              <Summary
                title="Kilometrage annuel"
                type="critical"
                unit="km"
                count="8850"
                size="large"
              />
            </View>
          </View>
          <View style={{flex: 1, marginTop: 38}}>
            <Text category="p2">Intervention réalisée</Text>
            <FlatList
              data={upcoming}
              renderItem={({item}) => <InterventionItem item={item} />}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default AnnualSummary;

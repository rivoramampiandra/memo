import {Text} from '@ui-kitten/components';
import React, {useEffect} from 'react';
import {FlatList, ScrollView, View} from 'react-native';
import {InterventionItem} from '../../../components/Intervention';
import {Summary} from '../../../components/Summary';
import {upcoming} from '../../../constant/intervention-mock';
import {InvoiceService} from '../../../services/invoice.service';
import {useAppSelector} from '../../../store/hooks';
import {getCurrentUser} from '../../../store/reducers/authSlice';
import {AsyncStorageUtils} from '../../../utils/asyncStorageUtils';
import {styles} from './AnnualSummary.style';

const AnnualSummary = () => {
  const getInvoiceBudget = async () => {
    const id = AsyncStorageUtils.getUserID();
    const {data} = await InvoiceService.getInvoices(Number(id));
    console.log(
      '🚀 ~ file: AnnualSummary.tsx ~ line 17 ~ getInvoiceBudget ~ data',
      data,
    );
  };

  useEffect(() => {});
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
                count="0"
                size="default"
                style={styles.half}
              />
              <Summary
                title="Interventions faites"
                type="default"
                unit={''}
                count="0"
                size="default"
                style={styles.half}
              />
            </View>
            <View style={styles.bottomSummary}>
              <Summary
                title="Kilometrage annuel"
                type="critical"
                unit="km"
                count="0"
                size="large"
              />
            </View>
          </View>
          <View style={{flex: 1, marginTop: 38}}>
            <Text category="p2">Intervention réalisée</Text>
            {/* <FlatList
              data={upcoming}
              renderItem={({item}) => <InterventionItem item={item} />}
            /> */}
            <View style={{flex: 1, alignItems: 'center'}}>
              <Text category="label">Aucun élément</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default AnnualSummary;

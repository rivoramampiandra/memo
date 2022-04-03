import {Text} from '@ui-kitten/components';
import React, {useEffect, useState} from 'react';
import {ScrollView, View} from 'react-native';
import {EmptyElement} from '../../../components/EmptyElement';
import {Summary} from '../../../components/Summary';
import {CarService} from '../../../services/car.service';
import {InvoiceService} from '../../../services/invoice.service';
import {useAppSelector} from '../../../store/hooks';
import {getCurrentCar} from '../../../store/reducers/carSlice';
import {AsyncStorageUtils} from '../../../utils/asyncStorageUtils';
import {styles} from './AnnualSummary.style';

interface HistoricMilleage {
  mileageHistoryId: number;
  carEntity: any;
  mileage: number;
  date: string;
}

const AnnualSummary = () => {
  const [mileage, setMileage] = useState(0);
  const [interventionsCount, setInterventionsCount] = useState(0);
  const [annualBudget, setAnnualBudget] = useState(0);
  const currentCar = useAppSelector(getCurrentCar);

  const getAnnualBudget = async () => {
    const data = await getInvoiceBudget();
    if (!data || data.length === 0) return 0;
    // faire la moyenne de la somme dans les invoice
    // ! remove this after
    // getAvgInvoice(data);
    return 0;
  };

  const getAvgInvoice = (data: any[]) => {
    const sum = data.reduce((acc, item) => acc + item);
    const avg = sum / data.length;
    return avg;
  };

  const getAvgMileage = (data: any[]) => {
    if (!data || data.length === 0) return 0;
    return data.reduce((acc, item) => acc + Number(item.mileage)) / data.length;
  };

  const getCarInfo = async () => {
    try {
      const userId = await AsyncStorageUtils.getUserID();
      if (!userId) throw new Error('Utilisateur inconnu');
      const {data} = await CarService.getHistoriqueMileage(
        userId,
        currentCar.id,
      );
      if (!data) return 0;
      getAvgMileage(data);
      if (data.mileagePerDayEstimated && data.mileagePerDayEstimated !== -1) {
        setMileage(data.mileagePerDayEstimated);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getIntervetions = async () => {
    const userId = await AsyncStorageUtils.getUserID();
    if (!userId) throw new Error('Utilisateur inconnu');
    const {data} = await InvoiceService.getInvoices(Number(userId));
    if (!data) return 0;
    setInterventionsCount(data.length);
  };

  const getInvoiceBudget = async () => {
    const id = await AsyncStorageUtils.getUserID();
    const {data} = await InvoiceService.getInvoices(Number(id));
    return data;
  };

  useEffect(() => {
    getAnnualBudget();
    getCarInfo();
    getIntervetions();
  }, [currentCar]);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Text style={styles.title} category="h2">
            Synthèse Annuelle
          </Text>
          <View style={styles.summaryContainer}>
            <View style={styles.topSummary}>
              <Summary
                title="Budget annuel"
                type="default"
                unit="€"
                count={String(annualBudget)}
                size="default"
                style={styles.half}
              />
              <Summary
                title="Interventions faites"
                type="default"
                unit={''}
                count={String(interventionsCount)}
                size="default"
                style={styles.half}
              />
            </View>
            <View style={styles.bottomSummary}>
              <Summary
                title="Kilometrage annuel"
                type="critical"
                unit="km"
                count={String(mileage)}
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
            <EmptyElement text="Aucune intervention" />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default AnnualSummary;

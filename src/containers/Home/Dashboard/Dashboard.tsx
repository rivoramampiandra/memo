import {Text} from '@ui-kitten/components';
import React, {useEffect, useState} from 'react';
import {FlatList, ScrollView, View} from 'react-native';
import {styles} from '../Home.style';
import {upcoming, toReplace} from '../../../constant/intervention-mock';
import {InterventionItem} from '../../../components/Intervention';
import {Sunburst} from '../../../components/Chart';
import {CarService} from '../../../services/car.service';
import {useAppSelector} from '../../../store/hooks';
import {getCurrentCar} from '../../../store/reducers/carSlice';
import {AsyncStorageUtils} from '../../../utils/asyncStorageUtils';
import {InterventionService} from '../../../services/intervention.service';
import {EmptyElement} from '../../../components/EmptyElement';

interface GlobalHealth {
  engine: number;
  tires: number;
  brakes: number;
  'technical control': number;
}

const Dashboard = () => {
  const currentCar = useAppSelector(getCurrentCar);
  const [mileage, setMileage] = useState(0);
  const [globalHealth, setGlobalHealth] = useState<GlobalHealth>();

  const getCarInfo = async () => {
    try {
      const carId = await AsyncStorageUtils.getCurrentCarId();
      if (!carId) {
        throw new Error('Car introuvable');
      }
      const {data} = await CarService.getCar(carId);
      console.log(
        '🚀 ~ file: Dashboard.tsx ~ line 30 ~ getCarInfo ~ carId',
        carId,
      );
      if (!data) throw new Error('Car introuvable');
      setMileage(data.mileage);
    } catch (error) {
      console.log(
        '🚀 ~ file: Dashboard.tsx ~ line 41 ~ getCarInfo ~ error',
        error,
      );
      console.error(error);
    }
  };

  const getIntervetions = async () => {
    const id = await AsyncStorageUtils.getUserID();
    if (!id) throw new Error("Id de l'utilisateur invalide");
  };

  const getGlobalHealth = async () => {
    try {
      const id = await AsyncStorageUtils.getUserID();
      if (!id) throw new Error("Id de l'utilisateur invalide");
      const res = await CarService.getGlobalHealth(String(id), currentCar.id);
      if (res.data) {
        //TODO: Display error message
        return;
      }
      console.log(
        '🚀 ~ file: Dashboard.tsx ~ line 62 ~ getGlobalHealth ~ data',
        res.data,
      );
      setGlobalHealth(res.data);
    } catch (error) {
      console.log(
        '🚀 ~ file: Dashboard.tsx ~ line 54 ~ getGlobalHealth ~ error',
        error,
      );
      console.error(error);
    }
  };

  useEffect(() => {
    if (currentCar && currentCar.id) {
      getCarInfo();
      getGlobalHealth();
      getIntervetions();
    }
  }, []);

  return (
    <>
      <Text style={styles.containerTitle} category="h2">
        Tableau de bord
      </Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}>
          <Sunburst mileage={mileage} globalHealth={globalHealth} />
        </View>
        <View style={{flex: 1, marginTop: 38}}>
          <View>
            <Text category="p2">A remplacer</Text>
            {/* <FlatList
              data={toReplace}
              renderItem={({item}) => <InterventionItem item={item} />}
            /> */}
            <EmptyElement text="Aucune intervention" />
          </View>
          <View>
            <Text style={{marginTop: 33}} category="p2">
              Intervention à venir
            </Text>
            {/* <FlatList
              scrollEnabled={false}
              data={upcoming}
              renderItem={({item}) => <InterventionItem item={item} />}
            /> */}
            <EmptyElement text="Aucune intervention" />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Dashboard;

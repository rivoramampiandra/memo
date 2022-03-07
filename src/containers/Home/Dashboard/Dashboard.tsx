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

const Dashboard = () => {
  const currentCar = useAppSelector(getCurrentCar);
  const [mileage, setMileage] = useState(0);

  const getCarInfo = async () => {
    try {
      const {data} = await CarService.getCar(currentCar.id);
      if (!data) throw new Error('Car introuvable');
      setMileage(data.mileage);
    } catch (error) {
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
      const {data} = await CarService.getGlobalHealth(
        String(id),
        currentCar.id,
      );
    } catch (error) {
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
          <Sunburst mileage={mileage} />
        </View>
        <View style={{flex: 1, marginTop: 38}}>
          <View>
            <Text category="p2">A remplacer</Text>
            {/* <FlatList
              data={toReplace}
              renderItem={({item}) => <InterventionItem item={item} />}
            /> */}
            <View style={{flex: 1, alignItems: 'center'}}>
              <Text category="label">Aucun élément</Text>
            </View>
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
            <View style={{flex: 1, alignItems: 'center'}}>
              <Text category="label">Aucun élément</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Dashboard;

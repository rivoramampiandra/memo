import {Text} from '@ui-kitten/components';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  useWindowDimensions,
  View,
} from 'react-native';
import {styles} from '../Home.style';
import {upcoming, toReplace} from '../../../constant/intervention-mock';
import {InterventionItem} from '../../../components/Intervention';
import image from '../../../constant/image';
import {Sunburst} from '../../../components/Chart';

const Dashboard = () => {
  const {width, height} = useWindowDimensions();
  const [layout, setLayout] = useState<any>({});

  const _onLayout = (e: any) => {
    setLayout({layout: e.nativeEvent.layout});
  };

  return (
    <View style={{flex: 1}} onLayout={_onLayout}>
      <Text style={styles.containerTitle}>TABLEAU DE BORD</Text>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Image
          source={image.TEMP_CHART}
          style={{width: width, height: height * 0.45}}
          resizeMode="contain"
        />
      </View>
      {/* <View style={{flex: 1}}>{!!layout.layout && <Sunburst />}</View> */}
      <View>
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

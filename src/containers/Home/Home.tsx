import React, {useEffect, useRef, useState} from 'react';
import {Animated, FlatList, SafeAreaView, View} from 'react-native';
import HeaderNav from '../../components/Layout/Header/HeaderNav';
import Onboarding from '../../components/Onboarding/Onboarding';
import Paginator from '../../components/Onboarding/Paginator';
import {AsyncStorageUtils} from '../../utils/asyncStorageUtils';
import AnnualSummary from './AnnualSummary/AnnualSummary';
import Dashboard from './Dashboard/Dashboard';
import {styles} from './Home.style';
import HomeItem from './HomeItem';

const data = [
  {
    id: 1,
    component: <Dashboard />,
  },
  {
    id: 2,
    component: <AnnualSummary />,
  },
];

type FirstConnection = 'false' | 'true';

const Home = () => {
  const [firstLogin, setFirstLogin] = useState<FirstConnection>('false');
  const [done, setDone] = useState(true);

  const [currentIndex, setcurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const timeout = () =>
    setTimeout(() => {
      setDone(true);
    }, 3000);

  useEffect(() => {
    AsyncStorageUtils.checkFirstConnection().then(res => {
      setFirstLogin(res);
    });
  }, []);

  const slideRef = useRef(null);

  const viewableItemsChanged: any = useRef(({viewableItems}: any) => {
    setcurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  return (
    <SafeAreaView style={styles.container}>
      {(!firstLogin || firstLogin === 'false') && done ? (
        <View style={{}}>
          <HeaderNav />
          <View style={styles.homeItemContainer}>
            <FlatList
              data={data}
              horizontal
              pagingEnabled
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              bounces={false}
              keyExtractor={(item: any) => item.id}
              scrollEventThrottle={32}
              ref={slideRef}
              onViewableItemsChanged={viewableItemsChanged}
              viewabilityConfig={viewConfig}
              onScroll={Animated.event(
                [
                  {
                    nativeEvent: {
                      contentOffset: {x: scrollX},
                    },
                  },
                ],
                {useNativeDriver: false},
              )}
              renderItem={({item}) => <HomeItem component={item.component} />}
            />
            <Paginator data={data} scrollX={scrollX} />
          </View>
        </View>
      ) : (
        <Onboarding setDone={setDone} setFirstLogin={setFirstLogin} />
      )}
    </SafeAreaView>
  );
};

export default Home;

import React, {useEffect, useRef, useState} from 'react';
import {View, FlatList, Animated} from 'react-native';
import slides from '../../constant/onboarding';
import {styles} from './Onboarding.style';
import OnboardingItem from './OnboardingItem';
import Paginator from './Paginator';

const Onboarding = (props: any) => {
  const {setDone, setFirstLogin} = props;
  const [currentIndex, setcurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const timeout = () =>
    setTimeout(() => {
      setDone(true);
      setFirstLogin(false);
    }, 3000);

  const slideRef = useRef(null);

  const viewableItemsChanged: any = useRef(({viewableItems}: any) => {
    setcurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  useEffect(() => {
    if (currentIndex === 4) {
      timeout();
    }
  }, [currentIndex]);

  const handleLastInfo = () => {};

  return (
    <View style={styles.container}>
      <View>
        <FlatList
          data={slides}
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
          renderItem={({item}) => <OnboardingItem item={item} />}
        />
      </View>
      <Paginator data={slides} scrollX={scrollX} />
    </View>
  );
};

export default Onboarding;

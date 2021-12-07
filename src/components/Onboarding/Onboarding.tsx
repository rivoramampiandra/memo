import React, {useRef, useState} from 'react';
import {View, Text, FlatList, Animated} from 'react-native';
import slides from '../../constant/onboarding';
import {styles} from './Onboarding.style';
import OnboardingItem from './OnboardingItem';
import Paginator from './Paginator';

const Onboarding = (props: any) => {
  const {setDone} = props;
  const [currentIndex, setcurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const timeout = setTimeout(() => {
    setDone(true);
  }, 3000);
  const slideRef = useRef(null);
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

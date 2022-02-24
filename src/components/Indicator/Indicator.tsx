import {Icon, Text} from '@ui-kitten/components';
import React, {useState} from 'react';
import {TouchableOpacity, useWindowDimensions, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import HowItWork from '../Modal/Content/HowItWork';
import Modal from '../Modal/Modal';
import {styles} from './Indicator.style';

const Metric = () => {
  const MAX = 50_000;
  const DIVISER = 5_000;
  const INTERVAL = 10_000;
  const length = (MAX + INTERVAL) / DIVISER + 1;
  const data = new Array(length);
  data.fill(0);

  const {width} = useWindowDimensions();
  const containerWidth = width;
  const val = containerWidth / 13;
  const part = (val * 100) / containerWidth;

  return (
    <View style={styles.metricContainer}>
      {data.map((item, index) => (
        <View
          key={index}
          style={{
            alignItems: 'center',
            width: `${index % 2 !== 0 ? part / 2 : part * 1.5}%`,
          }}>
          <View
            style={[
              styles.unit,
              index % 2 !== 0 && index !== 0 ? styles.minUnit : styles.maxUnit,
            ]}
          />
          {index === 0 ||
          index === 2 ||
          index === 6 ||
          index === 10 ||
          index === 14 ? (
            <Text style={styles.unitText}>{String((index * 10_000) / 2)}</Text>
          ) : (
            <></>
          )}
        </View>
      ))}
    </View>
  );
};

const Indicator = (props: any) => {
  const [modalVisibility, setModalVisibility] = useState(false);
  const {width} = useWindowDimensions();
  const {status: indicatorStatus}: any = props;
  const indicatorColors = ['#60BDAC', '#F28D55', '#FF5757'];

  return (
    <View style={styles.indicatorContainer}>
      <Text style={{fontSize: 10}}>Dernière intervention</Text>
      <Text
        style={styles.textdefault}
        status={indicatorStatus === 'warning' ? 'danger' : 'basic'}>
        12 624<Text style={styles.highlightText}>km</Text>
      </Text>
      <View
        style={{
          marginVertical: 16,
          width: width - width * 0.15,
        }}>
        <Icon name="arrow-down" fill="#000" style={{width: 32, height: 32}} />
        <LinearGradient
          start={{x: 0.0, y: 0.5}}
          end={{x: 1, y: 0.5}}
          locations={[0.5, 0.75, 1]}
          colors={indicatorColors}
          style={styles.gradientContainer}
        />
        <Metric />
      </View>
      <TouchableOpacity
        onPress={() => setModalVisibility(true)}
        style={{marginVertical: 12}}>
        <Text style={styles.linkbutton}>Comment lire cette information ?</Text>
      </TouchableOpacity>

      <Modal
        modalVisibility={modalVisibility}
        closeModal={() => setModalVisibility(false)}
        component={<HowItWork />}
      />
    </View>
  );
};

export default Indicator;

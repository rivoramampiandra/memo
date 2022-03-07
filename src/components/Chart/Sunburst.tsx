import {useNavigation} from '@react-navigation/native';
import {Text} from '@ui-kitten/components';
import React from 'react';
import {TouchableOpacity, useWindowDimensions, View} from 'react-native';
import Svg from 'react-native-svg';
import {PieChart, PieChartData} from 'react-native-svg-charts';
import {numberFormater} from '../../utils/numberUtils';

const COLOR = {
  primary: '96, 189, 172',
  warning: '237, 140, 51',
  error: '253, 87, 87',
  default: '242, 242, 242',
};

const chartData = {
  engine: 40,
  brake: 20,
  tires: 100,
  bodywork: 48,
};

let TEMP_DATA = 4;
let TEMP_DATA_WARNING = 6;

const getPieChartData = (data: number[]): PieChartData[] => {
  return data.map((item, index) => {
    let transparency = 1;
    let color = COLOR.default;

    // let transparency = (index + 1) / 10  | 1;
    // if (index === 0) {
    //   color = COLOR.warning;
    //   TEMP_DATA_WARNING--;
    //   transparency =
    //     TEMP_DATA_WARNING > 0 && TEMP_DATA_WARNING < 6
    //       ? TEMP_DATA_WARNING / 3
    //       : 0;
    // } else if (index === 2) {
    //   color = COLOR.error;
    //   TEMP_DATA = TEMP_DATA - 1;
    //   transparency = TEMP_DATA > 0 && TEMP_DATA < 4 ? TEMP_DATA / 3 : 0;
    // } else
    color = COLOR.primary;

    return {
      key: index,
      value: item,
      svg: {fill: `rgba(${color}, ${transparency})`},
    };
  });
};

const getPieChartBg = (data: number[]): PieChartData[] => {
  return data.map((item, index) => {
    const colorPalette = {
      default: '242, 242, 242',
      error: '233, 106, 103',
    };

    let color = colorPalette.default;

    // color = index === 2 ? colorPalette.error : colorPalette.default;

    return {
      key: index,
      value: item,
      svg: {fill: `rgba(${color}, 0.3)`},
    };
  });
};

const data10 = getPieChartData([25, 25, 25, 25]);
const data9 = getPieChartData([25, 25, 25, 25]);
const data8 = getPieChartData([25, 25, 25, 25]);
const data7 = getPieChartData([25, 25, 25, 25]);
const data6 = getPieChartData([25, 25, 25, 25]);
const data5 = getPieChartData([25, 25, 25, 25]);
const data4 = getPieChartData([25, 25, 25, 25]);
const data3 = getPieChartData([25, 25, 25, 25]);
const data2 = getPieChartData([25, 25, 25, 25]);
const data1 = getPieChartData([25, 25, 25, 25]);

const backgroundData = getPieChartBg([125, 125, 125, 125]);

const Sunbrust = (props: any) => {
  const {mileage} = props;
  const {width, height} = useWindowDimensions();
  const navigation = useNavigation();

  const handleClickFamily = () => {
    //@ts-ignore: next-line
    navigation.navigate('History' as any, {status: null});
  };

  return (
    <>
      <View style={{position: 'absolute', zIndex: 3}}>
        <Text style={{fontSize: 28, fontWeight: '700'}}>
          {numberFormater(mileage)}
        </Text>
        <Text style={{textAlign: 'center', fontSize: 22}}>km</Text>
      </View>
      <TouchableOpacity
        onPress={() => handleClickFamily()}
        style={{
          zIndex: 4,
          position: 'absolute',
          width: '50%',
          height: '50%',
          left: 0,
          top: 0,
        }}>
        <Text
          style={{
            transform: [{rotate: '-40deg'}],
            fontSize: 14,
            position: 'absolute',
            left: 25,
            top: 35,
          }}>
          Moteur
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleClickFamily()}
        style={{
          position: 'absolute',
          zIndex: 4,
          width: '50%',
          height: '50%',
          right: 0,
          top: 0,
        }}>
        <Text
          style={{
            transform: [{rotate: '40deg'}],
            fontSize: 14,
            position: 'absolute',
            right: 35,
            top: 35,
          }}>
          Pneus
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleClickFamily()}
        style={{
          position: 'absolute',
          zIndex: 4,
          width: '50%',
          height: '50%',
          right: 0,
          bottom: 0,
        }}>
        <Text
          style={{
            position: 'absolute',
            transform: [{rotate: '-40deg'}],
            fontSize: 14,
            right: 25,
            bottom: 35,
          }}>
          Carosserie
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleClickFamily()}
        style={{
          position: 'absolute',
          zIndex: 4,
          width: '50%',
          height: '50%',
          left: 0,
          bottom: 0,
        }}>
        <Text
          style={{
            position: 'absolute',
            transform: [{rotate: '40deg'}],
            fontSize: 14,
            left: 35,
            bottom: 35,
          }}>
          Freins
        </Text>
      </TouchableOpacity>
      <PieChart
        style={{
          width,
          height: height * 0.45,
          position: 'absolute',
        }}
        innerRadius={80}
        outerRadius={175}
        padAngle={0.02}
        data={backgroundData}
      />
      <PieChart
        style={{width, height: height * 0.45, zIndex: 3}}
        innerRadius={170}
        outerRadius={175}
        padAngle={0.02}
        data={data1}>
        <Svg>
          <PieChart
            style={{
              width,
              height: height * 0.45,
              zIndex: 3,
            }}
            innerRadius={160}
            outerRadius={165}
            padAngle={0.02}
            data={data2}>
            <Svg>
              <PieChart
                style={{
                  width,
                  height: height * 0.45,
                  zIndex: 3,
                }}
                innerRadius={150}
                outerRadius={155}
                padAngle={0.02}
                data={data3}>
                <Svg>
                  <PieChart
                    style={{
                      width,
                      height: height * 0.45,
                      zIndex: 3,
                    }}
                    innerRadius={140}
                    outerRadius={145}
                    padAngle={0.02}
                    data={data4}>
                    <Svg>
                      <PieChart
                        style={{
                          width,
                          height: height * 0.45,
                          zIndex: 3,
                        }}
                        innerRadius={130}
                        outerRadius={135}
                        padAngle={0.02}
                        data={data5}>
                        <Svg>
                          <PieChart
                            style={{
                              width,
                              height: height * 0.45,
                              zIndex: 3,
                            }}
                            innerRadius={120}
                            outerRadius={125}
                            padAngle={0.02}
                            data={data6}>
                            <Svg>
                              <PieChart
                                style={{
                                  width,
                                  height: height * 0.45,
                                  zIndex: 3,
                                }}
                                innerRadius={110}
                                outerRadius={115}
                                padAngle={0.02}
                                data={data7}>
                                <Svg>
                                  <PieChart
                                    style={{
                                      width,
                                      height: height * 0.45,
                                      zIndex: 3,
                                    }}
                                    innerRadius={100}
                                    outerRadius={105}
                                    padAngle={0.02}
                                    data={data8}>
                                    <Svg>
                                      <PieChart
                                        style={{
                                          width,
                                          height: height * 0.45,
                                          zIndex: 3,
                                        }}
                                        innerRadius={90}
                                        outerRadius={95}
                                        padAngle={0.02}
                                        data={data9}>
                                        <Svg>
                                          <PieChart
                                            style={{
                                              width,
                                              height: height * 0.45,
                                              zIndex: 3,
                                            }}
                                            innerRadius={80}
                                            outerRadius={85}
                                            padAngle={0.02}
                                            data={data10}
                                          />
                                        </Svg>
                                      </PieChart>
                                    </Svg>
                                  </PieChart>
                                </Svg>
                              </PieChart>
                            </Svg>
                          </PieChart>
                        </Svg>
                      </PieChart>
                    </Svg>
                  </PieChart>
                </Svg>
              </PieChart>
            </Svg>
          </PieChart>
        </Svg>
      </PieChart>
    </>
  );
};

export default Sunbrust;

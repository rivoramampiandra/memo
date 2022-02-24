import {Text} from '@ui-kitten/components';
import React from 'react';
import {useWindowDimensions, View} from 'react-native';
import Svg from 'react-native-svg';
import {PieChart, PieChartData} from 'react-native-svg-charts';

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
    if (index === 0) {
      color = COLOR.warning;
      TEMP_DATA_WARNING--;
      transparency =
        TEMP_DATA_WARNING > 0 && TEMP_DATA_WARNING < 6
          ? TEMP_DATA_WARNING / 3
          : 0;
    } else if (index === 2) {
      color = COLOR.error;
      TEMP_DATA = TEMP_DATA - 1;
      transparency = TEMP_DATA > 0 && TEMP_DATA < 4 ? TEMP_DATA / 3 : 0;
    } else color = COLOR.primary;

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

    color = index === 2 ? colorPalette.error : colorPalette.default;

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
  const {width, height} = useWindowDimensions();

  return (
    <>
      <View style={{position: 'absolute'}}>
        <Text style={{fontSize: 28, fontWeight: '700'}}>164 000</Text>
        <Text style={{textAlign: 'center', fontSize: 22}}>km</Text>
      </View>
      <Text
        style={{
          position: 'absolute',
          left: 0,
          top: 45,
          transform: [{rotate: '-45deg'}],
          fontSize: 16,
        }}>
        Moteur
      </Text>
      <Text
        style={{
          position: 'absolute',
          right: 0,
          top: 45,
          transform: [{rotate: '45deg'}],
          fontSize: 16,
        }}>
        Pneus
      </Text>
      <Text
        style={{
          position: 'absolute',
          right: 0,
          bottom: 35,
          transform: [{rotate: '-45deg'}],
          fontSize: 16,
        }}>
        Carosserie
      </Text>
      <Text
        style={{
          position: 'absolute',
          left: 0,
          bottom: 45,
          transform: [{rotate: '45deg'}],
          fontSize: 16,
        }}>
        Freins
      </Text>
      <PieChart
        style={{
          width: width,
          height: height * 0.45,
          position: 'absolute',
        }}
        innerRadius={80}
        outerRadius={175}
        data={backgroundData}
      />
      <PieChart
        style={{width: width, height: height * 0.45, zIndex: 3}}
        innerRadius={170}
        outerRadius={175}
        data={data1}>
        <Svg>
          <PieChart
            style={{width: width, height: height * 0.45, zIndex: 3}}
            innerRadius={160}
            outerRadius={165}
            data={data2}>
            <Svg>
              <PieChart
                style={{width: width, height: height * 0.45, zIndex: 3}}
                innerRadius={150}
                outerRadius={155}
                data={data3}>
                <Svg>
                  <PieChart
                    style={{width: width, height: height * 0.45, zIndex: 3}}
                    innerRadius={140}
                    outerRadius={145}
                    data={data4}>
                    <Svg>
                      <PieChart
                        style={{
                          width: width,
                          height: height * 0.45,
                          zIndex: 3,
                        }}
                        innerRadius={130}
                        outerRadius={135}
                        data={data5}>
                        <Svg>
                          <PieChart
                            style={{
                              width: width,
                              height: height * 0.45,
                              zIndex: 3,
                            }}
                            innerRadius={120}
                            outerRadius={125}
                            data={data6}>
                            <Svg>
                              <PieChart
                                style={{
                                  width: width,
                                  height: height * 0.45,
                                  zIndex: 3,
                                }}
                                innerRadius={110}
                                outerRadius={115}
                                data={data7}>
                                <Svg>
                                  <PieChart
                                    style={{
                                      width: width,
                                      height: height * 0.45,
                                      zIndex: 3,
                                    }}
                                    innerRadius={100}
                                    outerRadius={105}
                                    data={data8}>
                                    <Svg>
                                      <PieChart
                                        style={{
                                          width: width,
                                          height: height * 0.45,
                                          zIndex: 3,
                                        }}
                                        innerRadius={90}
                                        outerRadius={95}
                                        data={data9}>
                                        <Svg>
                                          <PieChart
                                            style={{
                                              width: width,
                                              height: height * 0.45,
                                              zIndex: 3,
                                            }}
                                            innerRadius={80}
                                            outerRadius={85}
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

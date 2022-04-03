import {useNavigation} from '@react-navigation/native';
import {Text} from '@ui-kitten/components';
import React, {useEffect, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import Svg from 'react-native-svg';
import {PieChart, PieChartData} from 'react-native-svg-charts';
import {numberFormater} from '../../utils/numberUtils';

const COLOR = {
  primary: '96, 189, 172',
  warning: '237, 140, 51',
  error: '253, 87, 87',
  default: '242, 242, 242',
};

const KEYS: any = {
  tires: 1,
  engine: 4,
  'technical control': 2,
  brakes: 3,
};

type KEYTYPE = typeof KEYS;

const BG_COLOR = {
  default: '242, 242, 242',
  error: '233, 106, 103',
};

const defaultData = {
  engine: 0,
  brakes: 0,
  tires: 0,
  'technical control': 0,
};

const Sunbrust = (props: any) => {
  const {mileage, globalHealth} = props;
  console.log(
    '🚀 ~ file: Sunburst.tsx ~ line 39 ~ Sunbrust ~ globalHealth',
    globalHealth,
  );
  const navigation = useNavigation();
  // ! Remove static data after test
  const [chartInput, setChartInput] = useState(globalHealth || defaultData);
  // const [chartInput, setChartInput] = useState(defaultData);
  const [chartOutput, setChartOutput] = useState({
    data1: [],
    data2: [],
    data3: [],
    data4: [],
    data5: [],
    data6: [],
    data7: [],
    data8: [],
    data9: [],
    data10: [],
  });
  const [result, setResult] = useState<any>([]);

  const getBgColor = (damage: number) =>
    damage >= 81 && damage <= 100 ? BG_COLOR.error : BG_COLOR.default;

  const getPieChartBg = (data: any): PieChartData[] => {
    const res = [];
    for (let slice in data) {
      let color = getBgColor(data[slice]);
      const chartSlice = createSlice(KEYS[slice], color, 0.3);
      res.push(chartSlice);
    }
    return [res[2], res[3], res[1], res[0]];
  };

  const createSlice = (key: number, color: string, transparency: number) => {
    const DEFAULT_PART = 25;
    return {
      key: key,
      value: DEFAULT_PART,
      svg: {fill: `rgba(${color}, ${transparency})`},
    };
  };

  /**
   *
   * Indicateurs d'usures
   * 0% => 10 traits vert
   * 80% => 4 traits orange : ( 100% - 80% - 60% - 40% ) d'opacité
   * 100% => 2 traits rouge : ( 60% - 40% ) d'opacité
   *
   */
  const generateChartData = (
    damage: number,
    key: number,
  ): Array<PieChartData> => {
    const HEALTH = 100;
    const STATE = HEALTH - damage;
    const BAR_COUNT = 10;
    const SHOWN_BAR_COUNT = Math.floor(STATE / BAR_COUNT);
    const HIDDEN_BAR_COUNT = HEALTH - STATE / BAR_COUNT;
    let DEFAULT_TRANSPARENCY = 1;
    const res = [];

    if (STATE >= 81 && STATE <= 100) {
      let transparency_elt_count = 3;
      const TRANSPARENCY_LIMIT = SHOWN_BAR_COUNT - transparency_elt_count;
      let index = 0;
      while (index < BAR_COUNT) {
        let transparency = 1;
        transparency = index < SHOWN_BAR_COUNT ? 1 : 0;
        if (index <= SHOWN_BAR_COUNT && index >= TRANSPARENCY_LIMIT) {
          DEFAULT_TRANSPARENCY = DEFAULT_TRANSPARENCY - 0.2;
          transparency = DEFAULT_TRANSPARENCY;
        }
        res.push(createSlice(key, COLOR.primary, transparency));
        index++;
      }
    } else if (STATE >= 41 && STATE <= 80) {
      let transparency_elt_count = 3;
      let index = 0;
      const TRANSPARENCY_LIMIT = SHOWN_BAR_COUNT - transparency_elt_count;
      while (index < BAR_COUNT) {
        let transparency = 1;
        transparency = index < SHOWN_BAR_COUNT ? 1 : 0;
        if (index <= SHOWN_BAR_COUNT && index >= TRANSPARENCY_LIMIT) {
          DEFAULT_TRANSPARENCY = DEFAULT_TRANSPARENCY - 0.2;
          transparency = DEFAULT_TRANSPARENCY;
        }
        res.push(createSlice(key, COLOR.warning, transparency));
        index++;
      }
    } else if (STATE >= 0 && STATE <= 40) {
      const transparency_elt_count = 1;
      const TRANSPARENCY_LIMIT = SHOWN_BAR_COUNT - transparency_elt_count;
      let index = 0;
      while (index < BAR_COUNT) {
        let transparency = 1;

        transparency = index < SHOWN_BAR_COUNT ? 1 : 0;
        if (index <= SHOWN_BAR_COUNT && index >= TRANSPARENCY_LIMIT) {
          DEFAULT_TRANSPARENCY = DEFAULT_TRANSPARENCY - 0.2;
          transparency = DEFAULT_TRANSPARENCY;
        }
        index < res.push(createSlice(key, COLOR.error, transparency));
        index++;
      }
    }
    return res;
  };

  const backgroundData = getPieChartBg(chartInput);

  const handleClickFamily = () => {
    //@ts-ignore: next-line
    navigation.navigate('History' as any, {status: null});
  };
  const generateChart = (data: any) => {
    for (const slice in data) {
      const chartSlice = generateChartData(data[slice], KEYS[slice]);
      result.push(chartSlice);
    }
    if (result) {
      // * result[key-1][index in result]
      setChartOutput({
        data1: [result[2][9], result[3][9], result[1][9], result[0][9]],
        data2: [result[2][8], result[3][8], result[1][8], result[0][8]],
        data3: [result[2][7], result[3][7], result[1][7], result[0][7]],
        data4: [result[2][6], result[3][6], result[1][6], result[0][6]],
        data5: [result[2][5], result[3][5], result[1][5], result[0][5]],
        data6: [result[2][4], result[3][4], result[1][4], result[0][4]],
        data7: [result[2][3], result[3][3], result[1][3], result[0][3]],
        data8: [result[2][2], result[3][2], result[1][2], result[0][2]],
        data9: [result[2][1], result[3][1], result[1][1], result[0][1]],
        data10: [result[2][0], result[3][0], result[1][0], result[0][0]],
      });
    }
    return result;
  };

  useEffect(() => {
    generateChart(chartInput);
  }, [chartInput]);

  return (
    <>
      <View style={{position: 'absolute', zIndex: 3}}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '700',
            fontFamily: 'Montserrat-Bold',
          }}>
          {numberFormater(mileage)}
        </Text>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 16,
            fontFamily: 'Montserrat-Regular',
          }}>
          km
        </Text>
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
            transform: [{rotate: '-55deg'}],
            fontSize: 14,
            position: 'absolute',
            left: 25,
            top: 65,
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
            transform: [{rotate: '50deg'}],
            fontSize: 14,
            position: 'absolute',
            right: 30,
            top: 65,
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
            transform: [
              {rotateZ: '-50deg'},
              {rotateY: '180deg'},
              {rotateX: '-180deg'},
            ],
            fontSize: 14,
            right: 15,
            bottom: 65,
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
            transform: [
              {rotateZ: '47deg'},
              {rotateY: '-180deg'},
              {rotateX: '180deg'},
            ],
            fontSize: 14,
            left: 30,
            bottom: 65,
          }}>
          Freins
        </Text>
      </TouchableOpacity>
      <PieChart
        style={{
          width: 355,
          height: 355,
          position: 'absolute',
        }}
        innerRadius={70}
        outerRadius={149}
        padAngle={0.02}
        data={backgroundData}
      />
      <PieChart
        style={{width: 355, height: 355, zIndex: 3}}
        innerRadius={142}
        outerRadius={149}
        padAngle={0.02}
        data={chartOutput.data1}>
        <Svg>
          <PieChart
            style={{
              width: 355,
              height: 355,
              zIndex: 3,
            }}
            innerRadius={134}
            outerRadius={141}
            padAngle={0.02}
            data={chartOutput.data2}>
            <Svg>
              <PieChart
                style={{
                  width: 355,
                  height: 355,
                  zIndex: 3,
                }}
                innerRadius={126}
                outerRadius={133}
                padAngle={0.02}
                data={chartOutput.data3}>
                <Svg>
                  <PieChart
                    style={{
                      width: 355,
                      height: 355,
                      zIndex: 3,
                    }}
                    innerRadius={118}
                    outerRadius={125}
                    padAngle={0.02}
                    data={chartOutput.data4}>
                    <Svg>
                      <PieChart
                        style={{
                          width: 355,
                          height: 355,
                          zIndex: 3,
                        }}
                        innerRadius={110}
                        outerRadius={117}
                        padAngle={0.02}
                        data={chartOutput.data5}>
                        <Svg>
                          <PieChart
                            style={{
                              width: 355,
                              height: 355,
                              zIndex: 3,
                            }}
                            innerRadius={102}
                            outerRadius={109}
                            padAngle={0.02}
                            data={chartOutput.data6}>
                            <Svg>
                              <PieChart
                                style={{
                                  width: 355,
                                  height: 355,
                                  zIndex: 3,
                                }}
                                innerRadius={94}
                                outerRadius={101}
                                padAngle={0.02}
                                data={chartOutput.data7}>
                                <Svg>
                                  <PieChart
                                    style={{
                                      width: 355,
                                      height: 355,
                                      zIndex: 3,
                                    }}
                                    innerRadius={86}
                                    outerRadius={93}
                                    padAngle={0.02}
                                    data={chartOutput.data8}>
                                    <Svg>
                                      <PieChart
                                        style={{
                                          width: 355,
                                          height: 355,
                                          zIndex: 3,
                                        }}
                                        innerRadius={78}
                                        outerRadius={85}
                                        padAngle={0.02}
                                        data={chartOutput.data9}>
                                        <Svg>
                                          <PieChart
                                            style={{
                                              width: 355,
                                              height: 355,
                                              zIndex: 3,
                                            }}
                                            innerRadius={70}
                                            outerRadius={77}
                                            padAngle={0.02}
                                            data={chartOutput.data10}
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

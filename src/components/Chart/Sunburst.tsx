import React, {useEffect, useState} from 'react';
import {View, processColor, LayoutChangeEvent} from 'react-native';
import {styles} from './Sunburst.style';
import {LineChart, PieChart} from 'react-native-charts-wrapper';

const Sunbrust = (props: any) => {
  const [state, setState] = useState<any>({
    legend: {
      // enabled: true,
      textSize: 15,
      form: 'CIRCLE',
      // horizontalAlignment: 'CENTER',
      // verticalAlignment: 'CENTER',
      // orientation: 'HORIZONTAL',
      wordWrapEnabled: true,
    },
    data: {
      dataSets: [
        {
          values: [
            {value: 25, label: 'Moteur'},
            {value: 25, label: 'Pneu'},
            {value: 25, label: 'Carosserie'},
            {value: 25, label: 'Freins'},
          ],
          label: '',
          config: {
            colors: [
              processColor('#60BDAC'),
              processColor('#60BDAC'),
              processColor('#60BDAC'),
              processColor('#ED8C33'),
            ],
            valueTextSize: 20,
            valueTextColor: processColor('#fff'),
            sliceSpace: 5,
            // selectionShift: 13,
            // xValuePosition: "OUTSIDE_SLICE",
            // yValuePosition: "OUTSIDE_SLICE",
            valueFormatter: "#.#'%'",
            valueLineColor: processColor('#fff'),
            valueLinePart1Length: 0.5,
          },
        },
      ],
    },
    highlights: [],
    description: {
      text: '',
    },
  });

  const handleSelect = (event: any) => {
    let entry = event.nativeEvent;
    if (entry == null) {
      setState({...state, selectedEntry: null});
    } else {
      setState({...state, selectedEntry: JSON.stringify(entry)});
    }

    console.log(event.nativeEvent);
  };

  return (
    <View style={{flex: 1}}>
      <PieChart
        style={styles.chart}
        // logEnabled={true}
        chartDescription={state.description}
        data={state.data}
        legend={state.legend}
        // highlights={state.highlights}
        entryLabelColor={processColor('#fff')}
        entryLabelTextSize={20}
        // entryLabelFontFamily={'Montserat'}
        drawEntryLabels={true}
        rotationEnabled={false}
        rotationAngle={0}
        // usePercentValues={true}
        styledCenterText={{
          text: `160 624 \n km`,
          color: processColor('#000'),
          size: 30,
        }}
        centerTextRadiusPercent={0}
        holeRadius={35}
        holeColor={processColor('#f0f0f0')}
        transparentCircleRadius={40}
        maxAngle={360}
      />
    </View>
  );
};

export default Sunbrust;

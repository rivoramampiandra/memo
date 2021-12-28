import React, {useState} from 'react';
import {View, processColor} from 'react-native';
import {styles} from './Sunbrust.style';
import {PieChart} from 'react-native-charts-wrapper';

const Sunbrust = () => {
  const [state, setState] = useState<any>({
    legend: {
      enabled: true,
      textSize: 15,
      form: 'CIRCLE',

      horizontalAlignment: 'RIGHT',
      verticalAlignment: 'CENTER',
      orientation: 'VERTICAL',
      wordWrapEnabled: true,
    },
    data: {
      dataSets: [
        {
          values: [
            {value: 45, label: 'Sandwiches'},
            {value: 21, label: 'Salads'},
            {value: 15, label: 'Soup'},
            {value: 9, label: 'Beverages'},
            {value: 15, label: 'Desserts'},
          ],
          label: 'Pie dataset',
          config: {
            colors: [
              processColor('#C0FF8C'),
              processColor('#FFF78C'),
              processColor('#FFD08C'),
              processColor('#8CEAFF'),
              processColor('#FF8C9D'),
            ],
            valueTextSize: 20,
            valueTextColor: processColor('green'),
            sliceSpace: 5,
            selectionShift: 13,
            // xValuePosition: "OUTSIDE_SLICE",
            // yValuePosition: "OUTSIDE_SLICE",
            valueFormatter: "#.#'%'",
            valueLineColor: processColor('green'),
            valueLinePart1Length: 0.5,
          },
        },
      ],
    },
    highlights: [{x: 2}],
    description: {
      text: 'This is Pie chart description',
      textSize: 15,
      textColor: processColor('darkgray'),
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
    <View>
      <PieChart
        style={styles.chart}
        logEnabled={true}
        chartBackgroundColor={processColor('pink')}
        chartDescription={state.description}
        data={state.data}
        legend={state.legend}
        highlights={state.highlights}
        // extraOffsets={{left: 5, top: 5, right: 5, bottom: 5} as any}
        entryLabelColor={processColor('green')}
        entryLabelTextSize={20}
        // entryLabelFontFamily={'HelveticaNeue-Medium'}
        drawEntryLabels={true}
        rotationEnabled={true}
        rotationAngle={45}
        usePercentValues={true}
        styledCenterText={{
          text: 'Pie center text!',
          color: processColor('pink'),
          size: 20,
        }}
        centerTextRadiusPercent={100}
        holeRadius={40}
        holeColor={processColor('#f0f0f0')}
        transparentCircleRadius={45}
        transparentCircleColor={processColor('#f0f0f088')}
        maxAngle={350}
        onSelect={event => handleSelect(event)}
        onChange={event => console.log(event.nativeEvent)}
      />
    </View>
  );
};

export default Sunbrust;

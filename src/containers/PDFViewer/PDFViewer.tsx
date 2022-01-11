import {Icon} from '@ui-kitten/components';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Wrapper from '../../components/Layout/Wrapper';

const PDFViewer = () => {
  return (
    <Wrapper>
      <View>
        <TouchableOpacity>
          <Text>OK</Text>
        </TouchableOpacity>
        <Text>Disque de frein avant_14.05.20.pdf</Text>
        <Icon name="" style={{width: 36, height: 36}} fill="#036BF7" />
      </View>
    </Wrapper>
  );
};

export default PDFViewer;

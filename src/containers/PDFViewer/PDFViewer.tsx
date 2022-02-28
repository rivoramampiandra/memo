import {useNavigation} from '@react-navigation/native';
import {Divider, Icon} from '@ui-kitten/components';
import React from 'react';
import {
  Share,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import Pdf from 'react-native-pdf';
import Wrapper from '../../components/Layout/Wrapper';

const fileTemp = require('../../assets/invoice-template.pdf');

const PDFViewer = () => {
  const navigation = useNavigation();
  const {width, height} = useWindowDimensions();

  const onShare = async () => {
    await Share.share({message: 'Share document'});
    return;
  };

  return (
    <Wrapper>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Home' as any)}>
          <Text style={{fontSize: 18, color: '#036BF7'}}>OK</Text>
        </TouchableOpacity>
        <Text>Disque de frein avant_14.05.20.pdf</Text>
        <TouchableOpacity onPress={() => onShare()}>
          <Icon name="share" style={{width: 24, height: 24}} fill="#036BF7" />
        </TouchableOpacity>
      </View>
      <Divider style={{marginVertical: 16}} />
      <View style={{flex: 1}}>
        <Pdf
          source={fileTemp}
          style={{
            flex: 1,
            width: width - 0.1 * width,
            height: height,
            backgroundColor: '#fff',
          }}
        />
      </View>
    </Wrapper>
  );
};

export default PDFViewer;

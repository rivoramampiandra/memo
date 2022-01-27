import {useNavigation} from '@react-navigation/native';
import {Icon, Text} from '@ui-kitten/components';
import React from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import Wrapper from '../../components/Layout/Wrapper';
import image from '../../constant/image';

const promotionData = [
  {
    id: 1,
    image: image.PROMOTION,
  },
  {
    id: 2,
    image: image.PROMOTION,
  },
  {
    id: 3,
    image: image.PROMOTION,
  },
];

const garage = [
  {
    id: 1,
    image: image.LOGO_1,
    title: 'Prise de rendez-vous en ligne ',
    description: '«Trouvez les meilleurs garages au meilleur prix» ',
  },
];

const piece = [
  {
    id: 1,
    image: image.LOGO_2,
    title: 'Achat de pièce neuves ',
    description: "«Pièces neuves et d'origine - la qualité au meilleur prix» ",
  },
  {
    id: 2,
    image: image.LOGO_3,
    title: 'Achat de pièce neuves ',
    description: "«Pièces neuves et d'origine - la qualité au meilleur prix» ",
  },
  {
    id: 3,
    image: image.LOGO_4,
    title: 'Achat de pièce neuves ',
    description: "«Pièces neuves et d'origine - la qualité au meilleur prix» ",
  },
];

const PromotionItem = ({data}: any) => {
  const {width, height} = useWindowDimensions();

  return (
    <View
      style={{
        // borderRadius: 12,
        // borderWidth: 1,
        // borderColor: '#eeeeee',
        margin: 6,
        width: width - 0.2 * width,
        height: height * 0.35,
      }}>
      <Image
        source={data.image}
        style={{height: '100%', width: '100%'}}
        resizeMode="contain"
      />
    </View>
  );
};

const PromotionPartItem = ({data}: any) => {
  const {width, height} = useWindowDimensions();

  return (
    <View
      style={{
        borderColor: '#eee',
        borderWidth: 1,
        borderRadius: 15,
        padding: 8,
        width: width - 0.15 * width,
        height: height * 0.1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 8,
      }}>
      <Image
        source={data.image}
        style={{height: '100%', width: '25%', marginRight: 32}}
        resizeMode="contain"
      />
      <View style={{width: '60%'}}>
        <Text style={{fontSize: 12, color: '#959DAD'}}>{data.title}</Text>
        <Text style={{fontSize: 12, fontStyle: 'italic'}}>
          {data.description}
        </Text>
      </View>
    </View>
  );
};

const Promotions = () => {
  const {width, height} = useWindowDimensions();
  const navigation = useNavigation();
  return (
    <Wrapper>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 16,
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{position: 'relative', right: 80}}>
          <Icon
            name="arrow-ios-back-outline"
            fill="#000"
            style={{width: 24, height: 24}}
          />
        </TouchableOpacity>
        <Text style={{fontSize: 18}}>Synthèse de freinage</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        <View>
          <Text style={{fontSize: 14}}>Promotion du moment</Text>
          <FlatList
            horizontal
            nestedScrollEnabled={true}
            showsHorizontalScrollIndicator={false}
            data={promotionData}
            bounces={false}
            renderItem={({item}) => <PromotionItem data={item} />}
          />
        </View>
        <View>
          <Text style={{fontSize: 14}}>
            Choisir un autre garage sans promotion{' '}
          </Text>

          <FlatList
            showsVerticalScrollIndicator={false}
            nestedScrollEnabled={true}
            data={garage}
            bounces={false}
            renderItem={({item}) => <PromotionPartItem data={item} />}
          />
        </View>
        <View>
          <Text style={{fontSize: 14}}>
            Acheter les pièces pour le faire moi même{' '}
          </Text>
          <FlatList
            showsVerticalScrollIndicator={false}
            nestedScrollEnabled={true}
            data={piece}
            bounces={false}
            renderItem={({item}) => <PromotionPartItem data={item} />}
          />
        </View>
      </ScrollView>
    </Wrapper>
  );
};

export default Promotions;

import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Header from '../../../../components/Header';
import {colors} from '../../../../constants/colorsPallet';
import {globalPath} from '../../../../constants/globalPath';
import {ourRecommendationFakeDATA} from '../../../../constants/mock';
import {wp, hp} from '../../../../helpers/Responsiveness';
import ResponsiveText from '../../../../components/RnText';
import {FlatList} from 'react-native-gesture-handler';
import Icon from '../../../../components/Icon';
const Item = ({item}) => (
  <TouchableOpacity
    style={{marginHorizontal: 8, marginVertical: 10}}
    onPress={() => props.navigation.navigate(routeName.DISH_DETAIL)}>
    <View
      style={{
        width: wp(26),
        height: hp(18),
        borderRadius: 3,
        overflow: 'hidden',
        flexDirection: 'row',
      }}>
      <ImageBackground
        imageStyle={{opacity: 0.5}}
        style={{
          flex: 1,
          padding: 5,
          overflow: 'hidden',
          justifyContent: 'space-between',
          backgroundColor: 'rgba(0,0,0,1)',

        }}
        source={item}>
        <View style={{alignItems:'flex-end'}}>
            <Icon size={15} source={globalPath.F_HEART}/>
        </View>
        <View >
          <ResponsiveText fontFamily="Regular" size={2.9} color={colors.white}>
            Kaizen sushi
          </ResponsiveText>
          <ResponsiveText fontFamily="Light" size={2} color={colors.white}>
            Special sushi
          </ResponsiveText>
        </View>
      </ImageBackground>
    </View>
  </TouchableOpacity>
);

export default function MyWhitlist({navigation}) {
  const renderItem = ({item}) => <Item item={item} />;
  return (
    <View style={{backgroundColor: colors.black3, flex: 1}}>
      <Header navigation={navigation} iconPath={globalPath.BACK_ARROW} />
      <View style={{flex: 0.9, margin: 20}}>
        <FlatList
          horizontal={false}
          numColumns={3}
          data={ourRecommendationFakeDATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}
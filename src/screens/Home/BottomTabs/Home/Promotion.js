import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import ResponsiveText from '../../../../components/RnText';
import { Rating, AirbnbRating } from 'react-native-ratings';

import {

  DotIndicator,

} from 'react-native-indicators';
import { colors } from '../../../../constants/colorsPallet';
import { routeName } from '../../../../constants/routeName';
import SeeAllButton from '../../../../components/SeeAllButton';
import { hp, wp } from '../../../../helpers/Responsiveness';
import { useSelector } from 'react-redux';
import Icon from '../../../../components/Icon';
import { globalPath } from '../../../../constants/globalPath';
import { getPromotions } from '../../../../redux/actions/user.actions';
import FastImage from 'react-native-fast-image'

const Promotion = props => {
  const Promotions = useSelector(state => state.appReducers.promotions.data);
  const loading = useSelector(state => state.appReducers.promotions.loading);
  console.log('promotionssssssssssss: ', Promotions);
  const isThemeDark = useSelector(state => state.appReducers.setTheme.data)
  const key = 'restaurantDishId';

  const filteredData=(data)=>{
    const arrayUniqueByKey = [...new Map(data.map(item =>
      [item[key], item])).values()];

      return arrayUniqueByKey
  }
  return (
    <ScrollView>
      <View style={styles.everyOneFavoriteHeaderSection}>
        <ResponsiveText margin={[0, 0, 0, 0]} size={4} color={isThemeDark ? colors.white : colors.black}>
          Promotions
        </ResponsiveText>
        <View style={{ marginRight: -10 }}>

          <SeeAllButton
            title={"Promotions"}
            data={Promotions}
            action={getPromotions}
            navigation={props.navigation}
          />
        </View>
      </View>
      <View style={styles.everyOneFavoriteItemsSection}>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
          {Promotions.length > 0
            ? filteredData(Promotions).map((url, index) => {
              if (index < 4) {
                return (
                  <TouchableOpacity
                    onPress={() =>
                      props.navigation.navigate(routeName.DISH_DETAIL, {
                        dish: url,
                        promotion: true
                      })
                    }>
                    <View
                      style={{
                        width: wp(26),
                        height: hp(18),
                        marginHorizontal: 5,
                        borderRadius: 3,
                        overflow: 'hidden',
                        flexDirection: 'row',
                      }}>
                      <FastImage
                        imageStyle={{ opacity: 1 }}
                        style={{
                          flex: 1,
                          padding: 5,
                          overflow: 'hidden',
                          justifyContent: 'space-between',
                          backgroundColor: 'rgba(0,0,0,1)',
                        }}
                        source={{ uri: url.imageDataB }}>
                        {/* {url.titleD === String ?
                          <Text
                            style={{
                              color: 'white', padding: 3, opacity: 0.7,
                              backgroundColor: '#383131', borderRadius: 7,
                              textAlign: 'center', fontWeight: '600', fontSize: 8.5
                            }}

                          >
                            {url.titleD}
                          </Text>
                          : undefined
                        } */}
                        {/* <View style={styles.pacman} /> */}
                        <Text
                          style={{
                             borderTopRightRadius: 15,
                            opacity: 1, alignSelf: 'flex-start',
                            color: 'black', padding: 4,right:5,
                            backgroundColor: colors.yellow1,
                            fontWeight: '600', fontSize: 8.5,
                          }}
                        >
                          {'flat '+url.dishonOff+'% off'}
                        </Text>
                        <View>
                        <Text
                          style={{
                            color: 'white', padding: 3, opacity:1,
                            backgroundColor: 'black', borderRadius: 7,
                            textAlign: 'center', fontWeight: '600', fontSize: 8.5
                          }}

                        >
                          {url.titleD}
                        </Text>
                        <Text
                          style={{
                            color: 'white', padding: 3, opacity: 0.7, marginTop: 2,
                            backgroundColor: 'black', borderRadius: 7,
                            textAlign: 'center', fontWeight: '600', fontSize: 8.5
                          }}

                        >
                          {url.titleR}
                        </Text></View>
                        {/* <ResponsiveText
                      source={{uri:url.fullPath}}>
                      <ResponsiveText
                        fontFamily="Regular"
                        size={3}
                        margin={[0, 0, -5, 0]}
                        color={colors.white}>
                        {url.title}
                      </ResponsiveText>
                      <ResponsiveText
                        fontFamily="Regular"
                        size={3}
                        margin={[0, 0, -5, 0]}
                        color={colors.white}>
                        {url.description}
                      </ResponsiveText> */}
                        {/* <ResponsiveText fontFamily="Light" size={2.5} color={colors.white}>{url.description}</ResponsiveText> */}
                      </FastImage>
                    </View>
                  </TouchableOpacity>
                );
              }
            })
            : undefined}
        </ScrollView>
        {
          loading === true ?
            <View style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, backgroundColor: 'rgba(65, 65, 65, 0)', flex: 1 }}>
              < DotIndicator color={colors.yellow} size={5} />
            </View>
            :
            undefined
        }
      </View>
    </ScrollView>
  );
};

export default Promotion;

const styles = StyleSheet.create({
  promotionoffView: {
    backgroundColor: 'rgba(237, 197, 78, 0.7)',
    height: '15%',
    position: 'relative',
    width: '60%',
    top: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 3,
    paddingTop: 1,
    borderBottomRightRadius: 3,
  },
  everyOneFavoriteHeaderSection: {
    paddingBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: colors.black1,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    borderBottomWidth: 1,
    marginLeft: 15,
    marginRight: 15,
    borderBottomColor: colors.black2,
    marginBottom: 5,
    borderColor: colors.black1,
  },
  everyOneFavoriteItemsSection: {
    flex: 1,
    flexDirection: 'row',
    display: 'flex',
    paddingVertical: 10,
    paddingLeft: 10,
    justifyContent: 'center',
    overflow: 'hidden',
  },
  pacman: {
  
    borderTopWidth: 12,
    borderTopColor: colors.yellow1,
    borderLeftColor:colors.yellow1,
    // borderLeftWidth: 10,
    borderRightColor: "transparent",
    borderRightWidth: 25,
    borderBottomColor:colors.yellow1,
    borderBottomWidth: 12,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 55,
    borderBottomRightRadius: 60,
    borderBottomLeftRadius: 10,
  },
});

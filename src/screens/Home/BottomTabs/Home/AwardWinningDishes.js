
import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import ResponsiveText from '../../../../components/RnText';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { routeName } from '../../../../constants/routeName';
import {
  advertisementBannerFakeDATA,
  awardWinningFakeDATA,
  promotionsFakeDATA,
  yourFavoriteFakeDATA,
} from '../../../../constants/mock';
import FastImage from 'react-native-fast-image'

import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from 'react-native-indicators';
import { colors } from '../../../../constants/colorsPallet';
import SeeAllButton from '../../../../components/SeeAllButton';
import { hp, wp } from '../../../../helpers/Responsiveness';
import { useSelector } from 'react-redux';
import { getBruneiFoodRewards } from '../../../../redux/actions/user.actions';
const AwardWinningDishes = props => {
  const FoodsAwards = useSelector(
    state => state.appReducers.bruneiFoodsAwards.data,
  );
  const loading = useSelector(
    state => state.appReducers.bruneiFoodsAwards.loading,
  );
  console.log('Brunei Foods Awards: ', FoodsAwards);
  console.log('Brunei Length: ', FoodsAwards.length);
  console.log('Brunei Foods Awards  Loading: ', loading);
  return (
    <>
      <View style={styles.AwardWinningDishesHeaderSection}>
        <ResponsiveText margin={[0, 0, 0, -5]} size={4} color={colors.white}>
          Brunei Food Awards
        </ResponsiveText>
        <View style={{ marginRight: -15 }}>
          <SeeAllButton
            title={'Brunei Food Awards'}
            data={FoodsAwards}
            action={getBruneiFoodRewards}
            navigation={props.navigation}
          />
        </View>
      </View>
      <View style={styles.AwardWinningDishesItemsSection}>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
          {FoodsAwards.length > 0
            ? FoodsAwards.map((url, index) => {
              if (index < 8) {
              return (
                <TouchableOpacity
                  onPress={() =>
                    props.navigation.navigate(routeName.DISH_DETAIL, {
                      dish: url,
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
                        overflow: 'hidden',
                        justifyContent: 'space-between',
                        backgroundColor: 'rgba(0,0,0,1)',
                      }}
                      source={{
                        uri: url.imageDataB,
                        priority: FastImage.priority.high,
                      }}
                    // source={{
                    //   uri: url.imageDataB.replace(/ /g, ''),
                    // }}>
                    >
                      <Text
                        style={{
                          top: hp(1), borderTopRightRadius: 15,
                          opacity: 1, alignSelf: 'flex-start',
                          color: 'black', padding: 2,
                          backgroundColor:colors.yellow1,
                          fontWeight: '600', fontSize: 8.5
                        }}
                      >
                        {url.titleA}
                      </Text>
                      <View style={{ alignItems: "center" }}>

                        <Text
                          style={{
                            opacity: 1,
                            marginTop: 1,
                            color: 'white', padding: 3,
                            backgroundColor:colors.black, borderRadius: 7,
                            textAlign: 'center', fontWeight: '600', fontSize: 8.5
                          }}

// '#383131'
                        >
                          {url.titleD}
                        </Text>
                        <Text
                          style={{
                            opacity: 0.7,
                            top:1,
                            color: 'white', padding: 3,
                            backgroundColor: 'black', borderRadius: 7,
                            textAlign: 'center', fontWeight: '800', fontSize: 9
                          }}

                        >
                          {url.titleR}
                        </Text>
                      </View>

                    </FastImage>
                  </View>
                </TouchableOpacity>
              );
            }
          })
            : undefined}
        </ScrollView >
        {
          loading === true ?
            <View style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, backgroundColor: 'rgba(65, 65, 65, 0)', flex: 1 }}>
              < DotIndicator color={colors.yellow} size={5} />
            </View>
            :
            undefined
        }
      </View >
    </>
  );
};

export default AwardWinningDishes;

const styles = StyleSheet.create({
  AwardWinningDishesHeaderSection: {
    paddingHorizontal: 5,
    paddingTop: 10,
    paddingBottom: 5,
    marginRight: 15,
    marginBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.black3,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    marginLeft: 15,
    borderBottomWidth: 1,
    borderColor: colors.black1,
  },
  AwardWinningDishesItemsSection: {
    flex: 1,
    flexDirection: 'row',
    display: 'flex',
    paddingVertical: 10,
    justifyContent: 'center',
    paddingLeft: 10,
    overflow: 'hidden',
    backgroundColor: colors.black3,
  },
});

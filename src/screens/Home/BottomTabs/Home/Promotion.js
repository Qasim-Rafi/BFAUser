import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import ResponsiveText from '../../../../components/RnText';
import {Rating, AirbnbRating} from 'react-native-ratings';

import {
  advertisementBannerFakeDATA,
  promotionsFakeDATA,
} from '../../../../constants/mock';
import {colors} from '../../../../constants/colorsPallet';
import {routeName} from '../../../../constants/routeName';
import SeeAllButton from '../../../../components/SeeAllButton';
import {hp, wp} from '../../../../helpers/Responsiveness';
import {useSelector} from 'react-redux';
const Promotion = props => {
  const Promotions = useSelector(state => state.appReducers.promotions.data);
  console.log('promotions: ', Promotions);

  return (
    <ScrollView>
      <View style={styles.everyOneFavoriteHeaderSection}>
        <ResponsiveText margin={[0, 0, 0, 0]} size={4} color={colors.white}>
          Promotions
        </ResponsiveText>
        <View style={{marginRight: -10}}>
          <SeeAllButton
            title={'Promotions'}
            data={Promotions}
            navigation={props.navigation}
          />
        </View>
      </View>
      <View style={styles.everyOneFavoriteItemsSection}>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
          {Promotions.length > 0
            ? Promotions.map((url, index) => {
                return (
                  <TouchableOpacity
                    onPress={() =>
                      props.navigation.navigate(routeName.JOB_LISTING, {
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
                      <ImageBackground
                        imageStyle={{opacity: 0.5}}
                        style={{flex: 1}}
                        source={{uri: url.fullPath}}>
                        <View style={styles.promotionoffView}>
                          <ResponsiveText size={2}>Flat 25% Off</ResponsiveText>
                        </View>
                        <View
                          style={{
                            flex: 1,
                            padding: 5,
                            overflow: 'hidden',
                            justifyContent: 'flex-end',
                          }}>
                          <ResponsiveText
                            fontFamily="Regular"
                            size={3}
                            color={colors.white}>
                            {url.restaurantName}
                          </ResponsiveText>
                          <ResponsiveText
                            fontFamily="Light"
                            size={2.5}
                            margin={[-5, 0, 0, 0]}
                            color={colors.white}>
                            {url.adSlideTitle}}
                          </ResponsiveText>
                        </View>
                      </ImageBackground>
                    </View>
                  </TouchableOpacity>
                );
              })
            : undefined}
        </ScrollView>
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
});

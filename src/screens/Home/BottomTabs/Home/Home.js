import React from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from '../../../../components/Icon';
import ResponsiveText from '../../../../components/RnText';
import Input from '../../../../components/Input';
import RnButton from '../../../../components/RnButton';
import {globalPath} from '../../../../constants/globalPath';
import {hp, wp} from '../../../../helpers/Responsiveness';
import Swiper from 'react-native-swiper';
import {routeName} from '../../../../constants/routeName';
import {colors} from '../../../../constants/colorsPallet';
import Fonts from '../../../../helpers/Fonts';
import AdvertisementBanner from './AdvertisementBanner';
import SeeAllButton from '../../../../components/SeeAllButton';
import BfaPartner from './BfaPartner';
import Recommendation from './Recommendation';
import EveryOneFavourite from './EveryOneFavourite';
import YourFavourite from './YourFavourite';
import Advertisement2ndVarient from './Advertisement2ndVarient';
import AwardWinningDishes from './AwardWinningDishes';
import Promotion from './Promotion';
import Header from '../../../../components/Header';
import { ourRecommendationFakeDATA } from '../../../../constants/mock';
const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <ScrollView style={{flex: 0.9}}>
        <View style={styles.advertisementBanner}>
          <AdvertisementBanner navigation={navigation} />
        </View>
        <View style={styles.bfaPartnerContainer}>
          <BfaPartner navigation={navigation} />
        </View>
        <ImageBackground
          style={styles.cuisinesContainer}
          //  source={{ uri: 'https://images.unsplash.com/photo-1441716844725-09cedc13a4e7?h=1024' }}
          source={globalPath.HOME_HOME_VIEW_COISINES_AND_CATEGORIES}>
          <RnButton
            onPress={() => navigation.navigate(routeName.Categories)}
            style={styles.cuisinesButton}>
            <ResponsiveText fontFamily={'Regular'} size={2.9}>
              View Cuisines and Categories
            </ResponsiveText>
            <Icon
              size={wp(4)}
              tintColor="black"
              source={globalPath.RIGHT_ARROW}
            />
          </RnButton>
        </ImageBackground>
        <View style={styles.recommendationContainer}>
         <Recommendation/>
        </View>
        <View style={styles.everyoneFavorite}>
          <EveryOneFavourite navigation={navigation} />
        </View>
        <View style={styles.Advertisement2ndVarient}>
          <Advertisement2ndVarient navigation={navigation} />
        </View>
        <View style={styles.yourFavorite}>
          <YourFavourite navigation={navigation} />
        </View>
        <View style={styles.Advertisement2ndVarient}>
          <Advertisement2ndVarient navigation={navigation} />
        </View>
        <View style={styles.awardWinningDishes}>
          <AwardWinningDishes navigation={navigation} />
        </View>
        <View style={styles.awardWinningDishes}>
          <Promotion navigation={navigation} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black3,
  },
  header: {
    flex: 0.1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  advertisementBanner: {
    // flex: 0.1,
    height: 200,
    // backgroundColor:'red',
    // overflow:'hidden',
    // maxHeight:400
  },
  bfaPartnerContainer: {
    flex: 0.17,
    margin: 15,
    borderRadius: 7,
    backgroundColor: colors.black2,
  },
  cuisinesContainer: {
    height: hp(23),
    marginHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cuisinesButton: {
    backgroundColor: colors.yellow,
    paddingVertical: 5,
    // paddingHorizontal:5,
    flexDirection: 'row',
    width: '60%',
    justifyContent: 'space-between',
    // justifyContent: 'space-between',

    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  recommendationContainer: {
    flex: 0.32,
    margin: 15,
    borderRadius: 7,
  },
  everyoneFavorite: {
    flex: 0.17,
    // margin: 15,
    borderRadius: 7,
    backgroundColor: colors.black2,
  },
  yourFavorite: {
    flex: 0.17,
    // margin: 15,
    borderRadius: 7,
    backgroundColor: colors.black2,
  },
  Advertisement2ndVarient: {
    // flex: 0.1,
    height: 150,
    // backgroundColor:'red',
    // overflow:'hidden',
    // maxHeight:400
  },
  awardWinningDishes: {
    flex: 0.17,
    // margin: 15,
    borderRadius: 7,
    backgroundColor: colors.black2,
    marginTop: 20,
  },
});

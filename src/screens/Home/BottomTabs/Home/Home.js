import React from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  RefreshControl,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from '../../../../components/Icon';
import ResponsiveText from '../../../../components/RnText';
import Input from '../../../../components/Input';
import RnButton from '../../../../components/RnButton';
import { globalPath } from '../../../../constants/globalPath';
import { hp, wp } from '../../../../helpers/Responsiveness';
import Swiper from 'react-native-swiper';
import { routeName } from '../../../../constants/routeName';
import { colors } from '../../../../constants/colorsPallet';
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
import JobsList from './JobsList';
import Header from '../../../../components/Header';
import { ourRecommendationFakeDATA } from '../../../../constants/mock';
0;
import { useDispatch, useSelector } from 'react-redux';
import {
  getRestaurantAllDishes,
  getUserCusine,
  getPromotions,
  getBruneiFoodRewards,
  getBfaPartners,
  AddOrder,
  getAddBannerData,
  getBfaRecommendations,
  getPromoNewsData,
  getPromoJobsData,
} from '../../../../redux/actions/user.actions';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import urls from '../../../../redux/lib/urls';
import AllCuisines from './AllCuisines';
import WhatsNew from './WhatNew';
import { bfaPartnerSelecter } from '../../../../redux/lib/selectors';
import { getBfaRecommendationSaga } from '../../../../redux/sagas/user.sagas';
import { Colors } from 'react-native/Libraries/NewAppScreen';
const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}
const Home = ({ navigation }) => {
  const loading = useSelector(state => state.appReducers.bfaPartners.refreshing,
  );

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(6000).then(() => setRefreshing(false));

    // // dispatch(getBfaPartners(6));
    // dispatch(getPromotions());

    // dispatch(
    //   getUserCusine({
    //     navigation: navigation,
    //   }),
    // );
    // dispatch(getAddBannerData());
    // // dispatch(awardsRestaurant());
    // dispatch(getPromoNewsData());
    // // dispatch(getPromoJobsData());
    // dispatch(getBfaRecommendations());
    // dispatch(getBruneiFoodRewards());



  },
    []);

  // console.log('loading', loading);

  const dispatch = useDispatch();
  // const getCusines = () => {
  //   dispatch(
  //     getUserCusine({
  //       navigation: navigation,
  //     }),
  //   );
  // };

  React.useEffect(() => {
    dispatch(getAddBannerData());
    // dispatch(getPromotions());
    // dispatch(getBfaPartners(6));
    // callAPI();
    // dispatch(getRestaurantAllDishes())

    dispatch(
      getUserCusine({
        navigation: navigation,
      }),
    );

    // dispatch(awardsRestaurant());

    // dispatch(getPromoNewsData());
    // dispatch(getPromoJobsData());

    dispatch(getBfaRecommendations());
    // dispatch(getBruneiFoodRewards());
  }, []);

  return (

    <View style={styles.container}>
      <ScrollView style={{ flex: 1 }}
      // showsVerticalScrollIndicator={false}
      // contentContainerStyle={{ flex: 1 }}
      // refreshControl={
      //   <RefreshControl
      //     colors={Colors.yellow}
      //     size={30}
      //     refreshing={refreshing}
      //     onRefresh={onRefresh}
      //   />
      // }
      >
        <View style={styles.advertisementBanner}>
          <AdvertisementBanner navigation={navigation} />
        </View>
        <View style={styles.bfaPartnerContainer}>
          <BfaPartner navigation={navigation} />
        </View>

        <View style={styles.yourFavorite}>
          <YourFavourite navigation={navigation} />
        </View>
        <View style={styles.awardWinningDishes}>
          <AwardWinningDishes navigation={navigation} />
        </View>
        <View style={styles.recommendationContainer}>
          <Recommendation navigation={navigation} />
        </View>
        <View style={styles.everyoneFavorite}>
          <EveryOneFavourite navigation={navigation} />
        </View>
        {/* <View style={styles.Advertisement2ndVarient}>
          <Advertisement2ndVarient navigation={navigation} />
        </View> */}
        {/*         
        <View style={styles.Advertisement2ndVarient}>
          <Advertisement2ndVarient navigation={navigation} />
        </View> */}
        {/* <View style={styles.recommendationContainer}>
          <WhatsNew navigation={navigation} />
        </View>
        <View style={styles.recommendationContainer}>
          <Promotion navigation={navigation} />
        </View> */}

        <View style={styles.cuisinesContainer}>
          {/* <CuisinesSlider navigation={navigation} /> */}
          <AllCuisines navigation={navigation} />
        </View>
        {/* <View style={styles.recommendationContainer}>
          <JobsList navigation={navigation} />
        </View> */}

        {/* <ImageBackground
          style={styles.cuisinesContainer}
          //  source={{ uri: 'https://images.unsplash.com/photo-1441716844725-09cedc13a4e7?h=1024' }}
          source={globalPath.HOME_HOME_VIEW_COISINES_AND_CATEGORIES}>
          
          <TouchableOpacity
          
            onPress={getCusines}
            style={styles.cuisinesButton}>
            <ResponsiveText >
              Cuisines
            </ResponsiveText>
            <Icon
            margin={[0,0,0,10]}
              size={wp(4)}
              tintColor="black"
              source={globalPath.RIGHT_ARROW}
            />
          </TouchableOpacity>
         
        </ImageBackground> */}
      </ScrollView>
      <View style={{ flex: 0.1, position: 'absolute', top: 0 }}>
        <Header screen={'home'} navigation={navigation} />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black3,
    alignItems: 'center',
  },
  header: {
    flex: 0.1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  advertisementBanner: {
    height: 200,
  },
  bfaPartnerContainer: {
    flex: 0.17,
    margin: 15,
    borderRadius: 7,
    backgroundColor: colors.black2,
  },
  cuisinesContainer: {
    marginTop: 10,
    marginBottom: 20,
  },
  cuisinesButton: {
    backgroundColor: colors.yellow,
    paddingVertical: 5,
    // paddingHorizontal:5,
    flexDirection: 'row',
    width: '28%',
    justifyContent: 'space-between',
    // justifyContent: 'space-between',

    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  recommendationContainer: {
    flex: 0.32,
    marginVertical: 10,
    borderRadius: 7,
  },
  everyoneFavorite: {
    flex: 0.17,
    // margin: 15,
    borderRadius: 7,
    backgroundColor: colors.black3,
  },
  yourFavorite: {
    flex: 0.17,
    // margin: 15,
    borderRadius: 7,

    backgroundColor: colors.black3,
  },
  scrollView: {
    flex: 0.9,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
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
    backgroundColor: colors.black3,
    marginTop: 20,
  },
});

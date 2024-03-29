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
import SkeletonComponent from '../../../Home/BottomTabs/Home/SkeletonComponent';
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
  whatsNew,
  getFavorite,
  getAddBannerData,
  getBfaRecommendations,
  getmoreaboutDish,
  getPromoJobsData,
  getPeopleChoice,
  getwhatsNew,
  moreFromRestaurant,
  getOrders,
  GetUserRandomiserSetting,
  getNotificationData,
  getProfileData,
} from '../../../../redux/actions/user.actions';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import urls from '../../../../redux/lib/urls';
import AllCuisines from './AllCuisines';
import WhatsNew from './WhatNew';
import { bfaPartnerSelecter } from '../../../../redux/lib/selectors';
import { getBfaRecommendationSaga } from '../../../../redux/sagas/user.sagas';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import FlashMessage from 'react-native-flash-message';
const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};
const Home = ({ navigation }) => {
  const loading = useSelector(
    state => state.appReducers.bfaPartners.refreshing,
  );
  const dispatch = useDispatch();

  const isThemeDark = useSelector(state => state.appReducers.setTheme.data)

  const [refreshing, setRefreshing] = React.useState(false);
  const dropdownRef = React.useRef(null);
   const PromotionLoading = useSelector(state => state.appReducers.promotions.loading);
  const loadingBanner = useSelector(state => state.appReducers.addBanner.loading);
  const PeopleChoice = useSelector(state => state.appReducers.PeopleChoice.loading);
  const BfaPartners = useSelector(state => state.appReducers.bfaPartners.loading);
  const UserCusine = useSelector(state => state.appReducers.cusineDetail.loading);
  const whatsNew = useSelector(state => state.appReducers.whatsnew.loading);
  const Favorite = useSelector(state => state.appReducers.favorite.loading);
  const PromoJobs = useSelector(state => state.appReducers.promoJobs.loading);
  const BfaRecommendations = useSelector(state => state.appReducers.bfaRecommendationDetail.loading);
  const BruneiFoodRewards = useSelector(state => state.appReducers.bruneiFoodsAwards.loading);


  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(6000).then(() => setRefreshing(false));

    dispatch(getAddBannerData());
    dispatch(getPeopleChoice(1, 4));
    dispatch(getPromotions(1, 4));
    dispatch(getPeopleChoice(1, 4));
    // dispatch(getPromotions());
    dispatch(getBfaPartners(6));
    // callAPI();
    dispatch(getUserCusine(1, 14));

    dispatch(getwhatsNew(1, 4));
    // dispatch(getPromoNewsData());
    // dispatch(awardsRestaurant());
    dispatch(getFavorite(1, 4));
    dispatch(getPromoJobsData(1, 12));
    dispatch(getBfaRecommendations(1, 4));
    dispatch(getBruneiFoodRewards(1, 8));
  }, []);

  // console.log('loading', loading);

  // const getCusines = () => {
  //   dispatch(
  //     getUserCusine({
  //       navigation: navigation,
  //     }),
  //   );
  // };

  React.useEffect(() => {
    dispatch(getAddBannerData());
    dispatch(getProfileData())
    dispatch(getPeopleChoice(1, 4));
    dispatch(getPromotions(1, 4));
    dispatch(getPeopleChoice(1, 4));
    dispatch(getBfaPartners(6));
    // callAPI();
    dispatch(getUserCusine(1, 14));

    dispatch(getwhatsNew(1, 4));
    // dispatch(getPromoNewsData());
    // dispatch(awardsRestaurant());
    dispatch(getFavorite(1, 4));
    dispatch(getPromoJobsData(1, 12));
    dispatch(getBfaRecommendations(1, 4));
    dispatch(getBruneiFoodRewards(1, 8));

    dispatch(getOrders());
    dispatch(GetUserRandomiserSetting());
    //  setInterval(() => {
    //   dispatch(getNotificationData());
    // }, 5000);
    // console.log(showAsyncStorageContentInDev());
    // showAsyncStorageContentInDev()
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: isThemeDark ? colors.black3 : colors.bgWhite }]}>
      {PromotionLoading === true || loadingBanner == true || PeopleChoice == true || BfaPartners == true ||
        UserCusine === true || whatsNew == true || Favorite == true || PromoJobs == true || BfaRecommendations == true
        || BruneiFoodRewards == true ?
        <View style={{ position: 'absolute', flex: 1, zIndex: 1, backgroundColor: isThemeDark ? colors.black1 : colors.white, height: hp(100) }}>
          <SkeletonComponent/>
        </View>
        :
        undefined
      }
      <ScrollView
        style={{ flex: 1, width: '100%' }}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}
        // contentContainerStyle={{ flex: 1 }}
        refreshControl={
          <RefreshControl
            colors={Colors.yellow}
            size={30}
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }>
        <View style={styles.advertisementBanner}>
          <AdvertisementBanner navigation={navigation} />
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.bfaPartnerContainer}>
          <BfaPartner navigation={navigation} />
        </ScrollView>

        <View style={[styles.yourFavorite, { backgroundColor: isThemeDark ? colors.black3 : colors.bgWhite }]}>
          <YourFavourite navigation={navigation} />
        </View>
        <View style={[styles.awardWinningDishes, { backgroundColor: isThemeDark ? colors.black3 : colors.bgWhite }]}>
          <AwardWinningDishes navigation={navigation} />
        </View>
        <View style={styles.recommendationContainer}>
          <Recommendation navigation={navigation} />
        </View>
        <View style={[styles.everyoneFavorite, { backgroundColor: isThemeDark ? colors.black3 : colors.bgWhite }]}>
          <EveryOneFavourite navigation={navigation} />
        </View>
        {/* <View style={styles.Advertisement2ndVarient}>
          <Advertisement2ndVarient navigation={navigation} />
        </View> */}
        {/*         
        <View style={styles.Advertisement2ndVarient}>
          <Advertisement2ndVarient navigation={navigation} />
        </View> */}
        <View style={styles.recommendationContainer}>
          <WhatsNew navigation={navigation} />
        </View>
        <View style={styles.recommendationContainer}>
          <Promotion navigation={navigation} />
        </View>

        <View style={styles.cuisinesContainer}>
          <AllCuisines navigation={navigation} />
        </View>
        <View style={styles.recommendationContainer}>
          <JobsList navigation={navigation} />
        </View>

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
      <FlashMessage ref={dropdownRef} />
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

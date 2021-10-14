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
import { useDispatch ,useSelector } from 'react-redux';
import { getRestaurantAllDishes, getUserCusine, awardsRestaurant } from '../../../../redux/actions/user.actions';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import urls from '../../../../redux/lib/urls';

const Home = ({navigation}) => {
  const token = async()=> await AsyncStorage.getItem('@token');

  const dispatch=useDispatch();
 const getCusines=()=>{
    dispatch(
      (getUserCusine({
        navigation:navigation,
      }))
    );
  }

  async function callAPI () {
    const url = urls.HOST+urls.PACKAGES_ALL_URL;
    const config = {
      headers: { Authorization: `Bearer ${'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiIyIiwiTmFtZSI6Imx1cW1hbiIsIlVzZXJUeXBlSWQiOiIxIiwiUmVzdGF1cmFudElkIjoiMCIsIm5iZiI6MTYzMzM1MzQ1NiwiZXhwIjoxNjMzNzg1NDU2LCJpYXQiOjE2MzMzNTM0NTZ9.vJTIPSCbwxuIXPHkes70y6OoHLJoNVd7Wd-497LyMhSaJfJqmtqKG4pj-h7RyAmCRb0sJmzm3SXgvLE2mNwwrA'}` },
    };
      const resp = await axios.get(url, config);
      console.log(resp);
  }

  React.useEffect(() => {
        // callAPI();
        // dispatch(awardsRestaurant());
        dispatch(getRestaurantAllDishes())

  }, []);


  return (
    
    <View style={styles.container}>
    
    <Header navigation={navigation} />
      <ScrollView style={{flex: 0.9, }}>
      

        <View style={styles.advertisementBanner}>
          <AdvertisementBanner navigation={navigation} />
        </View>
        <View style={styles.bfaPartnerContainer}>
          <BfaPartner token={token} navigation={navigation} />
        </View>
      
        <View style={styles.yourFavorite}>
          <YourFavourite navigation={navigation} />
        </View>
        <View style={styles.awardWinningDishes}>
          <AwardWinningDishes navigation={navigation} />
        </View>
        <View style={styles.recommendationContainer}>
         <Recommendation navigation={navigation}/>
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
        
        <View style={styles.awardWinningDishes}>
          <Promotion navigation={navigation} />
        </View>
        <ImageBackground
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
         
        </ImageBackground>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black3,
    alignItems:'center',
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
    marginVertical:15,
    height: hp(22),
    justifyContent: 'center',
    alignItems: 'center',
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
    backgroundColor: colors.black3,
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

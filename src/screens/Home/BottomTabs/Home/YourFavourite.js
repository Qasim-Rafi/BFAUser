import React, { useEffect } from 'react';
import {
  Image,
  ScrollView,
  Text,
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
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
import ResponsiveText from '../../../../components/RnText';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { routeName } from '../../../../constants/routeName';
import { useSelector, useDispatch } from 'react-redux';
import FastImage from 'react-native-fast-image'
import {
  advertisementBannerFakeDATA,
  yourFavoriteFakeDATA,
} from '../../../../constants/mock';
import Icon from '../../../../components/Icon';
import { globalPath } from '../../../../constants/globalPath';
import { colors } from '../../../../constants/colorsPallet';
import SeeAllButton from '../../../../components/SeeAllButton';
import { hp, wp } from '../../../../helpers/Responsiveness';
import { color } from 'react-native-reanimated';
import { getFavorite,getProfileData
 } from '../../../../redux/actions/user.actions';

const YourFavourite = props => {
  const profileData = useSelector(state => state.appReducers.profileData.data);
  const favData = useSelector(state => state.appReducers.favorite.data,)
  const loading = useSelector(state => state.appReducers.favorite.refreshing)
  const dispatch = useDispatch();
  
  const isThemeDark = useSelector(state => state.appReducers.setTheme.data)

  console.log('favData', favData)

  //   const firstName = 'PG';
  //   const title = firstName + "'s Favorites";
  //   const favButons = [
  //     'Fav Dishes',
  //     'Fav Restaurant',
  //     'Fav Cuisine',
  //     'User defined Cuisine',
  //     'Fav Orders',
  //     'User define orders',
  //   ];
  return (
    <>
      <View style={[styles.AwardWinningDishesHeaderSection,{backgroundColor:isThemeDark ? colors.black3 : colors.bgWhite}]}>
        <ResponsiveText margin={[0, 0, 0, -5]} size={4} color={isThemeDark ? colors.white : colors.black}>
          {profileData.userInitial} Favourites
        </ResponsiveText>
        <View style={{ marginRight: -15 }}>

          <SeeAllButton
            title={"PG's Favourites"}
            data={favData}
            action={getFavorite}
            navigation={props.navigation}
          />
          {/* <SeeAllButton
            title={"PG's Favourites"}
            data={yourFavoriteFakeDATA}
            action={yourFavoriteFakeDATA}
            navigation={props.navigation}
          /> */}
        </View>
      </View>
      <View style={[styles.AwardWinningDishesItemsSection,{backgroundColor:isThemeDark ? colors.black3 : colors.bgWhite}]}>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
          {favData.length > 0
            ? Array.from(new Set(favData.map(JSON.stringify))).map(JSON.parse).map((url, item) => {
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
                      // imageStyle={{ opacity: 1 }}
                      style={{
                        flex: 1,
                        opacity: 1,
                        padding: 5,
                        overflow: 'hidden',
                        justifyContent: 'flex-end',
                      }}
                      source={{
                        uri: url.imageDataB,
                        priority: FastImage.priority.high,
                      }}
                    >

                      <View style={{ alignItems: 'flex-end', paddingBottom: '90%', flex: 1 }}>
                        <Icon size={15} source={globalPath.favouriteicon_red} />
                      </View>
                      <View style={{ backgroundColor: color.black1 }}>
                      </View>
                      <Text
                        style={{
                          marginTop: 1,
                          opacity: 1,
                          color: 'white', padding: 3,
                          backgroundColor:colors.black ,borderRadius: 7,
                          textAlign: 'center', fontWeight: '800', fontSize: 9
                        }}>
                        {url.titleD}
                      </Text>
                      <Text
                        style={{
                          opacity: 0.8,top:2,
                          color: 'white', padding: 3,
                          backgroundColor: '#383131', borderRadius: 7,
                          textAlign: 'center', fontWeight: '900', fontSize: 9
                        }}
                      >
                        {url.titleR}
                      </Text>
                    </FastImage>
                  </View>
                </TouchableOpacity>
              );
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
    </>
  );
};

export default YourFavourite;

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

//     return (
//         <>
//             <View style={styles.yourFavoriteHeaderSection}>
//                 <ResponsiveText margin={[0,0,0,0]} size={4} color={colors.white}>{firstName}'s Favourites</ResponsiveText>
//                 <View style={{marginRight:-10}} >
//                 <SeeAllButton title={title} data={yourFavoriteFakeDATA} navigation={props.navigation} />
//                 </View>
//             </View>
//             <View style={{flexDirection:'row',paddingHorizontal:5, flexWrap:'wrap', justifyContent:'center'}}>
//                 {
//                     favButons.map((item)=>{
//                         return(
//                             <View style={{backgroundColor:colors.black2,marginTop:5, borderColor:colors.black1, borderWidth:1,height:hp(7), width:wp(30), alignItems:'center',flexDirection:'row', justifyContent:'center',paddingHorizontal:10 }} >
//                                 <ResponsiveText textAlign={'center'} size={2.8} color={colors.white} >{item}</ResponsiveText>
//                             </View>
//                         )
//                     })
//                 }

//             </View>
//             {/* <View style={styles.yourFavoriteItemsSection}>
//                 <ScrollView showsHorizontalScrollIndicator={false} horizontal>
//                     {yourFavoriteFakeDATA.map((url, index) => {
//                         return (
//                             <TouchableOpacity onPress={()=> props.navigation.navigate(routeName.DISH_DETAIL,{dish:url})}>
//                             <View style={{ width: wp(26), height: hp(18), marginHorizontal: 5, borderRadius: 3, overflow: 'hidden', flexDirection: 'row' }}>
//                                 <ImageBackground imageStyle={{opacity:.5}} style={{ flex: 1, padding:5, overflow: 'hidden', justifyContent: 'flex-end' }} source={url.url} >
//                                     <ResponsiveText fontFamily="Regular" size={3} color={colors.white}>Kaizen sushi</ResponsiveText>
//                                     <ResponsiveText fontFamily="Light" size={2.5} margin={[-5,0,0,0]} color={colors.white}>Special sushi</ResponsiveText>

//                                 </ImageBackground>
//                             </View></TouchableOpacity>

//                         )
//                     })}
//                 </ScrollView>
//             </View> */}

//         </>
//     )
// }

// export default YourFavourite;

// const styles = StyleSheet.create({

//     yourFavoriteHeaderSection: {
//         marginLeft:15,
//         marginRight:15,
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         paddingBottom:5,
//         marginBottom:5,
//         // backgroundColor: colors.black1,
//         borderTopLeftRadius: 7,
//         borderTopRightRadius: 7,
//         borderBottomWidth: 1,
//         borderColor: colors.black1
//     },
//     yourFavoriteItemsSection: {
//         flex: 1,
//         flexDirection: 'row',
//         display: 'flex',
//         paddingVertical: 10,
//         marginLeft:10,
//         justifyContent: 'center',
//         overflow: 'hidden',
//     }

// })

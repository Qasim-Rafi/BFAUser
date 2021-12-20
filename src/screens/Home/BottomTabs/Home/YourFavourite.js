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
import {routeName} from '../../../../constants/routeName';
import {useSelector, useDispatch} from 'react-redux';
import {
  advertisementBannerFakeDATA,
  yourFavoriteFakeDATA,
} from '../../../../constants/mock';
import {colors} from '../../../../constants/colorsPallet';
import SeeAllButton from '../../../../components/SeeAllButton';
import {hp, wp} from '../../../../helpers/Responsiveness';
const YourFavourite = props => {
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
      <View style={styles.AwardWinningDishesHeaderSection}>
        <ResponsiveText margin={[0, 0, 0, -5]} size={4} color={colors.white}>
          PG's Favourites
        </ResponsiveText>
        <View style={{marginRight: -15}}>
          <SeeAllButton
            title={"PG's Favourites"}
            data={yourFavoriteFakeDATA}
            navigation={props.navigation}
          />
        </View>
      </View>
      <View style={styles.AwardWinningDishesItemsSection}>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
          {yourFavoriteFakeDATA.length > 0
            ? yourFavoriteFakeDATA.map((url, item) => {
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
                      <ImageBackground
                        imageStyle={{opacity: 0.5}}
                        style={{
                          flex: 1,
                          padding: 5,
                          overflow: 'hidden',
                          justifyContent: 'flex-end',
                        }}
                        source={url.url}>
                        <ResponsiveText
                          fontFamily="Regular"
                          size={3}
                          color={colors.white}>
                          {url.title}
                        </ResponsiveText>
                        <ResponsiveText
                          fontFamily="Light"
                          size={2.5}
                          margin={[-5, 0, 0, 0]}
                          color={colors.white}>
                          {url.awardName}
                        </ResponsiveText>
                      </ImageBackground>
                    </View>
                  </TouchableOpacity>
                );
              })
            : undefined}
        </ScrollView>
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

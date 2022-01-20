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
import {everyoneFavoriteFakeDATA, ourRecommendationFakeDATA} from '../../../../constants/mock';
import {wp, hp} from '../../../../helpers/Responsiveness';
import ResponsiveText from '../../../../components/RnText';
import { routeName } from '../../../../constants/routeName';
import Icon from '../../../../components/Icon';
import { getFavorateRestaurent } from '../../../../redux/actions/user.actions';
import { useSelector, useDispatch } from 'react-redux';


export default function FavouriteRestaurants({navigation}) {
  const favResData = useSelector(state => state.appReducers.favoriteRestaurant.data,)
  console.log(favResData,'resssss')
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getFavorateRestaurent());
  }, []);
 
  return (
    <View style={{backgroundColor: colors.black3, flex: 1}}>
      <View style={{flex: 0.9, margin: 20,}}>
          <ResponsiveText size={4} margin={[0,0,5,10]} color={colors.yellow} >Favorite Restaurants</ResponsiveText>
          <View style={{ flexDirection:'row', flexWrap:'wrap', width:wp(100)}} >
          {
            favResData.map((item)=>{
              return(
<TouchableOpacity
    style={{marginHorizontal: 8, marginVertical: 10}}
    // onPress={() => navigation.navigate(routeName.DISH_DETAIL)}
    >
    <View
      style={{
        width: wp(26),
        height: hp(18),
        borderRadius: 7,
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
        source={{uri:item.imageDataB}}>
        <View style={{alignItems:'flex-end'}}>
            <Icon size={15} source={globalPath.F_HEART}/>
        </View>
        <View >
          <ResponsiveText fontFamily="Regular" size={2.9} color={colors.white}>
            {item.dishName}
          </ResponsiveText>
          <ResponsiveText fontFamily="Light" size={2} color={colors.white}>
          {item.titleD}
          </ResponsiveText>
        </View>
      </ImageBackground>
    </View>
  </TouchableOpacity>
              )
            })
          }
          </View>

      </View>
    </View>
  );
}

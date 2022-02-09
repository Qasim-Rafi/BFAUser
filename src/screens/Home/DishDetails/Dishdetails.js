import React from 'react';
import {View, Text, ScrollView, StyleSheet, Alert} from 'react-native';
import AdvertisementBanner from '../BottomTabs/Home/AdvertisementBanner';
import ImageHeader from '../BottomTabs/Home/ImageHeader';
import DishDescription from './DishDescription';
import {colors} from '../../../constants/colorsPallet';
import CalorieCount from './CalorieCount';
import MoreFromResturant from './MoreFromResturant';
import PeopleSay from './PeopleSay';
import {BarIndicator} from 'react-native-indicators';
import Comments from './Comments';
import RnButton from '../../../components/RnButton';
import ResponsiveText from '../../../components/RnText';
import {routeName} from '../../../constants/routeName';
import {useSelector} from 'react-redux';
import {Cart_Details} from '../../../constants/mock';
import {
  advertisementBannerFakeDATA,
  ourRecommendationFakeDATA,
} from '../../../constants/mock';
import FlashMessage, {
  showMessage,
  hideMessage,
} from 'react-native-flash-message';
import { useFocusEffect } from '@react-navigation/native';
export default function DishDetails({route, navigation}) {
  const [dish, addDish] = React.useState({});
  const dropdownRef = React.useRef(null);

  const cartList = useSelector(state => state.appReducers.cartList.data);

  const [showCalories, setShowCalories] = React.useState(false);
  React.useEffect(() => {
   
  }, [navigation]);
  useFocusEffect(
    React.useCallback(() => {

      addDish(route.params.dish);
      console.log('detail dataaaaaaa', route.params);

      return () => {
        addDish([])
       // alert('Screen was unfocused');
        // Useful for cleanup functions

      };
    }, [dish])
  );
  const MoreFrom = data => {
    // console.log('More Fromm', data);
    addDish(data);
  };
  const AddCart = data => {
    if (!cartList.some(o => o.id === dish.id)) {
      navigation.navigate(routeName.ADD_TO_CART, {dish: dish});
    } else {
      dropdownRef.current.showMessage({
        message: 'Alert',
        description: 'Already in cart',
        type: 'danger',
        icon: {icon: 'auto', position: 'left'},
        //backgroundColor:colors.black1
      });
    }
  };
  return (
    <ScrollView style={{backgroundColor: colors.black3}}>
      <View style={styles.headerImage}>
        <ImageHeader
          navigation={navigation}
          img={dish.imageDataB}
          img2={dish.images}
        />
      </View>
      <DishDescription item={dish} />
      <View style={{margin: 20, paddingBottom: 20}}>
        <RnButton
          onPress={() => {
            AddCart();
          }}>
          <ResponsiveText padding={0} color={colors.black}>
            Add to Order
          </ResponsiveText>
        </RnButton>
      </View>
      {showCalories ? <CalorieCount /> : null}
      {/* we have to get a parameter from the api for the restaurant to set <CalorieCount /> if that restaurant wants to show it */}
      <View style={{marginLeft: 20, marginVertical: 10}}>
        <MoreFromResturant navigation={navigation} item={MoreFrom} />
        {/* <PeopleSay /> */}
      </View>

      {/* <Comments/> */}
      {/* <View style={{ margin: 20, paddingBottom: 20 }}>


                <RnButton onPress={() => {

                    navigation.navigate(routeName.ADD_TO_CART, { dish: dish })

                }}>

                    <ResponsiveText padding={0} color={colors.black}>Add to Order</ResponsiveText>
                </RnButton>
            </View>
        </View> */}
      {/* {
                favDataLoading === true ?
                <View style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, backgroundColor: 'rgba(65, 65, 65, 0.5)', flex: 1 }}>
                <BarIndicator color={colors.yellow} size={50} />
                </View>
                :
                undefined
            } */}
      <FlashMessage ref={dropdownRef} />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  headerImage: {
    height: 200,
  },
});

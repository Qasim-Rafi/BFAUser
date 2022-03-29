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
import {useDispatch, useSelector} from 'react-redux';
import {Cart_Details} from '../../../constants/mock';
import {
  advertisementBannerFakeDATA,
  ourRecommendationFakeDATA,
} from '../../../constants/mock';
import FlashMessage, {
  showMessage,
  hideMessage,
} from 'react-native-flash-message';
import { promotoinClick } from '../../../redux/actions/user.actions';

export default function DishDetails({route, navigation}) {
  const [dish, addDish] = React.useState({});
  const dropdownRef = React.useRef(null);
  const dispatch=useDispatch()

  const cartList = useSelector(state => state.appReducers.cartList.data);
  const orderList = useSelector(
    state => state.appReducers.your_ordersList.data,
  );
  const [showCalories, setShowCalories] = React.useState(false);
  React.useEffect(() => {
    addDish(route.params.dish);
    if(route.params?.promotion){
      console.log('promo', route.params?.promotion);
      var obj={
        "id": 0,
        "createdByDateTime": "string",
        "restaurantBranchId": route.params.dish.restaurantBranchId,
        "restaurantDishId": route.params.dish.restaurantDishId,
        "customerId": 83,
        "customerName": "Altaf",
        "fullPath": route.params.dish.imageDataB,
        "dishName": route.params.dish.titleD
      }
       dispatch(promotoinClick(obj))
    }
    console.log('detail dataaaaaaa', route.params);
  }, []);

  const MoreFrom = data => {
    // console.log('More Fromm', data);
    addDish(data);
  };
  const AddCart = data => {
    var checkData = orderList.find(
      o =>
        o.statusName === "PreOrder" &&
        o.restaurantBranchId === dish.restaurantBranchId,
    );
    console.log('check data',checkData);
    if (checkData&&checkData.addOrderDetail.some(o =>o.restaurantDishId === dish.restaurantDishId)) {
      dropdownRef.current.showMessage({
        message: 'Alert',
        description: 'Already in cart',
        type: 'danger',
        icon: {icon: 'auto', position: 'left'},
        //backgroundColor:colors.black1
      });
    } else {
      navigation.navigate(routeName.ADD_TO_CART, {dish: dish});
      
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
        <MoreFromResturant navigation={navigation} item={MoreFrom} title={dish.titleR} restaurantBranchId={route.params.dish.restaurantBranchId} />
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

import React from 'react';
import {View, Text, ScrollView, StyleSheet, Alert} from 'react-native';
import ImageHeader from '../BottomTabs/Home/ImageHeader';
import DishDescription from './DishDescription';
import {colors} from '../../../constants/colorsPallet';
import CalorieCount from './CalorieCount';
import MoreFromResturant from './MoreFromResturant';
import RnButton from '../../../components/RnButton';
import ResponsiveText from '../../../components/RnText';
import {routeName} from '../../../constants/routeName';
import {useDispatch, useSelector} from 'react-redux';
import FlashMessage from 'react-native-flash-message';

export default function DishDetails({route, navigation}) {
  const Combo = route.params?.Combo;
  console.log('Combo', Combo)

  const [dish, addDish] = React.useState({});
  const dropdownRef = React.useRef(null);

  const isThemeDark = useSelector(state => state.appReducers.setTheme.data)

  const cartList = useSelector(state => state.appReducers.cartList.data);
  const orderList = useSelector(
    state => state.appReducers.your_ordersList.data,
  );
  const [showCalories, setShowCalories] = React.useState(false);
  React.useEffect(() => {

    const subscribe = navigation.addListener('focus', (e) => {

      if (route.params.dish?.restaurantSoftDrinksList?.length > 0) {
        route.params.dish.restaurantSoftDrinksList.forEach((e,i) => {
          delete route.params.dish.restaurantSoftDrinksList[i].quantity;

        });
      }
      if (route.params.dish?.restaurantDishExtraItemList?.length > 0) {
        route.params.dish.restaurantDishExtraItemList.forEach((e,i) => {
          delete route.params.dish.restaurantDishExtraItemList[i].quantity;

        });
      }
      if (route.params.dish?.restaurantDishLinkedItemList?.length > 0) {
        route.params.dish.restaurantDishLinkedItemList.forEach((e,i) => {
          delete route.params.dish.restaurantDishLinkedItemList[i].quantity;

        });
      }
    addDish(route.params.dish);
    console.log('detail dataaaaaaa', route.params);

    });
     return subscribe
  }, [navigation]);

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
      navigation.navigate(routeName.ADD_TO_CART, {dish: dish,Combo:Combo});
      
    }
  };
  return (
    <ScrollView style={{backgroundColor: isThemeDark ?  colors.black3: colors.bgWhite}}>
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

  
      <FlashMessage ref={dropdownRef} />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  headerImage: {
    height: 200,
  },
});

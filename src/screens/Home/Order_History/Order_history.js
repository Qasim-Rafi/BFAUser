import React from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {ORDER_HISTORY} from '../../../constants/mock';
import {hp, wp} from '../../../helpers/Responsiveness';
import Icon from '../../../components/Icon';
import ResponsiveText from '../../../components/RnText';
import {colors} from '../../../constants/colorsPallet';
import Header from '../../../components/Header';
import RnButton from '../../../components/RnButton';
import { globalPath } from '../../../constants/globalPath';
import { routeName } from '../../../constants/routeName';
import { getOrders } from '../../../redux/actions/user.actions';
import { useDispatch } from 'react-redux';
export default function Order_history({navigation}) {

  const dispatch=useDispatch()
const data=[
    {
      "id": 136,
      "customerId": 83,
      "orderDateTime": "2022-02-08T13:17:22.4561429",
      "status": 1,
      "statusName": "Active",
      "orderStatusName": "TakeAway",
      "couponNo": null,
      "dishId": 0,
      "remarks": "ok",
      "orderStatus": 2,
      "createdById": 0,
      "createdDateTime": "Tue 08-Feb-2022 18:17",
      "restaurantBranchId": 1,
      "amount": 0,
      "updatedDateTime": "",
      "updatebyId": 0,
      "restaurantName": "junjung",
      "restaurantLogo": "https://egreatlearning.com/Web/RestaurantLogo/junjung2.jpg",
      "dishlist": [
        {
          "id": 141,
          "dishId": 26,
          "addOnId": null,
          "orderId": 136,
          "quantity": 1,
          "dishName": "Ambuyat",
          "addOnName": null
        }
      ],
      "dishlistForEdit": []
    },
    {
      "id": 137,
      "customerId": 83,
      "orderDateTime": "2022-02-08T13:18:00.8171997",
      "status": 1,
      "statusName": "Active",
      "orderStatusName": "TakeAway",
      "couponNo": null,
      "dishId": 0,
      "remarks": "ok",
      "orderStatus": 2,
      "createdById": 0,
      "createdDateTime": "Tue 08-Feb-2022 18:18",
      "restaurantBranchId": 1,
      "amount": 0,
      "updatedDateTime": "",
      "updatebyId": 0,
      "restaurantName": "junjung",
      "restaurantLogo": "https://egreatlearning.com/Web/RestaurantLogo/junjung2.jpg",
      "dishlist": [
        {
          "id": 142,
          "dishId": 26,
          "addOnId": null,
          "orderId": 137,
          "quantity": 1,
          "dishName": "Ambuyat",
          "addOnName": null
        }
      ],
      "dishlistForEdit": []
    },
    {
      "id": 138,
      "customerId": 83,
      "orderDateTime": "2022-02-08T13:39:50.5622419",
      "status": 1,
      "statusName": "Active",
      "orderStatusName": "TakeAway",
      "couponNo": null,
      "dishId": 0,
      "remarks": "ok",
      "orderStatus": 2,
      "createdById": 0,
      "createdDateTime": "Tue 08-Feb-2022 18:39",
      "restaurantBranchId": 1,
      "amount": 0,
      "updatedDateTime": "",
      "updatebyId": 0,
      "restaurantName": "junjung",
      "restaurantLogo": "https://egreatlearning.com/Web/RestaurantLogo/junjung2.jpg",
      "dishlist": [
        {
          "id": 143,
          "dishId": 26,
          "addOnId": null,
          "orderId": 138,
          "quantity": 1,
          "dishName": "Ambuyat",
          "addOnName": null
        }
      ],
      "dishlistForEdit": []
    },
    {
      "id": 139,
      "customerId": 83,
      "orderDateTime": "2022-02-08T13:40:08.9581994",
      "status": 1,
      "statusName": "Active",
      "orderStatusName": "TakeAway",
      "couponNo": null,
      "dishId": 0,
      "remarks": "ok",
      "orderStatus": 2,
      "createdById": 0,
      "createdDateTime": "Tue 08-Feb-2022 18:40",
      "restaurantBranchId": 14,
      "amount": 0,
      "updatedDateTime": "",
      "updatebyId": 0,
      "restaurantName": "junjung",
      "restaurantLogo": "https://egreatlearning.com/Web/RestaurantLogo/junjung2.jpg",
      "dishlist": [
        {
          "id": 144,
          "dishId": 26,
          "addOnId": null,
          "orderId": 139,
          "quantity": 1,
          "dishName": "Ambuyat",
          "addOnName": null
        }
      ],
      "dishlistForEdit": []
    },
    {
      "id": 142,
      "customerId": 83,
      "orderDateTime": "2022-02-08T13:47:15.4698976",
      "status": 1,
      "statusName": "Active",
      "orderStatusName": "TakeAway",
      "couponNo": null,
      "dishId": 0,
      "remarks": "ok",
      "orderStatus": 2,
      "createdById": 0,
      "createdDateTime": "Tue 08-Feb-2022 18:47",
      "restaurantBranchId": 1,
      "amount": 0,
      "updatedDateTime": "",
      "updatebyId": 0,
      "restaurantName": "junjung",
      "restaurantLogo": "https://egreatlearning.com/Web/RestaurantLogo/junjung2.jpg",
      "dishlist": [
        {
          "id": 147,
          "dishId": 26,
          "addOnId": null,
          "orderId": 142,
          "quantity": 1,
          "dishName": "Ambuyat",
          "addOnName": null
        }
      ],
      "dishlistForEdit": []
    },
    {
      "id": 143,
      "customerId": 83,
      "orderDateTime": "2022-02-08T13:48:04.1930372",
      "status": 1,
      "statusName": "Active",
      "orderStatusName": "TakeAway",
      "couponNo": null,
      "dishId": 0,
      "remarks": "ok",
      "orderStatus": 2,
      "createdById": 0,
      "createdDateTime": "Tue 08-Feb-2022 18:48",
      "restaurantBranchId": 1,
      "amount": 0,
      "updatedDateTime": "",
      "updatebyId": 0,
      "restaurantName": "junjung",
      "restaurantLogo": "https://egreatlearning.com/Web/RestaurantLogo/junjung2.jpg",
      "dishlist": [
        {
          "id": 148,
          "dishId": 26,
          "addOnId": null,
          "orderId": 143,
          "quantity": 1,
          "dishName": "Ambuyat",
          "addOnName": null
        }
      ],
      "dishlistForEdit": []
    },
    {
      "id": 145,
      "customerId": 83,
      "orderDateTime": "2022-02-08T13:48:44.3342824",
      "status": 1,
      "statusName": "Active",
      "orderStatusName": "TakeAway",
      "couponNo": null,
      "dishId": 0,
      "remarks": "ok",
      "orderStatus": 2,
      "createdById": 0,
      "createdDateTime": "Tue 08-Feb-2022 18:48",
      "restaurantBranchId": 14,
      "amount": 0,
      "updatedDateTime": "",
      "updatebyId": 0,
      "restaurantName": "junjung",
      "restaurantLogo": "https://egreatlearning.com/Web/RestaurantLogo/junjung2.jpg",
      "dishlist": [
        {
          "id": 150,
          "dishId": 56,
          "addOnId": null,
          "orderId": 145,
          "quantity": 1,
          "dishName": "CHOCOLATE BROWNIE",
          "addOnName": null
        }
      ],
      "dishlistForEdit": []
    }
  ]
     

  React.useEffect(() => {
    dispatch(getOrders());


  }, []);
  return (
    <View style={{flex: 1, backgroundColor: '#202020'}}>
       <View style={{ flexDirection: 'row', justifyContent: "space-between",padding:7 }}>
            <TouchableOpacity style={{ backgroundColor:colors.yellow1,paddingVertical:10,paddingHorizontal:10,borderRadius:20, }} onPress={() => { navigation.goBack() }}><Icon source={globalPath.BACK_BLACK_ARROW} /></TouchableOpacity>
          </View>
      <View style={{flex: 0.7, margin: 20}}>
        <ResponsiveText color={colors.white}>My Orders</ResponsiveText>
        {data.map((item, index) => {
          return (
            <TouchableOpacity onPress={()=>navigation.navigate(routeName.ORDER_DETAILS,{data:item})}>
            <View
              style={{
                backgroundColor: '#303030',
                height: hp(10),
                borderRadius: 5,
                alignItems:'center',
                marginTop: 10,
                paddingHorizontal:5,
                flexDirection: 'row',
              }}>
              <View>
                <Icon borderRadius={7} source={{uri:item.restaurantLogo}} size={60} />
              </View>
              <View style={{marginTop: '2%', marginLeft: '2%'}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <ResponsiveText color={colors.white}>
                    {item.restaurantName}
                  </ResponsiveText>
                  <ResponsiveText color={colors.yellow}>
                    ${item.amount}
                  </ResponsiveText>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <ResponsiveText size={2.1} color={colors.yellow}>
                    Order iD:
                  </ResponsiveText>
                  <ResponsiveText size={2.1} color={colors.yellow}>
                    {item.id}
                  </ResponsiveText>
                </View>
                <View style={{flexDirection: 'row', width: wp(68),alignItems:'baseline',justifyContent:'space-between'}}>
                  <View style={{flexDirection: 'row'}}>
                    <ResponsiveText size={2.5} color={colors.grey}>
                      Items:
                    </ResponsiveText>
                    <ResponsiveText padding={[0,0,0,0]} size={2.5} color={colors.white}>
                      {item.dishlist.length}
                    </ResponsiveText>
                  </View>
                  <View style={{flexDirection: 'row', marginLeft: 20,}}>
                    <ResponsiveText size={2.5} color={colors.grey}>
                      Status:
                    </ResponsiveText>
                    <ResponsiveText size={2.5} color={colors.white}>
                      {item.statusName}
                    </ResponsiveText>
                  </View>
                  <View>
                  <TouchableOpacity
                      style={{
                        backgroundColor: colors.yellow,
                        padding:3,
                        borderRadius:3,
                      }}>
                      <ResponsiveText size={2.5}> Repeat Order</ResponsiveText>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

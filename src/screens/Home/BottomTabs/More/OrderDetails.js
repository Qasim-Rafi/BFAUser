//Node Imports
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

//Local Imports
import {colors} from '../../../../constants/colorsPallet';
import {hp} from '../../../../helpers/Responsiveness';
import {wp} from '../../../../helpers/Responsiveness';
import {globalPath} from '../../../../constants/globalPath';
import Icon from '../../../../components/Icon';
import Header from '../../../../components/Header';
import ResponsiveText from '../../../../components/RnText';
import StaticMap from '../../../../components/StaticMap';
import Restaurant_Description from '../../RestaurantBranchDetail/ResturantDesceiption';

export default function OrderDetails({navigation}) {
  return (
    <View style={{flex: 1, backgroundColor: colors.black3}}>
      <View style={{ flexDirection: 'row', justifyContent: "space-between",padding:7 }}>
            <TouchableOpacity style={{ backgroundColor:colors.yellow1,paddingVertical:10,paddingHorizontal:10,borderRadius:20, }} onPress={() => { navigation.goBack() }}><Icon source={globalPath.BACK_BLACK_ARROW} /></TouchableOpacity>
          </View>
      <View
        style={{
          flex: 0.07,
          backgroundColor: colors.black3,
          justifyContent: 'center',
          marginHorizontal: 20,
          marginVertical:15,
        }}>
        <ResponsiveText size={4} color={colors.yellow}>
          Order Details
        </ResponsiveText>
      </View>
      <View
        style={{
          flex: 0.14,
          flexDirection: 'row',
          backgroundColor: colors.black3,
          justifyContent: 'center',
          marginHorizontal: 15,
        }}>
        <View style={{flex: 1}}>
        <View
            style={{
              flex: 0.3,
              flexDirection: 'row',
              alignItems: 'center',
              
            }}>
            <View style={{flex: 0.3, justifyContent: 'center'}}>
              <ResponsiveText
                size={3}
                color={colors.white}
                margin={[0, 0, 0, 15]}>
                Name:
              </ResponsiveText>
            </View>
            <View style={{flex: 0.7, justifyContent: 'center'}}>
              <ResponsiveText
                size={3}
                color={colors.grey}
                margin={[0, 0, 0, 15]}>
                 Qasim
              </ResponsiveText>
            </View>
          </View>
          <View
            style={{
              flex: 0.3,
              flexDirection: 'row',
              alignItems: 'center',
              
            }}>
            <View style={{flex: 0.3, justifyContent: 'center'}}>
              <ResponsiveText
                size={3}
                color={colors.white}
                margin={[0, 0, 0, 15]}>
                Id:
              </ResponsiveText>
            </View>
            <View style={{flex: 0.7, justifyContent: 'center'}}>
              <ResponsiveText
                size={3}
                color={colors.grey}
                margin={[0, 0, 0, 15]}>
                11
              </ResponsiveText>
            </View>
          </View>
          <View
            style={{
              flex: 0.3,
              flexDirection: 'row',
              alignItems: 'center',
              
            }}>
            <View style={{flex: 0.3, justifyContent: 'center'}}>
              <ResponsiveText
                size={3}
                color={colors.white}
                margin={[0, 0, 0, 15]}>
                Location:
              </ResponsiveText>
            </View>
            <View style={{flex: 0.7, justifyContent: 'center'}}>
              <ResponsiveText
                size={3}
                color={colors.grey}
                margin={[0, 0, 0, 15]}>
                Customer Location
              </ResponsiveText>
            </View>
          </View>
          <View
            style={{
              flex: 0.3,
              flexDirection: 'row',
              alignItems: 'center',
              
            }}>
            <View style={{flex: 0.3, justifyContent: 'center'}}>
              <ResponsiveText
                size={3}
                color={colors.white}
                margin={[0, 0, 0, 15]}>
                Time:
              </ResponsiveText>
            </View>
            <View style={{flex: 0.7, justifyContent: 'center'}}>
              <ResponsiveText
                size={3}
                color={colors.grey}
                margin={[0, 0, 0, 15]}>
                11 July,2021, 6:30PM
              </ResponsiveText>
            </View>
          </View>
      
        </View>
      </View>
      <View
        style={{
          flex: 0.23,
          backgroundColor: colors.white,
          marginHorizontal: 15,
		  
          marginTop: 15,
        }}>
        <View
          style={{
            flex: 0.24,
            backgroundColor: colors.black1,
            flexDirection: 'row',
          }}>
          <View
            style={{flex: 0.6, justifyContent: 'center', marginHorizontal: 15}}>
            <ResponsiveText size={3} color={colors.white}>
              Ordered Items
            </ResponsiveText>
          </View>
          <View style={{flex: 0.2, justifyContent: 'center'}}>
            <ResponsiveText size={3} color={colors.white}>
              Qnt
            </ResponsiveText>
          </View>
          <View style={{flex: 0.2, justifyContent: 'center'}}>
            <ResponsiveText size={3} color={colors.white}>
              Amount
            </ResponsiveText>
          </View>
        </View>
        <View
          style={{
            flex: 0.24,
            backgroundColor: colors.black2,
            flexDirection: 'row',
			borderBottomWidth:1,
			borderBottomColor:colors.black1,
          }}>
          <View
            style={{flex: 0.6, justifyContent: 'center', marginHorizontal: 15}}>
            <ResponsiveText size={3} color={colors.grey}>
              Fish Crackers
            </ResponsiveText>
          </View>
          <View style={{flex: 0.2, justifyContent: 'center'}}>
            <ResponsiveText size={3} color={colors.grey}>
              1
            </ResponsiveText>
          </View>
          <View style={{flex: 0.2, justifyContent: 'center'}}>
            <ResponsiveText size={3} color={colors.yellow}>
              $8.00
            </ResponsiveText>
          </View>
        </View>
        <View
          style={{
            flex: 0.24,
            backgroundColor: colors.black2,
            flexDirection: 'row',
			borderBottomWidth:1,
			borderBottomColor:colors.black1,
          }}>
          <View
            style={{flex: 0.6, justifyContent: 'center', marginHorizontal: 15}}>
            <ResponsiveText size={3} color={colors.grey}>
              Egg Fried Rice
            </ResponsiveText>
          </View>
          <View style={{flex: 0.2, justifyContent: 'center'}}>
            <ResponsiveText size={3} color={colors.grey}>
              2
            </ResponsiveText>
          </View>
          <View style={{flex: 0.2, justifyContent: 'center'}}>
            <ResponsiveText size={3} color={colors.yellow}>
              $20.00
            </ResponsiveText>
          </View>
        </View>
        <View
          style={{
            flex: 0.28,
            backgroundColor: colors.black2,
            flexDirection: 'row',
			borderBottomWidth:1,
			borderBottomColor:colors.black1,
          }}>
          <View
            style={{flex: 0.6, justifyContent: 'center', marginHorizontal: 15}}>
            <ResponsiveText size={3} color={colors.grey}>
              Chocolate Brownie
            </ResponsiveText>
          </View>
          <View style={{flex: 0.2, justifyContent: 'center'}}>
            <ResponsiveText size={3} color={colors.grey}>
              3
            </ResponsiveText>
          </View>
          <View style={{flex: 0.2, justifyContent: 'center'}}>
            <ResponsiveText size={3} color={colors.yellow}>
              $26.00
            </ResponsiveText>
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 0.38,
          backgroundColor: colors.black3,
          marginHorizontal: 5,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            flex: 0.2,
            marginHorizontal: 25,
          }}>
          <View style={{flex: 0.45, alignItems: 'flex-start'}}>
            <ResponsiveText color={colors.white} size={3}>
              Total
            </ResponsiveText>
          </View>
          <View style={{flex: 0.55, alignItems: 'flex-end'}}>
            <ResponsiveText
              margin={[0, 10, 0, 0]}
              color={colors.yellow}
              size={3}>
              $ 54.00
            </ResponsiveText>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            flex: 0.1,
            marginHorizontal: 25,
            marginTop: -10,
            borderBottomColor: colors.black1,
            paddingBottom: 5,
            borderBottomWidth: 1,
          }}>
          <View style={{flex: 0.45, alignItems: 'flex-start'}}>
            <ResponsiveText color={colors.white} size={3}>
              Tips
            </ResponsiveText>
          </View>
          <View style={{flex: 0.55, alignItems: 'flex-end'}}>
            <ResponsiveText
              margin={[0, 10, 0, 0]}
              color={colors.yellow}
              size={3}>
              $ 6.00
            </ResponsiveText>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            flex: 0.7,
            marginHorizontal: 25,
            marginTop: 20,
          }}>
          <View style={{flex: 0.45, alignItems: 'flex-start'}}>
            <ResponsiveText color={colors.white} size={3}>
              Final Total
            </ResponsiveText>
          </View>
          <View style={{flex: 0.55, alignItems: 'flex-end'}}>
            <ResponsiveText
              margin={[0, 10, 0, 0]}
              color={colors.yellow}
              size={4.5}>
              $ 60.00
            </ResponsiveText>
          </View>
        </View>
      </View>
    
    
    
    </View>
  );
}

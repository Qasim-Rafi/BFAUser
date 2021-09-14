import React from 'react';
import {StyleSheet, Text, View, Image,TouchableOpacity , Alert} from 'react-native';
import {colors} from '../../../../constants/colorsPallet';
import ResponsiveText from '../../../../components/RnText';
import {globalPath} from '../../../../constants/globalPath';
import Icon from '../../../../components/Icon';
import { routeName } from '../../../../constants/routeName';
import AsyncStorage from '@react-native-community/async-storage';


const More = ({navigation}) => {

  const logout =()=>{
    Alert.alert(
      "Logout",
      "Confirm Logout",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: async () => await AsyncStorage.removeItem('@token')  }
      ]
    );
  }
  return (
    <View style={{backgroundColor: colors.black3, flex: 1,flexDirection:'column',justifyContent:'space-between'}}>
      <View>
        <View
          style={{
            backgroundColor: colors.yellow,
            flexDirection: 'row',
            paddingVertical:20
          }}>
          <Image
            style={{
              width: 80,
              height: 80,
              borderRadius: 50,
              marginTop: 10,
              marginLeft: 20,
            }}
            source={globalPath.PROFILE_LOGO}
          />
          <View style={{justifyContent: 'center',marginLeft:10}}>
            <ResponsiveText size={4}>Hassanal Bolkiah</ResponsiveText>
            <ResponsiveText color={colors.lightBlack} size={3}>
              hassanl@gmail.com
            </ResponsiveText>
          </View>
        </View>
        <View style={{margin: 20}}>
          <TouchableOpacity
          onPress={()=>navigation.navigate(routeName.PROFILE_SCREEN)}
            style={{backgroundColor: colors.black2, flexDirection: 'row',padding:10,marginTop:20}} >
            <Icon size={20} source={globalPath.MORE_PROFILE} />
            <ResponsiveText margin={[0,0,0,10]} size={4} color={colors.white}>
              Profile
            </ResponsiveText>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={()=>navigation.navigate(routeName.MYWHITLIST)}
            style={{backgroundColor: colors.black2, flexDirection: 'row',padding:10,marginTop:10}}>
            <Icon size={20} source={globalPath.HEART} />
            <ResponsiveText margin={[0,0,0,10]} size={4} color={colors.white}>
              My WhitList
            </ResponsiveText>
          </TouchableOpacity>
          <TouchableOpacity
            style={{backgroundColor: colors.black2, flexDirection: 'row',padding:10,marginTop:10}}>
            <Icon size={20} source={globalPath.MORE_REVIEWS} />
            <ResponsiveText margin={[0,0,0,10]} size={4} color={colors.white}>
              My Reviews
            </ResponsiveText>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={()=>navigation.navigate(routeName.ORDER_HISTORY)}
            style={{backgroundColor: colors.black2, flexDirection: 'row',padding:10,marginTop:10}}>
            <Icon size={20} source={globalPath.MORE_ORDER} />
            <ResponsiveText margin={[0,0,0,10]} size={4} color={colors.white}>
              Order
            </ResponsiveText>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={()=>navigation.navigate(routeName.TRANSACTION_HISTORY)}
            style={{backgroundColor: colors.black2, flexDirection: 'row',padding:10,marginTop:10}}>
            <Icon size={20} source={globalPath.MORE_PAYMENT} />
            <ResponsiveText margin={[0,0,0,10]} size={4} color={colors.white}>
              Payment History
            </ResponsiveText>
          </TouchableOpacity>
          <TouchableOpacity
            style={{backgroundColor: colors.black2, flexDirection: 'row',padding:10,marginTop:10}}>
            <Icon size={20} source={require('../../../../assets/icons/manage-card.png')} />
            <ResponsiveText margin={[0,0,0,10]} size={4} color={colors.white}>
              Card Management
            </ResponsiveText>
          </TouchableOpacity>
          <TouchableOpacity
            style={{backgroundColor: colors.black2, flexDirection: 'row',padding:10,marginTop:10}}>
            <Icon size={20} source={globalPath.MORE_LANGUAGE} />
            <ResponsiveText margin={[0,0,0,10]} size={4} color={colors.white}>
              Language
            </ResponsiveText>
          </TouchableOpacity>
        </View>
      </View>
      <View>
      <TouchableOpacity onPress={logout}
            style={{backgroundColor: colors.black2, flexDirection: 'row',padding:10,marginTop:10}}>
            <Icon size={20} margin={[0,0,0,10]} source={globalPath.LOGOUT} />
            <ResponsiveText margin={[0,0,0,10]} size={4} color={colors.white}>
              Logout
            </ResponsiveText>
          </TouchableOpacity>
      </View>
    </View>
  );
};

export default More;

const styles = StyleSheet.create({});

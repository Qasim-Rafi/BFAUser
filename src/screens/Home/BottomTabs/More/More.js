import React from 'react';
import {StyleSheet, Text, View, Image,TouchableOpacity , Alert, ScrollView} from 'react-native';
import {colors} from '../../../../constants/colorsPallet';
import ResponsiveText from '../../../../components/RnText';
import {globalPath} from '../../../../constants/globalPath';
import Icon from '../../../../components/Icon';
import { routeName } from '../../../../constants/routeName';
import AsyncStorage from '@react-native-community/async-storage';
import { StackActions } from '@react-navigation/native';
import {hp, wp} from '../../../../helpers/Responsiveness'

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
        { text: "OK", onPress: async () => {
          await AsyncStorage.removeItem('@token');
          navigation.dispatch(StackActions.replace('Auth')) } }
      ]
    );
  }
  return (
    <View style={{backgroundColor: colors.black3, flex: 1,flexDirection:'column',justifyContent:'space-between'}}>
        <View
          style={{
            backgroundColor: colors.yellow,
            flexDirection: 'row',
            paddingVertical:20,
          }}>
            <TouchableOpacity onPress={()=>navigation.navigate(routeName.PROFILE_SCREEN)} > 
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
          </TouchableOpacity>
          <View style={{justifyContent: 'center',marginLeft:10}}>
            <ResponsiveText size={4}>Pg Hassan PHD</ResponsiveText>
            <ResponsiveText color={colors.lightBlack} size={3}>
              pghassan@gmail.com
            </ResponsiveText>
          </View>
          <TouchableOpacity onPress={logout}>
          <View style={{flexDirection:'row', width:wp(40) ,justifyContent:'flex-end',marginTop:-5,paddingHorizontal:20}}>
              <Icon source={globalPath.LOGOUT} size={20} tintColor={colors.black} />
              <ResponsiveText margin={[0,0,0,5]} size={3} >Logout</ResponsiveText>
            </View>
            </TouchableOpacity>
        </View>
        

        
        <ScrollView style={{flex:0.5}}>
        <View style={{margin: 20,}}>
          <ResponsiveText color={colors.white} size={4} >Profile</ResponsiveText>
          <TouchableOpacity
          onPress={()=>navigation.navigate(routeName.PROFILE_SCREEN)}
            style={{backgroundColor: colors.black2, flexDirection: 'row',paddingHorizontal:20, paddingVertical:10,borderRadius:7}} >

            <Icon size={20} source={globalPath.MORE_PROFILE} />
            <ResponsiveText margin={[0,0,0,10]} size={3.5} color={colors.grey}>
              Profile
            </ResponsiveText>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={()=>navigation.navigate(routeName.MYWHITLIST)}
            style={{backgroundColor: colors.black2, flexDirection: 'row',paddingHorizontal:20, paddingVertical:10,marginTop:5, borderRadius:7}}>
            <Icon size={20} source={globalPath.HEART} />
            <ResponsiveText margin={[0,0,0,10]} size={3.5} color={colors.grey}>
              Favourites
            </ResponsiveText>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={()=>navigation.navigate(routeName.MY_REVIEWS)}

            style={{backgroundColor: colors.black2, flexDirection: 'row',paddingHorizontal:20, paddingVertical:10,marginTop:5, borderRadius:7}}>
            <Icon size={20} source={globalPath.MORE_REVIEWS} />
            <ResponsiveText margin={[0,0,0,10]} size={3.5} color={colors.grey}>
              My Reviews
            </ResponsiveText>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={()=>navigation.navigate(routeName.PREFERENCES)}
            style={{backgroundColor: colors.black2, flexDirection: 'row',paddingHorizontal:20, paddingVertical:10,marginTop:5, borderRadius:7}}>
            <Icon size={20} source={globalPath.PREFERANCES} />
            <ResponsiveText margin={[0,0,0,10]} size={3.5} color={colors.grey}>
              Preferences
            </ResponsiveText>
          </TouchableOpacity>
          <TouchableOpacity
          // onPress={()=>navigation.navigate(routeName.)}
            style={{backgroundColor: colors.black2, flexDirection: 'row',paddingHorizontal:20, paddingVertical:10,marginTop:5, borderRadius:7}}>
            <Icon size={20} source={globalPath.INTERACTIVE} />
            <ResponsiveText margin={[0,0,0,10]} size={3.5} color={colors.grey}>
              Bali Interactive
            </ResponsiveText>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={()=>navigation.navigate(routeName.JOB_LISTING)}
            style={{backgroundColor: colors.black2, flexDirection: 'row',paddingHorizontal:20, paddingVertical:10,marginTop:5, borderRadius:7}}>
            <Icon size={20} source={globalPath.JOBS} />
            <ResponsiveText margin={[0,0,0,10]} size={3.5} color={colors.grey}>
              Jobs Listing
            </ResponsiveText>
          </TouchableOpacity>

          <ResponsiveText margin={[10,0,0,0]} color={colors.white} size={4} >
            Payment information
            </ResponsiveText>
          <TouchableOpacity
          onPress={()=>navigation.navigate(routeName.SCAN_QR)}
            style={{backgroundColor: colors.black2, flexDirection: 'row',paddingHorizontal:20, paddingVertical:10,marginTop:5, borderRadius:7}}>
            <Icon size={20} source={globalPath.QR_SCAN} />
            <ResponsiveText margin={[0,0,0,10]} size={3.5} color={colors.grey}>
              Scan QR Code
            </ResponsiveText>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={()=>navigation.navigate(routeName.TRANSACTION_HISTORY)}
            style={{backgroundColor: colors.black2, flexDirection: 'row',paddingHorizontal:20, paddingVertical:10,marginTop:5, borderRadius:7}}>
            <Icon size={20} source={globalPath.MORE_PAYMENT} />
            <ResponsiveText margin={[0,0,0,10]} size={3.5} color={colors.grey}>
              Payment History
            </ResponsiveText>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={()=>navigation.navigate(routeName.MANAGE_CARDS)}
            style={{backgroundColor: colors.black2, flexDirection: 'row',paddingHorizontal:20, paddingVertical:10,marginTop:5, borderRadius:7}}>
            <Icon size={20} source={globalPath.CARD_MANAGEMENT} />
            <ResponsiveText margin={[0,0,0,10]} size={3.5} color={colors.grey}>
              Card Management
            </ResponsiveText>
          </TouchableOpacity>
          <ResponsiveText margin={[10,0,0,0]} color={colors.white} size={4} >
            Others
            </ResponsiveText>
          <TouchableOpacity
          onPress={()=>navigation.navigate(routeName.SETTINGS)}
            style={{backgroundColor: colors.black2, flexDirection: 'row',paddingHorizontal:20, paddingVertical:10,marginTop:5, borderRadius:7}}>
            <Icon size={20} source={globalPath.SETTINGS} />
            <ResponsiveText margin={[0,0,0,10]} size={3.5} color={colors.grey}>
               Settings
            </ResponsiveText>
          </TouchableOpacity>
          <TouchableOpacity
          // onPress={()=>navigation.navigate(routeName.ORDER_HISTORY)}
            style={{backgroundColor: colors.black2, flexDirection: 'row',paddingHorizontal:20, paddingVertical:10,marginTop:5, borderRadius:7}}>
            <Icon size={20} source={globalPath.FAQ} />
            <ResponsiveText margin={[0,0,0,10]} size={3.5} color={colors.grey}>
              FAQ
            </ResponsiveText>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={()=>navigation.navigate(routeName.CONTACT_US)}
            style={{backgroundColor: colors.black2, flexDirection: 'row',paddingHorizontal:20, paddingVertical:10,marginTop:5, borderRadius:7}}>
            <Icon size={20} source={globalPath.CONTACT} />
            <ResponsiveText margin={[0,0,0,10]} size={3.5} color={colors.grey}>
              Contact Us
            </ResponsiveText>
          </TouchableOpacity>
        </View>
        </ScrollView>
      </View>
      
  
  );
};

export default More;

const styles = StyleSheet.create({});

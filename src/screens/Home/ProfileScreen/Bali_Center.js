import React, { useState } from 'react'
import { View, Text,Image, TextInput, TouchableOpacity, ImageBackground,StyleSheet } from 'react-native'
import { colors } from '../../../constants/colorsPallet'
import { wp,hp } from '../../../helpers/Responsiveness'
import Icon from '../../../components/Icon'
import { globalPath } from '../../../constants/globalPath'
import ResponsiveText from '../../../components/RnText'
import { useSelector } from 'react-redux'
export default function Bali_Center({ navigation, route }) {
  const [text, setText] = useState('');

    const profileData = useSelector(state => state.appReducers.profileData.data);
    console.log('Profile: ', profileData);
    const loading = useSelector(state => state.appReducers.profileData.loading);
    console.log('loading', loading);
    return (
        <View style={{ flex: 1, backgroundColor: colors.black3 }}>
            <View style={{flexDirection:'row',backgroundColor:colors.black1,}}>

        <View style={{height:20,width:wp(10),bottom:5}}>
            <TouchableOpacity style={{ backgroundColor: colors.yellow1,padding:10,top:20,left:20, borderRadius: 20, }} onPress={() => { navigation.goBack() }}>
                    <Icon source={globalPath.BACK_BLACK_ARROW} /></TouchableOpacity>

            </View>
            <View style={{bottom:hp(1.5)}}>
            <ResponsiveText size={3.5} color={colors.white} margin={[hp(4), 20, 5, wp(25)]} >Bali help center</ResponsiveText>     

            </View>

            </View>
            <ResponsiveText size={2.5} color={colors.white} margin={[hp(1), 20, 5, wp(40)]} >{profileData.fullName}</ResponsiveText>     
            <ResponsiveText size={2.5} color={colors.white} margin={[hp(0.5), 20, 5, wp(35)]} >{profileData.email}</ResponsiveText>     

            <Image
              source={globalPath.BFA_LOGO}
              style={{ height: hp(15), width:wp(40) ,justifyContent:'center',alignSelf:'center',resizeMode:"contain",top:hp(10)}}
            />
            <ResponsiveText size={5} color={colors.white} margin={[hp(12), 20, 5, wp(27)]} >How can we help?</ResponsiveText>     
            <View style={{backgroundColor:colors.black2}}>
            {/* <ResponsiveText size={2.5} color={colors.white} margin={[hp(1), 20, 5, wp(2)]} >Gmail:          {profileData.email}</ResponsiveText>      */}
            {/* <ResponsiveText size={2.5} color={colors.white} margin={[hp(1), 20, 5, wp(2)]} >Contact:      {profileData.contactNumber}</ResponsiveText>    */}
            </View>
            <View
            style={{
                top:hp(10),
              margin: 5,
              paddingHorizontal: 10,
            }}>
            <TextInput
              style={{
                height: hp(20),
                borderWidth: 2,
                borderRadius: 3,
                paddingHorizontal: 15,
                borderColor: colors.black2,
                alignContent: 'center',
                backgroundColor: colors.black2,
                color: colors.white,
              }}
              textAlignVertical="top"
              multiline={true}
              placeholder="Message...."
              onChangeText={text => setText(text)}
              defaultValue={text}
            />
          </View>

          <TouchableOpacity style={styles.signin}>
             
                <ResponsiveText color={colors.black} size={4}>
                 Submit
                </ResponsiveText>
              
            </TouchableOpacity>
            
                   </View>
    )
}
const styles = StyleSheet.create({
  
    signin: {
        top:hp(10),
      backgroundColor: colors.yellow,
      width: wp(30),
      height: hp(6),
      borderRadius: 7,
      alignItems: 'center',
marginLeft:wp(65),
      justifyContent: 'center'
    },
   
  });

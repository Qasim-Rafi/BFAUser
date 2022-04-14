import React, { useState } from 'react'
import { View, Text,Image, TextInput, TouchableOpacity, ImageBackground,StyleSheet } from 'react-native'
import { colors } from '../../../constants/colorsPallet'
import { wp,hp } from '../../../helpers/Responsiveness'
import Icon from '../../../components/Icon'
import FlashMessage from 'react-native-flash-message';
import {
 
  SkypeIndicator,
} from 'react-native-indicators';
import { globalPath } from '../../../constants/globalPath'
import ResponsiveText from '../../../components/RnText'
import { useSelector } from 'react-redux'

import urls from '../../../redux/lib/urls'
import { addComplain } from '../../../redux/actions/user.actions'
import Api from '../../../redux/lib/api'
export default function Bali_Center({ navigation, route }) {
  const [text, setText] = useState('');
  const dropdownRef = React.useRef(null);

  const [loadingg, setLoadingg] = useState(false);
 
  const AddCompalin = async id => {
   
    const obj = {    
      compalin: text,
    };
    console.log('complainnnnn', obj);
    // dispatch(removeCart(data));
    if (text === '') {
      dropdownRef.current.showMessage({
        message: 'Error',
        description: 'Please enter something',
        type: 'danger',
        icon: { icon: 'auto', position: 'left' },
      });}
      else{
    try {
      setLoadingg(true);
      const res = await Api.post(urls.HELP_CENTER,obj);
      console.log('res', res);
      if (res && res.success == true) {
        setText('')
        // dispatch(addComplain());
        dropdownRef.current.showMessage({
          message: 'Alert',
          description: 'Submit Successfully',
          type: 'success',
          icon: { icon: 'auto', position: 'left' },
          //backgroundColor:colors.black1
        });
        setLoadingg(false);
        setTimeout(() => {
          navigation.goBack();
          },1000)
      } else {
        setLoadingg(false);

        dropdownRef.current.showMessage({
          message: 'Alert',
          description: 'Something went wrong',
          type: 'danger',
          icon: { icon: 'auto', position: 'left' },
          //backgroundColor:colors.black1
        });
      }
    } catch (error) { }
  }
  };

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
            <View style={{flexDirection:'row'}}>

            <Image
              style={{
                width: 50,
                height: 50,
                borderRadius: 50,
                marginTop: 10,
                marginLeft: 20,
              }}
              source={
                profileData.fullPath
                  ? {uri: profileData.fullPath}
                  : globalPath.USER_PROFILE
              }
            />
             <View style={{justifyContent: 'center', marginLeft: 10}}>
            <ResponsiveText color={colors.white} size={3}>{profileData.fullName}</ResponsiveText>
            <ResponsiveText color={colors.yellow1} size={2.5}>
              {profileData.email}
            </ResponsiveText>
            </View>

          </View>

          <Image
              source={globalPath.HOME_BFA_PARTNER}
              style={{ height: hp(15), width:wp(35) ,justifyContent:'center',alignSelf:'center',resizeMode:"contain"}}
            />
            <ResponsiveText size={5} color={colors.white} margin={[hp(-2), 20, 5, wp(27)]} >How can we help?</ResponsiveText>     
            <View style={{backgroundColor:colors.black2}}>
            </View>
            <View
            style={{
                top:hp(2),
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
              placeholder="Message......"
              onChangeText={text => setText(text)}
              defaultValue={text}
            />
          </View>

          <TouchableOpacity style={styles.signin} onPress={() => {
                AddCompalin();
              }}>
                {loadingg == true ?
            <  SkypeIndicator count={5} color={colors.black} size={30} />
             :
                <ResponsiveText color={colors.black} size={4}>
                 Submit
                </ResponsiveText>
}
              
            </TouchableOpacity>
            <Image
              source={globalPath.BFA_LOGO}
              style={{opacity:0.3, height: hp(8), width:wp(11),alignSelf:"flex-end",top:hp(26),right:wp(2),resizeMode:'contain'}}
            />
      <FlashMessage ref={dropdownRef} />

                   </View>
    )
}
const styles = StyleSheet.create({
  
    signin: {
        top:hp(2),
      backgroundColor: colors.yellow,
      width: wp(30),
      height: hp(6),
      borderRadius: 7,
      alignItems: 'center',
marginLeft:wp(65),
      justifyContent: 'center'
    },
   
  });

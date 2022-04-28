import React, { useState } from 'react'
import { View, Text,Image, TextInput, TouchableOpacity, ImageBackground } from 'react-native'
import { colors } from '../../../../constants/colorsPallet'
import Icon from '../../../../components/Icon'
import Header from '../../../../components/Header'
import { globalPath } from '../../../../constants/globalPath'
import ResponsiveText from '../../../../components/RnText';
import {
    BallIndicator,
    BarIndicator,
    DotIndicator,
    MaterialIndicator,
    PacmanIndicator,
    PulseIndicator,
    SkypeIndicator,
    UIActivityIndicator,
    WaveIndicator,
  } from 'react-native-indicators';
import { hp, wp } from '../../../../helpers/Responsiveness'
import Api from '../../../../redux/lib/api'
import urls from '../../../../redux/lib/urls'
import { useSelector } from 'react-redux'
export default function ContactUs({ navigation, route }) {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const isThemeDark = useSelector(state => state.appReducers.setTheme.data)

    React.useEffect(() => {
        // dispatch(getProfileData());
        // console.log('loading', loading);
        getData()
    }, []);
    const getData = async id => {
        // var obj = {
        //   orderStatus: 5,
        //   updatedDateTime: new Date(),
        //   updatebyId: userId,
        // };
        // console.log('obj', obj);
        try {
            setLoading(true)
            const res = await Api.get(urls.GET_CONATACT_FROM_DISH + route.params);
            console.log('ree', res);
            if (res && res.success == true) {
                setLoading(false)

                setData(res.data);
                // dropdownRef.current.showMessage({
                //   message: 'Alert',
                //   description: 'Order Canceled',
                //   type: 'success',
                //   icon: { icon: 'auto', position: 'left' },
                //   //backgroundColor:colors.black1
                // });
            } else {
                setLoading(false)

            }
        } catch (error) { }
    };
    return (
        <View style={{ flex: 1, backgroundColor: isThemeDark ?  colors.black3: colors.bgWhite }}>
            <View style={{height:20,width:wp(10)}}>
            <TouchableOpacity style={{ backgroundColor: colors.yellow1,padding:10,top:20,left:20, borderRadius: 20, }} onPress={() => { navigation.goBack() }}>
                    <Icon source={globalPath.BACK_BLACK_ARROW} /></TouchableOpacity>
            </View>
              
              <Image
              source={{uri:data.restaurantLogo}}
              style={{ height: hp(30), borderRadius:wp(20), width:wp(40) ,justifyContent:'center',alignSelf:'center',resizeMode:"contain"}}
            />
                        <ResponsiveText color={isThemeDark ?  colors.white: colors.black} size={4} margin={[wp(0), 20, 10, wp(25)]}>{data.branchAlias}</ResponsiveText>

            <View style={{ flex: 0.9, }}>
                <ResponsiveText size={5} color={colors.yellow} margin={[20, 20, 5, 20]} >Contact Us</ResponsiveText>
                <ResponsiveText size={3} color={colors.grey} margin={[0, 20, 10, 20]} >We would love to respond to your queries and help succeed. Feel free to get in touch with us.</ResponsiveText>

                {/* <View style={{marginTop:10,}}>
			        <ResponsiveText color={colors.grey1} size={3} margin={[0,20,0,20]}>Topic / Issue</ResponsiveText>
                    <View style={{backgroundColor:colors.black1, 
                        height:hp(6), width:wp(90),alignSelf:'center',
		                borderRadius:7, flexDirection:'row'}}>
		                <TextInput placeholderTextColor={colors.white} style={{marginStart:20,color:colors.white, width:wp(40)}}/>			
		            </View>
		        </View>
                <View style={{marginTop:10,}}>
			        <ResponsiveText color={colors.grey1} size={3} margin={[0,20,0,20]}>Message</ResponsiveText>
                    <View style={{backgroundColor:colors.black1, 
                        height:hp(6), width:wp(90),alignSelf:'center',
		                borderRadius:7, flexDirection:'row'}}>
		                <TextInput placeholderTextColor={colors.white} style={{marginStart:20,color:colors.white, width:wp(40)}}/>			
		            </View>
		        </View> */}
                <View style={{ marginTop: 10,flexDirection:'row' }}>
                    {/* <ResponsiveText color={colors.grey1} size={3} margin={[0, 20, 0, 20]}>Phone: </ResponsiveText> */}
                    <Icon size={15}  padding={15} margin={[0,10,0,15]} source={globalPath.SignUp_Phone_ICON}/>

                    <View style={{
                        backgroundColor: colors.yellow1,bottom:-4,
                        height: hp(5.5), width: wp(67), alignSelf: 'center',
                         flexDirection: 'row',borderRadius:4,
                    }}>
                        <ResponsiveText color={colors.black} size={4} margin={[10, 20, 10, wp(2)]}>{data.phoneNo}</ResponsiveText>
                    </View>
                </View>
                <View style={{ marginTop: 10, flexDirection:'row',top:10}}>
                <Icon size={10}  padding={15} margin={[0,10,0,15]} source={globalPath.EMAIL_LOGO}/>

                    <View style={{
                      backgroundColor: colors.yellow1,
                      height: hp(5.5), width: wp(67), alignSelf: 'center',
                     flexDirection: 'row',borderRadius:4,
                    }}>
                        <ResponsiveText color={colors.black} size={4} margin={[10, 20, 10, wp(2)]}>Saniyatariq@gmail.com</ResponsiveText>
                    </View>
                </View>
                <View style={{ marginTop: 10,flexDirection:'row',top:15 }}>
                <Icon size={20}  padding={15} margin={[0,10,0,15]} source={globalPath.Link_icon}/>

                    <View style={{
                        backgroundColor: colors.yellow1,
                        height: hp(5.5), width: wp(67), alignSelf: 'center',
                         flexDirection: 'row',borderRadius:4,
                    }}>
                        <ResponsiveText color={colors.black} size={4} margin={[10, 20, 10, wp(2)]}>www.bdsjkhdlkl</ResponsiveText>
                    </View>
                </View>
                <View style={{ marginTop: 10, flexDirection:'row',top:20}}>
                <Icon size={15}  padding={15} margin={[0,10,0,15]} source={globalPath.LOCATION1}/>
                <View style={{
                        backgroundColor: colors.yellow1,
                        height: hp(5.5), width: wp(67), alignSelf: 'center',
                         flexDirection: 'row',borderRadius:4,
                    }}>
                        <ResponsiveText numberOfLines={4} color={colors.black} size={4} margin={[10, 20, 10, 20]}>{data.branchAddress}</ResponsiveText>
                    </View>
                   
                </View>
                {/* <View style={{
                      backgroundColor: colors.yellow1,top:hp(4.4),
                      left:-4,
                      height: hp(5.5), width: wp(67), alignSelf: 'center',
                     flexDirection: 'row',
                    }}>
                    </View> */}
                

                {/* <View style={{ justifyContent: 'flex-end', flex: 1 }}></View>
                <TouchableOpacity
                    onPress={() => {
                        navigation.goBack()
                    }}
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: wp(75),
                        marginBottom: 40,
                        height: hp(5),
                        alignSelf: 'center',
                        borderRadius: 7,
                        backgroundColor: colors.yellow,
                    }}>
                    <ResponsiveText color={colors.black} size={3.5}>
                        Done
                    </ResponsiveText>
                </TouchableOpacity> */}
            </View>
            {
          loading === true ?
            <View style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, backgroundColor: 'rgba(65, 65, 65, 0.8)', flex: 1 }}>
              < DotIndicator color={colors.yellow} size={7} />
            </View>
            :
            undefined
        }
        </View>
    )
}

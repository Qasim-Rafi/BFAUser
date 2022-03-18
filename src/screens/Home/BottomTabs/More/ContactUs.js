import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { colors } from '../../../../constants/colorsPallet'
import Icon from '../../../../components/Icon'
import Header from '../../../../components/Header'
import { globalPath } from '../../../../constants/globalPath'
import ResponsiveText from '../../../../components/RnText'
import { hp, wp } from '../../../../helpers/Responsiveness'
import Api from '../../../../redux/lib/api'
import urls from '../../../../redux/lib/urls'


export default function ContactUs({ navigation ,route}) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

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
          const res = await Api.get(urls.GET_CONATACT_FROM_DISH+route.params);
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
        } catch (error) {}
      };
    return (
        <View style={{ flex: 1, backgroundColor: colors.black3 }}>
            <View style={{ flexDirection: 'row', justifyContent: "space-between", padding: 7 }}>
                <TouchableOpacity style={{ backgroundColor: colors.yellow1, paddingVertical: 10, paddingHorizontal: 10, borderRadius: 20, }} onPress={() => { navigation.goBack() }}><Icon source={globalPath.BACK_BLACK_ARROW} /></TouchableOpacity>
            </View>

            <View style={{ flex: 0.9, }}>
                <ResponsiveText size={4} color={colors.yellow} margin={[20, 20, 5, 20]} >Contact Us</ResponsiveText>
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
                <View style={{ marginTop: 10, }}>
                    <ResponsiveText color={colors.grey1} size={3} margin={[0, 20, 0, 20]}>Phone: </ResponsiveText>
                    <View style={{
                        backgroundColor: colors.black1,
                        height: hp(6), width: wp(90), alignSelf: 'center',
                        borderRadius: 7, flexDirection: 'row'
                    }}>
                        <ResponsiveText color={colors.white} size={5} margin={[10, 20, 10, 20]}>{data.phoneNo}</ResponsiveText>
                    </View>
                </View>
                <View style={{ marginTop: 10, }}>
                    <ResponsiveText color={colors.grey1} size={3} margin={[0, 20, 0, 20]}>Email: </ResponsiveText>
                    <View style={{
                        backgroundColor: colors.black1,
                        height: hp(6), width: wp(90), alignSelf: 'center',
                        borderRadius: 7, flexDirection: 'row'
                    }}>
                        <ResponsiveText color={colors.white} size={5} margin={[10, 20, 10, 20]}>{data.email}</ResponsiveText>
                    </View>
                </View>
                <View style={{ marginTop: 10, }}>
                    <ResponsiveText color={colors.grey1} size={3} margin={[0, 20, 0, 20]}>Website: </ResponsiveText>
                    <View style={{
                        backgroundColor: colors.black1,
                        height: hp(6), width: wp(90), alignSelf: 'center',
                        borderRadius: 7, flexDirection: 'row'
                    }}>
                        <ResponsiveText color={colors.white} size={5} margin={[10, 20, 10, 20]}>{data.siteUrl}</ResponsiveText>
                    </View>
                </View>
                <View style={{ marginTop: 10, }}>
                    <ResponsiveText color={colors.grey1} size={3} margin={[0, 20, 0, 20]}>Address: </ResponsiveText>
                    <View style={{
                        backgroundColor: colors.black1, width: wp(90), alignSelf: 'center',
                        borderRadius: 7, flexDirection: 'row'
                    }}>
                        <ResponsiveText numberOfLines={4}  color={colors.white} size={3} margin={[10, 20, 10, 20]}>{data.branchAddress}</ResponsiveText>
                    </View>
                </View>

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
        </View>
    )
}

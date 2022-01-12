import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import {colors} from '../../../../constants/colorsPallet'
import Header from '../../../../components/Header'
import { globalPath } from '../../../../constants/globalPath'
import ResponsiveText from '../../../../components/RnText'
import { hp,wp } from '../../../../helpers/Responsiveness'


export default function ContactUs({navigation}) {
    return (
        <View style={{flex:1, backgroundColor:colors.black3}}>
            <View style={{flex:0.1, backgroundColor:colors.black2, justifyContent:'center'}}>
                <Header iconPath={globalPath.BACK_ARROW} navigation={navigation} />
            </View>

            <View style={{flex:0.9,}}>
                <ResponsiveText size={4} color={colors.yellow} margin={[20,20,5,20]} >Contact Us</ResponsiveText>
                <ResponsiveText size={3} color={colors.grey} margin={[0,20,10,20]} >We would love to respond to your queries and help succeed. Feel free to get in touch with us.</ResponsiveText>
                
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
                <View style={{marginTop:10,}}>
			        <ResponsiveText color={colors.grey1} size={3} margin={[0,20,0,20]}>Phone: </ResponsiveText>
                    <View style={{backgroundColor:colors.black1, 
                        height:hp(6), width:wp(90),alignSelf:'center',
		                borderRadius:7, flexDirection:'row'}}>	
                        <ResponsiveText color={colors.white} size={5.5} margin={[10,20,10,20]}>+673 223 4011</ResponsiveText>
		            </View>
		        </View>
                <View style={{marginTop:10,}}>
			        <ResponsiveText color={colors.grey1} size={3} margin={[0,20,0,20]}>Email: </ResponsiveText>
                    <View style={{backgroundColor:colors.black1, 
                        height:hp(6), width:wp(90),alignSelf:'center',
		                borderRadius:7, flexDirection:'row'}}>	
                        <ResponsiveText color={colors.white} size={5.5} margin={[10,20,10,20]}>excapadebrunei@gmail.com</ResponsiveText>
		            </View>
		        </View>
                <View style={{marginTop:10,}}>
			        <ResponsiveText color={colors.grey1} size={3} margin={[0,20,0,20]}>Website: </ResponsiveText>
                    <View style={{backgroundColor:colors.black1, 
                        height:hp(6), width:wp(90),alignSelf:'center',
		                borderRadius:7, flexDirection:'row'}}>	
                        <ResponsiveText color={colors.white} size={5.5} margin={[10,20,10,20]}>excapade.com</ResponsiveText>
		            </View>
		        </View>
                <View style={{marginTop:10,}}>
			        <ResponsiveText color={colors.grey1} size={3} margin={[0,20,0,20]}>Address: </ResponsiveText>
                    <View style={{backgroundColor:colors.black1, 
                        height:hp(7.5), width:wp(90),alignSelf:'center',
		                borderRadius:7, flexDirection:'row'}}>	
                        <ResponsiveText color={colors.white} size={4} margin={[10,20,10,20]}>Regent Square, Kiulap 2, Bandar Seri Begawan, Brunei</ResponsiveText>
		            </View>
		        </View>
                
                <View style={{justifyContent:'flex-end', flex:1}}></View>
                <TouchableOpacity
          onPress={() => {
            navigation.goBack()
          }}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: wp(75),
            marginBottom:40,
            height: hp(5),
            alignSelf: 'center',
            borderRadius: 7,
            backgroundColor: colors.yellow,
          }}>
          <ResponsiveText color={colors.black} size={3.5}>
            Done
          </ResponsiveText>
        </TouchableOpacity>
            </View>
        </View>
    )
}

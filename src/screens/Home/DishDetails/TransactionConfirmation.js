//Node Imports
import { auto } from 'async'
import { size } from 'lodash'
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

//Local Imports
import Header from '../../../components/Header'
import ResponsiveText from '../../../components/RnText'
import { colors } from '../../../constants/colorsPallet'
import { globalPath } from '../../../constants/globalPath'
import { hp, wp } from '../../../helpers/Responsiveness'


export default function TransactionConfirmation({navigation}) {
	return (
		<View style={{ flex: 1, backgroundColor:colors.black3}}>
      <View style={{flex:0.09, backgroundColor:colors.black2, alignItems:'center', justifyContent:'center'}}>
		   <Header iconPath={globalPath.BACK_ARROW} navigation={navigation}/>
		   </View>
      <View style={{flex:0.29, backgroundColor:colors.black3 }}>
		  <ResponsiveText margin={[25,0,0,15]} color={colors.yellow}>Transaction Confirmation</ResponsiveText>
		  <ResponsiveText margin={[15,0,0,15]} color={colors.white}>Confirm payment for the following:</ResponsiveText>
		  <View style={{marginStart:15, marginTop:15,marginEnd:15,paddingBottom:5, flexDirection:'row', justifyContent:'space-between', borderBottomWidth:1,borderBottomColor:colors.black2}}>
			<ResponsiveText color={colors.white}>Restaurant Name</ResponsiveText>
			<ResponsiveText color={colors.yellow}>I-Lotus Restaurant</ResponsiveText>
		  </View>
		  <View style={{marginStart:15, marginTop:10,marginEnd:15,paddingBottom:5, flexDirection:'row', justifyContent:'space-between', borderBottomWidth:1,borderBottomColor:colors.black2}}>
			<ResponsiveText color={colors.white}>Payment Method</ResponsiveText>
			<ResponsiveText color={colors.yellow}>Card</ResponsiveText>
		  </View>
		  <View style={{marginStart:15, marginTop:10,marginEnd:15,paddingBottom:5, flexDirection:'row', justifyContent:'space-between',}}>
			<ResponsiveText color={colors.white}>Total</ResponsiveText>
			<ResponsiveText color={colors.yellow}>$ 10.00</ResponsiveText>
		  </View>

	  </View>
      <View style={{flex:0.20, backgroundColor:colors.black2, borderRadius:5, marginHorizontal:15}}>
		  <ResponsiveText color={colors.white} margin={[15,0,0,15]}>Add Tip?</ResponsiveText>
		  <View style={{backgroundColor:colors.yellow, marginTop:5, height:hp(5), width:wp(85), alignSelf:'center', borderRadius:4,flexDirection:'row'}}>
			  <View style={{backgroundColor:colors.black2, flex:1, margin:1, alignItems:'center', justifyContent:'center'}}>
				  <ResponsiveText color={colors.yellow}>No</ResponsiveText>
			  </View>
			  <View style={{backgroundColor:colors.black2, flex:1, margin:1, alignItems:'center', justifyContent:'center'}}>
				  <ResponsiveText color={colors.yellow}>$</ResponsiveText>
			  </View>
			  <View style={{backgroundColor:colors.black2, flex:1, margin:1, alignItems:'center', justifyContent:'center'}}>
				  <ResponsiveText color={colors.yellow}>%</ResponsiveText>
			  </View>
		  </View>

		  <View style={{backgroundColor:colors.black2, marginTop:16, height:hp(5), width:wp(85), alignSelf:'center', borderRadius:4,flexDirection:'row'}}>
			  <View style={{backgroundColor:colors.black2,borderColor:colors.black1,borderWidth:1, flex:.22, margin:1, alignItems:'center', justifyContent:'center'}}>
				  <ResponsiveText color={colors.yellow} size={6} >-</ResponsiveText>
			  </View>
			  <View style={{backgroundColor:colors.black3,borderColor:colors.black1,borderWidth:1, flex:0.56, margin:1, alignItems:'center', justifyContent:'center',marginHorizontal:10}}>
				  <ResponsiveText color={colors.yellow}  size={4}>10%</ResponsiveText>
			  </View>
			  <View style={{backgroundColor:colors.black2,borderColor:colors.black1,borderWidth:1, flex:0.22, margin:1, alignItems:'center', justifyContent:'center'}}>
				  <ResponsiveText color={colors.yellow} size={6}>+</ResponsiveText>
			  </View>
		  </View>

	  </View>
      <View style={{flex:0.2, backgroundColor:colors.black3, marginTop:20}}>
		  <View style={{borderBottomColor:colors.black2,paddingBottom:5, borderBottomWidth:1,marginHorizontal:15,marginTop:10, flexDirection:'row', justifyContent:'space-between'}}>
			  <ResponsiveText color={colors.white}>Total</ResponsiveText>
			  <ResponsiveText color={colors.yellow}>$10.00</ResponsiveText>
		  </View>
		  <View style={{borderBottomColor:colors.black2,paddingBottom:5, borderBottomWidth:1,marginHorizontal:15,marginTop:10, flexDirection:'row', justifyContent:'space-between'}}>
			  <ResponsiveText color={colors.white}>Tips</ResponsiveText>
			  <ResponsiveText color={colors.yellow}>$ 1.00</ResponsiveText>
		  </View>
		  <View style={{borderBottomColor:colors.black2,paddingBottom:5,marginHorizontal:15,marginTop:10, flexDirection:'row', justifyContent:'space-between'}}>
			  <ResponsiveText color={colors.white}>Final</ResponsiveText>
			  <ResponsiveText color={colors.yellow}>$ 11.00</ResponsiveText>
		  </View>
	  </View>
      <View style={{flex:0.2,alignItems:'center'}}>
		  <TouchableOpacity style={{marginTop:5,justifyContent:'center',alignItems:'center',borderRadius:7, height:hp(5), width:wp(95), backgroundColor:colors.yellow}}>
			<ResponsiveText>Confirm Payment</ResponsiveText>
		  </TouchableOpacity>
		  <TouchableOpacity style={{marginTop:15,justifyContent:'center',alignItems:'center',borderRadius:7, height:hp(5), width:wp(95),borderColor:colors.yellow,borderWidth:1 ,backgroundColor:colors.black3}}>
			<ResponsiveText color={colors.yellow}>Cancel</ResponsiveText>
		  </TouchableOpacity>
	  </View>
     
    </View>
	)
}

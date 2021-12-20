//Node Imports
import { auto } from 'async'
import { size } from 'lodash'
import React,{useEffect, useState} from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Modal from "react-native-modal";
import { act } from 'react-test-renderer';

//Local Imports
import Header from '../../../components/Header'
import ResponsiveText from '../../../components/RnText'
import { colors } from '../../../constants/colorsPallet'
import { globalPath } from '../../../constants/globalPath'
import { routeName } from '../../../constants/routeName'
import { hp, wp } from '../../../helpers/Responsiveness'

import Home from '../BottomTabs/Home/Home';


export default function TransactionConfirmation({route,navigation}) {
const [isModalVisible, setModalVisible] = useState(false);
const [activeTabs, setActive] = useState('tab3');
const [count, changeCount] = useState(95);
const [total, addTotal] = useState(0);
const[pickup, setPickup] = useState(true);

useEffect(()=>{addTotal(route.params)})



const toggleModal = ({navigation,route}) => {	
	 setModalVisible(!isModalVisible);
  };

	return (
		<View style={{ flex: 1, backgroundColor:colors.black3}}>

      <View style={{flex:0.1, backgroundColor:colors.black2, justifyContent:'center'}}>
		   <Header iconPath={globalPath.BACK_ARROW} navigation={navigation}/>
		   </View>
      <View style={{flex:0.9, backgroundColor:colors.black3 }}>
		  <ResponsiveText margin={[25,0,0,20]} color={colors.yellow}>Transaction Confirmation</ResponsiveText>
		  <ResponsiveText margin={[15,0,0,20]} color={colors.white}>Confirm payment for the following:</ResponsiveText>
		  <View style={{marginHorizontal:20, marginTop:15,paddingBottom:5, flexDirection:'row', justifyContent:'space-between', borderBottomWidth:1,borderBottomColor:colors.black2}}>
			<ResponsiveText color={colors.white}>Restaurant Name</ResponsiveText>
			<ResponsiveText color={colors.yellow}>I-Lotus Restaurant</ResponsiveText>
		  </View>
		  <View style={{marginHorizontal:20, marginTop:10,paddingBottom:5, flexDirection:'row', justifyContent:'space-between',}}>
			<ResponsiveText color={colors.white}>Payment Method</ResponsiveText>
			<TouchableOpacity style={{backgroundColor:colors.yellow, justifyContent:'center', alignItems:'center', borderRadius:7, paddingHorizontal:5}} onPress={()=>navigation.navigate(routeName.SELECT_PAYMENT_METHOD)}>
			<ResponsiveText color={colors.black} size={3} >{route.params}</ResponsiveText>
			</TouchableOpacity>
		  </View>
		  
		  <View style={{backgroundColor:colors.yellow, marginTop:15, height:hp(5), width:wp(90), alignSelf:'center', borderRadius:4,flexDirection:'row'}}>
			  
			  <TouchableOpacity onPress={()=>{setPickup(true);}} style={{backgroundColor:pickup ? colors.yellow : colors.black2, flex:1, margin:1, alignItems:'center', justifyContent:'center'}}>
				  <ResponsiveText color={pickup ? colors.black : colors.yellow}>Take Away</ResponsiveText>
			  </TouchableOpacity>
			  <TouchableOpacity onPress={()=>{setPickup(false);}} style={{backgroundColor:pickup ? colors.black2 : colors.yellow, flex:1, margin:1, alignItems:'center', justifyContent:'center'}}>
				  <ResponsiveText color={pickup ? colors.yellow : colors.black}>Dine In</ResponsiveText>
			  </TouchableOpacity>
			  
		  </View>

	  
      <View style={{ paddingBottom:10,backgroundColor:colors.black2, borderRadius:5, marginHorizontal:20, marginTop:15}}>
		  <ResponsiveText color={colors.white} margin={[15,0,0,15]}>Add Tip?</ResponsiveText>
		  <View style={{backgroundColor:colors.yellow, marginTop:5, height:hp(5), width:wp(85), alignSelf:'center', borderRadius:4,flexDirection:'row'}}>
			  
			  <TouchableOpacity onPress={()=>{setActive('tab1'); changeCount(0);}} style={{backgroundColor:activeTabs==='tab1' ? colors.yellow : colors.black2, flex:1, margin:1, alignItems:'center', justifyContent:'center'}}>
				  <ResponsiveText color={activeTabs==='tab1' ? colors.black : colors.yellow}>No</ResponsiveText>
			  </TouchableOpacity>
			  <TouchableOpacity onPress={()=>{setActive('tab2');}} style={{backgroundColor:activeTabs==='tab2' ? colors.yellow : colors.black2, flex:1, margin:1, alignItems:'center', justifyContent:'center'}}>
				  <ResponsiveText color={activeTabs==='tab2' ? colors.black : colors.yellow}>$</ResponsiveText>
			  </TouchableOpacity>
			  <TouchableOpacity onPress={()=>{setActive('tab3'); count>100?changeCount(100): undefined}} style={{backgroundColor: activeTabs==='tab3' ? colors.yellow : colors.black2, flex:1, margin:1, alignItems:'center', justifyContent:'center'}}>
				  <ResponsiveText color={activeTabs==='tab3' ? colors.black : colors.yellow}>%</ResponsiveText>
			  </TouchableOpacity>
		  </View>

		  <View style={{backgroundColor:colors.black2, marginTop:16, height:hp(5), width:wp(85), alignSelf:'center', borderRadius:4,flexDirection:'row'}}>
			  <TouchableOpacity onPressIn={()=>activeTabs==='tab2' || activeTabs==='tab3' ? changeCount(count>0 ? count-1 : 0) : changeCount(count)} style={{backgroundColor:colors.black2,borderColor:colors.black1,borderWidth:1, flex:.22, margin:1, alignItems:'center', justifyContent:'center'}}>
				  <ResponsiveText color={colors.yellow} size={6} >-</ResponsiveText>
			  </TouchableOpacity>
			  <View style={{backgroundColor:colors.black3,borderColor:colors.black1,borderWidth:1, flex:0.56, margin:1, alignItems:'center', justifyContent:'center',marginHorizontal:10}}>
				  <ResponsiveText color={colors.yellow}  size={4}>{activeTabs==='tab2' ? '$' : ''}{activeTabs==='tab1' ? "": activeTabs==='tab1' ? count : count}{activeTabs==='tab3' ? '%' : ''}</ResponsiveText>
			  </View>
			  <TouchableOpacity onPressIn={()=>activeTabs==='tab2' || activeTabs==='tab3' ? changeCount(activeTabs==='tab3' && count<100 ? count+1 : activeTabs==='tab2'?count+1:count) : undefined} style={{backgroundColor:colors.black2,borderColor:colors.black1,borderWidth:1, flex:0.22, margin:1, alignItems:'center', justifyContent:'center'}}> 
				  <ResponsiveText color={colors.yellow} size={6}>+</ResponsiveText>	  
			  </TouchableOpacity>
		  </View>

	  </View>
      <View style={{backgroundColor:colors.black3, marginTop:10, paddingHorizontal:5}}>
		  <View style={{borderBottomColor:colors.black2,paddingBottom:5, borderBottomWidth:1,marginHorizontal:15,marginTop:10, flexDirection:'row', justifyContent:'space-between'}}>
			  <ResponsiveText color={colors.white}>Total</ResponsiveText>
			  <ResponsiveText color={colors.yellow}>${total}.00</ResponsiveText>
		  </View>
		  <View style={{borderBottomColor:colors.black2,paddingBottom:5, borderBottomWidth:1,marginHorizontal:15,marginTop:10, flexDirection:'row', justifyContent:'space-between'}}>
			  <ResponsiveText color={colors.white}>Tips</ResponsiveText>
			  <ResponsiveText color={colors.yellow}>{activeTabs==='tab2'?'$':""}{count}{activeTabs==='tab3' ? '%' : ""}</ResponsiveText>
		  </View>
		  <View style={{borderBottomColor:colors.black2,paddingBottom:5,marginHorizontal:15,marginTop:10, flexDirection:'row', justifyContent:'space-between'}}>
			  <ResponsiveText color={colors.white}>Final</ResponsiveText>
			  <ResponsiveText color={colors.yellow}>$ 11.00</ResponsiveText>
		  </View>
	  </View>
      <View style={{alignItems:'center', }}>
		  <TouchableOpacity style={{marginTop:30,justifyContent:'center',alignItems:'center',borderRadius:7, height:hp(5), width:wp(90), backgroundColor:colors.yellow}}
		  onPress={toggleModal}>
			<ResponsiveText>Confirm Payment</ResponsiveText>
		  </TouchableOpacity>
		  <TouchableOpacity onPress={()=>navigation.goBack()} style={{marginTop:15,justifyContent:'center',alignItems:'center',borderRadius:7, height:hp(5), width:wp(90),borderColor:colors.yellow,borderWidth:1 ,backgroundColor:colors.black3}}>
			<ResponsiveText color={colors.yellow}>Cancel</ResponsiveText>
		  </TouchableOpacity>
	  </View>
     




<Modal isVisible={isModalVisible} statusBarTranslucent={true} backdropOpacity={0.90} style={{justifyContent:'flex-end'}} onModalHide={()=>navigation.push('Home')}>
         {/* ------------ ModalView -------------- */}
      <View style={{flex:0.30, backgroundColor:colors.black2, borderRadius:7, marginBottom:20}}>
				<View style={{flex:0.2, backgroundColor:colors.black1, justifyContent:'center', alignItems:'center', borderTopRightRadius:7, borderTopLeftRadius:7}}>
					<ResponsiveText color={colors.white} size={3.5}>Payment Successful</ResponsiveText>
				</View>
				<View style={{flex:0.18, backgroundColor:colors.black2, justifyContent:'center', alignItems:'center',  marginHorizontal:15}}>
					<ResponsiveText color={colors.grey1} size={2.6}>You have successfully paid:</ResponsiveText>
				</View>
				<View style={{flex:0.13, backgroundColor:colors.black2, flexDirection:'row',alignItems:'center', borderBottomWidth:2, borderBottomColor:colors.black1,  marginHorizontal:15}}>
					<View style={{flex:0.45, alignItems:'flex-end'}}>
						<ResponsiveText color={colors.yellow} size={3} margin={[0,10,0,0]}>$11.00</ResponsiveText>
					</View>
					<View style={{flex:0.10}}>
						<ResponsiveText color={colors.white} size={3}>To</ResponsiveText>
					</View>
					<View style={{flex:0.45}}>
						<ResponsiveText color={colors.yellow} size={3}>I-Lotus Restaurant</ResponsiveText>
					</View>
				</View>
				<View style={{flex:0.2, backgroundColor:colors.black2, flexDirection:'row', marginHorizontal:15}}>
					<View style={{flex:0.55, marginTop:5}}>
						<ResponsiveText size={3} color={colors.white} margin={[0,0,0,15]}>Your Current Points:</ResponsiveText>
					</View>
					<View style={{flex:0.45,marginTop:5}}>
						<ResponsiveText size={3} color={colors.yellow}>100 pts</ResponsiveText>
					</View>
					
					
				</View>
				<View style={{flex:0.29, backgroundColor:colors.black2, alignItems:'center', borderBottomLeftRadius:7, borderBottomRightRadius:7}}>
					<TouchableOpacity style={{justifyContent:'center', alignItems:'center', borderRadius:5, borderWidth:1, borderColor:colors.yellow, width:wp(83), height:hp(5),}}
					onPress={toggleModal}>
						<ResponsiveText size={3} color={colors.yellow}>ok</ResponsiveText>
					</TouchableOpacity>
				</View>
			</View>
      {/* ------------ ModalView End -------------- */}  
      </Modal>







	  </View>
    </View>
	)
}

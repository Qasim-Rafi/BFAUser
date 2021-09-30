import React from 'react'
import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import Icon from '../../../../components/Icon'
import ResponsiveText from '../../../../components/RnText'
import { colors } from '../../../../constants/colorsPallet'
import { globalPath } from '../../../../constants/globalPath'
import { hp, wp } from '../../../../helpers/Responsiveness'
import Header from '../../../../components/Header'
import { Cart_Details } from '../../../../constants/mock'
import TransactionConfirmation from '../../DishDetails/TransactionConfirmation'
import { routeName } from '../../../../constants/routeName'

export default function CartDetails({navigation}) {
    return (
        <View style={{backgroundColor:colors.black3, flex:1}}>
            <View style={{flex:0.1, alignItems:'center', justifyContent:'center', backgroundColor:colors.black2}}>
                <Header navigation={navigation} />
            </View>


            <View style={{flex:0.9, justifyContent:'space-between'}}>
            <View>
            <ResponsiveText margin={[15,20,15,20]} color={colors.yellow} size={4}>My Cart</ResponsiveText>
            {
                Cart_Details.map((item)=>{ 
                    return(          
            <View style={{backgroundColor:colors.black2,marginHorizontal:20, flexDirection:'row', padding:5,marginBottom:5, borderRadius:7}}>
                <View>
                    <Icon size={60} borderRadius={7} source={item.url} /></View>
                <View style={{justifyContent:'center', width:wp(65)}}>
                    <ResponsiveText size={3.5} color={colors.white} margin={[0,0,0,10]} >{item.title}</ResponsiveText>
                    <ResponsiveText size={2.5} color={colors.grey} margin={[-5,0,0,10]} >{item.description}</ResponsiveText>
                    <ResponsiveText size={3} color={colors.yellow} margin={[0,0,0,10]} >$ {item.price}</ResponsiveText>
                </View>
                <View >
                    <TouchableOpacity style={{backgroundColor:colors.yellow, height:hp(2),borderTopLeftRadius:2,borderTopRightRadius:2, alignItems:'center', width:wp(6)}}>
                        <ResponsiveText margin={[-3,0,0,0]}>-</ResponsiveText>
                    </TouchableOpacity>
                    <View style={{height:hp(3), width:wp(6), backgroundColor:colors.black3, justifyContent:'center', alignItems:'center', borderColor:colors.yellow, borderWidth:1}}>
                        <ResponsiveText color={colors.yellow} size={3}>{item.quantity}</ResponsiveText>
                    </View>
                    <TouchableOpacity style={{backgroundColor:colors.yellow, height:hp(2),borderBottomRightRadius:2,borderBottomLeftRadius:2,alignItems:'center', width:wp(6)}}>
                        <ResponsiveText margin={[-3,0,0,0]} >+</ResponsiveText>
                    </TouchableOpacity>
                </View>
                
            </View>
                )})} 
            </View>
            

                <View>
                <View style={{backgroundColor:colors.black2, paddingVertical:15, marginHorizontal:20, marginTop:20, borderRadius:7}}>
                    <View style={{flexDirection:'row', paddingHorizontal:15, justifyContent:'space-between'}}>
                        <ResponsiveText color={colors.white}  size={3} >Total</ResponsiveText>
                        <ResponsiveText color={colors.yellow}  size={3} >$ 54.00</ResponsiveText>
                    </View>
                    <View style={{flexDirection:'row', marginTop:15,paddingHorizontal:15, justifyContent:'space-between', paddingBottom:5, borderBottomColor:colors.black1, borderBottomWidth:1}}>
                        <ResponsiveText color={colors.white} size={3} >Tips</ResponsiveText>
                        <ResponsiveText color={colors.yellow} size={3} >$ 6.00</ResponsiveText>
                    </View>
                    <View style={{flexDirection:'row',paddingTop:15, paddingHorizontal:15, justifyContent:'space-between'}}>
                        <ResponsiveText color={colors.white}  size={3} >Final Total</ResponsiveText>
                        <ResponsiveText color={colors.yellow}  size={4} >$ 60.00</ResponsiveText>
                    </View>
                    </View>  
                    <TouchableOpacity onPress={()=>navigation.navigate(routeName.TRANSACTION_CONFIRMATION)} style={{height:hp(5), width:wp(80), backgroundColor:colors.yellow, borderRadius:7, justifyContent:'center',alignItems:'center', alignSelf:'center', marginTop:15, marginBottom:30}} >
                        <ResponsiveText size={3.5} >Check out</ResponsiveText>
                    </TouchableOpacity>
                    </View>
            </View>
        
        </View>
    )
}

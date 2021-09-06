import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from '../../../../components/Header'
import Icon from '../../../../components/Icon'
import ResponsiveText from '../../../../components/RnText'
import { colors } from '../../../../constants/colorsPallet'
import { hp, wp } from '../../../../helpers/Responsiveness'

const Checkout = ( navigation) => {
    return (
        <View style={{backgroundColor:colors.black3,flex:1}}>
            <Header navigation={navigation}/>
            <View style={{flex:0.9}}>
                <View style={{flexDirection:'row',justifyContent:'space-between',margin:10,}}>
                    <View style={{backgroundColor:colors.black2,height:hp(28 ), width:wp(45), justifyContent:'space-around',alignItems:'center'}}>
                        <Icon margin={[15,0,0,0]} size={wp(10), hp(10) }source={require('../../../../assets/icons/cash.png')}/>
                        <ResponsiveText   color={colors.white} >Pay With Cash</ResponsiveText>
                    </View>
                    <View style={{backgroundColor:colors.black2,height:hp(28 ), width:wp(45),justifyContent:'space-around',alignItems:'center' }}>
                    <Icon margin={[15,0,0,0]} size={wp(10), hp(10) }  source={require('../../../../assets/icons/card.png')} />
                        <ResponsiveText  color={colors.white} >Pay With Card</ResponsiveText>
                    </View>
                </View>
                <View style={{margin:10}}>
                    <View style={{backgroundColor:colors.black2,height:hp(9 ),flexDirection:'row',justifyContent:'center',alignItems:'center' }}>
                    <Icon size={wp(3), hp(3) }source={require('../../../../assets/icons/transactions.png')}/>
                        <ResponsiveText margin={[0,0,0,10]} color={colors.white} >View Previous Transaction</ResponsiveText>
                    </View>
                    <View style={{backgroundColor:colors.black2,height:hp(9 ),marginTop:20,flexDirection:'row',justifyContent:'center',alignItems:'center' }}>
                    <Icon size={wp(3), hp(3) }source={require('../../../../assets/icons/manage-card.png')}/>
                        <ResponsiveText margin={[0,0,0,10]} color={colors.white}>Manage Cards</ResponsiveText>
                    </View>
                </View>


            </View>
        </View>
    )
}

export default Checkout

const styles = StyleSheet.create({})

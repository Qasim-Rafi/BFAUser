import React from 'react'
import { View, Text, ScrollView ,StyleSheet, Image} from 'react-native'
import AdvertisementBanner from '../BottomTabs/Home/AdvertisementBanner'
import ImageHeader from '../BottomTabs/Home/ImageHeader'
import { colors } from '../../../constants/colorsPallet'
const text="Description"
import ResponsiveText from '../../../components/RnText'
export default function CalorieCount({}) {
    return (
       
        <View style={{backgroundColor:'#404040',}}>
            <View style={{margin:20}}>
                <ResponsiveText size={4} color={colors.white}>Calorie Count</ResponsiveText>
            </View>
            <View>
            <View style={{margin:20}}>
                <ResponsiveText size={4} color={colors.white}>Total Carbohydrates</ResponsiveText>
                <View style={{borderBottomWidth:1,borderBottomColor:colors.grey,top:15}}></View>
                
            </View>
            <View style={{margin:20}}>
                <View style={{flexDirection:'row',justifyContent:'space-between',}}>
                    <ResponsiveText size={3.8} color={colors.grey}>Saturated Fat(g)</ResponsiveText>
                     <ResponsiveText size={3.8} color={colors.grey}>10</ResponsiveText>
                </View >
                <View style={{flexDirection:'row',justifyContent:'space-between',}}>
                    <ResponsiveText size={3.8} color={colors.grey}>Saturated Fat(g)</ResponsiveText>
                     <ResponsiveText size={3.8} color={colors.grey}>10</ResponsiveText>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',}}>
                    <ResponsiveText size={3.8} color={colors.grey}>Saturated Fat(g)</ResponsiveText>
                     <ResponsiveText size={3.8} color={colors.grey}>10</ResponsiveText>
                </View>
           </View>
           </View>
           <View>
            <View style={{margin:20}}>
                <ResponsiveText size={4} color={colors.white}>Total Protein</ResponsiveText>
                <View style={{borderBottomWidth:1,borderBottomColor:colors.grey,top:15}}></View>
                
            </View>
            <View style={{margin:20}}>
                <View style={{flexDirection:'row',justifyContent:'space-between',}}>
                    <ResponsiveText size={3.8} color={colors.grey}>Saturated Fat(g)</ResponsiveText>
                     <ResponsiveText size={3.8} color={colors.grey}>10</ResponsiveText>
                </View >
                <View style={{flexDirection:'row',justifyContent:'space-between',}}>
                    <ResponsiveText size={3.8} color={colors.grey}>Saturated Fat(g)</ResponsiveText>
                     <ResponsiveText size={3.8} color={colors.grey}>10</ResponsiveText>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',}}>
                    <ResponsiveText size={3.8} color={colors.grey}>Saturated Fat(g)</ResponsiveText>
                     <ResponsiveText size={3.8} color={colors.grey}>10</ResponsiveText>
                </View>
           </View>
           </View>
           <View>
            <View style={{margin:20}}>
                <ResponsiveText size={4} color={colors.white}>Total Fibres</ResponsiveText>
                <View style={{borderBottomWidth:1,borderBottomColor:colors.grey,top:15}}></View>
                
            </View>
            <View style={{margin:20}}>
                <View style={{flexDirection:'row',justifyContent:'space-between',}}>
                    <ResponsiveText size={3.8} color={colors.grey}>Saturated Fat(g)</ResponsiveText>
                     <ResponsiveText size={3.8} color={colors.grey}>10</ResponsiveText>
                </View >
                <View style={{flexDirection:'row',justifyContent:'space-between',}}>
                    <ResponsiveText size={3.8} color={colors.grey}>Saturated Fat(g)</ResponsiveText>
                     <ResponsiveText size={3.8} color={colors.grey}>10</ResponsiveText>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',}}>
                    <ResponsiveText size={3.8} color={colors.grey}>Saturated Fat(g)</ResponsiveText>
                     <ResponsiveText size={3.8} color={colors.grey}>10</ResponsiveText>
                </View>
           </View>
           </View>
           <View>
            <View style={{margin:20}}>
                <ResponsiveText size={4} color={colors.white}>Micro Nutrients</ResponsiveText>
                <View style={{borderBottomWidth:1,borderBottomColor:colors.grey,top:15}}></View>
                
            </View>
            <View style={{margin:20}}>
                <View style={{flexDirection:'row',justifyContent:'space-between',}}>
                    <ResponsiveText size={3.8} color={colors.grey}>Saturated Fat(g)</ResponsiveText>
                     <ResponsiveText size={3.8} color={colors.grey}>10</ResponsiveText>
                </View >
                <View style={{flexDirection:'row',justifyContent:'space-between',}}>
                    <ResponsiveText size={3.8} color={colors.grey}>Saturated Fat(g)</ResponsiveText>
                     <ResponsiveText size={3.8} color={colors.grey}>10</ResponsiveText>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',}}>
                    <ResponsiveText size={3.8} color={colors.grey}>Saturated Fat(g)</ResponsiveText>
                     <ResponsiveText size={3.8} color={colors.grey}>10</ResponsiveText>
                </View>
           </View>
           </View>



        </View>
    )
}
const styles= StyleSheet.create({
    headerImage:{
        height:200
    },
    priceDesc :{
        padding:20
    }
})
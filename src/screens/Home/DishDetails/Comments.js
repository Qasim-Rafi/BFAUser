import React from 'react'
import { Image, ScrollView, StyleSheet, View, ImageBackground } from 'react-native'
import { Rating, AirbnbRating } from 'react-native-ratings';
import ResponsiveText from '../../../components/RnText';
import { advertisementBannerFakeDATA } from '../../../constants/mock'
import { colors } from '../../../constants/colorsPallet'
import SeeAllButton from '../../../components/SeeAllButton';
const Comments = () => {
const image = { uri: "https://images.unsplash.com/photo-1440847899694-90043f91c7f9?h=1024" };
    return (
        <>
        <View style={{margin:20}}>
                <ResponsiveText size={4} color={colors.white}>Comments</ResponsiveText>
                <View style={{borderBottomWidth:1,borderBottomColor:colors.grey,top:15}}></View>
            </View>
        <View style={{backgroundColor:'#404040',marginLeft:20,marginRight:20,borderRadius:4,height:100}}>
           
        </View>
         </>
    )
}

export default Comments;

const styles = StyleSheet.create({

   


})

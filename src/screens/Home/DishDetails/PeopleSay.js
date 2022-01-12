import React from 'react'
import { Image, ScrollView, StyleSheet, View, ImageBackground } from 'react-native'
import { Rating, AirbnbRating } from 'react-native-ratings';
import ResponsiveText from '../../../components/RnText';
import { advertisementBannerFakeDATA } from '../../../constants/mock'
import { colors } from '../../../constants/colorsPallet'
import SeeAllButton from '../../../components/SeeAllButton';
const PeopleSay = () => {
    const image = { uri: "https://images.unsplash.com/photo-1440847899694-90043f91c7f9?h=1024" };
    return (
        <>
            <View style={{ marginVertical: 20, marginRight: 20 }}>
                <ResponsiveText size={4} color={colors.white}>What People Say</ResponsiveText>
                <View style={{ borderBottomWidth: 1, borderBottomColor: colors.grey, top: 15 }}></View>
            </View>
            <View style={{ position: 'relative', top: 60, zIndex: 999, left: 0 }}>
                <Image style={{ borderWidth: 3, borderRadius: 20, width: 40, height: 40, borderColor: colors.grey }} source={image} />
            </View>
            <View style={{ backgroundColor: colors.black1, marginLeft: 20, marginRight: 20, borderRadius: 4 }}>
                <View style={{ padding: 20 }}>
                    <ResponsiveText size={4} color={colors.white}>What People Say</ResponsiveText>
                    <ResponsiveText size={3.5} color={colors.grey}>What People Say</ResponsiveText>
                </View>
            </View>
        </>
    )
}

export default PeopleSay;

const styles = StyleSheet.create({




})

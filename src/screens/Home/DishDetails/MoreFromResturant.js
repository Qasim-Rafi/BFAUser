import React from 'react'
import { Image, ScrollView, StyleSheet, View, ImageBackground } from 'react-native'
import { Rating, AirbnbRating } from 'react-native-ratings';
import ResponsiveText from '../../../components/RnText';
import { advertisementBannerFakeDATA, ourRecommendationFakeDATA } from '../../../constants/mock'
import { colors } from '../../../constants/colorsPallet'
import SeeAllButton from '../../../components/SeeAllButton';
const MoreFromResturant = ({ navigation }) => {
    return (
        <>
            <View style={styles.yourFavoriteHeaderSection}>
                <ResponsiveText size={4} color={colors.white}>More From Resturant</ResponsiveText>
                {/* <SeeAllButton navigation={navigation}/> */}
            </View>
            <View style={styles.yourFavoriteItemsSection}>
                <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                    {ourRecommendationFakeDATA.map((url, index) => {
                        return (
                            <View style={{ width: 90, height: 130, marginRight: 5, borderRadius: 3, overflow: 'hidden', flexDirection: 'row' }}>
                                <ImageBackground style={{ flex: 1, padding: 5, overflow: 'hidden', justifyContent: 'flex-end' }} source={url.url} >
                                    <ResponsiveText fontFamily="Regular" size={2.9} color={colors.white}>{url.title}</ResponsiveText>
                                    <ResponsiveText fontFamily="Light" size={2} color={colors.white}>{url.description}</ResponsiveText>

                                </ImageBackground>
                            </View>

                        )
                    })}
                </ScrollView>
            </View>

        </>
    )
}

export default MoreFromResturant;

const styles = StyleSheet.create({

    yourFavoriteHeaderSection: {
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // backgroundColor:colors.black1,
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
        borderBottomWidth: 0.9,
        borderColor: colors.black1,
    },
    yourFavoriteItemsSection: {
        flex: 1,
        flexDirection: 'row',
        display: 'flex',
        paddingVertical: 10,
        justifyContent: 'center',
        overflow: 'hidden',
    }


})

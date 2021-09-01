import React from 'react'
import { Image, ScrollView, StyleSheet, View, ImageBackground,TouchableOpacity } from 'react-native'
import ResponsiveText from '../../../../components/RnText'
import { Rating, AirbnbRating } from 'react-native-ratings';
import { routeName } from '../../../../constants/routeName';

import { advertisementBannerFakeDATA, yourFavoriteFakeDATA } from '../../../../constants/mock'
import { colors } from '../../../../constants/colorsPallet'
import SeeAllButton from '../../../../components/SeeAllButton'
import { hp, wp } from '../../../../helpers/Responsiveness';
const YourFavourite = (props) => {
    return (
        <>
            <View style={styles.yourFavoriteHeaderSection}>
                <ResponsiveText size={4} color={colors.white}>Your Favorites</ResponsiveText>
                <SeeAllButton navigation={props.navigation} />
            </View>
            <View style={styles.yourFavoriteItemsSection}>
                <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                    {yourFavoriteFakeDATA.map((url, index) => {
                        return (
                            <TouchableOpacity onPress={()=> props.navigation.navigate(routeName.DISH_DETAIL)}>
                            <View style={{ width: wp(26), height: hp(18), marginHorizontal: 5, borderRadius: 3, overflow: 'hidden', flexDirection: 'row' }}>
                                <ImageBackground imageStyle={{opacity:.5}} style={{ flex: 1, padding: 5, overflow: 'hidden', justifyContent: 'flex-end' }} source={{ uri: url }} >
                                    <ResponsiveText fontFamily="Regular" size={2.9} color={colors.white}>Kaizen sushi</ResponsiveText>
                                    <ResponsiveText fontFamily="Light" size={2} color={colors.white}>Special sushi</ResponsiveText>

                                </ImageBackground>
                            </View></TouchableOpacity>

                        )
                    })}
                </ScrollView>
            </View>

        </>
    )
}

export default YourFavourite;

const styles = StyleSheet.create({

    yourFavoriteHeaderSection: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // backgroundColor: '#404040',
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
        borderBottomWidth: 0.9,
        borderColor: '#404040'
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

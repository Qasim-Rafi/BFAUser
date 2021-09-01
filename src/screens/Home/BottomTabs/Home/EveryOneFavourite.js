import React from 'react'
import {TouchableOpacity, Image, ScrollView, StyleSheet, View, ImageBackground } from 'react-native'
import ResponsiveText from '../../../../components/RnText'
import { Rating, AirbnbRating } from 'react-native-ratings';
import { routeName } from '../../../../constants/routeName';
import { advertisementBannerFakeDATA, everyoneFavoriteFakeDATA } from '../../../../constants/mock'
import { colors } from '../../../../constants/colorsPallet'
import SeeAllButton from '../../../../components/SeeAllButton'
const EveryOneFavourite = (props) => {
    return (
        <>
            <View style={styles.everyOneFavoriteHeaderSection}>
                <ResponsiveText color={colors.white}>Everyone's Favorite</ResponsiveText>
                <SeeAllButton navigation={props.navigation} />
            </View>
            <View style={styles.everyOneFavoriteItemsSection}>
                <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                    {everyoneFavoriteFakeDATA.map((url, index) => {
                        return (
                            <TouchableOpacity onPress={()=> props.navigation.navigate(routeName.RestaurantDetail)}>
                            <View style={{ width: 90, height: 130, marginHorizontal: 5, borderRadius: 3, overflow: 'hidden', flexDirection: 'row' }}>
                                <ImageBackground style={{ flex: 1, padding: 5, overflow: 'hidden', justifyContent: 'flex-end' }} source={{ uri: url }} >
                                    <ResponsiveText fontFamily="Regular" size={2.9} color={colors.white}>Kaizen sushi</ResponsiveText>
                                    <ResponsiveText fontFamily="Light" size={2} color={colors.white}>Special sushi</ResponsiveText>
                                    <Rating
                                        size={2}
                                        imageSize={10}
                                        // tintColor={'transparent'}
                                        style={{ paddingVertical: 10 }}
                                    />
                                </ImageBackground>
                            </View>
                            </TouchableOpacity>
                        )
                    })}
                </ScrollView>
            </View>

        </>
    )
}

export default EveryOneFavourite;

const styles = StyleSheet.create({

    everyOneFavoriteHeaderSection: {
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
    everyOneFavoriteItemsSection: {
        flex: 1,
        flexDirection: 'row',
        display: 'flex',
        paddingVertical: 10,
        justifyContent: 'center',
        overflow: 'hidden',
    }


})

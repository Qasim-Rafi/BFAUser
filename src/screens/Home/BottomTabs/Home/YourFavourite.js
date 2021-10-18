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
    const firstName = "Pg"
    const title = firstName+"'s Favorites";
    return (
        <>
            <View style={styles.yourFavoriteHeaderSection}>
                <ResponsiveText margin={[0,0,0,0]} size={4} color={colors.white}>{firstName}'s Favourites</ResponsiveText>
                <View style={{marginRight:-10}} >
                <SeeAllButton title={title} data={yourFavoriteFakeDATA} navigation={props.navigation} />
                </View>
            </View>
            <View style={styles.yourFavoriteItemsSection}>
                <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                    {yourFavoriteFakeDATA.map((url, index) => {
                        return (
                            <TouchableOpacity onPress={()=> props.navigation.navigate(routeName.DISH_DETAIL,{dish:url})}>
                            <View style={{ width: wp(26), height: hp(18), marginHorizontal: 5, borderRadius: 3, overflow: 'hidden', flexDirection: 'row' }}>
                                <ImageBackground imageStyle={{opacity:.5}} style={{ flex: 1, padding:5, overflow: 'hidden', justifyContent: 'flex-end' }} source={url.url} >
                                    <ResponsiveText fontFamily="Regular" size={3} color={colors.white}>Kaizen sushi</ResponsiveText>
                                    <ResponsiveText fontFamily="Light" size={2.5} margin={[-5,0,0,0]} color={colors.white}>Special sushi</ResponsiveText>

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
        marginLeft:15,
        marginRight:15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom:5,
        marginBottom:5,
        // backgroundColor: colors.black1,
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
        borderBottomWidth: 1,
        borderColor: colors.black1
    },
    yourFavoriteItemsSection: {
        flex: 1,
        flexDirection: 'row',
        display: 'flex',
        paddingVertical: 10,
        marginLeft:10,
        justifyContent: 'center',
        overflow: 'hidden',
    }


})

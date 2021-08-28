import React from 'react'
import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from '../../../../components/Icon'
import ResponsiveText from '../../../../components/RnText'
import Input from '../../../../components/Input'
import RnButton from '../../../../components/RnButton'
import { globalPath } from '../../../../constants/globalPath'
import { wp } from '../../../../helpers/Responsiveness'
import Swiper from 'react-native-swiper'

import { advertisementBannerFakeDATA } from '../../../../constants/mock'
import { colors } from '../../../../constants/colorsPallet'
import Fonts from '../../../../helpers/Fonts'
import AdvertisementBanner from './AdvertisementBanner'
import SeeAllButton from '../../../../components/SeeAllButton'
import BfaPartner from './BfaPartner'
import Recommendation from './Recommendation'
import EveryOneFavourite from './EveryOneFavourite'
import YourFavourite from './YourFavourite'
import Advertisement2ndVarient from './Advertisement2ndVarient'
import AwardWinningDishes from './AwardWinningDishes'
import Promotion from './Promotion'
const Home = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>

                <Icon source={globalPath.BALI_LOGO} />
                <Input placeholder="Search for Dishes, Restaurants or Promo" padding={[0, 0, 0, 10]} leftIcon={globalPath.SEARCH_LOGO} containerStyle={{ backgroundColor: '#404040' }} width={wp(75)} />
                <Icon source={globalPath.SEARCH_LOGO} />

            </View>
            <ScrollView style={
                { flex: 0.9 }}>
                <View style={styles.advertisementBanner}>
                    <AdvertisementBanner />
                </View>
                <View style={styles.bfaPartnerContainer}>
                    <BfaPartner />
                </View>
                <ImageBackground style={styles.cuisinesContainer} source={{ uri: 'https://images.unsplash.com/photo-1441716844725-09cedc13a4e7?h=1024' }}>
                    <TouchableOpacity style={styles.cuisinesButton}>
                        <ResponsiveText fontFamily={'Regular'} size={2.9}>View Cuisines and Categories</ResponsiveText>
                        <Icon size={wp(8)} source={globalPath.BALI_LOGO} />
                    </TouchableOpacity>
                </ImageBackground>
                <View style={styles.recommendationContainer}>
                    <Recommendation />
                </View>
                <View style={styles.everyoneFavorite}>
                    <EveryOneFavourite />
                </View>
                <View style={styles.yourFavorite}>
                    <YourFavourite />
                </View>
                <View style={styles.Advertisement2ndVarient}>
                    <Advertisement2ndVarient />
                </View>
                <View style={styles.awardWinningDishes}>
                    <AwardWinningDishes />
                </View>
                <View style={styles.awardWinningDishes}>
                    <Promotion />
                </View>
            </ScrollView>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#202020'
    },
    header: {
        flex: 0.1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,

    },
    advertisementBanner: {
        // flex: 0.1,
        height: 200,
        // backgroundColor:'red',
        // overflow:'hidden',
        // maxHeight:400

    },
    bfaPartnerContainer: {
        flex: 0.17,
        margin: 15,
        borderRadius: 7,
        backgroundColor: '#303030'

    },
    cuisinesContainer: {
        height: 100,
        marginHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cuisinesButton: {
        backgroundColor: colors.yellow,
        flexDirection: 'row',
        width: '60%',
        justifyContent: 'space-between',
        // justifyContent: 'space-between',

        alignItems: 'center',
        paddingHorizontal: 10,
        borderRadius: 5
    },
    recommendationContainer: {
        flex: 0.32,
        margin: 15,
        borderRadius: 7,
    },
    everyoneFavorite: {
        flex: 0.17,
        // margin: 15,
        borderRadius: 7,
        backgroundColor: '#303030',
    },
    yourFavorite: {
        flex: 0.17,
        // margin: 15,
        borderRadius: 7,
        backgroundColor: '#303030',
    },
    Advertisement2ndVarient: {
        // flex: 0.1,
        height: 150,
        // backgroundColor:'red',
        // overflow:'hidden',
        // maxHeight:400
    },
    awardWinningDishes:{
        flex: 0.17,
        // margin: 15,
        borderRadius: 7,
        backgroundColor: '#303030',
        marginTop:20,

    }


})

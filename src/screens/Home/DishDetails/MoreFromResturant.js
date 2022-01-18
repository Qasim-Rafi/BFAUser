import React from 'react'
import { Image, Text, ScrollView, StyleSheet, View, ImageBackground, TouchableOpacity } from 'react-native'
import { Rating, AirbnbRating } from 'react-native-ratings';
import { routeName } from '../../../constants/routeName';
import ResponsiveText from '../../../components/RnText';
import { advertisementBannerFakeDATA, ourRecommendationFakeDATA } from '../../../constants/mock'
import { colors } from '../../../constants/colorsPallet'
import SeeAllButton from '../../../components/SeeAllButton';
const MoreFromResturant = (props) => {
    console.log(props.item, "itemmmmmmmmmmmmm")
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
                            <TouchableOpacity
                                onPress={() =>
                                    props.item(url)
                                }>
                                <View style={{ width: 90, height: 130, marginRight: 5, borderRadius: 3, overflow: 'hidden', flexDirection: 'row' }}>
                                    <ImageBackground style={{ flex: 1, padding: 5, overflow: 'hidden', justifyContent: 'flex-end' }} source={url.Images} >
                                        <Text
                                            style={{
                                                color: 'white', padding: 3, opacity: 0.7,
                                                backgroundColor: '#383131', borderRadius: 7,
                                                textAlign: 'center', fontWeight: '600', fontSize: 8.5
                                            }}

                                        >
                                            {url.titleD}

                                        </Text>
                                        <Text
                                            style={{
                                                marginTop: 2,
                                                color: 'white', padding: 3, opacity: 0.7,
                                                backgroundColor: 'black', borderRadius: 7,
                                                textAlign: 'center', fontWeight: '600', fontSize: 8.5
                                            }}

                                        >
                                            {url.titleA}

                                        </Text>


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

import React from 'react'
import { Image, ScrollView, StyleSheet, View, ImageBackground, TouchableOpacity } from 'react-native'
import ResponsiveText from '../../../../components/RnText'

import { advertisementBannerFakeDATA, ourRecommendationFakeDATA } from '../../../../constants/mock'
import { colors } from '../../../../constants/colorsPallet'
import SeeAllButton from '../../../../components/SeeAllButton'
import { routeName  } from '../../../../constants/routeName'
const Recommendation = (props) => {
    return (
        <>
            <View style={styles.recommendationHeaderSection}>
                <ResponsiveText color={colors.white}>Our Recommendations</ResponsiveText>
                <SeeAllButton />
            </View>
            <View style={styles.recommendationItemsSection}>
                <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                    {ourRecommendationFakeDATA.map((url, index) => {
                        return (
                            <TouchableOpacity onPress={()=> props.navigation.navigate(routeName.DISH_DETAIL)}>
                            <View  style={{ width: 90, height: 130, marginHorizontal: 5, borderRadius: 3, overflow: 'hidden', flexDirection: 'row' }}>
                                <ImageBackground style={{ flex: 1, padding: 5, overflow: 'hidden', justifyContent: 'flex-end' }} source={{ uri: url }} >
                                    <ResponsiveText fontFamily="Regular" size={2.9} color={colors.white}>Kaizen sushi</ResponsiveText>
                                    <ResponsiveText fontFamily="Light" size={2} color={colors.white}>Special sushi</ResponsiveText>
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

export default Recommendation;

const styles = StyleSheet.create({

    recommendationHeaderSection: {
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // backgroundColor: '#404040',
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
        borderBottomWidth: 0.9,
        borderColor: '#404040'
    },
    recommendationItemsSection: {
        flex: 1,
        flexDirection: 'row',
        display: 'flex',
        paddingVertical: 10,
        justifyContent: 'center',
        overflow: 'hidden',
    }


})

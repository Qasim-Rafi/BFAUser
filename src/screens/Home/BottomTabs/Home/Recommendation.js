import React from 'react'
import { Image, ScrollView, StyleSheet, View, ImageBackground, TouchableOpacity } from 'react-native'
import ResponsiveText from '../../../../components/RnText'

import { advertisementBannerFakeDATA, ourRecommendationFakeDATA } from '../../../../constants/mock'
import { colors } from '../../../../constants/colorsPallet'
import SeeAllButton from '../../../../components/SeeAllButton'
import { routeName  } from '../../../../constants/routeName'
import { hp, wp } from '../../../../helpers/Responsiveness'
const Recommendation = (props) => {
    return (
        <>
            <View style={styles.recommendationHeaderSection}>
                <ResponsiveText margin={[0,0,0,-5]} size={4} color={colors.white}>Our Recommendations</ResponsiveText>
                <SeeAllButton navigation={props.navigation} />
            </View>
            <View style={styles.recommendationItemsSection}>
                <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                    {ourRecommendationFakeDATA.map((url, index) => {
                        return (
                            <TouchableOpacity onPress={()=> props.navigation.navigate(routeName.DISH_DETAIL)}>
                            <View  style={{ width: wp(26), height: hp(18), marginHorizontal: 5, borderRadius: 3, overflow: 'hidden', flexDirection: 'row', marginStart:-5 }}>
                                <ImageBackground imageStyle={{opacity:.5}} imageStyle={{opacity:.5}} style={{ flex: 1, padding: 5, overflow: 'hidden', justifyContent: 'flex-end',backgroundColor: 'rgba(0,0,0,1)' }} source={url} >
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
        // backgroundColor: colors.black1,
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
        borderBottomWidth: 0.9,
        borderColor: colors.black1
    },
    recommendationItemsSection: {
        flex: 1,
        marginTop:5,
        flexDirection: 'row',
        display: 'flex',
        paddingVertical: 10,
        justifyContent: 'center',
        overflow: 'hidden',
    }


})

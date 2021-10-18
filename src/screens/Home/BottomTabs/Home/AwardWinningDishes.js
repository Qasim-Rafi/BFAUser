import React from 'react'
import { Image, ScrollView, StyleSheet, View, ImageBackground,TouchableOpacity } from 'react-native'
import ResponsiveText from '../../../../components/RnText'
import { Rating, AirbnbRating } from 'react-native-ratings';
import { routeName } from '../../../../constants/routeName';

import { advertisementBannerFakeDATA, awardWinningFakeDATA, promotionsFakeDATA } from '../../../../constants/mock'
import { colors } from '../../../../constants/colorsPallet'
import SeeAllButton from '../../../../components/SeeAllButton'
import { hp, wp } from '../../../../helpers/Responsiveness';
const AwardWinningDishes = (props) => {
    return (
        <>
            <View style={styles.AwardWinningDishesHeaderSection}>
                <ResponsiveText margin={[0,0,0,-5]} size={4} color={colors.white}>Brunei Food Awards</ResponsiveText>
                <View style={{marginRight:-15}}>
                <SeeAllButton title={"Brunei Food Awards"} data={promotionsFakeDATA} navigation={props.navigation}/>
                </View>
            </View>
            <View style={styles.AwardWinningDishesItemsSection}>
                <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                    {promotionsFakeDATA.map((url, index) => {
                        return (
                            <TouchableOpacity onPress={()=> props.navigation.navigate(routeName.DISH_DETAIL, {dish:url}
                            )}>
                            <View style={{ width: wp(26), height: hp(18), marginHorizontal: 5, borderRadius: 3, overflow: 'hidden', flexDirection: 'row' }}>
                                <ImageBackground imageStyle={{opacity:.5}} style={{ flex: 1, padding: 5, overflow: 'hidden', justifyContent: 'flex-end' }} source={url.url} >
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

export default AwardWinningDishes;

const styles = StyleSheet.create({

    AwardWinningDishesHeaderSection: {
        paddingHorizontal:5,
        paddingTop:10,
        paddingBottom:5,
        marginRight:15,
        marginBottom:5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
         backgroundColor: colors.black3,
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
        marginLeft:15,
        borderBottomWidth: 1,
        borderColor: colors.black1,
    },
    AwardWinningDishesItemsSection: {
        flex: 1,
        flexDirection: 'row',
        display: 'flex',
        paddingVertical: 10,
        justifyContent: 'center',
        paddingLeft:10,
        overflow: 'hidden',
        backgroundColor:colors.black3,
    }


})

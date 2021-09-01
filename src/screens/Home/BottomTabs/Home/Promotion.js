import React from 'react'
import { Image, ScrollView, StyleSheet, View, ImageBackground ,TouchableOpacity} from 'react-native'
import ResponsiveText from '../../../../components/RnText'
import { Rating, AirbnbRating } from 'react-native-ratings';

import { advertisementBannerFakeDATA, promotionsFakeDATA } from '../../../../constants/mock'
import { colors } from '../../../../constants/colorsPallet'
import { routeName } from '../../../../constants/routeName';
import SeeAllButton from '../../../../components/SeeAllButton'
const Promotion = (props) => {
    return (
        <>
            <View style={styles.everyOneFavoriteHeaderSection}>
                <ResponsiveText color={colors.white}>Promotions</ResponsiveText>
                <SeeAllButton  navigation={props.navigation} />
            </View>
            <View style={styles.recommendationItemsSection}>
                <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                    {promotionsFakeDATA.map((url, index) => {
                        return (
                            <TouchableOpacity onPress={()=> props.navigation.navigate(routeName.DISH_DETAIL)}>
                            <View style={{ width: 90, height: 130, marginHorizontal: 5, borderRadius: 3, overflow: 'hidden', flexDirection: 'row' }}>
                                <ImageBackground style={{ flex:1 }} source={{ uri: url }} >
                                <View style={styles.promotionoffView}>
                                    <ResponsiveText size={2}>Flat 25% Off</ResponsiveText>
                                </View>
                                <View style={{ flex: 1, padding: 5,overflow: 'hidden', justifyContent: 'flex-end'}}>
                                    <ResponsiveText fontFamily="Regular" size={2.9} color={colors.white}>Kaizen sushi</ResponsiveText>
                                    <ResponsiveText fontFamily="Light" size={2} color={colors.white}>Special sushi</ResponsiveText>
                                </View>
                                </ImageBackground>
                            </View></TouchableOpacity>

                        )
                    })}
                </ScrollView>
            </View>

        </>
    )
}

export default Promotion;

const styles = StyleSheet.create({
    promotionoffView:
    {
        backgroundColor:'rgba(237, 197, 78, 0.7)',height:'15%',position:"relative",width:"60%",top:20,justifyContent:'center'
    },
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

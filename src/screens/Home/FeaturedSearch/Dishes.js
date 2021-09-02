import React from 'react'
import { TouchableOpacity, ScrollView, StyleSheet, View, ImageBackground ,Text} from 'react-native'
import { Rating, AirbnbRating } from 'react-native-ratings';
import ResponsiveText from '../../../components/RnText';
import { advertisementBannerFakeDATA, ourRecommendationFakeDATA } from '../../../constants/mock'
import { colors } from '../../../constants/colorsPallet'
import SeeAllButton from '../../../components/SeeAllButton'
import { hp, wp } from '../../../helpers/Responsiveness';
import { routeName } from '../../../constants/routeName';

const SearchDishes = (props) => {
    return (
        <>
            <View style={styles.everyOneFavoriteHeaderSection}>
                <ResponsiveText size={4} color={colors.white}>Dishes</ResponsiveText>
				<ResponsiveText color={colors.grey}size={3}>(5 Resulf Found) </ResponsiveText>
                <SeeAllButton navigation={props.navigation}/>
            </View>
            <View style={styles.recommendationItemsSection}>
                <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                    {ourRecommendationFakeDATA.map((url, index) => {
                        return (
                            <TouchableOpacity onPress={()=> props.navigation.navigate(routeName.DISH_DETAIL)}>
                            <View style={{ width: wp(26), height: hp(18), marginHorizontal: 5, borderRadius: 3, overflow: 'hidden', flexDirection: 'row' }}>
                                <ImageBackground imageStyle={{opacity:0.5}} style={{ flex:1 }} source={url} >
                                
                                <View style={{ flex: 1, padding: 5,overflow: 'hidden', justifyContent: 'flex-end'}}>
                                    <ResponsiveText fontFamily="Regular" size={2.9} color={colors.white}>Kaizen sushi</ResponsiveText>
                                    <ResponsiveText fontFamily="Light" size={2} color={colors.white}>Special sushi</ResponsiveText>
                                </View>
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

export default SearchDishes;

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

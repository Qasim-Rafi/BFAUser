import React, { useState } from 'react'
import {ScrollView, View, StyleSheet,TouchableOpacity ,Text,ImageBackground,Image} from 'react-native'
import Header from '../../../components/Header'
import ResponsiveText from '../../../components/RnText'
import { colors } from '../../../constants/colorsPallet'
import { hp, wp } from '../../../helpers/Responsiveness'
import { advertisementBannerFakeDATA, ourRecommendationFakeDATA } from '../../../constants/mock'
import { Rating } from 'react-native-ratings'
import Icon from '../../../components/Icon'
import { globalPath } from '../../../constants/globalPath'
import { myListingTabs } from '../../../constants/mock'
import { routeName } from '../../../constants/routeName'
import SearchHeader from '../../../components/SearchHeader'
	

const BranchesDetail = (props) => {
    return (
        <>
            
            <View style={styles.everyOneFavoriteItemsSection}>
                <ScrollView showsHorizontalScrollIndicator={false} >
                <View style={{justifyContent:'center',alignItems:'center'}}>
                    <ResponsiveText size={4.5} color={colors.white} >I-Lotus Restaurant</ResponsiveText>
                    <ResponsiveText size={4} color={colors.grey}>View other Branches from this Restaurant</ResponsiveText>
                </View>
                    {ourRecommendationFakeDATA.map((url, index) => {
                        return (
		
		<TouchableOpacity style={{flexDirection: 'row',backgroundColor: colors.black2,marginTop:10}} onPress={()=> props.navigation.navigate(routeName.DISH_DETAIL,{dish:url})}>
                            <View style={{ marginHorizontal: 5, borderRadius: 3, overflow: 'hidden',justifyContent:'center'  }}>
                                <Image style={{  padding: 5, overflow: 'hidden', justifyContent: 'flex-end',width:wp(22),height:hp(12) }} source={url.url} >
                                </Image>
								</View>
							<View style={{flex:1,justifyContent:'space-between',flexDirection:'row'}}>	
							<View style={{margin:15}}>
                                    <ResponsiveText fontFamily="Regular" size={4} color={colors.white}>Kaizen sushi</ResponsiveText>
                                    <ResponsiveText fontFamily="Light" size={3.5} color={colors.grey}>Special sushi</ResponsiveText>
                                    <Rating
                                        size={2}
										tintColor={colors.black2}
                                        imageSize={15}
                                        // tintColor={'transparent'}
                                        style={{ paddingVertical: 10,color:colors.black2,left:-15 }}
                                    />
								</View>	
								
							
                            </View>
                            </TouchableOpacity>
                        )
                    })}
                </ScrollView>
            </View>

        </>
    )
}
export default  BranchesDetail

const styles=StyleSheet.create({
	everyOneFavoriteHeaderSection: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
        borderBottomWidth: 0.9,
        borderColor: colors.black1
    },
    everyOneFavoriteItemsSection: {
        flex: 1,
        flexDirection: 'row',
        display: 'flex',
        paddingVertical: 10,
        justifyContent: 'center',
        overflow: 'hidden',
    },
	buttonShape:{
		width:wp(30),
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        marginTop: 10,
    },
	buttonViewStyle:{
		margin:20,
		flexDirection:'row',

	}
})
import React from 'react'
import { Image, ScrollView, StyleSheet, View, ImageBackground, TouchableOpacity } from 'react-native'
import ResponsiveText from '../../../../components/RnText'
import Icon from '../../../../components/Icon'
import { advertisementBannerFakeDATA, ourRecommendationFakeDATA, PROMOS_JOBS } from '../../../../constants/mock'
import { colors } from '../../../../constants/colorsPallet'
import SeeAllButton from '../../../../components/SeeAllButton'
import { routeName  } from '../../../../constants/routeName'
import { globalPath } from '../../../../constants/globalPath'
import { hp, wp } from '../../../../helpers/Responsiveness'
import { useSelector } from 'react-redux'
import { Item } from 'react-native-paper/lib/typescript/components/List/List'
const JobsList = (props) => {
    const JobsList = useSelector(state=>state.appReducers.promoJobs.data);
    console.log("Jobs data: ", JobsList);
    var base64Icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAwBQTFRF7c5J78kt+/Xm78lQ6stH5LI36bQh6rcf7sQp671G89ZZ8c9V8c5U9+u27MhJ/Pjv9txf8uCx57c937Ay5L1n58Nb67si8tVZ5sA68tJX/Pfr7dF58tBG9d5e8+Gc6chN6LM+7spN1pos6rYs6L8+47hE7cNG6bQc9uFj7sMn4rc17cMx3atG8duj+O7B686H7cAl7cEm7sRM26cq/vz5/v767NFY7tJM78Yq8s8y3agt9dte6sVD/vz15bY59Nlb8txY9+y86LpA5LxL67pE7L5H05Ai2Z4m58Vz89RI7dKr+/XY8Ms68dx/6sZE7sRCzIEN0YwZ67wi6rk27L4k9NZB4rAz7L0j5rM66bMb682a5sJG6LEm3asy3q0w3q026sqC8cxJ6bYd685U5a457cIn7MBJ8tZW7c1I7c5K7cQ18Msu/v3678tQ3aMq7tNe6chu6rgg79VN8tNH8c0w57Q83akq7dBb9Nld9d5g6cdC8dyb675F/v327NB6////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/LvB3QAAAMFJREFUeNpiqIcAbz0ogwFKm7GgCjgyZMihCLCkc0nkIAnIMVRw2UhDBGp5fcurGOyLfbhVtJwLdJkY8oscZCsFPBk5spiNaoTC4hnqk801Qi2zLQyD2NlcWWP5GepN5TOtSxg1QwrV01itpECG2kaLy3AYiCWxcRozQWyp9pNMDWePDI4QgVpbx5eo7a+mHFOqAxUQVeRhdrLjdFFQggqo5tqVeSS456UEQgWE4/RBboxyC4AKCEI9Wu9lUl8PEGAAV7NY4hyx8voAAAAASUVORK5CYII=';
    return (
        <>
            <View style={styles.recommendationHeaderSection}>
                <ResponsiveText margin={[0,0,0,0]} size={4} color={colors.white}>Jobs</ResponsiveText>
                <View style={{ marginRight: -10 }} >
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingLeft: 10 }}
                    onPress={()=>props.navigation.navigate(routeName.JOB_LISTING)}
                    >
                        <ResponsiveText size={3.2} margin={[0, 10, 0, 0]} color={colors.yellow}>Show All</ResponsiveText>
                        <Icon size={wp(1.6), hp(1.6)} margin={[0,10,0,0]} source={globalPath.RIGHT_ARROW} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.recommendationItemsSection}>
                <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                    {
                    JobsList.length > 0 ? 
                    JobsList.map((item, index) => {
                        return (
                            <TouchableOpacity onPress={()=> props.navigation.navigate(routeName.APPLY_JOBS)}>
                            <View  style={{ width: wp(26), height: hp(18), borderRadius: 3, marginHorizontal: 5, overflow: 'hidden', flexDirection: 'row' }}>
                                <ImageBackground imageStyle={{opacity:.5}} style={{ flex: 1, padding: 5, overflow: 'hidden', justifyContent: 'flex-end',backgroundColor: 'rgba(0,0,0,1)' }} source={{uri: item.resLogo}} >
                                    <ResponsiveText fontFamily="Regular" size={3} margin={[0,0,5,0]} color={colors.white}>{item.jobTitle}</ResponsiveText>
                                    
                                </ImageBackground>
                            </View>
                            </TouchableOpacity>

                        )
                    })
                    :undefined
                }
                </ScrollView>
            </View>

        </>
    )
}

export default JobsList;

const styles = StyleSheet.create({

    recommendationHeaderSection: {
        paddingVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft:15,
        marginRight:15,
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
        borderBottomWidth: 1,
        borderColor: colors.black1
    },
    recommendationItemsSection: {
        flex: 1,
        marginTop:5,
        paddingLeft:15,
        flexDirection: 'row',
        display: 'flex',
        paddingVertical: 10,
        justifyContent: 'center',
        overflow: 'hidden',
        marginLeft:-5,
    }


})

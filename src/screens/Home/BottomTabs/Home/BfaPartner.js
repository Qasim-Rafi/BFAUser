import React from 'react'
import { Image, StyleSheet, View ,ScrollView, TouchableOpacity} from 'react-native'
import ResponsiveText from '../../../../components/RnText'

import { advertisementBannerFakeDATA, BFAPartnerFakeData, BFAPartnerLessData } from '../../../../constants/mock'
import { colors } from '../../../../constants/colorsPallet'
import SeeAllButton from '../../../../components/SeeAllButton'
import { globalPath } from '../../../../constants/globalPath'
import { wp } from '../../../../helpers/Responsiveness'
import urls from '../../../../redux/lib/urls'
import AsyncStorage from '@react-native-community/async-storage'
const BfaPartner = ({props}) => {
    
const [moreData, setMoreData] = React.useState(false);
const [title, setTitle] = React.useState("More");
    

    return (
        <>  
            
            <View style={styles.bfaPartnerHeaderSection}>
                <ResponsiveText margin={5} size={4} color={colors.white}>BFA Partners</ResponsiveText>
                <TouchableOpacity onPress={()=>{
                setMoreData(!moreData);
                setTitle(title==="More" ? "Less" : "More");
                console.log('state:', moreData);
                }} >
                <SeeAllButton title={title} src={title==="More" ? globalPath.DOWN_ARROW : globalPath.UP_ARROW }/>
            </TouchableOpacity>

            </View>
            
            {  moreData ? <View style={styles.bfaPartnerItemsSection}>
                {BFAPartnerFakeData.map((url, index) => {
                    return (
                        <Image  style={{ width: wp(12), height: wp(12), marginHorizontal: 5,marginVertical:5, borderRadius: 5, overflow: 'hidden' }} source={url} />
                    )
                })}
            </View>
            :
            <View style={styles.bfaPartnerItemsSection}>
                {BFAPartnerLessData.map((url, index) => {
                    return (
                        <Image  style={{ width: wp(12), height: wp(12), marginHorizontal: 5,marginVertical:5, borderRadius: 5, overflow: 'hidden' }} source={url} />
                    )
                })}
            </View>
            }
            
        </>
    )
}

export default BfaPartner

const styles = StyleSheet.create({

    bfaPartnerHeaderSection: {
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.black1,
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
    },
    bfaPartnerItemsSection: {
        
        flex: 1,
        flexWrap:'wrap',
        flexDirection:'row',
        paddingVertical:5,
        justifyContent: 'center',
        backgroundColor:colors.black2,
        overflow: 'hidden',
    }


})

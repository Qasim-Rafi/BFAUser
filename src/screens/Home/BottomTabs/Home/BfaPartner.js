import React from 'react'
import { Image, StyleSheet, View ,ScrollView, TouchableOpacity} from 'react-native'
import ResponsiveText from '../../../../components/RnText'

import { advertisementBannerFakeDATA, BFAPartnerFakeData, BFAPartnerLessData } from '../../../../constants/mock'
import { colors } from '../../../../constants/colorsPallet'
import SeeAllButton from '../../../../components/SeeAllButton'
import { globalPath } from '../../../../constants/globalPath'
import { wp } from '../../../../helpers/Responsiveness'
import urls from '../../../../redux/lib/urls'
import { hp } from '../../../../helpers/Responsiveness'
import AsyncStorage from '@react-native-community/async-storage'
import Icon from '../../../../components/Icon'
const BfaPartner = ({props}) => {
    
const [moreData, setMoreData] = React.useState(false);
const [title, setTitle] = React.useState("More");
    

    return (
        <View style={{backgroundColor:colors.black3}} >
            
            <View style={styles.bfaPartnerHeaderSection}>
                <ResponsiveText size={4} color={colors.white}>Bali Partners</ResponsiveText>
                <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingLeft: 10 }} 
                onPress={()=>{
                
                setTitle(title==="More" ? "Less" : "More");
                
                }} >
                        <ResponsiveText size={3.2} margin={[0, 10, 0, 0]} color={colors.yellow}>Show All</ResponsiveText>
            <Icon size={wp(1.6),hp(1.6)} source={title==="More"?globalPath.DOWN_ARROW:globalPath.UP_ARROW} />
            </TouchableOpacity>

            </View>
            
            {  title==="Less" ? <View style={styles.bfaPartnerItemsSection}>
                {BFAPartnerFakeData.map((url, index) => {
                    return (
                        // <Icon source={url} size={35} borderRadius={5} />
                        <View style={{backgroundColor:colors.white, borderRadius:5, marginVertical:3}} >
                        <Icon source={url} size={55} borderRadius={5} />
                        </View>
                    
                    )
                })}
            </View>
            :
            <View style={styles.bfaPartnerItemsSection}>
                {BFAPartnerLessData.map((url, index) => {
                    return (
                        // <Image  style={{ width: wp(12), height: wp(12), marginHorizontal: 5,marginVertical:5, borderRadius: 5, overflow: 'hidden' }} source={url} />
                        <View style={{backgroundColor:colors.white, borderRadius:5, marginVertical:3}} >
                        <Icon source={url} size={55} borderRadius={5} />
                        </View>
                    )
                })}
            </View>
            }
            
        </View>
    )
}

export default BfaPartner

const styles = StyleSheet.create({

    bfaPartnerHeaderSection: {
        paddingTop:5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.black3,
        borderTopLeftRadius: 7,
        borderBottomWidth:1,
        marginHorizontal:0,
        marginBottom:2,
        borderBottomColor:colors.black1,
        borderTopRightRadius: 7,
    },
    bfaPartnerItemsSection: {
        
        flex: 1,
        flexWrap:'wrap',
        
        flexDirection:'row',
        paddingVertical:5,
        justifyContent: 'space-between',
        backgroundColor:colors.black3,
        
        overflow: 'hidden',
    }


})

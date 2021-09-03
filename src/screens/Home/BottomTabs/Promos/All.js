import React from 'react'
import { ScrollView, StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import Header from '../../../../components/Header'
import Advertisement2ndVarient from '../Home/Advertisement2ndVarient'
import PromosBanner from './PromoBanner'
import RnButton from '../../../../components/RnButton'
import { colors } from '../../../../constants/colorsPallet'
import { wp } from '../../../../helpers/Responsiveness'
import ResponsiveText from '../../../../components/RnText'
import { myPromosListingTabs } from '../../../../constants/mock'

 
const AllPromos = (navigation) => {
    return (
        <View><ResponsiveText>
    Promos All
</ResponsiveText></View>
    )
    
}
export default AllPromos
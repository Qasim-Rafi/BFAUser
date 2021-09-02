import React from 'react'
import { ScrollView, StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import Header from '../../../../components/Header'
import Advertisement2ndVarient from '../Home/Advertisement2ndVarient'
import PromosBanner from './PromoBanner'
import { colors } from '../../../../constants/colorsPallet'
import { wp } from '../../../../helpers/Responsiveness'
import ResponsiveText from '../../../../components/RnText'

const Promos = (navigation) => {
    return (

        <View style={{backgroundColor:'#202020',flex:1}}>
            <Header navigation={navigation}/>
            <View style={styles.buttonViewStyle}>
			
                  <TouchableOpacity
                    style={[styles.buttonShape,{backgroundColor:'#303030'}]}
                    > 
                    <Text style={{color:colors.white}}>All</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=> navigation.navigate(routeName.FilterSearch)}
                     style={[styles.buttonShape,{backgroundColor:'#EDC54E'}]}
                    >
                    <Text style={{fontSize:14}}>Promotions</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=> navigation.navigate(routeName.MAP_VIEW)}
                     style={[styles.buttonShape,{backgroundColor:'#303030'}]}
                    >
                    <Text style={{color:colors.white}}>News</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=> navigation.navigate(routeName.MAP_VIEW)}
                     style={[styles.buttonShape,{backgroundColor:'#303030',width:wp(20),}]}
                    >
                    <Text style={{color:colors.white}}>Job</Text>
                  </TouchableOpacity>
               
		</View>
            <ScrollView style={{flex:0.9,margin:20}}>
            <ResponsiveText color={colors.white}>Promotions</ResponsiveText>
            <PromosBanner/>

            </ScrollView>
        </View>
    )
}

export default Promos
const styles=StyleSheet.create({
	everyOneFavoriteHeaderSection: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        
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
    },
	buttonShape:{
		width:wp(24),
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

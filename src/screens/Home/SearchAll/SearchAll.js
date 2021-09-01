import React, { useState } from 'react'
import {ScrollView, View, StyleSheet,TouchableOpacity ,Text,ImageBackground,Image} from 'react-native'
import Header from '../../../components/Header'
import ResponsiveText from '../../../components/RnText'
import { colors } from '../../../constants/colorsPallet'
import { hp, wp } from '../../../helpers/Responsiveness'
import { advertisementBannerFakeDATA } from '../../../constants/mock'
import { Rating } from 'react-native-ratings'
import Icon from '../../../components/Icon'
import { globalPath } from '../../../constants/globalPath'
import { myListingTabs } from '../../../constants/mock'
import { routeName } from '../../../constants/routeName'
export default function SearchAll({navigation}) {
	// const [activeTab, setActiveTab] = React.useState(myListingTabs[0].id);



	return (
		<View style={{flex:1,backgroundColor:'#202020'}}>
			<Header navigation={navigation}/>
			<View style={styles.buttonViewStyle}>
			
                  <TouchableOpacity
                    style={[styles.buttonShape,{backgroundColor:'#EDC54E'}]}
                    >
                    <Text>Sort</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=> navigation.navigate(routeName.FilterSearch)}
                     style={[styles.buttonShape,{backgroundColor:'#303030'}]}
                    >
                    <Text style={{color:colors.white}}>Filter</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                     style={[styles.buttonShape,{backgroundColor:'#303030'}]}
                    >
                    <Text style={{color:colors.white}}>Map</Text>
                  </TouchableOpacity>
               
		</View>

			<View style={{margin:20}}>
				<ResponsiveText color={colors.white}>Now SHowing Dish Result For "Chicken" </ResponsiveText>
				<ResponsiveText color={colors.white} size={3}>5 Result Found </ResponsiveText>
			</View>
		<SortResult/>
		
		</View>
	)
}


const SortResult = (props) => {
    return (
        <>
            
            <View style={styles.everyOneFavoriteItemsSection}>
                <ScrollView showsHorizontalScrollIndicator={false} >
                    {advertisementBannerFakeDATA.map((url, index) => {
                        return (
		
		<TouchableOpacity style={{flexDirection: 'row',backgroundColor: '#303030',marginTop:10}} onPress={()=> null}>
                            <View style={{  height: 80, marginHorizontal: 5, borderRadius: 3, overflow: 'hidden',  }}>
                                <Image style={{  padding: 5, overflow: 'hidden', justifyContent: 'flex-end',width:80,height:80 }} source={{ uri: url }} >
                                </Image>
								</View>
							<View style={{flex:1,justifyContent:'space-between',flexDirection:'row'}}>	
							<View>
                                    <ResponsiveText fontFamily="Regular" size={2.9} color={colors.white}>Kaizen sushi</ResponsiveText>
                                    <ResponsiveText fontFamily="Light" size={2} color={colors.white}>Special sushi</ResponsiveText>
                                    <Rating
                                        size={2}
										tintColor={'#303030'}
                                        imageSize={10}
                                        // tintColor={'transparent'}
                                        style={{ paddingVertical: 10,color:'#303030' }}
                                    />
								</View>	
								<View style={{margin:20}}>
									<Icon source={globalPath.LOCATION1 }/>
									<ResponsiveText color={colors.white } top={5} size={3}>1km</ResponsiveText>
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
const Filter =(props)=>{
	<>
	<View></View>
	</>
}
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
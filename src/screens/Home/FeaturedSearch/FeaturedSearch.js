import React from "react";
import { StyleSheet,Text, TouchableOpacity, View } from "react-native";
import Header from "../../../components/Header";
import { wp } from "../../../helpers/Responsiveness";
import SearchDishes from "./Dishes";
import SearchResturant from "./Resturant";
import SearchPromotion from "./SearchPromotion";
export default function FeaturedSearch({navigation}) {
	return(
		<View style={{flex:1,backgroundColor:"#303030"}}>
			<Header navigation={navigation}/>
      <View style={{margin: 20}}>
				<TouchableOpacity style={styles.buttonShape}><Text>Filter</Text></TouchableOpacity>
			<SearchDishes navigation={navigation}/>
			{/* <SearchResturant/> */}
			{/* <SearchPromotion/> */}
			</View>

	</View>
	)

}
const styles=StyleSheet.create({
	buttonShape:{
		width:wp(22),
		// flexWrap:'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#EDC54E',
        marginHorizontal: 10,
        padding: 10,
        marginTop: 10,
    }
})
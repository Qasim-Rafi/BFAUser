import React from "react";
import { ScrollView, StyleSheet,Text, TouchableOpacity, View } from "react-native";
import { wp } from "../../../helpers/Responsiveness";
import SearchDishes from "./Dishes";
import SearchResturant from "./Resturant";
import SearchPromotion from "./SearchPromotion";
import { routeName } from '../../../constants/routeName';
import SearchHeader from "../../../components/SearchHeader";
import { colors } from "../../../constants/colorsPallet";
export default function FeaturedSearch({navigation}) {
	return(
		<View style={{flex:1,backgroundColor:colors.black3}}>
			<SearchHeader navigation={navigation}/>
		
      <View style={{margin: 20}}>
				<TouchableOpacity style={styles.buttonShape}><Text>Filter</Text></TouchableOpacity>
				</View>
			<View style={styles.dishesView}><SearchDishes navigation={navigation}/></View>
			<View style={styles.dishesView}><SearchResturant navigation={navigation}/></View>
			<View style={styles.dishesView}><SearchPromotion navigation={navigation}/></View>
			
			
		</View>
	)

}
const styles=StyleSheet.create({
	buttonShape:{
		width:wp(22),
		// flexWrap:'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.yellow,
        marginHorizontal: 10,
        padding: 10,
        marginTop: 10,
    },
	dishesView:{
        flex: 0.3,
        // margin: 15,
        borderRadius: 7,
        backgroundColor: colors.black2,
        marginTop:10,

    }
})
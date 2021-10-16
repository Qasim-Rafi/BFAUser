import React from "react";
import { ScrollView, StyleSheet,Text, TouchableOpacity, View, FlatList } from "react-native";
import SearchDishes from "./Dishes";
import SearchResturant from "./Resturant";
import SearchPromotion from "./SearchPromotion";
import { routeName } from '../../../constants/routeName';
import SearchHeader from "../../../components/SearchHeader";
import { colors } from "../../../constants/colorsPallet";
import ResponsiveText from "../../../components/RnText";
import { hp,wp } from "../../../helpers/Responsiveness";
import { globalPath } from "../../../constants/globalPath";
import Icon from "../../../components/Icon";
import { FiltersDummyData } from '../../../constants/mock'
import Modal from "react-native-modal";
import Header from "../../../components/Header";


export default function FeaturedSearch({navigation}) {
    const [isModalVisible, setModalVisible] = React.useState(false);
    const toggleModal = () => {	
        setModalVisible(!isModalVisible);
     };

	return(
		<View style={{flex:1,backgroundColor:colors.black3}}>
			<Header iconPath={globalPath.BACK_ARROW} navigation={navigation}/>
		
            <View style={{margin: 20}}>
				<TouchableOpacity onPress={toggleModal} style={styles.buttonShape}><Text>Filter</Text></TouchableOpacity>
				</View>
			<View style={styles.dishesView}><SearchDishes navigation={navigation}/></View>
			<View style={styles.dishesView}><SearchResturant navigation={navigation}/></View>
			<View style={styles.dishesView}><SearchPromotion navigation={navigation}/></View>
			<Modal isVisible={isModalVisible} backdropOpacity={0.90} style={{justifyContent:'flex-end'}} 
            animationIn={'slideInRight'}
            animationOut={'slideOutRight'}
            // onModalHide={()=>navigation.navigate(routeName.LANDING_SCREEN)}
            coverScreen={true}
            >
         {/* ------------ ModalView -------------- */}

         
        <View style={{flex:1,marginLeft:40,backgroundColor:colors.black3, justifyContent:'center'}}>
        <View style={{
        flex: 0.1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft:10,
        backgroundColor:colors.black2}}>
        <TouchableOpacity onPress={toggleModal} style={{borderRadius:5,marginLeft:5, padding:10, backgroundColor:colors.black1, alignItems:'center',justifyContent:'center'}} ><Icon size={20} source={require('../../../assets/icons/x.png')} /></TouchableOpacity>
      
        <ResponsiveText  color={colors.white} size={4}>Filter By</ResponsiveText>
        <TouchableOpacity onPress={toggleModal} style={{paddingVertical:8,marginRight:-50, paddingHorizontal:10,borderRadius:5, backgroundColor:colors.yellow}} >
        <ResponsiveText  color={colors.black} size={3.4}>Reset</ResponsiveText>
        </TouchableOpacity>
        <Icon />
        </View>
        <View style={{flex:0.9}} >
        <FlatList
        data={FiltersDummyData}
        renderItem={({item, index}) => (
            <>
                <View style={{margin:20}}>
                <ResponsiveText size={4} color={colors.white}>{item.title}</ResponsiveText>
                <View style={{borderBottomWidth:0.5,borderBottomColor:colors.grey1}}></View>
                
            </View>
            <View
      style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'center',
        flexWrap: 'wrap',
        alignContent: 'center',
        marginHorizontal:10
        
      }}>
      {item.data.map((item, index) => {
        return (
          <View
            style={{
                borderRadius:7,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: colors.black3,
              marginHorizontal: 10,
              padding: 10,
              marginTop: 10,
              borderColor:colors.grey1,
        borderWidth:0.5
            }}>
            <ResponsiveText color={colors.white} fontFamily={'regular'}>
              {item.name}<ResponsiveText color={colors.yellow}>({item.value})
              </ResponsiveText>
            </ResponsiveText>
          </View>
        );
      })}
    </View>

                
            </>)}
      keyExtractor={item => item.id}/>
        <View style={{height:50,backgroundColor:colors.black2,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
          <ResponsiveText margin={[0,20,0,20]} color={colors.yellow}>2523 Properties</ResponsiveText>
          <TouchableOpacity onPress={()=>navigation.goBack()} style={{backgroundColor:colors.yellow,borderRadius:3,padding:6,marginRight:20}}>
            <ResponsiveText size={3.3}>Show Result</ResponsiveText>
          </TouchableOpacity>

        </View>
        </View>
        </View>
        
      
      {/* ------------ ModalView End -------------- */}  
      </Modal>
			
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
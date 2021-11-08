import React from 'react'
import { Image, StyleSheet, View ,ScrollView, TouchableOpacity} from 'react-native'
import ResponsiveText from '../../../../components/RnText'

import { advertisementBannerFakeDATA, BFAPartnerFakeData, BFAPartnerLessData, image } from '../../../../constants/mock'
import { colors } from '../../../../constants/colorsPallet'
import SeeAllButton from '../../../../components/SeeAllButton'
import { globalPath } from '../../../../constants/globalPath'
import { wp } from '../../../../helpers/Responsiveness'
import { useDispatch, useSelector } from 'react-redux'
import urls from '../../../../redux/lib/urls'
import { hp } from '../../../../helpers/Responsiveness'
import AsyncStorage from '@react-native-community/async-storage'
import Icon from '../../../../components/Icon'
import { getBfaPartners } from '../../../../redux/actions/user.actions'
const BfaPartner = ({props}) => {
const dispatch=useDispatch();
const loading = useSelector(state=>state.appReducers.bfaPartners.refreshing);
// console.log('loading', loading);
const [moreData, setMoreData] = React.useState(false);
let bfaPartners = useSelector(state=>state.appReducers.bfaPartners.data);
const [title, setTitle] = React.useState(bfaPartners.length<=6? "Less" : "More");
console.log("array length", bfaPartners.length);
// console.log('BFA Partners: ', bfaPartners);
const images = [       
];
const lessImages = []; 
if(loading===false){
    bfaPartners.map((item)=>{
        var img = item.imageDataB;
        var src = img.replace(/\\/g, "/"); 
        if(images.includes(urls.BASE_URL+src)){
        }
        else {                
            images.push(urls.BASE_URL+src);
        }
        
        //  console.log('All Images: ',images);
        
    })
  }
if(loading===false){
  for(var i = 0; i<6; i++){
    var img = bfaPartners[i].imageDataB;
    var src = img.replace(/\\/g, "/"); 
    if(lessImages.includes(urls.BASE_URL+src)){
    }
    else {                
        lessImages.push(urls.BASE_URL+src);
    }   
  }
}

  console.log('lessImages: ', lessImages);
  console.log('More Images: ', images);




    return (
        <View style={{backgroundColor:colors.black3}} >
            
            <View style={styles.bfaPartnerHeaderSection}>
                <ResponsiveText size={4} color={colors.white}>Bali Partners</ResponsiveText>
                <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingLeft: 10 }} 
                onPress={()=>{
                if(title==="Less"){
                    // dispatch(getBfaPartners(6));
                }
                else{
                    dispatch(getBfaPartners(1000));
                }
                setTitle(title==="More" ? "Less" : "More");
                
                }} >
                        <ResponsiveText size={3.2} margin={[0, 10, 0, 0]} color={colors.yellow}>{title}</ResponsiveText>
            <Icon size={wp(1.6),hp(1.6)} source={title==="More"?globalPath.DOWN_ARROW:globalPath.UP_ARROW} />
            </TouchableOpacity>

            </View>
            
            <View style={styles.bfaPartnerItemsSection}>
                {
                title === "More" ? 
                lessImages.map((url, index) => {
                    return (
                        // <Icon source={url} size={35} borderRadius={5} />
                        <View style={{backgroundColor:colors.white, borderRadius:5,marginRight:5, marginVertical:3}} >
                        <Icon 
                        source={{
                        uri: url,
                      }}
                    
                    // source={url}
                      
                      size={55} borderRadius={5} />
                        </View>
                    
                    )
                })
                :
                images.map((url, index) => {
                    return (
                        // <Icon source={url} size={35} borderRadius={5} />
                        <View style={{backgroundColor:colors.white, borderRadius:5,marginRight:5, marginVertical:3}} >
                        <Icon 
                        source={{
                        uri: url,
                      }}
                    
                    // source={url}
                      
                      size={55} borderRadius={5} />
                        </View>
                    
                    )
                })
            
            }
            </View>
           
            
            
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
        // justifyContent: 'space-between',
        backgroundColor:colors.black3,
        
        overflow: 'hidden',
    }


})

import React from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import ResponsiveText from '../../../components/RnText'
import { colors } from '../../../constants/colorsPallet'
import { FullMenuList } from '../../../constants/mock'
import Icon from '../../../components/Icon'
import { globalPath } from '../../../constants/globalPath'
import { wp, hp } from '../../../helpers/Responsiveness'

export default function FullMenu() {
    const [activeTab, setActiveTab] = React.useState(FullMenuList[0].id);
    const [itemList, setItemList] = React.useState([]);
    const toggleSelection = (item) => {
        if (itemList.includes(item)) {
            const newArray = itemList.filter((item1) => {
                return item !== item1
            });
            setItemList(newArray);
        }
        else {
            setItemList([...itemList, item])
        }
    }
    return (
        
        <View style={{ flex: 1, backgroundColor: colors.black3 }} >
            
            {   
                FullMenuList.map((item) => {
                    return (
                        <View>
                            <TouchableOpacity onPress={() => {
                                toggleSelection(item)
                                // setActiveTab(item.id)
                            }} style={{ marginBottom: 10,paddingHorizontal:15,paddingVertical:5,backgroundColor:colors.yellow, borderRadius:7, flexDirection:'row', justifyContent:'space-between', alignItems:'center' }}>
                                <ResponsiveText size={4} color={colors.black} >{item.title}</ResponsiveText>
                                <ResponsiveText size={7} color={colors.black} >{itemList.includes(item) ? '-' : '+'}</ResponsiveText>
                                
                            </TouchableOpacity>
                            <View>
                                {
                                    itemList.includes(item) 
                                    ?
                                    item.data.map((data) => {
                                        return(          
                                            <View style={{backgroundColor:colors.black2,flexDirection:'row', padding:5,marginBottom:5, borderRadius:7}}>
                                                <View>
                                                    <Icon size={50} borderRadius={7} source={data.url} /></View>
                                                <View >
                                                <View style={{justifyContent:'space-between', width:wp(70), flexDirection:'row'}}>
                                                    <ResponsiveText size={3} color={colors.white} margin={[0,0,0,10]} >{data.title}</ResponsiveText>
                                                    <ResponsiveText size={3} color={colors.yellow} margin={[0,0,0,10]} >{data.price}</ResponsiveText>
                                                </View>
                                                <View style={{marginRight:20,paddingRight:30, paddingLeft:10}}>
                                                <ResponsiveText color={colors.grey} size={2.5} >{data.description}</ResponsiveText>
                                                </View>
                                                </View>
                                                
                                                
                                            </View>
                                        )
                                    })
                                    :
                                    undefined
                                }
                            </View>
                        </View>
                    )
                })
            }
            
        </View>
    )
}

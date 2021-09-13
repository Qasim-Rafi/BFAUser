import React from 'react'
import { View, Text ,Image ,TouchableOpacity} from 'react-native'
import { AwardsMenuSectionsData } from '../../../../constants/mock'
import { wp ,hp } from '../../../../helpers/Responsiveness'
import ResponsiveText from '../../../../components/RnText'
import { colors } from '../../../../constants/colorsPallet'
import Header from '../../../../components/Header'
import { globalPath } from '../../../../constants/globalPath'
import { routeName } from '../../../../constants/routeName'
export default function RandomiserResult({navigation}) {
    return (
        <View style={{backgroundColor:colors.black3,flex:1}}>
            <Header navigation={navigation} iconPath={globalPath.BACK_ARROW}/>
            <View style={{margin:20,flex:0.9}}>
                <ResponsiveText size={4} margin={[10,0,20,0]} color={colors.yellow}>
                    Random Result
                </ResponsiveText>
            {AwardsMenuSectionsData.map((item , index)=>{
                return(
                    <TouchableOpacity
                    onPress={()=>navigation.navigate(routeName.DISH_DETAIL)}
              style={{
                height: wp(20),
                backgroundColor: colors.black2,
                borderRadius: 5,
                marginBottom: 4,
                padding: 5,
                flexDirection: 'row',
                overflow: 'hidden',
              }}>
              <Image style={{width: '20%', height: '100%', borderRadius:5}} source={item.url} />
              <View style={{flex: 1, marginLeft: 10}}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    overflow: 'hidden',
                  }}>
                  <ResponsiveText size={2.9} color={colors.white}>
                    {item.title}
                  </ResponsiveText>
                  <ResponsiveText
                    color={'grey'}
                    numberOfLines={1}
                    margin={[0, 0, 6, 0]}
                    // maxWidth={'60%'}
                  >
                    ...................................................................................................
                  </ResponsiveText>
                </View>
                <ResponsiveText color={'grey'} numberOfLines={2} size={2.7}>
                  {item.des}
                </ResponsiveText>
              </View>
              <View style={{width: '15%', overflow: 'hidden'}}>
                <ResponsiveText
                  margin={[4, 0, 0, 0]}
                  color={colors.yellow}
                  position="flex-end">
                  {item.price}
                </ResponsiveText>
              </View>
            </TouchableOpacity>
                )
            })

            }
            </View>
        </View>
    )
}

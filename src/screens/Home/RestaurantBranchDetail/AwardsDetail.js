import React from 'react'
import { View, Text ,Image } from 'react-native'
import { AwardsMenuSectionsData } from '../../../constants/mock'
import { wp ,hp } from '../../../helpers/Responsiveness'
import ResponsiveText from '../../../components/RnText'
import { colors } from '../../../constants/colorsPallet'
export default function AwardsDetail() {
    return (
        <View>
            {AwardsMenuSectionsData.map((item , index)=>{
                return(
                    <View
              style={{
                height: wp(20),
                backgroundColor: colors.black2,
                borderRadius: 5,
                marginBottom: 4,
                padding: 5,
                flexDirection: 'row',
                overflow: 'hidden',
              }}>
              <Image style={{width: '20%', height: '100%'}} source={item.url} />
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
            </View>
                )
            })

            }
        </View>
    )
}

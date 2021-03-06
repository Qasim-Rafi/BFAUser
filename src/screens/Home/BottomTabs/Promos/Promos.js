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
import AllPromos from './All'
import NewsFeed from './NewsFeed'
import PromosJob from './PromosJobs'
import { globalPath } from '../../../../constants/globalPath'

 
const Promos = ({navigation}) => {
    const [activeTab, setActiveTab] = React.useState(myPromosListingTabs[2].id);
    console.log(activeTab);
    return (

        <View style={{backgroundColor:colors.black3,flex:1}}>
          <View style={{flex:0.12, justifyContent:'center', alignItems:'center',backgroundColor:colors.black2}}>
            <Header navigation={navigation} />
            </View>
            <View style={styles.buttonViewStyle}>
			
            {myPromosListingTabs.map((items, index) => {
              return (
                <React.Fragment key={items.id} >
                  <RnButton
                    id={index}
                    onPress={() => setActiveTab(items.id)}
                    btnStyle={{
                        width:wp(24),
                         alignItems: 'center',
                          justifyContent: 'center',
                         marginTop: 10,
                        
                      backgroundColor:
                        items.id === activeTab ? colors.yellow :  colors.black2,
                    }}
                    padding={[3, 15]}>
                    <ResponsiveText
                      size={2.7}
                      // fontFamily={items.id === activeTab ? 'Boldedium' : undefined}
                      color={
                        items.id === activeTab ? colors.black : colors.white
                      }>
                      {items.name}
                    </ResponsiveText>
                  </RnButton>
                </React.Fragment>
              );
            })}
               
		</View>
            <ScrollView style={{flex:0.9,marginHorizontal:20}}>
            
            {activeTab === 1 ?  
            <View>
            <PromosBanner navigation={navigation} />
            <NewsFeed navigation={navigation}/>
            <PromosJob navigation={navigation}/>
            </View>
            :
            undefined
          
          }
             {activeTab === 2 &&  <PromosBanner />}
              {activeTab === 3 && <NewsFeed navigation={navigation}/>}
             {activeTab === 4 && <PromosJob navigation={navigation}/>}

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
        borderColor: colors.black1
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
		marginHorizontal:10,
    marginTop:10,
		flexDirection:'row',

	}
})

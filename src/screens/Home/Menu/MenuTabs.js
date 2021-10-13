import React from 'react'
import { View, Text , TouchableOpacity, StyleSheet, ScrollView} from 'react-native'
import { colors } from '../../../constants/colorsPallet'
import { MenuSectionButtons, MenuTabButtons } from '../../../constants/mock';
import { globalPath } from '../../../constants/globalPath';
import { hp,wp } from '../../../helpers/Responsiveness';
import Icon from '../../../components/Icon';
import { BranchDetailButtons } from '../../../constants/mock';
import ResponsiveText from '../../../components/RnText';
import BranchesDetail from '../RestaurantBranchDetail/Branches';
import Info from '../RestaurantBranchDetail/Info';
import Menu from './Menu';
import AwardsDetail from '../RestaurantBranchDetail/AwardsDetail';
import PromosBanner from '../BottomTabs/Promos/PromoBanner';
import FullMenu from './FullMenu';

export default function MenuTabs(props) {
  const [activeTab, setActiveTab] = React.useState(MenuSectionButtons[0].id);

    return (
       
        <View style={{flex:1, backgroundColor:colors.black3}} >
            <View style={{flexDirection: 'row', justifyContent:'space-between',paddingHorizontal:10,paddingVertical:15,borderColor:colors.lightBlack,borderWidth:1, backgroundColor:colors.black1}} >
            {MenuTabButtons.map((items, index) => {
            return (
              <React.Fragment key={items.id}>
                <TouchableOpacity
                  onPress={() => setActiveTab(items.id)}
                  style={[
                    styles.buttonView,
                    {
                      borderColor:items.id === activeTab ? colors.yellow : colors.black1,
                      borderWidth:items.id === activeTab ? 1 : undefined,
                      borderRadius:50,
                      paddingVertical:5,
                      paddingHorizontal:10,

                    //   backgroundColor:
                    //     items.id === activeTab ? colors.yellow : colors.grey,
                        
                    // backgroundColor:colors.black3
                    },
                  ]}>
                  <View
                    style={{justifyContent: 'center', alignItems: 'center'}}>
                    {/* <Icon margin={[0, 0, 5, 0]} size={18} tintColor={items.id === activeTab ? colors.yellow : colors.grey} source={items.icon} /> */}
                    <ResponsiveText color={items.id === activeTab ? colors.yellow : colors.grey } size={3}>{items.title}</ResponsiveText>
                  </View>
                </TouchableOpacity>
              </React.Fragment>
            );
          })}
          </View>

          
        <View style={{margin: 10,flex:0.9, paddingBottom:30}}>
        <ScrollView style={{flexGrow:1}} >
             {activeTab === 1 && <FullMenu/>}
             {activeTab === 2 && <PromosBanner/>}
            {activeTab === 3 && <Menu navigation={props.navigation} />}
            {activeTab === 4 && <BranchesDetail  navigation={props.navigation}/>}
        </ScrollView>
        </View>
        </View>
    )
}
const styles = StyleSheet.create({
    headerImage: {
      height: 200,
    },
    buttonStyle: {
      padding: 10,
    },
    buttonView: {
     
      alignItems: 'center',
    },
  });
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {
  BranchDetailButtons,
  FacilityData,
  MenuSectionButtons,
} from '../../../constants/mock';
import ImageHeader from '../BottomTabs/Home/ImageHeader';

// import ResturantDescription from './ResturantDescription'
import ResponsiveText from '../../../components/RnText';
import Icon from '../../../components/Icon';
import {hp, wp} from '../../../helpers/Responsiveness';
import Info from './Info';
import Menu from '../Menu/Menu';
import BranchesDetail from './Branches';
import PromosBanner from '../BottomTabs/Promos/PromoBanner';
import { colors } from '../../../constants/colorsPallet';
import AwardsDetail from './AwardsDetail';
export default function RestaurantBranchDetailScreen({navigation}) {
  const [activeTab, setActiveTab] = React.useState(MenuSectionButtons[0].id);
  // const [activeTab, setActiveTab] = React.useState(myListingTabs[3].id);

  return (
    <View style={{backgroundColor: colors.black3}}>
      <View style={styles.headerImage}>
        <ImageHeader navigation={navigation} />
      </View>
      <View style={styles.buttonStyle}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          {BranchDetailButtons.map((items, index) => {
            return (
              <React.Fragment key={items.id}>
                <TouchableOpacity
                  onPress={() => setActiveTab(items.id)}
                  style={[
                    styles.buttonView,
                    {
                      backgroundColor:
                        items.id === activeTab ? colors.yellow : colors.grey,
                    },
                  ]}>
                  <View
                    style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Icon margin={[0, 0, 5, 0]} size={18} source={items.icon} />
                    <ResponsiveText size={3}>{items.title}</ResponsiveText>
                  </View>
                </TouchableOpacity>
              </React.Fragment>
            );
          })}
        </View>
      </View>
          
      <View style={{margin: 10,height:hp(70)}}>
        {activeTab === 1 && <Info />}
        {activeTab === 2 && <PromosBanner/>}
        {activeTab === 3 && <Menu navigation={navigation} />}
        {activeTab === 4 && <BranchesDetail  navigation={navigation}/>}
        {activeTab === 5 && <AwardsDetail  navigation={navigation}/>}


    </View>
      </View>
  );
}
const styles = StyleSheet.create({
  headerImage: {
    height: 200,
  },
  buttonStyle: {
    padding: 10,
  },
  buttonView: {
    width: wp(17),
    height: hp(8),
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

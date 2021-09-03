import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {FacilityList} from '../../../components/Facility';
import {
  BranchDetailButtons,
  FacilityData,
  MenuSectionButtons,
} from '../../../constants/mock';
import AdvertisementBanner from '../BottomTabs/Home/AdvertisementBanner';
import ImageHeader from '../BottomTabs/Home/ImageHeader';
import Comments from '../DishDetails/Comments';
import DishDescription from '../DishDetails/DishDescription';
import HeaderButtons from './HeaderButtons';
import TimeTable from './TimeTable';
// import ResturantDescription from './ResturantDescription'
import RnButton from '../../../components/RnButton';
import ResponsiveText from '../../../components/RnText';
import Icon from '../../../components/Icon';
import {globalPath} from '../../../constants/globalPath';
import {hp, wp} from '../../../helpers/Responsiveness';
import Info from './Info';
import Menu from '../Menu/Menu';
export default function RestaurantBranchDetailScreen({navigation}) {
  const [activeTab, setActiveTab] = React.useState(MenuSectionButtons[0].id);
  // const [activeTab, setActiveTab] = React.useState(myListingTabs[3].id);

  return (
    <View style={{backgroundColor: '#202020'}}>
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
                        items.id === activeTab ? '#EDC54E' : 'white',
                    },
                  ]}>
                  <View
                    style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Icon margin={[0, 0, 5, 0]} source={items.icon} />
                    <Text>{items.title}</Text>
                  </View>
                </TouchableOpacity>
              </React.Fragment>
            );
          })}
        </View>
      </View>

      <View style={{margin: 10,height:hp(70)}}>
        {activeTab === 1 && <Info />}
        {activeTab === 3 && <Menu />}
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
    width: wp(21),
    height: hp(8),
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

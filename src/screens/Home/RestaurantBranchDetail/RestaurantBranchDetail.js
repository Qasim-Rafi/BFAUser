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
import { hp, wp } from '../../../helpers/Responsiveness';
import Info from './Info';
import Menu from '../Menu/Menu';
import { BarIndicator } from 'react-native-indicators';

import BranchesDetail from './Branches';
import PromosBanner from '../BottomTabs/Promos/PromoBanner';
import { colors } from '../../../constants/colorsPallet';
import AwardsDetail from './AwardsDetail';
import MenuTabs from '../Menu/MenuTabs';
import { getRestaurentDeatil } from '../../../redux/actions/user.actions';
import { useDispatch, useSelector } from 'react-redux';
import { Item } from 'react-native-paper/lib/typescript/components/List/List';

export default function RestaurantBranchDetailScreen({ navigation, route }) {
  const [activeTab, setActiveTab] = React.useState(MenuSectionButtons[0].id);
  // const [activeTab, setActiveTab] = React.useState(myListingTabs[3].id);
  const dispatch = useDispatch();
  const data = useSelector(state => state.appReducers.restaurantDetail.data);
  const loading = useSelector(state => state.appReducers.restaurantDetail.refreshing);
  React.useEffect(() => {
    dispatch(getRestaurentDeatil(333));
    //route.params.restaurantId
    console.log(route.params, 'params colsole');
  }, []);
  console.log('routeetetteetet vhvhh', data);
  return (
    <View style={{ backgroundColor: colors.black3, flex: 1 }}>
      <View style={styles.headerImage}>
        <ImageHeader navigation={navigation} img={data.restaurantLogo} />
      </View>
      <View>
        <View
          style={{
            flexDirection: 'row',
            padding: 10,
            justifyContent: 'space-between',
            backgroundColor: colors.black2,
          }}>
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
                    style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Icon margin={[0, 0, 5, 0]} size={18} source={items.icon} />
                    <ResponsiveText size={3}>{items.title}</ResponsiveText>
                  </View>
                </TouchableOpacity>
              </React.Fragment>
            );
          })}
        </View>
      </View>
      {Object.keys(data).length != 0 ? (
        <View
          style={{ height: hp(70), paddingHorizontal: 20, paddingVertical: 10 }}>
          {activeTab === 1 && <Info data={data.restaurantBranchesAlldataforappList[0]} logo={data.restaurantLogo}/>}
          {activeTab === 2 && <PromosBanner />}
          {activeTab === 3 && <Menu navigation={navigation} data={data.restaurantBranchesAlldataforappList[0].restaurantMenulist} />}
          {activeTab === 4 && <BranchesDetail navigation={navigation} data={data.restaurantBranchesAlldataforappList} />}
          {activeTab === 5 && <AwardsDetail navigation={navigation} data={data.restaurantBranchesAlldataforappList[0].awardlist} />}
        </View>
      ) : null}
      {
        loading === true ?
          <View style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, backgroundColor: 'rgba(65, 65, 65, 0.5)', flex: 1 }}>
            <BarIndicator color={colors.yellow} size={50} />
          </View>
          :
          undefined
      }
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

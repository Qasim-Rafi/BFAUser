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
import { getRestaurentDeatil } from '../../../redux/actions/user.actions';
import { useDispatch, useSelector } from 'react-redux';

export default function RestaurantBranchDetailScreen({ navigation, route }) {
  const [activeTab, setActiveTab] = React.useState(MenuSectionButtons[0].id);
  // const [activeTab, setActiveTab] = React.useState(myListingTabs[3].id);
  const dispatch = useDispatch();
  const data = useSelector(state => state.appReducers.restaurantDetail.data);
  const loading = useSelector(state => state.appReducers.restaurantDetail.refreshing);
  const isThemeDark = useSelector(state => state.appReducers.setTheme.data)
  React.useEffect(() => {
    dispatch(getRestaurentDeatil(route.params));
    //route.params.restaurantId
    // console.log(route.params, 'params colsole');
  }, []);
  console.log('restaurant detail', route.params);
  return (
    <View style={{ backgroundColor: isThemeDark ?  colors.black3: colors.bgWhite, flex: 1 }}>
      <View style={styles.headerImage}>
        <ImageHeader navigation={navigation} img={data.restaurantLogo} />
      </View>
      <View>
        <View
          style={{
            flexDirection: 'row',
            padding: 10,
            justifyContent: 'space-between',
            backgroundColor: isThemeDark ?  colors.black2: colors.secondary,
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
                        items.id === activeTab ? colors.yellow : isThemeDark ? colors.grey : colors.white,
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
          {activeTab === 1 && <Info data={data.restaurantBranchesAlldataforappList} />}
          {activeTab === 2 && <PromosBanner />}
          {activeTab === 3 && <Menu navigation={navigation} data={data.restaurantBranchesAlldataforappList.restaurantMenulist} />}
          {/* {activeTab === 4 && <BranchesDetail navigation={navigation} data={data.restaurantBranchesAlldataforappList} restaurantName={data.restaurantName}/>} */}
          {activeTab === 5 && <AwardsDetail navigation={navigation} data={data.restaurantBranchesAlldataforappList.restaurantMenulist} />}
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
    width: wp(23),
    height: hp(8),
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

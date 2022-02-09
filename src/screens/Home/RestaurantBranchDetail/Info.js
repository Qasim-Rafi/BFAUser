import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { FacilityList } from '../../../components/Facility';
import Icon from '../../../components/Icon';
import RnButton from '../../../components/RnButton';
import ResponsiveText from '../../../components/RnText';
import { globalPath } from '../../../constants/globalPath';
import { FacilityData } from '../../../constants/mock';
import { hp, wp } from '../../../helpers/Responsiveness';
import Comments from '../DishDetails/Comments';
import TimeTable from './TimeTable';
import Restaurant_Description from './ResturantDesceiption';
import { colors } from '../../../constants/colorsPallet';

const Info = (props) => {
  const [data, setData] = useState(props.data)
  console.log('okokoko', props.data)
  return (
    <ScrollView>
      <Restaurant_Description data={data} logo={props.logo} />
      <View>
        <View style={{ marginHorizontal: 20, marginVertical: 10 }}>
          <ResponsiveText size={4} color={colors.white} >Facilities</ResponsiveText>
          <FacilityList data={data.facilitiesTaglist} />
          {/* <View style={{ display: 'flex', flexDirection: 'row' }}>
            <Icon
              source={globalPath.WIFI_ICON}
              size={(hp(8), wp(8))}
              margin={[0, 0, 0, 20]}
            />
            <Icon
              source={globalPath.PARKING_ICON}
              size={(hp(8), wp(8))}
              margin={[0, 0, 0, 30]}
            />
            <Icon
              source={globalPath.MOSQUE_ICON}
              size={(hp(8), wp(8))}
              margin={[0, 0, 0, 30]}
            />
          </View> */}
        </View>
        <View>
          <TimeTable data={data.restaurantOperationalHoursList} />

        </View>
        <View style={{ marginBottom: 80 }}>
          {/* <Comments /> */}
        </View>
      </View>

    </ScrollView>
  );
};

export default Info;

const styles = StyleSheet.create({});

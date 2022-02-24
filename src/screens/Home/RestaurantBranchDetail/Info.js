import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { FacilityList } from '../../../components/Facility';
import ResponsiveText from '../../../components/RnText';
import TimeTable from './TimeTable';
import Restaurant_Description from './ResturantDesceiption';
import { colors } from '../../../constants/colorsPallet';

const Info = (props) => {
  const [data, setData] = useState(props.data)
  console.log('okokoko', props.data)
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Restaurant_Description data={data} logo={props.logo}/>
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
        <TimeTable data={data.restaurantOperationalHoursList} />
        <View style={{ marginBottom: 30 }}>
          {/* <Comments /> */}
        </View>
        <View style={{ margin: 20, paddingBottom: 50 }}>
         
        </View>
      </View>
    </ScrollView>
  );
};

export default Info;

const styles = StyleSheet.create({});

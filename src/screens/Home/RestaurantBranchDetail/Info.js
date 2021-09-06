import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {FacilityList} from '../../../components/Facility';
import Icon from '../../../components/Icon';
import RnButton from '../../../components/RnButton';
import ResponsiveText from '../../../components/RnText';
import {globalPath} from '../../../constants/globalPath';
import {FacilityData} from '../../../constants/mock';
import {hp, wp} from '../../../helpers/Responsiveness';
import Comments from '../DishDetails/Comments';
import TimeTable from './TimeTable';
import Restaurant_Description from './ResturantDesceiption';
import { colors } from '../../../constants/colorsPallet';

const Info = () => {
  return (
    <ScrollView>
    <Restaurant_Description/>
    <View>
      <View style={{margin:20}}>
        <ResponsiveText size={4} color={colors.white} >Facilities</ResponsiveText>
        {/* <FacilityList data={FacilityData} /> */}
        <View style={{display: 'flex', flexDirection: 'row'}}>
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
        </View>
      </View>
      <TimeTable />
      <View style={{marginBottom: 30}}>
        <Comments />
      </View>
      <View style={{margin: 20, paddingBottom: 50}}>
        <RnButton>
          <ResponsiveText padding={0} color={colors.black}>
            SUBMIT
          </ResponsiveText>
        </RnButton>
      </View>
    </View>
    </ScrollView>
  );
};

export default Info;

const styles = StyleSheet.create({});

import React, { useState, useRef } from 'react';
import { View, StyleSheet, Text, SectionList, TouchableOpacity } from 'react-native';
import Icon from '../../../components/Icon';
import Input from '../../../components/Input';
import ResponsiveText from '../../../components/RnText';
import { globalPath } from '../../../constants/globalPath';
import { exploreCategoryByName } from '../../../constants/mock';
import { hp, wp } from '../../../helpers/Responsiveness';

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
export default function Categories({ }) {


  // const [ref, setRef] = useState(null);
  const scrollRef = useRef(null)
  const ScrollHandler = ( item) => {
    console.log("Items>>>>",item)

  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>

        <Icon source={globalPath.BALI_LOGO} />
        <Text style={{ color: "#ffffff", width: wp(75), textAlign: 'center' }} >View Cuisines and Categories</Text>
        <Icon source={globalPath.SEARCH_LOGO} />

      </View>
      <View style={{ position: 'absolute', height: hp(85), width: wp(10), backgroundColor: 'red', zIndex: 1000, right: 0, marginTop: hp(5), alignItems: 'center', }}>
        {exploreCategoryByName.map((item) => {
          return (
            <TouchableOpacity onPress={(item) => ScrollHandler(item)}>
              <ResponsiveText>{item.title}</ResponsiveText>
            </TouchableOpacity>
          )
        })}
      </View>
      <SectionList
        ref={scrollRef}
        scrollToLocation={({
          viewOffset: 2,
          animated: true,
          itemIndex: 19,
          sectionIndex: 13
        })}
        sections={exploreCategoryByName}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Item title={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </View>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: hp(120),
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'black',
  },

  item: {

    backgroundColor: "#383838",
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff"
  },
  title: {
    paddingTop: 5,
    color: '#ffffff',
    fontSize: 14
  },
  header: {
    color: '#EDC54E',
    flex: 0.1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,

  },
});

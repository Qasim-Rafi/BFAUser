import React, { useState, useRef } from 'react';
import { View, StyleSheet, Text, SectionList, TouchableOpacity, FlatList } from 'react-native';
import Icon from '../../../components/Icon';
import Input from '../../../components/Input';
import ResponsiveText from '../../../components/RnText';
import { globalPath } from '../../../constants/globalPath';
import { exploreCategoryByName } from '../../../constants/mock';
import { hp, wp } from '../../../helpers/Responsiveness';

export default function Categories({ }) {


  const [activeAlphabet, setActiveAlphabet] = useState(null);
  const scrollRef = useRef(null)
  const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 })
  const ScrollHandler = (item, index) => {
    setActiveAlphabet(item.title)
    console.log("Items>>>>", item, index)
    scrollRef?.current.scrollToIndex({ index, viewOffset: hp(22) })

  };
  const onViewableItemsChanged = ({ viewableItems, changed }) => {
    // setActiveAlphabet(viewableItems[1]?.item.title)
    console.log(viewableItems[1]?.item.title)
    // setActiveAlphabet(viewableItems[2]?.items.title)
    // console.log("Visible items are", viewableItems);
    // console.log("Changed in this iteration", changed);
  }
  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.header}>{item.title}</Text>
        <View style={{ backgroundColor: "#383838", paddingLeft: 25, borderRadius: 10, justifyContent: 'center', height: hp(22) }}>
          <Text style={styles.title}>{item.data[0]}</Text>
          <Text style={styles.title}>{item.data[0]}</Text>
          <Text style={styles.title}>{item.data[0]}</Text>
          <Text style={styles.title}>{item.data[0]}</Text>
          <Text style={styles.title}>{item.data[0]}</Text>
          <Text style={styles.title}>{item.data[0]}</Text>
        </View>
      </View>
    )
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>

        <Icon source={globalPath.BALI_LOGO} />
        <Text style={{ color: "#ffffff", width: wp(75), textAlign: 'center' }} >View Cuisines and Categories</Text>
        <Icon source={globalPath.SEARCH_LOGO} />

      </View>
      <View style={{ position: 'absolute', height: hp(86), marginRight: 10, width: wp(5), backgroundColor: '#383838', zIndex: 1000, right: 0, marginTop: hp(10), alignItems: 'center', borderRadius: 10, justifyContent: 'center' }}>
        {exploreCategoryByName.map((item, index) => {

          return (
            <TouchableOpacity style={{ marginBottom: 2, backgroundColor: activeAlphabet === item.title ? 'white' : undefined, height: 25, width: 25, justifyContent: 'center', alignItems: 'center', borderRadius: 1000 }} onPress={() => ScrollHandler(item, index)}>
              <ResponsiveText color="#EDC54E">{item.title}</ResponsiveText>
            </TouchableOpacity>
          )
        })}
      </View>

      <View style={{ flex: 0.9, paddingTop: 10, padding: 10 }}>
        <FlatList
          ref={scrollRef}
          contentContainerStyle={{ paddingVertical: 150 }}
          data={exploreCategoryByName}
          keyExtractor={(item, index) => item + index}
          renderItem={renderItem}
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={viewConfigRef.current}

        />
      </View>
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
    // height:250,
    // backgroundColor:'red'
    marginBottom: 20,
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

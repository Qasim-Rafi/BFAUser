import React, {useRef} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import ResponsiveText from '../../../components/RnText';
import {colors} from '../../../constants/colorsPallet';
import {hp, wp} from '../../../helpers/Responsiveness';
import { useCallback } from 'react';
import { routeName } from '../../../constants/routeName';
import FastImage from 'react-native-fast-image';
const Menu = (props) => {
  const scrollRef = useRef(null);
  const [activeTab, setActiveTab] = React.useState(0);
  const [data,setData]=React.useState(props.data)
  // console.log(data,'jjjj')
  const viewConfigRef = React.useRef({viewAreaCoveragePercentThreshold: 90});
  const ScrollHandler = (item, index) => {
    setActiveTab(index);
    // console.log('Items>>>>', item, index);
    scrollRef?.current.scrollToIndex({index, viewOffset: 0});
  };
  const onViewableItemsChanged = useCallback(({viewableItems , changed})=>{
    // setActiveTab(changed[0].index);
    // console.log('Changess' , changed[0]);
  },[]);

  const renderItem = ({item}) => {
    return (
      <View style={{}}>
        <ResponsiveText color={colors.yellow} margin={[15, 0]}>
          {item.menuCategoryName}
        </ResponsiveText>
        {item.dishlist.map(data => {
          return (
            <TouchableOpacity
              style={{
                height: wp(20),
                backgroundColor: colors.lightBlack,
                borderRadius: 5,
                marginBottom: 4,
                padding: 5,
                flexDirection: 'row',
                overflow: 'hidden',
              }} onPress={() =>
                props.navigation.push(routeName.DISH_DETAIL, {dish: data})
              }>
              <FastImage style={{width: '20%', height: '100%'}} source={{uri:data.imageDataB}} />
              
              <View style={{flex: 1, marginLeft: 10}}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    overflow: 'hidden',
                  }}>
                  <ResponsiveText size={2.9} color={colors.white}>
                    {data.dishName}
                  </ResponsiveText>
                  <ResponsiveText
                    color={'grey'}
                    numberOfLines={1}
                    margin={[0, 0, 6, 0]}
                    // maxWidth={'60%'}
                  >
                  </ResponsiveText>
                </View>
                <ResponsiveText color={'grey'} numberOfLines={2} size={2.7}>
                  {data.description}
                </ResponsiveText>
              </View>
              <View style={{width: '15%', overflow: 'hidden'}}>
                <ResponsiveText
                  margin={[4, 0, 0, 0]}
                  color={colors.yellow}
                  position="flex-end">
                  ${data.price}
                </ResponsiveText>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      
      <View horizontal={true}
        style={{
         flexDirection: 'row',
          borderBottomColor: 'grey',
          marginHorizontal:10,
          // marginVertical:10,
          borderBottomWidth: 1,
        }}>
          <ScrollView horizontal={true}>
            {data.map((items, index) => {
              return (
                <React.Fragment key={items.id}>
                  <TouchableOpacity
                  onPress={()=>ScrollHandler(items,index)}
                    style={{
                      //   width: wp(15),
                      //height:hp(5),
                      borderBottomColor: colors.yellow,
                      borderBottomWidth: index === activeTab ? 2 : 0,
                      marginRight: 20,
                      paddingBottom: 7,
                      zIndex: 100,
                    }}>
                    <ResponsiveText size={2.5} color={colors.white}>
                      {items.menuCategoryName}
                    </ResponsiveText>
                  </TouchableOpacity>
                 </React.Fragment>
              );
            })}
          </ScrollView>
      </View>
      <View style={{flex: 0.9, paddingTop: 10, padding: 10}}>
        <FlatList
          ref={scrollRef}
          contentContainerStyle={{paddingVertical: 10}}
          data={data}
          keyExtractor={(item, index) => item + index}
          renderItem={renderItem}
           onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={viewConfigRef.current}
          ListFooterComponent={<View style={{height:hp(5)}}></View>}
        />
      </View>
    </View>
  );
};

export default Menu;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black3,
    marginTop:10,
  },
});

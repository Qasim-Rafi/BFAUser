import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import ResponsiveText from './RnText';
import { colors } from '../constants/colorsPallet';



const CaloriesList = (props) => {
    const {data,title }= props

  return (
    <View>

      <FlatList
        data={data}
        renderItem={({item, index}) => (
            <>
                <View style={{margin:20}}>
                <ResponsiveText size={4} color={colors.white}>{item.title}</ResponsiveText>
                <View style={{borderBottomWidth:1,borderBottomColor:colors.grey,top:15}}></View>
                
            </View>
                <FlatList
                    data={item.data}
                    renderItem={({item,index})=>(
                        <View style={{margin:20}}>
                <View style={{flexDirection:'row',justifyContent:'space-between',}}>
                    <ResponsiveText size={3.8} color={colors.grey}>{item.name}</ResponsiveText>
                     <ResponsiveText size={3.8} color={colors.grey}>{item.value}</ResponsiveText>
                </View >
                
           </View>
                    )}
                />
            </>
        )
        }

        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default CaloriesList;
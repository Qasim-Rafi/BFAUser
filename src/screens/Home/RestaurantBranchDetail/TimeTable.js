import React, { Component, useState } from 'react'
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types'
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import ResponsiveText from '../../../components/RnText';
import { colors } from '../../../constants/colorsPallet';
import { wp } from '../../../helpers/Responsiveness';
import Fonts from '../../../helpers/Fonts';
import { useSelector } from 'react-redux';


const tableHead = ['Day', 'Opening Time', 'Closing Time'];
const tableTitle = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];


export default function TimeTable(props) {
  const [data, setData] = React.useState(props.data)
  console.log('table', data)

  const isThemeDark = useSelector(state => state.appReducers.setTheme.data)

  return (
    <View style={{ margin: 20,marginHorizontal:10, backgroundColor: isThemeDark? undefined : colors.white , borderRadius: 15 }}>
      <View style={{ backgroundColor: colors.yellow, padding: 15, alignItems: 'center', borderTopLeftRadius: 15, borderTopRightRadius: 15 }}>

        <ResponsiveText>Operation Hours</ResponsiveText>
      </View>
      <Table borderStyle={{ borderWidth: 0 }}>
        <Row data={tableHead} flexArr={[1.3, 2, 2]} style={styles.head} textStyle={{textAlign:'center',color:colors.grey}} />
        <TableWrapper style={styles.wrapper}>
          <Col data={tableTitle} style={styles.title} heightArr={[46, 30]} textStyle={[styles.Headertext,{color: isThemeDark ?  colors.white: colors.black}]}  />
          <Rows data={data.map((v) => {
            return (
              [v.openingTime, v.closingTime]
            )
          })} flexArr={[1, 1, 1]} style={styles.row} textStyle={styles.text} />
        </TableWrapper>
      </Table>
    </View>
  )

}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, },
  head: { height: 30,},
  wrapper: { flexDirection: 'row' },
  title: { flex: 1,fontSize:wp(1),color:'red', alignItems: 'center' },
  row: { height: 35 },
  text: { textAlign: 'center', color: colors.yellow },
  Headertext: {  color: colors.white,fontSize:wp(3.4) ,fontFamily: Fonts.Regular,}
});
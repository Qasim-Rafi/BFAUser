import React, { Component } from 'react'
import { StyleSheet,View }  from 'react-native';
import PropTypes from 'prop-types'
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import ResponsiveText from '../../../components/RnText';
import { colors } from '../../../constants/colorsPallet';

const tableHead= ['', 'Opening Time', 'Closing Time'] ;
    const tableTitle= ['Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday','Saturday','Sunday'];
    const tableData= [
      ['10.00', '20.00', ],
      ['10.00', '20.00', ],
      ['10.00', '20.00', ],
      ['10.00', '20.00', ],
      ['10.00', '20.00', ],
      ['10.00', '20.00', ],
      ['10.00', '20.00', ],
      ['10.00', '20.00', ],

    ];
    
export default function TimeTable({}) {
    
return (
            <View style={{margin:20}}>
            <View style={{backgroundColor:colors.yellow,padding:15,alignItems:'center'}}>

            <ResponsiveText>Operation Hours</ResponsiveText>
            </View>
               <Table borderStyle={{borderWidth: 1}}>
                <Row data={tableHead} flexArr={[1, 2, 2]} style={styles.head} textStyle={styles.Headertext}/>
            <TableWrapper style={styles.wrapper}>
                 <Col data={tableTitle} style={styles.title} heightArr={[28,28]} textStyle={styles.Headertext}/>
                    <Rows data={tableData} flexArr={[1, 1, 1]} style={styles.row} textStyle={styles.text}/>
            </TableWrapper>
        </Table> 
            </View>
        )
    
}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30,  },
  head: {  height: 40,   },
  wrapper: { flexDirection: 'row' },
  title: { flex: 1,  },
  row: {  height: 28  },
  text: { textAlign: 'center' ,color:colors.yellow},
  Headertext:{textAlign: 'center' ,color:colors.white}
});
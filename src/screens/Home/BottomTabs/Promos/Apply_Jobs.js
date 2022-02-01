import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Header from '../../../../components/Header';
import RnButton from '../../../../components/RnButton';
import ResponsiveText from '../../../../components/RnText';
import { colors } from '../../../../constants/colorsPallet';
import { globalPath } from '../../../../constants/globalPath';
import { hp, wp } from '../../../../helpers/Responsiveness';
import Icon from '../../../../components/Icon'

import FlashMessage from 'react-native-flash-message';
import DocumentPicker from 'react-native-document-picker';
import { set } from 'react-native-reanimated';

import { applyForJob } from '../../../../redux/actions/user.actions';
import { useDispatch } from 'react-redux';

// Pick a single file
export default function Apply_Jobs({ navigation, route }) {
  console.log(":ressssss::", route.params.data.restaurantId)
  const [data, setdata] = React.useState(route.params.data);
  const [coverletter, setcoverletter] = React.useState('');
  const dropdownRef = React.useRef(null);
  const [file, setFile] = React.useState(null)
  const dispatch = useDispatch();

  const validation = () => {
    if (coverletter === '') {
      dropdownRef.current.showMessage({
        message: 'Error',
        description: 'cover letter Required',
        type: 'danger',
        icon: { icon: 'auto', position: 'left' },
      });
    }
    else if (file === null) {
      dropdownRef.current.showMessage({
        message: 'Error',
        description: 'CV Required',
        type: 'danger',
        icon: { icon: 'auto', position: 'left' },
      });
    } else {
      console.log("fileeee:", file)
      var data = new FormData()
      data.append('Flie', file)
      data.append('restaurantId', route.params.data.restaurantId)
      data.append('jobId', route.params.data.id)
      data.append('id', 0)
      data.append('createdById', 0)
      data.append('coverLetter', coverletter)
    }
    var formdata = new FormData();
    formdata.append("CoverLetter", "san");
    formdata.append("jobId", "29");
    formdata.append("File", file);
    formdata.append("restaurantId", "11");
    formdata.append("id", "0");
    formdata.append("createdById", "0");
    var body = {
      'Flie': null,
      'restaurantId': 11,
      'jobId': 29,
      'id': 0,
      'createdById': 0,
      'coverLetter': 'saniya'
    }
    dispatch(applyForJob(formdata, navigation))
    // var myHeaders = new Headers();
    // myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiI2MCIsIk5hbWUiOiJzYW5peWEiLCJVc2VyVHlwZUlkIjoiMyIsIlJlc3RhdXJhbnRJZCI6IjAiLCJuYmYiOjE2NDM2MjI4NzksImV4cCI6MTY0NDA1NDg3OSwiaWF0IjoxNjQzNjIyODc5fQ.qdcRiP_X2aLV52FyCkKcgZvV4P8Ni-HOsXG1JqLWGFJiZWprLqJi2o8kERK3C52dGm9lbYnaLTELcc4OVkgDtQ");

    // var formdata = new FormData();
    // formdata.append("CoverLetter", "san");
    // formdata.append("jobId", "29");
    // formdata.append("File", file);
    // formdata.append("restaurantId", "11");
    // formdata.append("id", "0");
    // formdata.append("createdById", "0");

    // var requestOptions = {
    //   method: 'POST',
    //   headers: myHeaders,
    //   body: formdata,
    //   redirect: 'follow'
    // };

    // fetch("https://egreatlearning.com/web/api/JobApplications/AddJobApplication", requestOptions)
    //   .then(response => response.text())
    //   .then(result => console.log(result))
    //   .catch(error => console.log('error', error));

  };
  const Pickfile = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      console.log(
        res
      );
      setFile(res[0])
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        throw err;
      }
    }
  }
  return (
    <View style={styles.main_container}>
      <View style={{ flexDirection: 'row', justifyContent: "space-between", padding: 7 }}>
        <TouchableOpacity style={{ backgroundColor: colors.yellow1, paddingVertical: 10, paddingHorizontal: 10, borderRadius: 20, }} onPress={() => { navigation.goBack() }}><Icon source={globalPath.BACK_BLACK_ARROW} /></TouchableOpacity>
      </View>
      <View style={{ margin: 20, flex: 0.9 }}>
        <ResponsiveText size={4} color={colors.yellow}>
          {' '}
          Job Details
        </ResponsiveText>
        <View style={styles.marginTop}>
          <ResponsiveText size={4} color={colors.white}>
            {' '}
            Job Title
          </ResponsiveText>
          <View
            style={{
              backgroundColor: colors.black2,
              width: wp(90),
              height: hp(7),
              borderRadius: 6,
            }}>
            <TextInput

              placeholderTextColor={colors.grey}
              editable={false}
              style={{ padding: 10, }}
              value={data.jobTitle}
            />
          </View>
        </View>
        <View style={styles.marginTop}>
          <ResponsiveText size={4} color={colors.white}>
            Description
          </ResponsiveText>
          <View
            style={{
              backgroundColor: colors.black2,
              width: wp(90),
              borderRadius: 6,
            }}>
            <TextInput
              multiline={true}
              placeholderTextColor={colors.grey}
              editable={false}
              style={{ margin: 10, color: colors.grey }}
              value={data.jobDescription}
            />

          </View>

        </View>
        <Text style={{ marginTop: 10, color: colors.white, fontSize: 18, fontWeight: '450' }} >
          Cover letter
        </Text>
        <View
          style={{
            backgroundColor: colors.black2,
            width: wp(90),
            height: hp(7),
            marginTop: 10,
            borderRadius: 6,
          }}>

          <TextInput
            multiline={true}
            placeholderTextColor={colors.grey}
            editable={true}
            value={coverletter}
            onChangeText={setcoverletter}
            style={{ margin: 10, color: colors.grey }}
            placeholder='Introduce yourself'
          />
        </View>
        <View style={styles.marginTop}>
          <ResponsiveText size={4} color={colors.white}>
            {' '}
            Upload CV
          </ResponsiveText>
          <View style={{ flexDirection: 'row' }}>
            <View
              style={{
                backgroundColor: colors.black2,
                width: wp(65),
                height: hp(7), padding: 5,
                borderRadius: 6, justifyContent: 'center', alignItems: 'center'
              }}>
              <ResponsiveText color={colors.white} >{file != null ? file.name : ''}</ResponsiveText>
            </View>
            <TouchableOpacity onPress={() => Pickfile()}
              style={{ backgroundColor: colors.grey, width: wp(25), alignItems: 'center', justifyContent: 'center', borderTopRightRadius: 7, borderBottomRightRadius: 7 }}><ResponsiveText>Browse</ResponsiveText></TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            marginTop: 30,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <RnButton onPress={() => validation()} style={styles.btn_style}>
            <ResponsiveText size={4}>Submit</ResponsiveText>
          </RnButton>
        </View>
      </View>
      <FlashMessage ref={dropdownRef} />
    </View >
  );
}
const styles = StyleSheet.create({
  main_container: {
    backgroundColor: colors.black3,
    flex: 1,
  },
  marginTop: {
    marginTop: 20,
  },
  btn_style: {
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.yellow,
    paddingVertical: 10,
    width: wp(80),
  },
});

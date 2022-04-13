import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Header from '../../../../components/Header';
import RnButton from '../../../../components/RnButton';
import ResponsiveText from '../../../../components/RnText';
import { colors } from '../../../../constants/colorsPallet';
import { globalPath } from '../../../../constants/globalPath';
import { hp, wp } from '../../../../helpers/Responsiveness';
import Icon from '../../../../components/Icon';
import { useSelector } from 'react-redux';
import Api from '../../../../redux/lib/api';
import urls from '../../../../redux/lib/urls';
import { getPromoJobsData } from '../../../../redux/actions/user.actions';
import FlashMessage from 'react-native-flash-message';
import DocumentPicker from 'react-native-document-picker';
import { set } from 'react-native-reanimated';
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from 'react-native-indicators';
import { applyForJob } from '../../../../redux/actions/user.actions';
import { useDispatch } from 'react-redux';

// Pick a single file
export default function Apply_Jobs({ navigation, route }) {
  console.log(':ressssss::', route.params.data);

  const [data, setdata] = React.useState(route.params.data);
  const [coverletter, setcoverletter] = React.useState('');
  const dropdownRef = React.useRef(null);
  const [file, setFile] = React.useState(null);
  const [loader, setLoader] = React.useState(false);
  const dispatch = useDispatch();
  const loading = useSelector(
    state => state.appReducers.applyForJob.loading,
  );
  const validation = async()  => {
    if (coverletter === '') {
      dropdownRef.current.showMessage({
        message: 'Error',
        description: 'cover letter Required',
        type: 'danger',
        icon: { icon: 'auto', position: 'left' },
      });
    } else if (file === null) {
      dropdownRef.current.showMessage({
        message: 'Error',
        description: 'CV Required',
        type: 'danger',
        icon: { icon: 'auto', position: 'left' },
      });
    } else {
      var formdata = new FormData();
      formdata.append('CoverLetter', coverletter);
      formdata.append('jobId', route.params.data.id);
      formdata.append('File', file);
      formdata.append('restaurantBranchId', route.params.data.restaurantBranchId);
      formdata.append('id', '0');
      formdata.append('createdById', '0');
      // dispatch(applyForJob(formdata, navigation));
      // dispatch(getPromoJobsData(1, 4));
      try {
        setLoader(true)
        const res = await Api.post(urls.APPLY_FOR_JOBS ,formdata,true);
        console.log('jobsssApplied', res);
        if (res && res.success == true) {
          dispatch(getPromoJobsData(1,100))
          dropdownRef.current.showMessage({
            message: 'Success',
            description: 'Your application has been successfully submitted',
            type: 'success',
            icon: { icon: 'auto', position: 'left' },
            duration:4000
          });
          setLoader(false)
          setTimeout(() => {
          navigation.goBack();
          },4000)
        
        } else {
          setLoader(false)
        }
      } catch (error) {}
    }
  };

  const Pickfile = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      console.log(res);
      setFile(res[0]);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        throw err;
      }
    }
  };
  return (
    <View style={styles.main_container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 7,
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: colors.yellow1,
            paddingVertical: 10,
            paddingHorizontal: 10,
            borderRadius: 20,
          }}
          onPress={() => {
            navigation.goBack();
          }}>
          <Icon source={globalPath.BACK_BLACK_ARROW} />
        </TouchableOpacity>
      </View>
      <View style={{ margin: 20, flex: 0.9 }}>
        <ResponsiveText size={4} color={colors.yellow}>
          {' '}
          Job Details
        </ResponsiveText>
        <View style={styles.marginTop}>
          <ResponsiveText size={4} color={colors.white}>
            {' '}
            Job Title : 
          </ResponsiveText>
          <ResponsiveText size={4} color={colors.grey}>
          {'         '}
              {data.jobTitle}
              </ResponsiveText>
        </View>
        <View style={styles.marginTop}>
          <View style={{flex:1.2}}>
            <ResponsiveText size={4} color={colors.white}>
            Description : 
          </ResponsiveText>
          </View>
          <View style={{flex:2.5}}>
          
          <ResponsiveText size={3} color={colors.grey}>
          {data.jobDescription}
          </ResponsiveText>
          </View>

        </View>
        <View style={styles.marginTop}>
          <ResponsiveText size={4} color={colors.white}>
          {' '}
            Restaurant : 
          </ResponsiveText>
          <ResponsiveText size={4} color={colors.grey}>
          {'    '}
          {data.restuarantName}
          </ResponsiveText>
        </View>
        <View style={styles.marginTop}>
          <ResponsiveText size={4} color={colors.white}>
          {' '}
            Salary : 
          </ResponsiveText>
          <ResponsiveText size={4} color={colors.grey}>
          {'             '}
          {data.salaryRange}
          </ResponsiveText>
        </View>
        <Text
          style={{
            marginTop: hp(4),
            color: colors.white,
            fontSize: 18,
            fontWeight: '500',
          }}>
            {' '}
          Cover letter
        </Text>
        <View
          style={{
            backgroundColor: colors.black2,
            width: wp(90),
            height: hp(15),
            marginTop: hp(2),
            borderRadius: 6,
          }}>
          <TextInput
            multiline={true}
            placeholderTextColor={colors.grey}
            editable={true}
            value={coverletter}
            onChangeText={setcoverletter}
            style={{ margin: 5, color: colors.grey }}
            placeholder="Introduce yourself.."
          />
        </View>
        <View style={{marginTop:20}}>
          <ResponsiveText size={4} color={colors.white}>
            {' '}
            Upload CV
          </ResponsiveText>
          <View style={{flexDirection:'row'}}>
            <View
              style={{
                backgroundColor: colors.black2,
                width: wp(65),
                height: hp(7),
                padding: 5,
                borderRadius: 6,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <ResponsiveText color={colors.white}>
                {file != null ? file.name : ''}
              </ResponsiveText>
            </View>
            <TouchableOpacity
              onPress={() => Pickfile()}
              style={{
                backgroundColor: colors.grey,
                width: wp(25),
                alignItems: 'center',
                justifyContent: 'center',
                borderTopRightRadius: 7,
                borderBottomRightRadius: 7,
              }}>
              <ResponsiveText>Browse</ResponsiveText>
            </TouchableOpacity>
          </View>
        </View>


        <TouchableOpacity style={[styles.signin,{backgroundColor: data.userAppliedStatus === "Applied" ? colors.grey6 : colors.yellow}]} disabled={data.userAppliedStatus === "Applied" ? true : false} onPress={() => validation()}>
          {loader == true ?
            <  SkypeIndicator count={5} color={colors.black} size={30} />
            :
            <Text style={{fontWeight:'800',color:colors.black,top:15}}>
              {data.userAppliedStatus === "Applied" ? 'Already Applied' : 'Submit'}
            </Text>
          }
        </TouchableOpacity>


      </View>
      <FlashMessage ref={dropdownRef} />
    </View>
  );
}
const styles = StyleSheet.create({
  main_container: {
    backgroundColor: colors.black3,
    flex: 1,
  },
  marginTop: {
    marginTop: 20,
    flexDirection:'row',
  },
  btn_style: {
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.yellow,
    paddingVertical: 10,
    width: wp(80),
  },
  signin: {
    
    width: wp(80),
    height: hp(6),
    borderRadius: 7, alignItems: 'center',
    alignSelf:'center',
    marginTop: hp(10),
  },
});

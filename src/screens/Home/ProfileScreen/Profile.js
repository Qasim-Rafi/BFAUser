import React from 'react'
import { View, Text, StyleSheet , ScrollView} from 'react-native'
import Input from '../../../components/Input'
import { globalPath } from '../../../constants/globalPath'
import { colors } from '../../../constants/colorsPallet'
import { wp } from '../../../helpers/Responsiveness'
import { hp } from '../../../helpers/Responsiveness'
import RnButton from '../../../components/RnButton'

export default function Profile() {
return (
		<View style={styles.formArea}>
          <Input
            padding={[0, 0, 0, 25]}
            iconMargin={[0, 10, 0, 0]}
            placeholder="Full Name"
            leftIcon={globalPath.USER_LOGO}
          />
          <Input
            margin={[20, 0, 0, 0]}
            padding={[0, 0, 0, 25]}
            iconMargin={[0, 10, 0, 0]}
            placeholder="Email"
            leftIcon={globalPath.EMAIL_LOGO}
          />
          <Input
            margin={[20, 0, 0, 0]}
            padding={[0, 0, 0, 25]}
            iconMargin={[0, 10, 0, 0]}
            placeholder="Phone"
            leftIcon={globalPath.PHONE_LOGO}
          />
          <Input
            margin={[20, 0, wp(10), 0]}
            padding={[0, 0, 0, 25]}
            iconMargin={[0, 10, 0, 0]}
            placeholder="Password"
            secureTextEntry
            leftIcon={globalPath.PASSWORD_LOGO}
          />

          <RnButton
            fontFamily="SemiBold"
            height={100}
            margin={[0, 0]}
            title="Update Profile"
          />
        </View> 
	)
}
 const styles=StyleSheet.create({
	 formArea: {
     flex:0.70,
    // borderTopRightRadius: wp(8),
    // borderTopLeftRadius: wp(8),
    backgroundColor: '#202020',
    padding: wp(10),
  },
 })
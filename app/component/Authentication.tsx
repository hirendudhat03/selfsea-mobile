import React, { useEffect } from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  ImageSourcePropType,
} from 'react-native';
import Color from '../theme/colors';
// @ts-ignore
import {
  GoogleSignin,GoogleSigninButton,NativeModuleError,statusCodes,
} from '@react-native-google-signin/google-signin';
import Constant from '../theme/constant';

interface Props {
  text: string;
  icon?: ImageSourcePropType;
  type: () => void;
}



const Authentication = ({ text, icon, type }: Props) => {

  const _signIn = async () => {
    console.log('handlePressGoogleLogin');
    GoogleSignin.configure({
      // androidClientId: '3A:84:C8:28:4A:5F:82:9F:12:8B:71:46:C9:87:0F:68:E6:38:7E:AE',
      // iosClientId: '880711382534-k6q6jmtatddtll7u9qfmn31cbc1ckav1.apps.googleusercontent.com',
    });

    // GoogleSignin.hasPlayServices().then((hasPlayService) => {
    //   if (hasPlayService) {
      try{
        GoogleSignin.signIn().then((userInfo) => {
          console.log(JSON.stringify(userInfo))
        }).catch((e) => {
          console.log("ERROR IS: " + JSON.stringify(e));
        })
      } catch(error){
        console.error('Message', JSON.stringify(error));
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
          alert('User Cancelled the Login Flow')
        } else {
          alert(error.message)
        }
      }
    //   }
    // }).catch((e) => {
    //   console.log("ERROR IS: " + JSON.stringify(e));
    // })
  };

  const authLogin = () => {

    console.log('key : ', type);
    if (type === Constant.authLogin.GOOGLE ) {
      _signIn();
    } else if (type === Constant.authLogin.INSTAGRAM) {
      alert('instagram')
    } else if (type === Constant.authLogin.APPLE) {
      alert('Apple')
    }else {
      alert('null')
    }
  }

  return (
    <TouchableOpacity style={styles.container} onPress={() => authLogin()}>
      <Image style={styles.image} source={icon} />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '90%',
    padding: 15,
    borderRadius: 4,
    backgroundColor: Color.BASE_COLOR_WHITE,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: Color.BORDER_COLOR_LIGHTGRAY,
    justifyContent: 'center',
    flexDirection: 'row',
    marginVertical: 8,

  },
  image: {
    height: 18,
    width: 18,
  },
  text: {
    marginHorizontal: 10,
    fontSize: 16,
    color: Color.BORDER_COLOR_DARKGRAY,
  },
});

export default Authentication;

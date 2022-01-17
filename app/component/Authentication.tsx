import React, { useEffect, useRef } from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import Color from '../theme/colors';
// @ts-ignore
import {
  GoogleSignin,GoogleSigninButton,NativeModuleError,statusCodes,
} from '@react-native-google-signin/google-signin';
import Constant from '../theme/constant';
import InstagramLogin from 'react-native-instagram-login';
import { appleAuth } from '@invertase/react-native-apple-authentication';
import  auth from '@react-native-firebase/auth';

interface Props {
  text: string;
  icon?: ImageSourcePropType;
  type: string;
}

const Authentication = ({ text, icon, type }: Props) => {
  let instagramLogin = useRef();
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

  const authLogin = async () => {
    console.log('key : ', type);
    if (type === Constant.authLogin.GOOGLE ) {
      _signIn();
    } else if (type === Constant.authLogin.INSTAGRAM) {
      instagramLogin.show();
    } else if (type === Constant.authLogin.APPLE) {
      const appleAuthRequestResponse = await appleAuth.performRequest({
        requestedOperation: appleAuth.Operation.LOGIN,
        requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
      });
      console.log("UserData",appleAuthRequestResponse);
      
      const credentialState = await appleAuth.getCredentialStateForUser(appleAuthRequestResponse.user);

      if (!appleAuthRequestResponse.identityToken) {
        throw 'Apple Sign-In failed - no identify token returned';
      }
    
      // Create a Firebase credential from the response
      const { identityToken, nonce, email, fullName } = appleAuthRequestResponse;
      const appleCredential = auth.AppleAuthProvider.credential(identityToken, nonce);

      console.log("heraa",credentialState);
      console.log("Apple Credentials", email, fullName, nonce, "Anshh" ,identityToken);
      // Sign the user in with the credential
      // let firebaseCreds = auth().signInWithCredential(appleCredential).then(val => {
      //   console.log("Then",val);
      // });

      // console.log("Firebase Creds",firebaseCreds);
    }else {
      alert('null')
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={() => authLogin()}>
      <Image style={styles.image} source={icon} />
      <Text style={styles.text}>{text}</Text>

      <InstagramLogin
        ref={ref => instagramLogin = ref}
        appId='321916266462620'
        appSecret='106c0e7f22c7ec3f820e9522cb33d829'
        redirectUrl='https://www.selfsea.org/'
        scopes={['user_profile', 'user_media']}
        onLoginSuccess={(data:any) => console.log('Login Success', data)}
        onLoginFailure={(data:any) => console.log('failure',data)}
      />
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
    height: 19,
    width: 19,
    alignSelf: 'center',
  },
  text: {
    marginHorizontal: 10,
    fontSize: 16,
    color: Color.BORDER_COLOR_DARKGRAY,
    textAlign: 'center',
    
  },
});

export default Authentication;

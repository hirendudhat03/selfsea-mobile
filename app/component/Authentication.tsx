import React, { useEffect, useRef } from 'react';
import {
  Alert,
  Image,
  ImageSourcePropType,
  Platform,
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
import { appleAuth, appleAuthAndroid } from '@invertase/react-native-apple-authentication';
import  auth from '@react-native-firebase/auth';
import 'react-native-get-random-values';
import { v4 as uuid } from 'uuid'
import {decode, encode} from 'base-64'

interface Props {
  text: string;
  icon?: ImageSourcePropType;
  type: string;
}

const Authentication = ({ text, icon, type }: Props) => {
  let instagramLogin = useRef();
  const rawNonce = uuid();
  const state = uuid();
  const _signIn = async () => {
    console.log('handlePressGoogleLogin');
    GoogleSignin.configure({
      // androidClientId: '3A:84:C8:28:4A:5F:82:9F:12:8B:71:46:C9:87:0F:68:E6:38:7E:AE',
      // iosClientId: '880711382534-k6q6jmtatddtll7u9qfmn31cbc1ckav1.apps.googleusercontent.com',
    });

    try{
      GoogleSignin.signIn().then((userInfo) => {
        console.log(JSON.stringify(userInfo));
        Alert.alert(userInfo.user.givenName, userInfo.user.email);
      }).catch((e) => {
        console.log("ERROR IS: " + JSON.stringify(e));
      })
    } catch(error:any){
      console.error('Message', JSON.stringify(error));
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        Alert.alert('User Cancelled the Login Flow')
      } else {
        Alert.alert(error)
      }
    }
  };

  function parseJwt(token) {
    let base64Url = token.split('.')[1]
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
    let jsonPayload = decodeURIComponent(
      decode(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
        })
        .join('')
    )
    return JSON.parse(jsonPayload)
  }

  const authLogin = async () => {
    console.log('key : ', type);
    console.log("Anshuman Test Auth",appleAuthAndroid.isSupported)
    if (type === Constant.authLogin.GOOGLE ) {
      _signIn();
    } else if (type === Constant.authLogin.INSTAGRAM) {
      instagramLogin.show();
    } else if (type === Constant.authLogin.APPLE) {
      if(Platform.OS == "ios"){
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
      }else{
        console.log("scope", appleAuthAndroid.Scope)
        appleAuthAndroid.configure({
          // The Service ID you registered with Apple
          clientId: 'com.selfsea',
      
          // Return URL added to your Apple dev console. We intercept this redirect, but it must still match
          // the URL you provided to Apple. It can be an empty route on your backend as it's never called.
          redirectUri: 'https://www.selfsea.org',
      
          // The type of response requested - code, id_token, or both.
          responseType: appleAuthAndroid.ResponseType.ALL,
      
          // The amount of user information requested from Apple.
          scope: appleAuthAndroid.Scope.ALL,
      
          // Random nonce value that will be SHA256 hashed before sending to Apple.
          nonce: rawNonce,
      
          // Unique state value used to prevent CSRF attacks. A UUID will be generated if nothing is provided.
          state,
        });
      
        // Open the browser window for user sign in
        const response = await appleAuthAndroid.signIn();
        console.log("Android Apple Response",response, parseJwt(response.id_token));
        Alert.alert(parseJwt(response.id_token).email, parseJwt(response.id_token).sub);
      }
      
    }else {
      Alert.alert('null')
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
        onLoginSuccess={(data:any) => {
          console.log('Login Success', data)
          Alert.alert("User Id", data.user_id+'');
        }}
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
    fontWeight: '600',
  },
});

export default Authentication;

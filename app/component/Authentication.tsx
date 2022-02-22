import React from 'react';
import {
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
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import Constant from '../theme/constant';
// import InstagramLogin from 'react-native-instagram-login';
import {
  appleAuth,
  appleAuthAndroid,
} from '@invertase/react-native-apple-authentication';
import auth from '@react-native-firebase/auth';
import 'react-native-get-random-values';
import { v4 as uuid } from 'uuid';
import { decode } from 'base-64';
import Alert from './Alert';

interface Props {
  text: string;
  icon?: ImageSourcePropType;
  type: string;
  navigation: object;
}

const Authentication = ({ text, icon, type, navigation }: Props) => {
  // let instagramLogin = useRef();
  const rawNonce = uuid();
  const state = uuid();

  const _signIn = async () => {
    console.log('handlePressGoogleLogin');
    GoogleSignin.configure({
      webClientId:
        '597759932954-hj037g8cqseqq6dpukg26752k305sqpl.apps.googleusercontent.com',
    });

    try {
      GoogleSignin.signIn()
        .then(async userInfo => {
          var tokens = await GoogleSignin.getTokens();

          var credToken =
            userInfo.idToken !== null ? userInfo.idToken : tokens.accessToken;
          const googleCredential =
            auth.GoogleAuthProvider.credential(credToken);
          var response = await auth().signInWithCredential(googleCredential);
          if (response.additionalUserInfo?.isNewUser === false) {
            navigation.navigate('DrawerNavigator');
          } else {
            navigation.navigate('Signup', {
              type: 'google',
              email: userInfo.user.email,
              userInfo: userInfo,
            });
          }
        })
        .catch(e => {
          console.log('ERROR IS: ' + e);
          switch (e.code) {
            case 'auth/email-already-in-use':
              console.log('Email address already in use.');
              break;
            case 'auth/invalid-email':
              console.log('Email address is invalid.');
              break;
            case 'auth/operation-not-allowed':
              console.log('e during sign up.');
              break;
            case 'auth/weak-password':
              console.log(
                'Password is not strong enough. Add additional characters including special characters and numbers.',
              );
              break;
            default:
              console.log(e.message);
              break;
          }
        });
    } catch (error: any) {
      // console.error('Message', JSON.stringify(error));
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        Alert.alert('User Cancelled the Login Flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        Alert.alert('Signing In');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        Alert.alert('Play Services Not Available or Outdated');
      } else {
        Alert.alert(error.message);
      }
    }
  };

  const _signInApple = async () => {
    if (Platform.OS === 'ios') {
      const appleAuthRequestResponse = await appleAuth.performRequest({
        requestedOperation: appleAuth.Operation.LOGIN,
        requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
      });

      await appleAuth.getCredentialStateForUser(appleAuthRequestResponse.user);

      if (!appleAuthRequestResponse.identityToken) {
        throw 'Apple Sign-In failed - no identify token returned';
      }

      // Create a Firebase credential from the response
      const { identityToken, nonce, email, fullName } =
        appleAuthRequestResponse;
      auth.AppleAuthProvider.credential(identityToken, nonce);
      const appleCredential = auth.AppleAuthProvider.credential(
        identityToken,
        nonce,
      );
      const credentials = await auth().signInWithCredential(appleCredential);

      if (credentials.additionalUserInfo?.isNewUser === false) {
        navigation.navigate('DrawerNavigator');
      } else {
        navigation.navigate('Signup', {
          type: 'apple',
          email: email,
          userInfo: { identityToken, nonce, email, fullName },
          token: identityToken,
          credentials: credentials,
        });
      }
    } else {
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

      var userInfo = parseJwt(response.id_token);
      let token = response.id_token;
      const appleCredential = auth.AppleAuthProvider.credential(
        token,
        response.nonce,
      );
      let credentials = await auth().signInWithCredential(appleCredential);
      await credentials.user.sendEmailVerification();

      if (credentials.additionalUserInfo?.isNewUser === false) {
        navigation.navigate('DrawerNavigator');
      } else {
        navigation.navigate('Signup', {
          type: 'apple',
          email: userInfo.email,
          userInfo: userInfo,
          token: response.id_token,
          credentials: credentials,
        });
      }
    }
  };

  function parseJwt(token) {
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    let jsonPayload = decodeURIComponent(
      decode(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join(''),
    );
    return JSON.parse(jsonPayload);
  }

  const authLogin = async () => {
    console.log('key : ', type);
    if (type === Constant.authLogin.GOOGLE) {
      _signIn();
    } else if (type === Constant.authLogin.INSTAGRAM) {
      // instagramLogin.show();
    } else if (type === Constant.authLogin.APPLE) {
      console.log('Here');
      _signInApple();
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={() => authLogin()}>
      <Image style={styles.image} source={icon} />
      <Text style={styles.text}>{text}</Text>

      {/* <InstagramLogin
        ref={ref => (instagramLogin = ref)}
        appId="321916266462620"
        appSecret="106c0e7f22c7ec3f820e9522cb33d829"
        redirectUrl="https://www.selfsea.org/"
        scopes={['user_profile', 'user_media']}
        onLoginSuccess={(data: any) => {
          console.log('Login Success', data);
          Alert.alert('User Id', data.user_id + '');
        }}
        onLoginFailure={(data: any) => console.log('failure', data)}
      /> */}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '90%',
    padding: 13,
    borderRadius: 2,
    backgroundColor: Color.BASE_COLOR_WHITE,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: Color.BORDER_COLOR_LIGHTGRAY,
    justifyContent: 'center',
    flexDirection: 'row',
    marginVertical: 8,
    shadowColor: 'rgba(0, 0, 0, 0.24)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 1,
    shadowOpacity: 1,
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

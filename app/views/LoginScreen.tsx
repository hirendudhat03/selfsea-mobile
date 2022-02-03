import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
  Alert,
} from 'react-native';

import Constant from '../theme/constant';
import Fonts from '../theme/fonts';
import Color from '../theme/colors';
import Images from '../theme/images';

import Button from '../component/Button';
import Auth from '../component/Authentication';
import auth from '@react-native-firebase/auth';
import { api } from '../services';

const onPressText = () => {
  Alert.alert('onPressText');
};

const Login = ({ navigation }) => {
  // auth().signOut();

  useEffect(() => {
    auth().onAuthStateChanged(function (user) {
      console.log('user : ', user);
      if (user) {
        const checkTokenFunction = async () => {
          const idTokenResult = await auth().currentUser.getIdTokenResult();
          api.setAuthHeader(idTokenResult.token);
          console.log('User JWT: ', idTokenResult.token);

          if (idTokenResult.token) {
            console.log('if condition call');
            // setInitRoute('DrawerNavigator');
            navigation.navigate('DrawerNavigator');
          } else {
            navigation.navigate('Login');
          }
        };

        checkTokenFunction();

        // User is signed in.
      } else {
        navigation.navigate('Login');
        // No user is signed in.
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={Images.Background}
        resizeMode="stretch"
        style={styles.image}>
        <View style={styles.headerView}>
          <Image source={Images.Logo} />
        </View>
        <View style={styles.contentView}>
          <Auth
            text={'continue with Google'}
            icon={Images.Google}
            type={Constant.authLogin.GOOGLE}
          />
          <Auth
            text={'continue with Instagram'}
            icon={Images.Instagram}
            type={Constant.authLogin.INSTAGRAM}
          />
          <Auth
            text={'continue with Apple'}
            icon={Images.Apple}
            type={Constant.authLogin.APPLE}
          />

          <Button
            type={Constant.buttons.PRIMARY}
            text={'sign up with email'}
            style={styles.buttonStyle}
            onPress={() => navigation.navigate('Signup')}
          />

          <Text style={styles.contentText}>
            by signing up for selfsea, you are agreeing to the
          </Text>
          <View style={styles.conditionViewStyle}>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL(Constant.link.PRIVACY_POLICY);
              }}>
              <Text style={styles.contentSecondText}>Privacy Policy</Text>
            </TouchableOpacity>
            <Text style={styles.contentSecondTextAnd}> and</Text>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL(Constant.link.TERMS_OF_USE);
              }}>
              <Text style={styles.contentSecondText}> Terms of Use</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bottomView}>
          <Text style={styles.bottomText} onPress={() => onPressText()}>
            already have an account?
          </Text>
          <Button
            type={Constant.buttons.CLOSE}
            text={'sign in'}
            onPress={() => navigation.navigate('Signin')}
            style={styles.signinButton}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  headerView: {
    flex: 1.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentView: {
    flex: 1.8,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: -10,
  },
  contentText: {
    fontFamily: Fonts.CALIBRE,
    marginTop: 7,
    fontSize: 14,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 21,
    letterSpacing: 0,
    textAlign: 'center',
    color: Color.PLACEHOLDER_TEXT,
  },
  contentSecondText: {
    fontFamily: Fonts.CALIBRE,
    color: Color.BORDER_COLOR_DARKGRAY,
    marginTop: 4,
    fontSize: 12,
    textDecorationLine: 'underline',
  },
  contentSecondTextAnd: {
    fontFamily: Fonts.CALIBRE,
    color: Color.BORDER_COLOR_DARKGRAY,
    marginTop: 4,
    marginHorizontal: 2,
    fontSize: 12,
  },
  bottomView: {
    flex: 1.1,
    justifyContent: 'center',
    marginTop: 50,
    alignItems: 'center',
  },
  bottomText: {
    fontFamily: Fonts.CALIBRE,
    marginVertical: 9,
    fontWeight: 'bold',
    color: Color.DESCRIPTION_COLOR_TEXT,
  },
  signinButton: {
    shadowColor: 'rgba(0, 0, 0, 0.24)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 1,
    shadowOpacity: 1,
  },
  buttonStyle: { marginTop: 8 },
  conditionViewStyle: { flexDirection: 'row' },
});

export default Login;

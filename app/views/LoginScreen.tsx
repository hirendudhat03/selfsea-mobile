import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
  SafeAreaView,
  Alert,
} from 'react-native';

import Constant from '../theme/constant';
import Fonts from '../theme/fonts';
import Color from '../theme/colors';
import Images from '../theme/images';

import Button from '../component/Button';
import Auth from '../component/Authentication';
import { auths } from '../config/static';
import { Theme } from '../styles';
import { SignupResponse } from '../redux/actions/SignupAction';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const onPressText = () => {
  Alert.alert('onPressText');
};

const Login = ({ navigation }) => {
  const dispatch = useDispatch();

  // useEffect(() => {
  // below function will be useful when we will work on the remember sign in
  // const checkUser = async () => {
  //   if (auth().currentUser) {
  //     const idTokenResult = await auth().currentUser.getIdTokenResult();
  //     api.setAuthHeader(idTokenResult.token);
  //     console.log('User JWT: ', idTokenResult.token);
  //   }
  // };
  // }, [navigation]);

  var theme = Theme();

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={Images.Background}
        resizeMode="stretch"
        style={styles.image}>
        <View style={styles.containerView}>
          <View style={styles.headerView}>
            <Image source={Images.Logo} />
          </View>
          <View style={styles.contentView}>
            <Auth
              text={auths.CONTINUE_WITH_GOOGLE}
              icon={Images.Google}
              type={Constant.authLogin.GOOGLE}
            />
            <Auth
              text={auths.CONTINUE_WITH_APPLE}
              icon={Images.Apple}
              type={Constant.authLogin.APPLE}
            />

            <Button
              type={Constant.buttons.PRIMARY}
              text={auths.SIGNUP_WITH_EMAIL}
              style={[theme.marginTop8]}
              onPress={() => {
                dispatch(SignupResponse(null, false));
                AsyncStorage.setItem('currentUser_role', 'true');
                navigation.navigate('Signup');
              }}
            />
            <Text style={styles.contentText}>{auths.SIGNUP_AGREEMENT_L1}</Text>
            <View style={[theme.row]}>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(Constant.link.PRIVACY_POLICY);
                }}>
                <Text style={styles.contentSecondText}>
                  {auths.PRIVACY_POLICY}
                </Text>
              </TouchableOpacity>
              <Text style={styles.contentSecondTextAnd}> and</Text>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(Constant.link.TERMS_OF_USE);
                }}>
                <Text style={styles.contentSecondText}>
                  {' '}
                  {auths.TERMS_CONDITIONS}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.signinBottomView}>
            <View style={styles.bottomView}>
              <Text style={styles.bottomText} onPress={() => onPressText()}>
                {auths.ALREADY_HAVE_ACCOUNT}
              </Text>
            </View>
            <View style={[styles.signinButtonView]}>
              <Button
                type={Constant.buttons.CLOSE}
                text={auths.SIGNIN_BUTTON}
                onPress={() => {
                  AsyncStorage.setItem('currentUser_role', 'false');
                  navigation.navigate('Signin');
                }}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
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
    justifyContent: 'center',
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
  signinButtonView: {
    alignItems: 'center',
    width: '100%',
    marginBottom: 50,
  },
  buttonStyle: { marginTop: 8 },
  conditionViewStyle: { flexDirection: 'row' },
  containerView: { flex: 1 },
  signinBottomView: { flex: 1, justifyContent: 'flex-end' },
});

export default Login;

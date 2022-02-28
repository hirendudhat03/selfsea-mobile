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
} from 'react-native';

import Constant from '../theme/constant';
import Fonts from '../theme/fonts';
import Color from '../theme/colors';
import Images from '../theme/images';

import Button from '../components/Button';
import Auth from '../components/Authentication';
import { authText } from '../config/static';
import { Theme } from '../styles';
import { SignUpResponse } from '../redux/actions/SignUpAction';
import { useDispatch } from 'react-redux';

const Login = ({ navigation }) => {
  const dispatch = useDispatch();

<<<<<<< Updated upstream
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
=======
  useEffect(() => {
    // below function will be useful when we will work on the remember sign in
    const checkUser = async () => {
      const user = auth().currentUser;
      if (user) {
        const idTokenResult = await user.getIdTokenResult();
        api.setAuthHeader(idTokenResult.token);
        console.log('User JWT: ', idTokenResult.token);

        if (idTokenResult.token) {
          const today = new Date();
          console.log('Current:::', today.toLocaleDateString());
          AsyncStorage.getItem('keepSignin').then((value: any) => {
            console.log('value ;', value);

            if (value < today.toLocaleDateString()) {
              auth().signOut();
              navigation.navigate('SignIn');
            } else {
              navigation.navigate('TabNavigator');
            }
          });
        } else {
          navigation.navigate('Login');
        }
      }
    };
    checkUser();
  }, [navigation]);
>>>>>>> Stashed changes

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
              text={authText.CONTINUE_WITH_GOOGLE}
              icon={Images.Google}
              type={Constant.authLogin.GOOGLE}
              navigation={navigation}
            />
            <Auth
              text={authText.CONTINUE_WITH_APPLE}
              icon={Images.Apple}
              type={Constant.authLogin.APPLE}
              navigation={navigation}
            />

            <Button
              type={Constant.buttons.PRIMARY}
              text={authText.SIGN_UP_WITH_EMAIL}
              style={[theme.marginTop8]}
              onPress={() => {
                dispatch(SignUpResponse(null, false));
                navigation.navigate('SignUp');
              }}
            />
            <Text style={styles.contentText}>
              {authText.SIGN_UP_AGREEMENT_L1}
            </Text>
            <View style={[theme.row]}>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(Constant.link.PRIVACY_POLICY);
                }}>
                <Text style={styles.contentSecondText}>
                  {authText.PRIVACY_POLICY}
                </Text>
              </TouchableOpacity>
              <Text style={styles.contentSecondTextAnd}> and</Text>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(Constant.link.TERMS_OF_USE);
                }}>
                <Text style={styles.contentSecondText}>
                  {' '}
                  {authText.TERMS_CONDITIONS}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.signInBottomView}>
            <View style={styles.bottomView}>
              <Text style={styles.bottomText}>
                {authText.ALREADY_HAVE_ACCOUNT}
              </Text>
            </View>
            <View style={[styles.signInButtonView]}>
              <Button
                type={Constant.buttons.CLOSE}
                text={authText.SIGN_IN_BUTTON}
                onPress={() => {
                  navigation.navigate('SignIn');
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
  signInButton: {
    shadowColor: 'rgba(0, 0, 0, 0.24)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 1,
    shadowOpacity: 1,
  },
  signInButtonView: {
    alignItems: 'center',
    width: '100%',
    marginBottom: 50,
  },
  buttonStyle: { marginTop: 8 },
  conditionViewStyle: { flexDirection: 'row' },
  containerView: { flex: 1 },
  signInBottomView: { flex: 1, justifyContent: 'flex-end' },
});

export default Login;

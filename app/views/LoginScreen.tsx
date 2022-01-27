import React, { useRef } from 'react';
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
  ScrollView
} from 'react-native';

import Constant from '../theme/constant';
import Fonts from '../theme/fonts';
import Color from '../theme/colors';
import Images from '../theme/images';

import Button from '../component/Button';
import Auth from '../component/Authentication';
import InstagramLogin from 'react-native-instagram-login';
import { auths } from '../config/static';

const onPressText = () => {
  Alert.alert("onPressText")
}

const Login = ({ navigation }) => {
  let instagramLogin = useRef();
  
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={Images.Background} resizeMode="stretch" style={styles.image}>
        <ScrollView>
          <View style={styles.headerView}>
            <Image source={Images.Logo} />
          </View>
          <View style={styles.contentView}>
            <Auth text={auths.CONTINUE_WITH_GOOGLE} icon={Images.Google} type={Constant.authLogin.GOOGLE} />
            <Auth text={auths.CONTINUE_WITH_INSTA} icon={Images.Instagram} type={Constant.authLogin.INSTAGRAM} />
            <Auth text={auths.CONTINUE_WITH_APPLE} icon={Images.Apple} type={Constant.authLogin.APPLE} />
            <InstagramLogin
              ref={ref => instagramLogin = ref}
              appId='321916266462620'
              appSecret='106c0e7f22c7ec3f820e9522cb33d829'
              redirectUrl='https://www.selfsea.org/'
              scopes={['user_profile', 'user_media']}
              onLoginSuccess={(data:any) => console.log('Login Success', data)}
              onLoginFailure={(data:any) => console.log('failure',data)}
            />
            <Button type={Constant.buttons.PRIMARY} text={auths.SIGNUP_WITH_EMAIL} style={{ marginTop: 8 }} onPress={() => navigation.navigate('Signup')} />
            <Text style={styles.contentText}>{auths.SIGNUP_AGREEMENT_L1}</Text>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity  onPress={()=>{ Linking.openURL(Constant.link.PRIVACY_POLICY)}}>
                <Text style={styles.contentSecondText}>{auths.PRIVACY_POLICY}</Text>
              </TouchableOpacity>
              <Text style={styles.contentSecondTextAnd}> and</Text>
              <TouchableOpacity   onPress={()=>{ Linking.openURL(Constant.link.TERMS_OF_USE)}}>
                <Text style={styles.contentSecondText}> {auths.TERMS_CONDITIONS}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.bottomView}>
              <Text style={styles.bottomText} onPress={() => onPressText()}>
                {auths.ALREADY_HAVE_ACCOUNT}
              </Text>
            </View>
            <View style={[styles.signinButtonView]}>
              <Button
                type={Constant.buttons.CLOSE}
                text={auths.SIGNIN_BUTTON}
                onPress={() => navigation.navigate('Signin')}
              />
            </View>
          </View>
        </ScrollView>
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
    // flex: 1.2,
    marginTop:100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentView: {
    flex: 1.8,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 50,
  },
  contentText: {
    // fontSize: 12,
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
  signinButtonView:{
    alignItems:"center",
    width:"100%",
    marginBottom:50
  }

});

export default Login;

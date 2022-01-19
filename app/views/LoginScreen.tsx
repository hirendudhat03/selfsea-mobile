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
  Alert
} from 'react-native';

import Constant from '../theme/constant';
import Fonts from '../theme/fonts';
import Color from '../theme/colors';
import Images from '../theme/images';

import Button from '../component/Button';
import Auth from '../component/Authentication';
import InstagramLogin from 'react-native-instagram-login';
import CookieManager from '@react-native-community/cookies';
import { AppleButton } from '@invertase/react-native-apple-authentication';

const onPressText = () => {
  Alert.alert("onPressText")
}

const Login = ({ navigation }) => {
  let instagramLogin = useRef();
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
      <ImageBackground
        source={Images.Background}
        resizeMode="stretch"
        style={styles.image}>
        <View style={styles.headerView}>
          <Image source={Images.Logo} />
        </View>
        <View style={styles.contentView}>
          <Auth text={"Continue with Google"} icon={Images.Google} type={Constant.authLogin.GOOGLE} />
          <Auth text={"Continue with Instagram"} icon={Images.Instagram} type={Constant.authLogin.INSTAGRAM} />
          <Auth text={"Continue with Apple"} icon={Images.Apple} type={Constant.authLogin.APPLE} />
          <InstagramLogin
            ref={ref => instagramLogin = ref}
            appId='321916266462620'
            appSecret='106c0e7f22c7ec3f820e9522cb33d829'
            redirectUrl='https://www.selfsea.org/'
            scopes={['user_profile', 'user_media']}
            onLoginSuccess={(data:any) => console.log('Login Success', data)}
            onLoginFailure={(data:any) => console.log('failure',data)}
          />
          <Button type={Constant.buttons.PRIMARY} text={"sign up with email"} style={{ marginTop: 8 }} onPress={() => navigation.navigate('Signup')} />
          <Text style={styles.contentText}>by signing up for selfsea, you are agreeing to the</Text>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity  onPress={()=>{ Linking.openURL(Constant.link.PRIVACY_POLICY)}}>
              <Text style={styles.contentSecondText}>Privacy Policy</Text>
            </TouchableOpacity>
            <Text style={styles.contentSecondTextAnd}> and</Text>
            <TouchableOpacity   onPress={()=>{ Linking.openURL(Constant.link.TERMS_OF_USE)}}>
              <Text style={styles.contentSecondText}> Terms of Use</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bottomView}>
            <Text style={styles.bottomText} onPress={() => onPressText()}>
              already have an account?
            </Text>
            <Button
              type={Constant.buttons.CLOSE}
              text={'sign in'}
              onPress={() => navigation.navigate('Signin')}
            />
          </View>
        </View>
        </ImageBackground>
      </SafeAreaView>
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
    fontSize: 12,
    fontFamily: Fonts.CALIBRE,
    color: Color.BORDER_COLOR_DARKGRAY,
    marginTop: 15,
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
});

export default Login;

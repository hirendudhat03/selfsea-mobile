import React, { useRef } from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert
} from 'react-native';

import Constant from '../theme/constant';
import Fonts from "../theme/fonts";
import Color from "../theme/colors";
import Images from '../theme/images';

import Button from '../component/Button';
import Auth from '../component/Authentication';
import InstagramLogin from 'react-native-instagram-login';
import CookieManager from '@react-native-community/cookies';
import {  } from "react-native";

const onPressText = () => {
  Alert.alert("onPressText")
}


const Login = ({ navigation }) => {
  let instagramLogin = useRef();
  return (
    <View style={styles.container}>
      <ImageBackground source={Images.Background} resizeMode="cover" style={styles.image}>
        <View style={styles.headerView}>
          <Image source={Images.Logo} />
        </View>
        <View style={styles.contentView}>

          <Auth text={"Continue with Google"} icon={Images.Google} type={Constant.authLogin.GOOGLE} />
          <Auth text={"Continue with Instagram"} icon={Images.Instagram} type={Constant.authLogin.INSTAGRAM} />
          <Auth text={"Continue with Apple"} icon={Images.Apple} type={Constant.authLogin.APPLE} />

          {/* <TouchableOpacity
          // style={styles.btn}
          onPress={() => instagramLogin.show()}>
            <Text style={{ color: 'white', textAlign: 'center' }}>Login now</Text>
          </TouchableOpacity> */}

          <InstagramLogin
            ref={ref => instagramLogin = ref}
            appId='321916266462620'
            appSecret='106c0e7f22c7ec3f820e9522cb33d829'
            redirectUrl='https://www.selfsea.org/'
            scopes={['user_profile', 'user_media']}
            onLoginSuccess={(data:any) => console.log('Login Success', data)}
            onLoginFailure={(data:any) => console.log('failure',data)}
          />

          <Button type={Constant.buttons.PRIMARY} text={"sign up with email"} style={{ marginTop: 10 }} onPress={() => navigation.navigate('Signup')} />

          <Text style={styles.contentText}>by signing up for selfsea, you are agreeing to the</Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.contentSecondText}>Privacy Policy</Text>
            <Text style={styles.contentSecondTextAnd}> and</Text>
            <Text style={styles.contentSecondText}> Terms of Use</Text>
          </View>



        </View>
        <View style={styles.bottomView}>

          <Text style={styles.bottomText} onPress={() => onPressText()}>already have an account?</Text>
          <Button type={Constant.buttons.CLOSE}
            text={"Sign in"} onPress={() => navigation.navigate('Signin')} />

        </View>

      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  headerView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  contentView: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 25,
  },
  contentText: {
    fontFamily: Fonts.CALIBRE,
    color: Color.BORDER_COLOR_DARKGRAY,
    marginTop: 10,
  },
  contentSecondText: {
    fontFamily: Fonts.CALIBRE,
    color: Color.BORDER_COLOR_DARKGRAY,
    marginTop: 4,
    textDecorationLine: 'underline',
  },
  contentSecondTextAnd: {
    fontFamily: Fonts.CALIBRE,
    color: Color.BORDER_COLOR_DARKGRAY,
    marginTop: 4,
  },
  bottomView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomText: {
    fontFamily: Fonts.CALIBRE,
    marginVertical: 9,
  },

});


export default Login;

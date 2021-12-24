import React from "react";
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet, Image } from 'react-native';
import Background from '../assets/images/pngs/background.png'
import Logo from '../assets/images/pngs/logo.png'
import Button from '../component/Button'
import Constant from '../theme/constant'
import Fonts from "app/theme/fonts";
import Color from "app/theme/colors";
import Google from '../assets/images/pngs/google.png';
import Instagram from '../assets/images/pngs/instagram.png';
import Apple from '../assets/images/pngs/applelogo.png'
import Auth from '../component/Authentication';
import Alert from "app/component/Alert";


const onPressGoogle = () => {
  alert("onPressGoogle")
}
const onPressInsta = () => {
  alert("onPressInsta")
}
const onPressApple = () => {
  alert("onPressApple")
}
const onPressText = () => {
  alert("onPressText")
}
const onPresSignup = () => {
  alert("onPresSignup")
}


const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={Background} resizeMode="cover" style={styles.image}>
        <View style={styles.headerView}>
          <Image source={Logo} />
        </View>
        <View style={styles.contentView}>

          <Auth text={"Continue with Google"} icon={Google} onPress={() => onPressGoogle()} />
          <Auth text={"Continue with Instagram"} icon={Instagram} onPress={() => onPressInsta()} />
          <Auth text={"Continue with Apple"} icon={Apple} onPress={() => onPressApple()} />

          <Button type={Constant.buttons.PRIMARY} text={"sign up with email"} style={{ marginTop: 10 }} onPress={() => onPresSignup()} />

          <Text style={styles.contentText}>by signing up for selfsea, you are agreeing to the</Text>
         <View style={{flexDirection:'row'}}>
         <Text style={styles.contentSecondText}>Privacy Policy</Text>
         <Text style={styles.contentSecondTextAnd}> and</Text>
         <Text style={styles.contentSecondText}> Terms of Use</Text>
         </View>
           


        </View>
        <View style={styles.bottomView}>

          <Text style={styles.bottomText} onPress={() => onPressText()}>already have an account?</Text>
          <Button type={Constant.buttons.CLOSE}
            text={"Sign in"} onPress={() => navigation.navigate('Home')} />

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

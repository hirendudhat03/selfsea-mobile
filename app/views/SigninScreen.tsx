import React, { useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, ScrollView,  } from 'react-native';

import Constant from '../theme/constant';
import Fonts from '../theme/fonts';
import Color from '../theme/colors';
import Images from '../theme/images';

import Button from '../component/Button';
import Auth from '../component/Authentication';
import TextInput from '../component/CustomTextInput';
import CheckBox from '../component/Checkbox';
import Header from '../component/Header';


import {useDispatch} from 'react-redux'
import {LoginRequest} from '../redux/actions/LoginAction'


const Signin = ({ navigation }) => {


  const dispatch = useDispatch()

 

  const [isSelectedCheckBox, setISSelectionCheckBox] = useState(false);

  const selectCheckBox = () => {
    if (isSelectedCheckBox) {
      setISSelectionCheckBox(false);
    } else {
      setISSelectionCheckBox(true);
    }
  };

  const [focus, setFocus] = useState<boolean>();

  const selectFocus = () => {
    if (focus) {
      setFocus(false);
    } else {
      setFocus(true);
    }

  };


  const [circleFillEmail, setCircleFillEmail] = useState<boolean>();


  const selectFill = (text) => {
    setEmail(text);
    if (text === '') {

      setCircleFillEmail(false);
      setEmailBorder(Color.COMMUNITY_ORANGE)
      setEmailError('enter email ');
    } else if (text.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) === null) {
      setEmailBorder(Color.COMMUNITY_ORANGE)
      setEmailError('enter valid email ');
      setCircleFillEmail(false);

    }
    else {
      setCircleFillEmail(true);
      setEmailBorder(Color.BORDER_COLOR_LIGHTGRAY)
      setEmailError('');
    }
  };

  const [circleFillPassword, setCircleFillPassword] = useState<boolean>();


  const selectFillPassword = (text) => {
    console.log("text:::", text)
    setPassword(text);
    if (text === '') {
      setpasswordBorder(Color.COMMUNITY_ORANGE)
      setPasswordError('enter password ');
      setCircleFillPassword(false);
    } else {
      setpasswordBorder(Color.BORDER_COLOR_LIGHTGRAY)
      setPasswordError(' ');
      setCircleFillPassword(true);
    }
  };
  const [email, setEmail] = useState('test@selfsea.com');
  const [emailError, setEmailError] = useState('');

  const [password, setPassword] = useState('1234567890');
  const [passwordError, setPasswordError] = useState('');


  const [emailBorder, setEmailBorder] = useState('')
  const handleTouch = () => {
 
    setEmailBorder(Color.BASE_COLOR_LIGHT_BLUE)
  
  }     
 
  const [passwordBorder, setpasswordBorder] = useState('')
  const handleTouchpasswordBorder = () => {
 
   setpasswordBorder(Color.BASE_COLOR_LIGHT_BLUE)
  
  }   

  const SigninValidation = async () => {
    if (!email && !password) {
      setEmailError('Email Required');
      setPasswordError('Password Required');
    } else if (!email) {
      setEmailError('Email Required');
    } else if (
      email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) === null
    ) {
      setEmailError('Valid email Required');
    } else if (!password) {
      setPasswordError('Password Required');
    } else {

      dispatch(LoginRequest(email,password,navigation))
      
    }
  };


  
  return (
    <View style={styles.container}>
      <Header
        type={Constant.navigatioHeader.PAGE_HEADER}
        leftIcon={Images.Arrowsquare}
        label={'sign in'}
        onPress={() => navigation.goBack()}
      />
      <ScrollView>
        <View style={styles.contentView}>
          <TextInput
            type={Constant.textInput.LARGE_INPUT}
            placeholder={'email@address.com'}
            label={'email'}
            style={{ fontSize: 18 }}
            onChangeText={text => {
              selectFill(text)
            }}
            value={email}
            helperText={emailError}
            iconVisibleFill={true}
            checkRight={true}
            circleFill={circleFillEmail}
            onTouchStart={() => handleTouch()}
            borderColor={emailBorder}
          />

          <TextInput
            type={Constant.textInput.LARGE_INPUT}
            label={'password'}
            style={{ fontSize: 18 }}
            onChangeText={text => {
              selectFillPassword(text)
            }}
            value={password}
            helperText={passwordError}
            iconVisible={true}
            secureTextEntry={focus === undefined ? true : focus}
            secureTextEntryChange={selectFocus}
            iconVisibleFill={true}
            checkRight={true}
            circleFill={circleFillPassword}
            onTouchStart={() => handleTouchpasswordBorder()}
            borderColor={passwordBorder}
          />
          <Text style={styles.contentText}>forgot your password? </Text>
          <CheckBox
            onPressCheckbox={selectCheckBox}
            style={styles.checkBox}
            isSelectedCheckBox={isSelectedCheckBox}
            text={'keep me signed in'}
          />

          <Button
            type={Constant.buttons.PRIMARY}
            text={'sign in'}
            style={{ marginTop: 10, marginBottom: 10 }}
            onPress={() => SigninValidation()}
          />

          <View style={{ flexDirection: 'row' }} />
        </View>
        <View style={styles.bottomView}>
          <Text style={styles.bottomText}>or</Text>
          <Auth
            text={'Continue with Google'}
            icon={Images.Google}
            type={Constant.authLogin.GOOGLE}
          />
          <Auth
            text={'Continue with Instagram'}
            icon={Images.Instagram}
            type={Constant.authLogin.INSTAGRAM}
          />
          <Auth
            text={'Continue with Apple'}
            icon={Images.Apple}
            type={Constant.authLogin.APPLE}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  headerView: {
    flex: 0.5,
    // alignItems: 'center',
    backgroundColor: Color.BASE_COLOR_DARK_BLUE,
  },
  contentView: {
    flex: 1.5,
    alignItems: 'center',
  },

  bottomView: {
    flex: 1.5,
    alignItems: 'center',
    marginTop: 20,
  },
  bottomText: {
    fontFamily: Fonts.CALIBRE,
    marginBottom: 10,
    color: Color.CONTENT_COLOR_BLACK_TEXT,
    fontWeight: 'bold',
  },
  contentText: {
    fontFamily: Fonts.CALIBRE,
    fontSize: 17,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 30,
    letterSpacing: 0,
    color: Color.TEXT_COLOR_PASSWORD,
    textDecorationLine: 'underline',
    alignSelf: 'flex-start',
    marginHorizontal: 20,
  },
  checkBox: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
});

export default Signin;

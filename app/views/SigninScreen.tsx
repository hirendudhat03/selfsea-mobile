import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import Constant from '../theme/constant';
import Fonts from '../theme/fonts';
import Color from '../theme/colors';
import Images from '../theme/images';

import Button from '../component/Button';
import Auth from '../component/Authentication';
import TextInput from '../component/CustomTextInput';
import CheckBox from '../component/Checkbox';
import Header from '../component/Header';

import { useDispatch, useSelector } from 'react-redux';
import { LoginRequest } from '../redux/actions/LoginAction';

import Loader from '../component/Loader';
import { auths } from '../config/static';

const Signin = ({ route, navigation }) => {
  const dispatch = useDispatch();

  const loginRes = useSelector(state => state.LoginReducer);
  console.log('LoginReducer : ', JSON.stringify(loginRes), route);

  const [isSelectedCheckBox, setISSelectionCheckBox] = useState(false);

  const selectCheckBox = () => {
    if (isSelectedCheckBox) {
      setISSelectionCheckBox(false);
    } else {
      setISSelectionCheckBox(true);
    }
  };

  const [focus, setFocus] = useState<boolean>(true);

  const selectFocus = () => {
    if (focus) {
      setFocus(false);
    } else {
      setFocus(true);
    }
  };

  const selectFill = text => {
    setEmail(text);
    if (text === '') {
      setEmailBorder(Color.COMMUNITY_ORANGE);
      setEmailError('Please enter email address. ');
    } else if (
      text.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/) === null
    ) {
      setEmailBorder(Color.COMMUNITY_ORANGE);
      setEmailError('Please enter a valid email address. ');
    } else {
      setEmailBorder(Color.BORDER_COLOR_LIGHTGRAY);
      setEmailError('');
    }
  };

  const selectFillPassword = text => {
    console.log('text:::', text);
    setPassword(text);
    if (text === '') {
      setpasswordBorder(Color.COMMUNITY_ORANGE);
      setPasswordError('Password must contain a number. ');
    } else {
      setpasswordBorder(Color.BORDER_COLOR_LIGHTGRAY);
      setPasswordError(' ');
    }
  };
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [emailBorder, setEmailBorder] = useState('');
  const handleTouch = () => {
    setEmailBorder(Color.BASE_COLOR_LIGHT_BLUE);
  };

  const [passwordBorder, setpasswordBorder] = useState('');
  const handleTouchpasswordBorder = () => {
    setpasswordBorder(Color.BASE_COLOR_LIGHT_BLUE);
  };

  const SigninValidation = async () => {
    if (!email && !password) {
      setEmailError('Email Required');
      setPasswordError('Password Required');
    } else if (!email) {
      setEmailError('Email Required');
    } else if (
      email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/) === null
    ) {
      setEmailError('Valid email Required');
    } else if (!password) {
      setPasswordError('Password Required');
    } else {
      dispatch(LoginRequest(email, password, navigation));
    }
  };

  return (
    <View style={styles.container}>
      <Loader value={loginRes.loader} />

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
            style={styles.inputTextStyle}
            onChangeText={text => {
              selectFill(text);
            }}
            value={email}
            helperText={emailError}
            checkRight={undefined}
            onTouchStart={() => handleTouch()}
            borderColor={emailBorder}
          />

          <TextInput
            type={Constant.textInput.LARGE_INPUT}
            label={'password'}
            style={styles.inputTextStyle}
            onChangeText={text => {
              selectFillPassword(text);
            }}
            value={password}
            helperText={passwordError}
            iconVisible={true}
            secureTextEntry={focus !== true ? focus : true}
            secureTextEntryChange={selectFocus}
            checkRight={undefined}
            onTouchStart={() => handleTouchpasswordBorder()}
            borderColor={passwordBorder}
          />

          <Text
            style={styles.contentText}
            onPress={() => navigation.navigate('ForgotPassword')}>
            forgot your password?
          </Text>
          <CheckBox
            onPressCheckbox={selectCheckBox}
            style={styles.checkBox}
            isSelectedCheckBox={isSelectedCheckBox}
            text={'keep me signed in'}
          />

          <Button
            type={Constant.buttons.PRIMARY}
            text={auths.SIGNIN_BUTTON}
            style={styles.buttonStyle}
            onPress={() => SigninValidation()}
          />
          <View style={styles.bottomContentStyle} />
        </View>
        <View style={styles.bottomView}>
          <Text style={styles.bottomText}>or</Text>
          <Auth
            text={'continue with Google'}
            icon={Images.Google}
            type={Constant.authLogin.GOOGLE}
          />

          <Auth
            text={'continue with Apple'}
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
    backgroundColor: Color.BASE_COLOR_WHITE,
  },

  headerView: {
    flex: 0.5,
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
  inputTextStyle: { fontSize: 18 },
  buttonStyle: { marginTop: 10, marginBottom: 10 },
  bottomContentStyle: {
    flexDirection: 'row',
  },
  containerLoader: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Signin;

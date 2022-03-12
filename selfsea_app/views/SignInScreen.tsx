import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import Constant from '../theme/constant';
import Fonts from '../theme/fonts';
import Color from '../theme/colors';
import Images from '../theme/images';

import Button from '../components/Button';
import Auth from '../components/Authentication';
import TextInput from '../components/CustomTextInput';
import CheckBox from '../components/Checkbox';
import Header from '../components/Header';

import { useDispatch } from 'react-redux';
import { LoginRequest } from '../redux/actions/LoginAction';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Loader from '../components/Loader';
import { authText } from '../config/static';
import { useTypedSelector } from '../redux';

const SignIn = ({ route, navigation }) => {
  const dispatch = useDispatch();

  const loginRes = useTypedSelector(state => state.LoginReducer);
  console.log('LoginReducer : ', route);

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
      setEmailError('please enter email address. ');
    } else if (
      text.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/) === null
    ) {
      setEmailBorder(Color.COMMUNITY_ORANGE);
      setEmailError('please enter a valid email address. ');
    } else {
      setEmailBorder(Color.BORDER_COLOR_LIGHTGRAY);
      setEmailError('');
    }
  };

  const selectFillPassword = text => {
    console.log('text:::', text);
    setPassword(text);
    if (text === '') {
      setPasswordBorder(Color.COMMUNITY_ORANGE);
      setPasswordError('password must contain a number. ');
    } else {
      setPasswordBorder(Color.BORDER_COLOR_LIGHTGRAY);
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

  const [passwordBorder, setPasswordBorder] = useState('');
  const handleTouchPasswordBorder = () => {
    setPasswordBorder(Color.BASE_COLOR_LIGHT_BLUE);
  };

  const keepSignin = () => {
    var d = new Date();
    console.log(d.toLocaleDateString());

    if (isSelectedCheckBox) {
      d.setMonth(d.getMonth() + 3);
      console.log(JSON.stringify(d.toLocaleDateString()));
      AsyncStorage.setItem('keepSignin', d.toLocaleDateString());
    } else {
      d.setDate(d.getDate() + 2);
      console.log(JSON.stringify(d.toLocaleDateString()));
      AsyncStorage.setItem('keepSignin', d.toLocaleDateString());
    }

    dispatch(LoginRequest(email, password, navigation));
  };

  const SignInValidation = async () => {
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
      keepSignin();
    }
  };

  return (
    <View style={styles.container}>
      <Loader value={loginRes.loader} />

      <Header
        type={Constant.navigationHeader.PAGE_HEADER}
        leftIcon={Images.ArrowSquare}
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
            defaultValue={''}
            text={''}
            maxLength={100}
            editable={true}
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
            onTouchStart={() => handleTouchPasswordBorder()}
            borderColor={passwordBorder}
            defaultValue={''}
            text={''}
            maxLength={100}
            editable={true}
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
            text={authText.SIGN_IN_BUTTON}
            style={styles.buttonStyle}
            onPress={() => SignInValidation()}
          />
          <View style={styles.bottomContentStyle} />
        </View>
        <View style={styles.bottomView}>
          <Text style={styles.bottomText}>or</Text>
          <Auth
            text={'continue with Google'}
            icon={Images.Google}
            type={Constant.authLogin.GOOGLE}
            navigation={navigation}
          />

          <Auth
            text={'continue with Apple'}
            icon={Images.Apple}
            type={Constant.authLogin.APPLE}
            navigation={navigation}
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

export default SignIn;

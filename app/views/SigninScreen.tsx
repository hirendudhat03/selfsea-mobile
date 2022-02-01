import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Constant from '../theme/constant';
import Fonts from '../theme/fonts';
import Color from '../theme/colors';
import Images from '../theme/images';

import Button from '../component/Button';
import Auth from '../component/Authentication';
import TextInputCom from '../component/CustomTextInput';
import CheckBox from '../component/Checkbox';
import Header from '../component/Header';

import auth from '@react-native-firebase/auth';

import { useDispatch } from 'react-redux';
import { LoginRequest } from '../redux/actions/LoginAction';
import { AppleButton } from '@invertase/react-native-apple-authentication';
import { auths } from '../config/static';

import Loader from '../component/Loader';

const Signin = ({ navigation }) => {
  const dispatch = useDispatch();

  const loginRes = useSelector(state => state.LoginReducer);
  console.log('LoginReducer : ', JSON.stringify(loginRes));

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
      {/* <Loader value={loginRes.loader} /> */}

      <Header
        type={Constant.navigatioHeader.PAGE_HEADER}
        leftIcon={Images.Arrowsquare}
        label={'sign in'}
        onPress={() => navigation.goBack()}
      />
      {/* <View style={{ flex: 1, paddingTop: 100 }}>
        <TextInputCom
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

        <TextInputCom
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

        <Text onPress={() => SigninValidation()}>asd</Text>
        <Button
          type={Constant.buttons.PRIMARY}
          text={'sign in'}
          style={styles.buttonStyle}
          onPress={() => SigninValidation()}
        />
      </View> */}

      <ScrollView>
        <View style={styles.contentView}>
          <TextInputCom
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

          <TextInputCom
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
          {/* <TextInput placeholder="enter email"></TextInput>
          <TextInput placeholder="enter password"></TextInput> */}
          <Text
            style={styles.contentText}
            onPress={() => navigation.navigate('ForgotPassword')}>
            forgot your password?
          </Text>
          <CheckBox
            onPressCheckbox={selectCheckBox}
            style={styles.checkBox}
            isSelectedCheckBox={isSelectedCheckBox}
            text={auths.KEEP_ME_SIGNED_IN}
          />

          {/* <Text onPress={() => SigninValidation()}>asd</Text> */}
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
            text={auths.CONTINUE_WITH_GOOGLE}
            icon={Images.Google}
            type={Constant.authLogin.GOOGLE}
          />
          {/* <Auth
            text={auths.CONTINUE_WITH_INSTA}
            icon={Images.Instagram}
            type={Constant.authLogin.INSTAGRAM}
          /> */}
          <Auth
            text={auths.CONTINUE_WITH_APPLE}
            icon={Images.Apple}
            type={Constant.authLogin.APPLE}
          />
          {/* <AppleButton
            buttonStyle={AppleButton.Style.WHITE}
            buttonType={AppleButton.Type.SIGN_IN}
            style={{
              width: 160, // You must specify a width
              height: 45, // You must specify a height
            }}
            onPress={() => console.log("Anshuman Gupta")}
          /> */}
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
  bottomContentStyle: {
    flexDirection: 'row',
  },
  containerLoader: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: { marginTop: 10, marginBottom: 10 },
});

export default Signin;

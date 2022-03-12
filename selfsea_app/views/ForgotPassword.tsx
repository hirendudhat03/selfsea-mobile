import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Button from '../components/Button';
import TextInput from '../components/CustomTextInput';
import Header from '../components/Header';

import Constant from '../theme/constant';
import Images from '../theme/images';
import Font from '../theme/fonts';
import Color from '../theme/colors';

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState(null);
  const [emailError, setEmailError] = useState('');

  const selectFill = text => {
    setEmail(text);
    if (text === '') {
      setEmailBorder(Color.COMMUNITY_ORANGE);
      setEmailError('Please enter email address. ');
    } else if (
      text.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      ) === null
    ) {
      setEmailBorder(Color.COMMUNITY_ORANGE);
      setEmailError('please enter a valid email address ');
    } else {
      setEmailBorder(Color.BORDER_COLOR_LIGHTGRAY);
      setEmailError('');
    }
  };

  const [emailBorder, setEmailBorder] = useState('');
  const handleTouch = () => {
    setEmailBorder(Color.BASE_COLOR_LIGHT_BLUE);
  };
  return (
    <View style={styles.container}>
      <Header
        type={Constant.navigationHeader.PAGE_HEADER}
        leftIcon={Images.ArrowSquare}
        label={'forgot password'}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.contentView}>
        <Text style={styles.descriptionText} ellipsizeMode="middle">
          type in your email below to reset your password.
        </Text>
        <View style={styles.contentInputView}>
          <TextInput
            type={Constant.textInput.LARGE_INPUT}
            placeholder={'email@address.com'}
            label={'email'}
            style={styles.inputTextStyle}
            onChangeText={text => {
              selectFill(text);
            }}
            value={email || undefined}
            helperText={emailError}
            onTouchStart={() => handleTouch()}
            borderColor={emailBorder}
            viewStyle={styles.inputViewStyle}
            defaultValue={''}
            text={''}
            maxLength={100}
            editable={true}
          />
        </View>
      </View>

      <View style={styles.bottomView}>
        <Button
          type={Constant.buttons.PRIMARY}
          text={'send password reset email'}
          style={styles.buttonStyle}
          onPress={() => navigation.navigate('CreateNewPassword')}
          disabled={!email || emailError !== '' ? true : false}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.BASE_COLOR_WHITE,
  },
  headerView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  descriptionText: {
    fontFamily: Font.CALIBRE,
    fontSize: 18,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: Color.CONTENT_COLOR_BLACK_TEXT,
    marginTop: 25,
  },
  bottomView: {
    flex: 0.7,
    alignItems: 'center',
    borderTopColor: Color.BORDER_COLOR,
    borderTopWidth: 2,
  },
  contentView: {
    flex: 4,
    alignItems: 'center',
  },
  contentInputView: {
    flex: 0.9,
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  inputTextStyle: { fontSize: 18 },
  inputViewStyle: { width: '100%' },
  buttonStyle: { marginTop: 15 },
});
export default ForgotPassword;

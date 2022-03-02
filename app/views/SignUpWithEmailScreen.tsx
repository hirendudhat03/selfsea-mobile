import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  Modal,
  KeyboardAvoidingView,
  Platform,
  Linking,
} from 'react-native';
import PasswordInputStrength from '../components/PasswordInputStrength';
import { availableMonths, useCalculateAge } from '../hooks/calculate-ages';

import ModalPicker from './ModalPickerConfirm';

import Button from '../components/Button';
import TextInput from '../components/CustomTextInput';
import Header from '../components/Header';

import Constant from '../theme/constant';
import Images from '../theme/images';
import Font from '../theme/fonts';
import Color from '../theme/colors';
import BirthDateInput from '../components/BirthDateInput';

import { useDispatch } from 'react-redux';
import {
  SignUpRequest,
  SignUpRequestWithoutPassword,
} from '../redux/actions/SignUpAction';
import { ScrollView } from 'react-native-gesture-handler';

import Loader from '../components/Loader';
import { useTypedSelector } from '../redux';
import { authText, ageData } from '../config/static';

const zxcvbn = require('zxcvbn');

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const descriptionData = [
  {
    title:
      'usernames cannot contain any personal identifiers (e.g. name,location, school, age)',
  },
  {
    title: 'usernames cannot contain any harmful or offensive language',
  },
  {
    title: 'usernames can only contain letters and numbers (no emojis)',
  },
];

const birthData = [
  {
    title: 'selfsea is just for the users between the ages 13-18.',
  },
  {
    title:
      'by signing up, you agree that you are within this age, and with our other terms of use.',
  },
  {
    title:
      'if we find out that you are out side of this age range, we will remove your account.',
  },
];

const EMAIL_REGEX = new RegExp(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/);

const SignUp = ({ route, navigation }) => {
  const dispatch = useDispatch();

  const signUpRes = useTypedSelector(state => state.SignUpReducer);
  // console.log('signUpResReducer : ', JSON.stringify(signUpRes));

  const [years, setYear] = useState<number[]>([]);

  useEffect(() => {
    let year: number[] = [];
    let currentYear = new Date().getFullYear();
    let startYear = 1900;
    route.params !== undefined &&
      route.params.email !== '' &&
      setCircleFillEmail(true);
    route.params !== undefined &&
      route.params.email !== '' &&
      setEmail(route.params.email);
    while (currentYear >= startYear) {
      year.push(currentYear--);
    }
    setYear(year);
  }, [route]);

  useEffect(() => {
    if (signUpRes.data) {
      console.log('signUpRes.data if: ', signUpRes.data);
      if (signUpRes.data.errorName === 'email') {
        setEmailError(signUpRes.data.error);
        setCircleFillEmail(false);
      } else {
        setUserNameError(signUpRes.data.error);
        setCircleFillUser(false);
      }
    } else {
      console.log('signUpRes.data : ', signUpRes.data);
    }
  }, [signUpRes]);

  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState('');

  const [Password, setPassword] = useState<string>('');
  const [PasswordError, setPasswordError] = useState<string>('');

  const [userName, setUserName] = useState<string>('');
  const [userNameError, setUserNameError] = useState<string>('0/20');

  const [birthMonth, setBirthMonth] = useState<string>('');

  const [birthYear, setBirthYear] = useState<string>('');
  // const [toClear, setToClear] = useState<boolean>(false);

  const userAge = useCalculateAge(birthYear, birthMonth);
  const [userAgeMessage, setUserAgeMessage] = useState<any>();
  const [userAgeMidMessage, setUserAgeMidMessage] = useState<any>();
  const [userAgeLastMessage, setUserAgeLastMessage] = useState<any>();
  const [userAgeHeader, setUserAgeHeader] = useState<string>('');

  const [passwordScore, setPasswordScore] = useState<0 | 1 | 2 | 3 | 4>(0);

  const [focus, setFocus] = useState<boolean>(true);
  const selectFocus = () => {
    if (focus) {
      setFocus(false);
    } else {
      setFocus(true);
    }
  };

  const countAge = (isPasswordLess: boolean) => {
    if (userAge === null || userAge < 13 || userAge > 18) {
      if (userAge === null || userAge < 13) {
        changeAgeVisibility(true);
        setUserAgeMessage(ageData.descriptions.less);
        setUserAgeHeader(ageData.header.minor);
        setUserAgeMidMessage('');
        setUserAgeLastMessage('');
      }
      if (userAge === null || userAge > 18) {
        changeAgeVisibility(true);
        setUserAgeMessage(ageData.descriptions.greater);
        setUserAgeHeader(ageData.header.major);
        setUserAgeMidMessage(ageData.descriptions.greatermiddle);
        setUserAgeLastMessage(ageData.descriptions.greaterlast);
      }
    } else {
      if (isPasswordLess) {
        console.log('Here4');
        console.log('UID', route.params.credentials);

        dispatch(
          SignUpRequestWithoutPassword(
            email,
            birthMonth,
            birthYear,
            userName,
            navigation,
            true,
            route.params.userInfo,
            route.params.type,
            route.params.credentials.user.uid,
          ),
        );
      } else {
        console.log('Here5');

        dispatch(
          SignUpRequest(
            email,
            Password,
            birthMonth,
            birthYear,
            userName,
            navigation,
            true,
          ),
        );
      }
    }
  };
  const [circleFillEmail, setCircleFillEmail] = useState<boolean>();

  const selectFill = (text: string) => {
    setEmail(text);
    if (text === '') {
      setCircleFillEmail(false);
      setEmailBorder(Color.COMMUNITY_ORANGE);
      setEmailError('please enter email address.');
    } else if (text.match(EMAIL_REGEX) === null) {
      setEmailBorder(Color.COMMUNITY_ORANGE);
      setEmailError('please enter a valid email address.');
      setCircleFillEmail(false);
    } else if (text.length > 64) {
      setEmailBorder(Color.COMMUNITY_ORANGE);
      setEmailError('your email cannot be longer than 64 characters.');
      setCircleFillEmail(false);
    } else {
      setCircleFillEmail(true);
      setEmailBorder(Color.BORDER_COLOR_LIGHTGRAY);
      setEmailError('');
    }
  };

  const [circleFillPassword, setCircleFillPassword] = useState<boolean>();
  const selectFillPassword = (text: string) => {
    console.log('text:::', text);

    setPassword(text);
    if (text === '') {
      setPasswordBorder(Color.COMMUNITY_ORANGE);
      setPasswordError('Password must contain a number.');
      setCircleFillPassword(false);
    } else if (text.length < 8 || text.length > 255) {
      setPasswordBorder(Color.COMMUNITY_ORANGE);
      setPasswordError('your password must be less than 255 characters.');
    } else {
      setPasswordBorder(Color.BORDER_COLOR_LIGHTGRAY);
      setPasswordError('');
    }
  };

  const [circleFillUser, setCircleFillUser] = useState<boolean>();

  const selectFillUser = (text: string) => {
    setUserName(text);
    if (text === '') {
      setUserNameBorder(Color.COMMUNITY_ORANGE);
      setUserNameError(text.length + '/20');
      setCircleFillUser(false);
    } else if (text.length < 3) {
      setUserNameBorder(Color.COMMUNITY_ORANGE);
      setUserNameError(text.length + '/20');
      setCircleFillUser(false);
    } else if (text.match(/\s/) !== null) {
      setUserNameBorder(Color.COMMUNITY_ORANGE);
      setUserNameError(text.length + '/20');
      setCircleFillUser(false);
    } else {
      setUserNameBorder(Color.BORDER_COLOR_LIGHTGRAY);
      setUserNameError(' ');
      setUserNameError(text.length + '/20');
      setCircleFillUser(true);
    }
  };

  const [circleFillBirth, setCircleFillBirth] = useState<boolean>(false);

  const selectFillBirth = value => {
    setBirthYear(value);

    if (value === '' || birthMonth === '') {
      setCircleFillBirth(false);
    } else {
      setCircleFillBirth(true);
    }
  };

  const selectFillMonth = value => {
    setBirthMonth(value);

    if (value === '' || birthYear === '') {
      setCircleFillBirth(false);
    } else {
      setCircleFillBirth(true);
    }
  };

  const [isModalVisible, setIsModalVisible] = useState(false);
  const changeModalVisibility = (bool: boolean) => {
    setIsModalVisible(bool);
  };

  const [isBirthVisible, setIsBirthVisible] = useState(false);
  const changeBirthVisibility = (bool: boolean) => {
    setIsBirthVisible(bool);
  };

  const [isAgeValid, setIsAgeValid] = useState(false);
  const changeAgeVisibility = (bool: boolean) => {
    setIsAgeValid(bool);
  };

  const SignUpValidation = (text: string) => {
    if (route.params === undefined) {
      if (
        !email &&
        !Password &&
        birthMonth === '' &&
        birthYear === '' &&
        !userName
      ) {
        setEmailError('please enter email address.');
        route.params === undefined &&
          setPasswordError('password must contain a number.');
        setUserNameError(text.length + '/20');

        setEmail('');
        setUserName('');
        setPassword('');
      } else if (!email) {
        setEmailError('please enter email address.');
      } else if (email.match(EMAIL_REGEX) === null) {
        setEmailError('please enter a valid email address.');
      } else if (!Password) {
        route.params === undefined &&
          setPasswordError('password must contain a number.');
      } else if (!userName) {
        setUserNameError(text.length + '/20');
      } else {
        countAge(false);
      }
    } else {
      console.log('Here1');
      if (!email && birthMonth === '' && birthYear === '' && !userName) {
        setEmailError('please enter email address.');
        setUserNameError(text.length + '/20');

        setEmail('');
        setUserName('');
      } else if (!email) {
        setEmailError('please enter email address.');
      } else if (email.match(EMAIL_REGEX) === null) {
        setEmailError('please enter a valid email address.');
      } else if (!userName) {
        setUserNameError(text.length + '/20');
      } else {
        console.log('Here2');
        countAge(true);
      }
    }
  };
  const [emailBorder, setEmailBorder] = useState('');
  const handleTouch = () => {
    setEmailBorder(Color.BASE_COLOR_LIGHT_BLUE);
  };

  const [passwordBorder, setPasswordBorder] = useState('');
  const handleTouchPasswordBorder = () => {
    setPasswordBorder(Color.BASE_COLOR_LIGHT_BLUE);
  };
  const [userNameBorder, setUserNameBorder] = useState('');
  const handleTouchUsernameBorder = () => {
    setUserNameBorder(Color.BASE_COLOR_LIGHT_BLUE);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.keyboardAvoidingStyle}>
      <View style={styles.container}>
        <Loader value={signUpRes.loader} />
        <Header
          type={Constant.navigationHeader.PAGE_HEADER}
          leftIcon={Images.ArrowSquare}
          label={'sign up with email'}
          onPress={() => navigation.goBack()}
        />
        <ScrollView>
          <View style={styles.contentView}>
            <TextInput
              maxLength={64}
              type={Constant.textInput.LARGE_INPUT}
              placeholder={'email@address.com'}
              label={'email'}
              style={styles.inputTextStyle}
              onChangeText={text => {
                selectFill(text);
              }}
              value={email}
              helperText={emailError}
              iconVisibleFill={true}
              checkRight={true}
              circleFill={circleFillEmail}
              onTouchStart={() => handleTouch()}
              borderColor={emailBorder}
              editable={route.params === undefined}
              defaultValue={''}
              text={''}
            />
            {route.params === undefined && (
              <TextInput
                type={Constant.textInput.LARGE_INPUT}
                label={'password'}
                style={styles.inputTextStyle}
                onChangeText={text => {
                  selectFillPassword(text);
                  const response = zxcvbn(text);
                  setPasswordScore(response.score);
                  setPasswordError(response.feedback.suggestions);
                  setCircleFillPassword(response.score >= 2);
                }}
                value={Password}
                helperText={PasswordError}
                iconVisible={true}
                secureTextEntry={focus !== true ? focus : true}
                secureTextEntryChange={selectFocus}
                iconVisibleFill={true}
                checkRight={true}
                circleFill={circleFillPassword}
                onTouchStart={() => handleTouchPasswordBorder()}
                borderColor={passwordBorder}
                defaultValue={''}
                text={''}
                editable={true}
              />
            )}
            {route.params === undefined && (
              <View style={styles.viewStyle}>
                <PasswordInputStrength
                  passwordScore={passwordScore}
                  password={Password}
                />
              </View>
            )}
            <View style={styles.commonView}>
              <View style={styles.monthView}>
                {/* <View style={styles.rowView}> */}
                <Text style={styles.birthMonthText}>birth month</Text>
                <TouchableOpacity
                  style={styles.touchableStyle}
                  onPress={() => changeBirthVisibility(true)}>
                  <Image source={Images.InfoCircle} style={styles.infoIcon} />
                </TouchableOpacity>
                {/* </View> */}
              </View>
              <View style={styles.yearView}>
                <Text style={styles.birthYearText}>birth year</Text>
              </View>
            </View>
            <BirthDateInput
              monthOptionList={availableMonths}
              onSelectMonth={value => {
                selectFillMonth(value);
              }}
              defaultMonthButtonText={'select one'}
              monthValue={birthMonth}
              monthStyle={{ width: width * 0.4 }}
              yearOptionList={years.map(y => y.toString())}
              onSelectYear={value => {
                selectFillBirth(value);
              }}
              defaultYearButtonText={'select one'}
              yearStyle={{ width: width * 0.4 }}
              iconVisibleFill={true}
              checkRight={true}
              yearValue={birthYear}
              circleFill={circleFillBirth}
            />
            <View style={styles.userName}>
              <Text style={styles.birthMonthText}>username</Text>
              <TouchableOpacity
                style={styles.touchableStyle}
                onPress={() => changeModalVisibility(true)}>
                <Image source={Images.InfoCircle} style={styles.infoIcon} />
              </TouchableOpacity>
            </View>
            <TextInput
              maxLength={20}
              value={userName}
              type={Constant.textInput.LARGE_INPUT}
              text={'@'}
              style={styles.inputTextStyle}
              onChangeText={text => {
                selectFillUser(text);
              }}
              iconVisibleFill={true}
              checkRight={true}
              circleFill={circleFillUser}
              onTouchStart={() => handleTouchUsernameBorder()}
              borderColor={userNameBorder}
              defaultValue={''}
              editable={true}
            />
            {userNameError === 'this username is taken.' ? (
              <Text
                style={[styles.helperText, { color: Color.COMMUNITY_ORANGE }]}>
                {userNameError}
              </Text>
            ) : (
              <Text
                style={[
                  styles.helperText,
                  userName.length > 20
                    ? { color: Color.COMMUNITY_ORANGE }
                    : { color: Color.BORDER_COLOR_LIGHTGRAY },
                ]}>
                {userNameError}
              </Text>
            )}
          </View>
        </ScrollView>
        <View
          style={
            route.params === undefined
              ? styles.bottomView
              : styles.passwordlessBottomView
          }>
          {route.params === undefined ? (
            <Button
              type={Constant.buttons.PRIMARY}
              text={authText.CREATE_ACCOUNT_BUTTON}
              style={[
                styles.buttonStyle,
                circleFillEmail !== true ||
                circleFillPassword !== true ||
                !circleFillBirth ||
                circleFillUser !== true
                  ? { backgroundColor: Color.BUTTON_DISABLE_COLOR }
                  : { backgroundColor: Color.BASE_COLOR_ORANGE },
              ]}
              onPress={() => SignUpValidation(userName)}
              disabled={
                circleFillEmail !== true ||
                circleFillPassword !== true ||
                !circleFillBirth ||
                circleFillUser !== true
              }
            />
          ) : (
            <Button
              type={Constant.buttons.PRIMARY}
              text={authText.CREATE_ACCOUNT_BUTTON}
              style={[
                styles.buttonStyle,
                circleFillEmail !== true ||
                !circleFillBirth ||
                circleFillUser !== true
                  ? { backgroundColor: Color.BUTTON_DISABLE_COLOR }
                  : { backgroundColor: Color.BASE_COLOR_ORANGE },
              ]}
              onPress={() => SignUpValidation(userName)}
              disabled={
                circleFillEmail !== true ||
                circleFillBirth !== true ||
                circleFillUser !== true
                  ? true
                  : false
              }
            />
          )}
        </View>
        <Modal
          transparent={false}
          animationType="fade"
          visible={isModalVisible}
          onRequestClose={() => changeModalVisibility(false)}>
          <ModalPicker
            changeModalVisibility={changeModalVisibility}
            type={Constant.modal.MODAL}
            textTitle={'selfsea usernames'}
            smallText={
              'your username will need to be approved by a moderator before your first post or comment can be approved. it cannot be changed after that.'
            }
            descriptionData={descriptionData}
            numberOfLines={3}
            button={Constant.buttons.CLOSE}
            text={'close'}
          />
        </Modal>
        <Modal
          transparent={false}
          animationType="fade"
          visible={isBirthVisible}
          onRequestClose={() => changeBirthVisibility(false)}>
          <ModalPicker
            changeModalVisibility={changeBirthVisibility}
            type={Constant.modal.MODAL}
            textTitle={'selfsea birth month'}
            descriptionData={birthData}
            numberOfLines={3}
            button={Constant.buttons.CLOSE}
            text={'close'}
          />
        </Modal>
        <Modal
          transparent={false}
          animationType="fade"
          visible={isAgeValid}
          onRequestClose={() => changeAgeVisibility(false)}>
          <ModalPicker
            changeModalVisibility={changeAgeVisibility}
            type={Constant.modal.MODAL_AGE}
            textTitle={userAgeHeader}
            descriptionStartText={userAgeMessage}
            hyperLinkText={ageData.links.link}
            onPressLink={() => Linking.openURL(Constant.link.SELFSEA)}
            numberOfLines={8}
            button={Constant.buttons.CLOSE}
            text={'close'}
            descriptionMiddleText={userAgeMidMessage}
            hyperLinkSecondText={userAgeLastMessage}
          />
        </Modal>
      </View>
    </KeyboardAvoidingView>
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
  contentView: {
    flex: 4,
    alignItems: 'center',
  },
  infoIcon: {
    alignSelf: 'center',
    marginLeft: 4,
    width: 19,
    height: 19,
  },
  flex1: { flex: 1 },
  bottomView: {
    flex: 0.7,
    alignItems: 'center',
    borderTopColor: Color.BORDER_COLOR,
    borderTopWidth: 2,
  },
  passwordlessBottomView: {
    flex: 0.4,
    alignItems: 'center',
    borderTopColor: Color.BORDER_COLOR,
    borderTopWidth: 2,
  },
  viewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '81%',
    marginRight: 32,
  },
  passwordStyle: {
    borderColor: Color.BORDER_COLOR,
    width: '22%',
    height: 6,
    backgroundColor: '',
    marginTop: 5,
  },
  monthView: {
    width: '45%',
    flexDirection: 'row',

    marginRight: 7,
  },
  monthViewBottom: {
    flexDirection: 'row',

    alignSelf: 'flex-start',
  },
  rowView: {
    flexDirection: 'row',

    paddingVertical: 4,
  },
  yearView: {
    justifyContent: 'center',
    paddingRight: '24%',
  },
  yearDropdown: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: 10,
  },
  birthYearText: {
    fontFamily: Font.CALIBRE,
    fontSize: 18,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: Color.DESCRIPTION_COLOR_TEXT,
  },
  birthMonthText: {
    fontFamily: Font.CALIBRE,
    fontSize: 18,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: Color.DESCRIPTION_COLOR_TEXT,
    alignSelf: 'flex-start',
  },
  iconStyle: {
    alignSelf: 'center',
    marginLeft: 5,
  },
  userName: {
    width: '90%',
    flexDirection: 'row',
    marginTop: height * 0.015,
    paddingVertical: 7,
    alignItems: 'center',
  },
  largeInputView: {
    width: '101%',
    height: height * 0.064,
    borderRadius: 4,
    backgroundColor: Color.BASE_COLOR_WHITE,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: Color.BORDER_COLOR_LIGHTGRAY,
    marginTop: 5,
    paddingHorizontal: 16,
    fontSize: 17,
  },
  largeImageView: {
    width: '10%',
    height: '300%',
    borderRadius: 4,
    backgroundColor: Color.BASE_COLOR_WHITE,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: Color.BORDER_COLOR_LIGHTGRAY,
    marginTop: 10,
    paddingHorizontal: 16,
    fontSize: 17,
  },
  touchableStyle: {
    alignSelf: 'center',
  },
  helperText: {
    width: '90%',
    height: 14,
    fontFamily: Font.CALIBRE,
    fontSize: 12,
    fontWeight: '500',
    fontStyle: 'normal',
    letterSpacing: 0,
    marginTop: -11,
    color: Color.BASE_COLOR_BORDER_GRAY,
  },
  inputTextStyle: { fontSize: 18 },
  buttonStyle: { marginTop: 15 },
  containerLoader: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  keyboardAvoidingStyle: {
    flex: 1,
  },
  commonView: {
    flexDirection: 'row',
    width: '90%',
    marginTop: 10,
    marginBottom: 7,
  },
});
export default SignUp;

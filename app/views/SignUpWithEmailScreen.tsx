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
<<<<<<< HEAD
=======
  Alert,
>>>>>>> f8b0659539b2a8646dd84ca6c33f39129048452c
} from 'react-native';

import ModalPicker from './ModalPickerConfirm';

import Button from '../component/Button';
import TextInput from '../component/CustomTextInput';
import Header from '../component/Header';

import Constant from '../theme/constant';
import Images from '../theme/images';
import Font from '../theme/fonts';
import Color from '../theme/colors';
import BirthDateInput from '../component/BirthDateInput';

import { useDispatch, useSelector } from 'react-redux';
import {
  SignupRequest,
  SignupRequestWithoutPassword,
} from '../redux/actions/SignupAction';
import { ScrollView } from 'react-native-gesture-handler';

import Loader from '../component/Loader';
import { auths } from '../config/static';

const zxcvbn = require('zxcvbn');

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const month = [
  'january',
  'february',
  'march',
  'april',
  'may',
  'june',
  'july',
  'august',
  'september',
  'october',
  'november',
  'december',
];

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

const birthnData = [
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

<<<<<<< HEAD
const Signup = ({ route, navigation }) => {
=======
const ageData = [
  {
    title:
      'sorry, but the selfsea communities feature is only available to young people between the ages of 13 and 18. check out our web-app for resources, and stories from young people who have been there www.selfsea.org.',
  },
];

const Signup = ({ navigation }) => {
>>>>>>> f8b0659539b2a8646dd84ca6c33f39129048452c
  const dispatch = useDispatch();

  const signupRes = useSelector(state => state.SignupReducer);
  console.log('signupResReducer : ', JSON.stringify(signupRes));

  const [years, setYear] = useState<number[]>([]);

  console.log('checkkkkkk', route.params);

  useEffect(() => {
    let year = [];
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
    if (signupRes.data) {
<<<<<<< HEAD
      // console.log('signupRes.data if: ', signupRes.data);
      setEmailError(signupRes.data.error);
=======
      console.log('signupRes.data if: ', signupRes.data);
      if (signupRes.data.errorname === 'email') {
        setEmailError(signupRes.data.error);
      } else {
        setUserNameError(signupRes.data.error);
      }
>>>>>>> f8b0659539b2a8646dd84ca6c33f39129048452c
    } else {
      // console.log('signupRes.data : ', signupRes.data);
    }
  }, [signupRes]);

  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState('');

  const [Password, setPassword] = useState<string>('');
  const [PasswordError, setPasswordError] = useState<string>('');

  const [userName, setUserName] = useState<string>('');
  const [userNameError, setUserNameError] = useState<string>('0/20');

  const [birthMonth, setBirthMonth] = useState<string>('');
  // const [setBirthMonthError] = useState<string>('');

  const [birthYear, setBirthYear] = useState<string>('');
  // const [setBirthYearError] = useState<string>('');

  const [passwordScore, setPasswordScore] = useState<0 | 1 | 2 | 3 | 4>(0);

  const [focus, setFocus] = useState<boolean>(true);
  const selectFocus = () => {
    if (focus) {
      setFocus(false);
    } else {
      setFocus(true);
    }
  };

  const countAge = () => {
    console.log('===========================================');

    var today = new Date();
    console.log('today::', today);

    var bodYear = new Date(birthYear);

    var age = today.getFullYear() - bodYear;
    console.log('age::===::', age);

    var m = today.getMonth();
    console.log('m::', m);

    var setMonthIndex;

    month.map((item, index) => {
      console.log('i:', item);
      console.log('index:', index);

      if (birthMonth === item) {
        setMonthIndex = index;
        console.log('index are same : ', index);
      }
    });

    if (age > 18 || (age === 18 && setMonthIndex < m)) {
      changeAgeVisibility(true);
    } else if (age < 13 || (age === 13 && setMonthIndex > m)) {
      age--;
      Alert.alert('your age is not between 13-18 years.');
    } else {
      dispatch(
        SignupRequest(
          email,
          Password,
          birthMonth,
          birthYear,
          userName,
          navigation,
        ),
      );
    }
    console.log('age::', age);
    return age;
  };
  const [circleFillEmail, setCircleFillEmail] = useState<boolean>();

  const selectFill = (text: string) => {
    setEmail(text);
    if (text === '') {
      setCircleFillEmail(false);
      setEmailBorder(Color.COMMUNITY_ORANGE);
      setEmailError('Please enter email address. ');
    } else if (
      text.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      ) === null
    ) {
      setEmailBorder(Color.COMMUNITY_ORANGE);
      setEmailError('Please enter a valid email address. ');
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
      setpasswordBorder(Color.COMMUNITY_ORANGE);
      setPasswordError('Password must contain a number.');
      setCircleFillPassword(false);
    } else if (text.length < 8 || text.length > 255) {
      setpasswordBorder(Color.COMMUNITY_ORANGE);
      setPasswordError('your password must be less than 255 characters.');
    } else {
      setpasswordBorder(Color.BORDER_COLOR_LIGHTGRAY);
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

  const [circleFillBirth, setCircleFillBirth] = useState<boolean>();

  const selectFillBirth = value => {
    setBirthYear(value);

    if (value === '' || birthMonth === '') {
      setCircleFillBirth(false);
    } else {
      // setBirthYearError(' ');
      setCircleFillBirth(true);
    }
  };

  const selectFillmonth = value => {
    setBirthMonth(value);

    if (value === '' || birthYear === '') {
      // setBirthMonthError('');
      setCircleFillBirth(false);
    } else {
      setCircleFillBirth(true);
    }
  };

  const [isModalVisible, setIsMoalVisiable] = useState(false);
  const changeModalVisibility = (bool: boolean) => {
    setIsMoalVisiable(bool);
  };

  const [isBirthVisible, setIsBirthVisiable] = useState(false);
  const changeBirthVisibility = (bool: boolean) => {
    setIsBirthVisiable(bool);
  };

  const [isAgeValid, setIsAgeValid] = useState(false);
  const changeAgeVisibility = (bool: boolean) => {
    setIsAgeValid(bool);
  };

  const SignupValidation = (text: string) => {
<<<<<<< HEAD
    if (route.params === undefined) {
      if (
        !email &&
        !Password &&
        birthMonth === '' &&
        birthYear === '' &&
        !userName
      ) {
        setEmailError('Please enter email address.');
        route.params === undefined &&
          setPasswordError('Password must contain a number.');
        setUserNameError(text.length + '/20');

        setEmail('');
        setUserName('');
        setPassword('');
      } else if (!email) {
        setEmailError('Please enter email address.');
      } else if (
        email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/) === null
      ) {
        setEmailError('Please enter a valid email address.');
      } else if (!Password) {
        route.params === undefined &&
          setPasswordError('Password must contain a number.');
      } else if (!userName) {
        setUserNameError(text.length + '/20');
      } else {
        console.log('Here2');
        dispatch(
          SignupRequest(
            email,
            Password,
            birthMonth,
            birthYear,
            userName,
            navigation,
            false,
          ),
        );
        navigation.navigate('CreateProfile');
      }
    } else {
      if (!email && birthMonth === '' && birthYear === '' && !userName) {
        setEmailError('Please enter email address.');
        setUserNameError(text.length + '/20');

        setEmail('');
        setUserName('');
      } else if (!email) {
        setEmailError('Please enter email address.');
      } else if (
        email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/) === null
      ) {
        setEmailError('Please enter a valid email address.');
      } else if (!userName) {
        setUserNameError(text.length + '/20');
      } else {
        dispatch(
          SignupRequestWithoutPassword(
            email,
            birthMonth,
            birthYear,
            userName,
            navigation,
            false,
            route.params.userInfo,
            route.params.type
          ),
        );
      }
=======
    if (
      !email &&
      !Password &&
      birthMonth === '' &&
      birthYear === '' &&
      !userName
    ) {
      setEmailError('Please enter email address.');
      setPasswordError('Password must contain a number.');
      setUserNameError(text.length + '/20');

      setEmail('');
      setUserName('');
      setPassword('');
    } else if (!email) {
      setEmailError('Please enter email address.');
    } else if (
      email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/) === null
    ) {
      setEmailError('Please enter a valid email address.');
    } else if (!Password) {
      setPasswordError('Password must contain a number.');
    } else if (!userName) {
      setUserNameError(text.length + '/20');
    } else {
      countAge();
>>>>>>> f8b0659539b2a8646dd84ca6c33f39129048452c
    }
  };

  const [emailBorder, setEmailBorder] = useState('');
  const handleTouch = () => {
    setEmailBorder(Color.BASE_COLOR_LIGHT_BLUE);
  };

  const [passwordBorder, setpasswordBorder] = useState('');
  const handleTouchpasswordBorder = () => {
    setpasswordBorder(Color.BASE_COLOR_LIGHT_BLUE);
  };
  const [userNameBorder, setUserNameBorder] = useState('');
  const handleTouchusernameBorder = () => {
    setUserNameBorder(Color.BASE_COLOR_LIGHT_BLUE);
  };

  const passwordStrengthColor = (barNumber: number) => {
    if (Password === '') {
      return Color.PASSWORD_NORMAL_COLOR;
    }
    if (passwordScore <= 1 && barNumber === 0) {
      return Color.BORDER_COLOR_WARNING;
    }
    if (passwordScore > 1 && passwordScore < 3 && barNumber <= 1) {
      return Color.BASE_COLOR_ORANGE;
    }
    if (passwordScore === 3 && barNumber <= 2) {
      return Color.BASE_COLOR_ORANGE;
    }
    if (passwordScore > 3 && barNumber <= 3) {
      return Color.BASE_COLOR_GREEN;
    }
    return Color.PASSWORD_NORMAL_COLOR;
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : ''}
<<<<<<< HEAD
      style={styles.flex1}>
=======
      style={styles.keyboardAvoidingStyle}>
>>>>>>> f8b0659539b2a8646dd84ca6c33f39129048452c
      <View style={styles.container}>
        <Loader value={signupRes.loader} />
        <Header
          type={Constant.navigatioHeader.PAGE_HEADER}
          leftIcon={Images.Arrowsquare}
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
              editable={route.params === undefined ? true : false}
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
                  setCircleFillPassword(response.score >= 3);
                }}
                value={Password}
                helperText={PasswordError}
                iconVisible={true}
                secureTextEntry={focus !== true ? focus : true}
                secureTextEntryChange={selectFocus}
                iconVisibleFill={true}
                checkRight={true}
                circleFill={circleFillPassword}
                onTouchStart={() => handleTouchpasswordBorder()}
                borderColor={passwordBorder}
              />
            )}
            {route.params === undefined && (
              <View style={styles.viewStyle}>
                <View
                  style={[
                    styles.passwordStyle,
                    { backgroundColor: passwordStrengthColor(0) },
                  ]}
                />
                <View
                  style={[
                    styles.passwordStyle,
                    { backgroundColor: passwordStrengthColor(1) },
                  ]}
                />
                <View
                  style={[
                    styles.passwordStyle,
                    { backgroundColor: passwordStrengthColor(2) },
                  ]}
                />
                <View
                  style={[
                    styles.passwordStyle,
                    { backgroundColor: passwordStrengthColor(3) },
                  ]}
                />
              </View>
            )}
            
            <View style={{flexDirection:'row', width:"90%", marginTop:10, marginBottom:7}}>
              <View style={styles.monthView}>
                {/* <View style={styles.rowView}> */}
                  <Text style={styles.birthMonthText}>birth month</Text>
                  <TouchableOpacity
                    style={styles.touchableStyle}
                    onPress={() => changeBirthVisibility(true)}>
                    <Image source={Images.Infocircle} style={styles.infoIcon} />
                  </TouchableOpacity>
                {/* </View> */}
              </View>
              <View style={styles.yearView}>
                <Text style={styles.birthYearText}>birth year</Text>
              </View>
            </View>
<<<<<<< HEAD
            <View style={{flexDirection:'row'}}>
              <View style={styles.monthViewBottom}>
                <Dropdown
                  optionList={month}
                  onSelect={value => {
                    selectFillmonth(value);
                  }}
                  defaultButtonText={'select one'}
                  icon={Images.DropdownIcon}
                  helperText={birthMonthError}
                  value={birthMonth}
                  style={{ width: width * 0.40 }}
                />
              </View>
              <View style={styles.yearDropdown}>
                <Dropdown
                  optionList={years}
                  onSelect={value => {
                    selectFillBirth(value);
                  }}
                  defaultButtonText={'select one'}
                  style={{ width: width * 0.40 }}
                  icon={Images.DropdownIcon}
                  helperText={birthYearError}
                  iconVisibleFill={true}
                  checkRight={true}
                  value={birthYear}
                  circleFill={circleFillBirth}
                />
              </View>
            </View>
=======

            <BirthDateInput
              monthOptionList={month}
              onSelectMonth={value => {
                selectFillmonth(value);
              }}
              defaultMonthButtonText={'select one'}
              monthValue={birthMonth}
              monthStyle={{ width: width * 0.48 }}
              yearOptionList={years}
              onSelectYear={value => {
                selectFillBirth(value);
              }}
              defaultYearButtonText={'select one'}
              yearStyle={{ width: width * 0.31 }}
              iconVisibleFill={true}
              checkRight={true}
              yearValue={birthYear}
              circleFill={circleFillBirth}
            />

>>>>>>> f8b0659539b2a8646dd84ca6c33f39129048452c
            <View style={styles.userName}>
              <Text style={styles.birthMonthText}>username</Text>
              <TouchableOpacity
                style={styles.touchableStyle}
                onPress={() => changeModalVisibility(true)}>
                <Image source={Images.Infocircle} style={styles.infoIcon} />
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
              onTouchStart={() => handleTouchusernameBorder()}
              borderColor={userNameBorder}
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
        <View style={styles.bottomView}>
          {route.params === undefined ? (
            <Button
              type={Constant.buttons.PRIMARY}
              text={auths.CREATE_ACCOUNT_BUTTON}
              style={[
                styles.buttonStyle,
                circleFillEmail !== true ||
                circleFillPassword !== true ||
                circleFillBirth !== true ||
                circleFillUser !== true
                  ? { backgroundColor: Color.BUTTON_DISABLE_COLOR }
                  : { backgroundColor: Color.BASE_COLOR_ORANGE },
              ]}
              onPress={() => SignupValidation()}
              disabled={
                passwordScore < 3 ||
                circleFillEmail !== true ||
                circleFillPassword !== true ||
                circleFillBirth !== true ||
                circleFillUser !== true
                  ? true
                  : false
              }
            />
          ) : (
            <Button
              type={Constant.buttons.PRIMARY}
              text={auths.CREATE_ACCOUNT_BUTTON}
              style={[
                styles.buttonStyle,
                circleFillEmail !== true ||
                circleFillBirth !== true ||
                circleFillUser !== true
                  ? { backgroundColor: Color.BUTTON_DISABLE_COLOR }
                  : { backgroundColor: Color.BASE_COLOR_ORANGE },
              ]}
              onPress={() => SignupValidation()}
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
            descriptionData={birthnData}
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
            type={Constant.modal.MODAL}
            textTitle={'Mentee age more than 18'}
            // smallText={'your age is not valid'}
            descriptionData={ageData}
            numberOfLines={6}
            button={Constant.buttons.CLOSE}
            text={'close'}
            // onPress={() => navigation.navigate('Login')}
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
    // justifyContent: 'space-between',
    // alignSelf: 'flex-start',
    // marginHorizontal: 20,
    // marginVertical: 3,
    marginRight:7,
    // marginTop: height * 0.02,
    // backgroundColor:'green'
  },
  monthViewBottom: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignSelf: 'flex-start',
    // marginHorizontal: 19,
  },
  rowView: {
    flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
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
});
export default Signup;

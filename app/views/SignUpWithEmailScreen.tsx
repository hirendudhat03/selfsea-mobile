import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  Modal,
} from 'react-native';

import ModalPicker from './ModalPickerConfirm';

import Button from '../component/Button';
import TextInput from '../component/CustomTextInput';
import Header from '../component/Header';

import Constant from '../theme/constant';
import Images from '../theme/images';
import Font from '../theme/fonts';
import Color from '../theme/colors';
import Dropdown from '../component/Dropdown';

import { useDispatch } from 'react-redux';
import { SignupRequest } from '../redux/actions/SignupAction';
import { ScrollView } from 'react-native-gesture-handler';

import { gql, useMutation } from '@apollo/client';

const CREATE_PRODUCT = gql`
  mutation CreateUser(
    $email: String!
    $password: String!
    $authId: String!
    $birthMonth: String!
    $birthYear: String!
    $username: String!
  ) {
    createUser(
      createUserInput: {
        email: $email
        password: $password
        authId: $authId
        birthMonth: $birthMonth
        birthYear: $birthYear
        username: $username
      }
    ) {
      createUserInput {
        id
        authId
        email
      }
    }
  }
`;
const zxcvbn = require('zxcvbn');

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const month = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
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

const Signup = ({ navigation }) => {
  const dispatch = useDispatch();

  const [years, setYear] = useState([]);

  useEffect(() => {
    var year = [];

    var currentYear = new Date().getFullYear(),
      year = [];
    var startYear = startYear || 1900;

    console.log('currentYear : ', currentYear);
    console.log('startYear : ', startYear);

    while (currentYear >= startYear) {
      year.push(currentYear--);
    }
    setYear(year);

    console.log('year::', year);
  }, []);

  const [email, setEmail] = useState(null);
  const [emailError, setEmailError] = useState('');

  const [Password, setPassword] = useState('');
  const [PasswordError, setPasswordError] = useState('');

  const [userName, setUserName] = useState(null);
  const [userNameError, setUserNameError] = useState('0/20');

  const [birthMonth, setBirthMonth] = useState('');
  const [birthMonthError, setBirthMonthError] = useState('');

  const [birthYear, setBirthYear] = useState('');
  const [birthYearError, setBirthYearError] = useState('');

  const [passwordScore, setPasswordScore] = useState<0 | 1 | 2 | 3 | 4>(0);

  const [focus, setFocus] = useState<boolean>();
  const selectFocus = () => {
    if (focus) {
      setFocus(false);
    } else {
      setFocus(true);
    }
  };

  const [circleFillEmail, setCircleFillEmail] = useState<boolean>();

  const selectFill = text => {
    setEmail(text);
    if (text === '') {
      setCircleFillEmail(false);
      setEmailBorder(Color.COMMUNITY_ORANGE);
      setEmailError('Please enter email address. ');
    } else if (
      text.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) === null
    ) {
      setEmailBorder(Color.COMMUNITY_ORANGE);
      setEmailError('Please enter a valid email address. ');
      setCircleFillEmail(false);
    } else {
      setCircleFillEmail(true);
      setEmailBorder(Color.BORDER_COLOR_LIGHTGRAY);
      setEmailError('');
    }
  };

  const [circleFillPassword, setCircleFillPassword] = useState<boolean>();

  const selectFillPassword = text => {
    console.log('text:::', text);

    setPassword(text);
    if (text === '') {
      setpasswordBorder(Color.COMMUNITY_ORANGE);
      setPasswordError('Password must contain a number.');
      setCircleFillPassword(false);
    } else {
      setpasswordBorder(Color.BORDER_COLOR_LIGHTGRAY);
      setPasswordError('');
      setCircleFillPassword(true);
    }
  };

  const [circleFillUser, setCircleFillUser] = useState<boolean>();

  const selectFillUser = text => {
    global.userNameLength = text.length;
    console.log('userNameLength', global.userNameLength);
    setUserName(text);
    if (text === '') {
      setUserNameBorder(Color.COMMUNITY_ORANGE);
      setUserNameError(text.length + '/20');
      setCircleFillUser(false);
    } else if (text.length > 20) {
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
      setBirthYearError(' ');
      setCircleFillBirth(true);
    }
  };

  const selectFillmonth = value => {
    setBirthMonth(value);

    if (value === '' || birthYear === '') {
      setBirthMonthError('');
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

  const SignupValidation = () => {
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
      email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) === null
    ) {
      setEmailError('Please enter a valid email address.');
    } else if (!Password) {
      setPasswordError('Password must contain a number.');
    } else if (!userName) {
      setUserNameError(text.length + '/20');
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
      return Color.BASE_COLOR_GREEN;
    }
    if (passwordScore > 3 && barNumber <= 3) {
      return Color.BASE_COLOR_GREEN;
    }
    return Color.PASSWORD_NORMAL_COLOR;
  };
  const [createProduct, { data, loading, error }] = useMutation(
    CREATE_PRODUCT,
    {
      variables: {
        email,
        Password,
      },
    },
  );
  console.log('data:', data);

  return (
    <View style={styles.container}>
      <Header
        type={Constant.navigatioHeader.PAGE_HEADER}
        leftIcon={Images.Arrowsquare}
        label={'sign up with email'}
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
              selectFill(text);
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
              selectFillPassword(text);
              const response = zxcvbn(text);
              setPasswordScore(response.score);
              // console.log({ response });
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

          <View style={styles.monthView}>
            <View style={styles.rowView}>
              <Text style={styles.birthMonthText}>birth month</Text>
              <TouchableOpacity
                style={styles.touchableStyle}
                onPress={() => changeBirthVisibility(true)}>
                <Image source={Images.Infocircle} style={styles.infoIcon} />
              </TouchableOpacity>
            </View>
            <View style={styles.yearText}>
              <Text style={styles.birthMonthText}>birth year</Text>
            </View>
          </View>
          <View style={styles.monthViewBottom}>
            <View style={styles.rowView}>
              <Dropdown
                optionList={month}
                onSelect={value => {
                  selectFillmonth(value);
                }}
                defaultButtonText={'select one'}
                icon={Images.DropdownIcon}
                helperText={birthMonthError}
                value={birthMonth}
                style={{ width: width * 0.48 }}
              />
            </View>
            <View style={styles.yearDropdown}>
              <Dropdown
                optionList={years}
                onSelect={value => {
                  selectFillBirth(value);
                }}
                defaultButtonText={'select one'}
                style={{ width: width * 0.3 }}
                icon={Images.DropdownIcon}
                helperText={birthYearError}
                iconVisibleFill={true}
                checkRight={true}
                value={birthYear}
                circleFill={circleFillBirth}
              />
            </View>
          </View>

          <View style={styles.userName}>
            <Text style={styles.birthMonthText}>username</Text>
            <TouchableOpacity
              style={styles.touchableStyle}
              onPress={() => changeModalVisibility(true)}>
              <Image source={Images.Infocircle} style={styles.iconStyle} />
            </TouchableOpacity>
          </View>
          <TextInput
            value={userName}
            type={Constant.textInput.LARGE_INPUT}
            text={'@'}
            style={{ fontSize: 18 }}
            onChangeText={text => {
              selectFillUser(text);
            }}
            iconVisibleFill={true}
            checkRight={true}
            circleFill={circleFillUser}
            onTouchStart={() => handleTouchusernameBorder()}
            borderColor={userNameBorder}
          />
          <Text
            style={[
              styles.helperText,
              global.userNameLength > 20
                ? { color: Color.COMMUNITY_ORANGE }
                : { color: Color.BORDER_COLOR_LIGHTGRAY },
            ]}>
            {userNameError}
          </Text>
        </View>
      </ScrollView>
      <View style={styles.bottomView}>
        <Button
          type={Constant.buttons.PRIMARY}
          text={'create account'}
          style={[
            { marginTop: 15 },
            circleFillEmail !== true ||
            circleFillPassword !== true ||
            circleFillBirth !== true ||
            circleFillUser !== true
              ? { backgroundColor: Color.BUTTON_DISABLE_COLOR }
              : { backgroundColor: Color.BASE_COLOR_ORANGE },
          ]}
          onPress={() => SignupValidation()}
          disabled={
            circleFillEmail !== true ||
            circleFillPassword !== true ||
            circleFillBirth !== true ||
            circleFillUser !== true
              ? true
              : false
          }
        />
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
          numberOfLines={2}
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
          textTitle={'selfsea birthnames'}
          // smallText={'your birthname will need to be approved by a moderator before your first post or comment can be approved. it cannot be changed after that.'}
          descriptionData={birthnData}
          numberOfLines={2}
          button={Constant.buttons.CLOSE}
          text={'close'}
        />
      </Modal>
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
  contentView: {
    flex: 4,
    alignItems: 'center',
    // marginTop: 25,
  },
  infoIcon: {
    alignSelf: 'center',
    marginLeft: 4,
  },

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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'flex-start',
    marginHorizontal: 20,
    marginVertical: 3,
    marginTop: height * 0.017,
  },
  monthViewBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'flex-start',
    marginHorizontal: 19,
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  yearText: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginLeft: '25%',
  },
  yearDropdown: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: 10,
  },
  birthMonthText: {
    fontFamily: Font.CALIBRE,
    fontSize: 18,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 30,
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
    justifyContent: 'center',
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
});
export default Signup;

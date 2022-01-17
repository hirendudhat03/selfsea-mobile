import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Modal } from 'react-native';

import ModalPicker from './ModalPickerConfirm';

import Button from '../component/Button';
import TextInput from '../component/CustomTextInput';
import Header from '../component/Header';

import Constant from '../theme/constant';
import Images from '../theme/images';
import Font from '../theme/fonts';
import Color from '../theme/colors';
const zxcvbn = require('zxcvbn');

const height = Dimensions.get('window').height;

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

const CreateNewPassword = ({ navigation }) => {
  useEffect(() => {
    changeModalVisibility(true);
  }, []);

  const [isModalVisible, setIsMoalVisiable] = useState(false);
  const changeModalVisibility = (bool: boolean) => {
    setIsMoalVisiable(bool);
  };

  const [Password, setPassword] = useState('');
  const [PasswordError, setPasswordError] = useState('');

  const [passwordScore, setPasswordScore] = useState<0 | 1 | 2 | 3 | 4>(0);

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

  const [focus, setFocus] = useState<boolean>();
  const selectFocus = () => {
    if (focus) {
      setFocus(false);
    } else {
      setFocus(true);
    }
  };

  const [passwordBorder, setpasswordBorder] = useState('');
  const handleTouchpasswordBorder = () => {
    setpasswordBorder(Color.BASE_COLOR_LIGHT_BLUE);
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

  return (
    <View style={styles.container}>
      <Header
        type={Constant.navigatioHeader.PAGE_HEADER}
        leftIcon={Images.Arrowsquare}
        label={'create new password'}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.contentView}>
        <View style={{ justifyContent: 'center', marginVertical: 20 }}>
          <Text style={styles.requirementText}>[password requirements]</Text>
          <Text style={styles.requirementText}> [password requirements]</Text>
          <Text style={styles.requirementText}> [password requirements]</Text>
        </View>

        <View style={{ flex: 1, justifyContent: 'center' }}>
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
            secureTextEntry={focus === undefined ? true : focus}
            secureTextEntryChange={selectFocus}
            circleFill={circleFillPassword}
            onTouchStart={() => handleTouchpasswordBorder()}
            borderColor={passwordBorder}
            viewStyle={{ width: '100%' }}
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
        </View>
      </View>

      <View style={styles.bottomView}>
        <Button
          type={Constant.buttons.PRIMARY}
          text={'reset and login'}
          style={[{ marginTop: 15 }]}
          //onPress={() => SignupValidation()}
        />
      </View>
      <Modal
        transparent={false}
        animationType="fade"
        visible={isModalVisible}
        onRequestClose={() => changeModalVisibility(false)}>
        <ModalPicker
          changeModalVisibility={changeModalVisibility}
          textTitle={'success!'}
          smallText={
            'if there is an account associated with the email you entered, an email has been sent with a password reset email. please check your spam forlder. if you do not receive the email within in 24 hours, click the re-send password reset email button below.'
          }
          button={Constant.buttons.CLOSE}
          firstText={'close'}
          secondText={'re-send email'}
          type={Constant.modal.MODAL_SUCCESS}
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
  viewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '89%',
  },
  passwordStyle: {
    borderColor: Color.BORDER_COLOR,
    width: '22%',
    height: 6,
    backgroundColor: '',
    marginTop: 5,
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
  requirementText: {
    fontFamily: Font.CALIBRE,
    fontSize: 18,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: Color.CONTENT_COLOR_BLACK_TEXT,
  },
});
export default CreateNewPassword;

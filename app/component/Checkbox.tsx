import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Color from '../theme/colors';
import Font from '../theme/fonts';
// @ts-ignore
import Right from '../assets/images/pngs/Vector.png';

interface Props {
  text: string;
  disabled?: boolean;
  isSelectedCheckBox: boolean;
  onPressCheckbox: () => void;
}

const CheckBox = ({
  text,
  isSelectedCheckBox,
  onPressCheckbox,
  disabled,
}: Props) => {
  return (
    <>
      <View
        style={!disabled ? styles.checkBoxView : styles.checkBoxViewDisabled}>
        <TouchableOpacity
          disabled={disabled}
          onPress={onPressCheckbox}
          style={
            isSelectedCheckBox
              ? styles.checkBoxViewEnable
              : styles.checkBoxDisableView
          }>
          {isSelectedCheckBox ? (
            <Image
              style={
                !disabled ? { tintColor: '#ffffff' } : { tintColor: '#212529' }
              }
              source={Right}
            />
          ) : null}
        </TouchableOpacity>
        {text !== undefined ? (
          <Text style={styles.checkBoxLabelText}>{text}</Text>
        ) : null}
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  checkBoxView: {
    alignSelf: 'baseline',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  checkBoxViewDisabled: {
    alignSelf: 'baseline',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    opacity: 0.5,
  },
  checkBoxDisableView: {
    borderRadius: 3,
    backgroundColor: Color.BASE_COLOR_WHITE,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: Color.FORM_BORDER_COLOR,
    justifyContent: 'center',
  },
  checkBoxViewEnable: {
    borderRadius: 3,
    backgroundColor: Color.BASE_COLOR_SKYBLUE,
    borderStyle: 'solid',
    borderWidth: 1,
    padding: 2,
    borderColor: Color.BASE_COLOR_SKYBLUE,
    justifyContent: 'center',
  },
  checkBoxLabelText: {
    fontFamily: Font.CALIBRE,
    fontSize: 16,
    marginLeft: 5,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 24,
    letterSpacing: 0,
    color: Color.DESCRIPTION_COLOR_TEXT,
  },
  checkBoxImage: {
    tintColor: 'red',
  },
});

export default CheckBox;

import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Color from '../theme/colors';
import Constant from '../theme/constant';

interface Props {
  type: string;
  text: string;
  isSelectedRadioButton: boolean;
  onPressRadioButton: () => void;
}

const Radio = ({
  type,
  text,
  isSelectedRadioButton,
  onPressRadioButton,
}: Props) => {
  return (
    <>
      {type === Constant.RADIOBUTTON ? (
        isSelectedRadioButton ? (
          <View style={styles.radioButtonView}>
            <TouchableOpacity
              onPress={onPressRadioButton}
              style={styles.radioButtonEnableView}
            />
            {text !== undefined ? (
              <Text style={styles.checkBoxLabelText}>{text}</Text>
            ) : null}
          </View>
        ) : (
          <View style={styles.radioButtonView}>
            <TouchableOpacity
              onPress={onPressRadioButton}
              style={styles.radioButtonDisableView}
            />
            {text ? <Text style={styles.checkBoxLabelText}>{text}</Text> : null}
          </View>
        )
      ) : null}
    </>
  );
};
const styles = StyleSheet.create({
  radioButtonView: {
    alignSelf: 'baseline',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  radioButtonDisableView: {
    backgroundColor: Color.BASE_COLOR_WHITE,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: Color.FORM_BORDER_COLOR,
    borderRadius: 14,
  },
  radioButtonEnableView: {
    padding: 3,
    backgroundColor: Color.BASE_COLOR_WHITE,
    borderStyle: 'solid',
    borderWidth: 6,
    borderColor: Color.BASE_COLOR_SKYBLUE,
    borderRadius: 14,
  },
  checkBoxLabelText: {
    marginLeft: 5,
    fontFamily: 'Calibre',
    fontSize: 16,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 24,
    letterSpacing: 0,
    color: Color.DESCRIPTION_COLOR_TEXT,
  },
});

export default Radio;

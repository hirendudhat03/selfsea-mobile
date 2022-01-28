import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Color from '../theme/colors';

interface Props {
  text: string;
  enable: boolean;
  isSelectedRadioButton: boolean;
  onPressRadioButton: () => void;
}

const Radio = ({
  text,
  enable,
  isSelectedRadioButton,
  onPressRadioButton,
}: Props) => {
  return enable ? (
    isSelectedRadioButton ? (
      <View style={styles.radioButtonView}>
        <View style={styles.radioButtonEnableClick} />
        {text !== undefined ? (
          <Text style={styles.checkBoxLabelText}>{text}</Text>
        ) : null}
      </View>
    ) : (
      <View style={styles.radioButtonView}>
        <View style={styles.radioButtonDisableView} />
        {text !== undefined ? (
          <Text style={styles.checkBoxLabelText}>{text}</Text>
        ) : null}
      </View>
    )
  ) : isSelectedRadioButton ? (
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
      {text !== undefined ? (
        <Text style={styles.checkBoxLabelText}>{text}</Text>
      ) : null}
    </View>
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
    padding: 8,
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
  radioButtonEnableClick: {
    padding: 3,
    backgroundColor: Color.BASE_COLOR_WHITE,
    borderStyle: 'solid',
    borderWidth: 6,
    borderColor: Color.DISABLE_ICON_COLOR,
    borderRadius: 14,
  },
});

export default Radio;

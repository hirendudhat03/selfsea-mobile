
import React from "react";
import { Text, View, Dimensions, StyleSheet, TextInput, Switch, } from 'react-native'
import Color from '../theme/colors';
import Constant from '../theme/constant'
import Font from '../theme/fonts'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

interface Props {

  type: string;
  placeholder: string;
  helperText: string;
  label: string;

}


const CustomTextInput = ({ type, placeholder, helperText, label, }: Props) => {


  return (
    <>
      {type === Constant.textInput.LARGE_INPUT ? (
        <>
          {label !== undefined ? (<Text style={styles.labelText}>{label}</Text>) : null}

          <TextInput
            style={styles.largeInputView}
            placeholder={placeholder}
          />
          {helperText !== undefined ? (<Text style={styles.helperText}>{helperText}</Text>) : null}
        </>
      ) :
        null}
      {type === Constant.textInput.LARGE_TEXT_AREA ? (
        <TextInput
          style={styles.largeTextareaView}
          placeholder={placeholder}
        />)
        :
        null}


    </>

  );
}


const styles = StyleSheet.create({
  largeInputView: {
    width: width * 0.78,
    height: height * 0.064,
    borderRadius: 4,
    backgroundColor: Color.BASE_COLOR_WHITE,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: Color.BORDER_COLOR_LIGHTGRAY,
  },

  largeTextareaView: {
    width: width * 0.78,
    height: height * 0.11,
    borderRadius: 4,
    backgroundColor: Color.BASE_COLOR_WHITE,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: Color.BORDER_COLOR_LIGHTGRAY,
  },

  labelText: {
    width: width * 0.78,
    height: height * 0.04,
    fontFamily: Font.CALIBRE,
    fontSize: 20,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 30,
    letterSpacing: 0,
    color: Color.BASE_COLOR_GRAY,
  },
  helperText: {
    width: width * 0.78,
    height: height * 0.02,
    fontFamily: Font.CALIBRE,
    fontSize: 12,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 16,
    letterSpacing: 0,
    color: Color.PLACEHOLDER_TEXT,
  },
  toggleLabel: {
    fontFamily: Font.CALIBRE,
    fontSize: 18,
    fontWeight: 'bold',
    fontStyle: 'normal',
    textAlign: 'right',
    color: Color.BASE_COLOR_WHITE,
    alignSelf: 'center',
    marginHorizontal: 3,
  },
  container: {
    width: width * 0.78,
    height: height * 0.05,
    alignItems: 'center',
    flexDirection: 'row',
  },
});


export default CustomTextInput;

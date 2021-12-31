
import React from "react";
import { Text, View, Dimensions, StyleSheet, TextInput, Image, TouchableOpacity, } from 'react-native'
import Color from '../theme/colors';
import Constant from '../theme/constant'
import Font from '../theme/fonts'
import Images from '../theme/images'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

interface Props {

  type: string;
  placeholder: string;
  helperText: string;
  label: string;
  style: {};
  onChangeText: (text: string) => void;
  value: string;
  secureTextEntryChange: () => void;
  secureTextEntry: boolean;
  iconVisible?: ImageSourcePropType;
}


const CustomTextInput = ({ type, placeholder, helperText, label, style, onChangeText, value, secureTextEntryChange, iconVisible, secureTextEntry, }: Props) => {


  return (
    <>
      {type === Constant.textInput.LARGE_INPUT ? (
        <>
          {label !== undefined ? (<Text style={[styles.labelText, style]}>{label}</Text>) : null}


          <View style={styles.largeInputView}>

            <TextInput
              style={styles.textInputStyle}
              placeholder={placeholder}
              onChangeText={onChangeText}
              secureTextEntry={secureTextEntry}
              value={value}

            />

            {
              iconVisible ? (
                secureTextEntry ? (
                  <TouchableOpacity style={styles.touchableStyle} onPress={secureTextEntryChange}>
                    <Image source={Images.PasswordIcon} style={styles.passwordIcon} />
                  </TouchableOpacity>
                ) : (<TouchableOpacity style={styles.touchableStyle} onPress={secureTextEntryChange}>
                  <Image source={Images.visibilityShow} style={styles.passwordIcon} />
                </TouchableOpacity>)
              ) : null
            }





          </View>


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
    width: '90%',
    height: height * 0.064,
    borderRadius: 4,
    backgroundColor: Color.BASE_COLOR_WHITE,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: Color.BORDER_COLOR_LIGHTGRAY,
    flexDirection: 'row',

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
    width: '90%',
    height: height * 0.04,
    fontFamily: Font.CALIBRE,
    fontSize: 20,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 30,
    letterSpacing: 0,
    color: Color.BASE_COLOR_GRAY,
    marginTop: 25,
  },
  helperText: {
    width: '90%',
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
  passwordIcon: {
    height: 25,
    width: 25,
    alignSelf: 'flex-end',
  },
  textInputStyle: {
    fontSize: 17,
    height: height * 0.064,
    width: '90%',
    paddingHorizontal: 16
  },
  touchableStyle: { justifyContent: 'center' },
});


export default CustomTextInput;

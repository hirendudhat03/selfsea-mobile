import React from 'react';
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import Color from '../theme/colors';
import Constant from '../theme/constant';
import Font from '../theme/fonts';
import Images from '../theme/images';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

interface Props {
  type: string;
  placeholder?: string;
  helperText?: string;
  label?: string;
  style: {};
  onChangeText: (text: string) => void;
  value?: string;
  secureTextEntryChange?: () => void;
  secureTextEntry?: boolean;
  iconVisible?: boolean;
  textInputStyle?: {};
  checkRight?: boolean;
  circleFill?: boolean;
  iconVisibleFill?: boolean;
  viewStyle?: {};
  onTouchStart?: () => void;
  borderColor: string;
  onTouchEnd?: () => void;
  defaultValue?: string;
  text?: string;
  maxLength?: number;
  editable?: boolean;
}

const CustomTextInput = ({
  type,
  placeholder,
  helperText,
  label,
  style,
  onChangeText,
  value,
  secureTextEntryChange,
  iconVisible,
  secureTextEntry,
  textInputStyle,
  checkRight,
  iconVisibleFill,
  circleFill,
  viewStyle,
  onTouchStart,
  borderColor,
  onTouchEnd,
  defaultValue,
  text,
  maxLength,
  editable,
}: Props) => {
  return (
    <>
      {type === Constant.textInput.LARGE_INPUT ? (
        <>
          {label !== undefined ? (
            <Text style={[styles.labelText, style]}>{label}</Text>
          ) : null}
          <View style={[styles.contentView, viewStyle]}>
            <View
              style={[
                styles.largeInputView,
                {
                  borderColor:
                    borderColor === ''
                      ? Color.BORDER_COLOR_LIGHTGRAY
                      : borderColor,
                },
              ]}>
              <Text style={styles.textStyle}>{text}</Text>
              <TextInput
                maxLength={maxLength}
                style={[styles.textInputStyle, textInputStyle]}
                placeholder={placeholder}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
                editable={editable}
                value={value}
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
                defaultValue={defaultValue}
                autoCapitalize="none"
              />

              {iconVisible ? (
                secureTextEntry ? (
                  <TouchableOpacity
                    style={styles.touchableStyle}
                    onPress={secureTextEntryChange}>
                    <Image source={Images.combinedShape} />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    style={styles.touchableStyle}
                    onPress={secureTextEntryChange}>
                    <Image source={Images.combinedShapeOPen} />
                  </TouchableOpacity>
                )
              ) : null}
            </View>
            {checkRight !== undefined ? (
              <>
                {iconVisibleFill ? (
                  circleFill ? (
                    <View style={styles.iconView}>
                      <Image source={Images.CheckCircleGreen} />
                    </View>
                  ) : (
                    <View style={styles.iconView}>
                      <Image source={Images.CheckCircle} />
                    </View>
                  )
                ) : null}
              </>
            ) : null}
          </View>

          {helperText !== '' ? (
            <Text style={styles.helperText}>{helperText}</Text>
          ) : null}
        </>
      ) : null}

      {type === Constant.textInput.LARGE_TEXT_AREA ? (
        <TextInput
          style={styles.largeTextareaView}
          placeholder={placeholder}
          maxLength={maxLength}
        />
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  largeInputView: {
    width: '90%',
    flex: 9,
    height: height * 0.06,
    borderRadius: 4,
    backgroundColor: Color.BASE_COLOR_WHITE,
    borderStyle: 'solid',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: Color.BORDER_COLOR_LIGHTGRAY,
  },
  iconView: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'flex-end',
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
    marginTop: height * 0.015,
  },
  textStyle: {
    fontFamily: Font.CALIBRE,
    fontSize: 18,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 4,
    color: Color.PLACEHOLDER_TEXT,
  },
  helperText: {
    width: '90%',
    fontFamily: Font.CALIBRE,
    fontSize: 12,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: Color.COMMUNITY_ORANGE,
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

  textInputStyle: {
    fontSize: 17,
    height: height * 0.064,
    width: '90%',
    flex: 9,
  },
  touchableStyle: {
    justifyContent: 'center',
    flex: 1,
    padding: 5,
  },
  contentView: {
    width: '90%',
    height: height * 0.064,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default CustomTextInput;

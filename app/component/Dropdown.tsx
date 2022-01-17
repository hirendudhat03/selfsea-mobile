import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  View,
  Text,
  ImageSourcePropType,
} from 'react-native';
import Color from '../theme/colors';
import Font from '../theme/fonts';
import Images from '../theme/images';
import SelectDropdown from 'react-native-select-dropdown';
// @ts-ignore

const width = Dimensions.get('window').width;

interface OptionListType {
  title: string;
  value: string;
}

interface Props {
  defaultButtonText: string;
  onSelect: (item: string, index: number) => void;
  optionList: OptionListType[];
  style?: {};
  icon?: ImageSourcePropType;
  helperText?: string;
  rowTextStyle?: {};
  checkRight?: boolean;
  circleFill: string;
  value: string;
  iconVisibleFill?: boolean;
}

const Dropdown = ({
  optionList,
  onSelect,
  defaultButtonText,
  style,
  icon,
  helperText,
  value,
  rowTextStyle,
  checkRight,
  iconVisibleFill,
  circleFill,
}: Props) => {
  return (
    <View>
      <View style={{ flexDirection: 'row', }}>
        <View>
          <SelectDropdown
            renderDropdownIcon={() => (
              <View style={[styles.iconView,]}>
                <View style={styles.triangleShapeUpCSS} />
                <View style={styles.triangleShapeCSS} />

                {/* <Image source={icon} style={styles.dropDownUpIcon} /> */}
                {/* <Image source={icon} style={styles.dropDownIcon} /> */}
              </View>
            )}
            rowTextStyle={rowTextStyle}
            defaultButtonText={defaultButtonText}
            buttonTextStyle={{ textAlign: 'left', fontSize: 17 }}
            buttonStyle={[styles.Container, style,]}
            data={optionList.map(item => item)}
            onSelect={onSelect}
            buttonTextAfterSelection={selectedItem => {
              return selectedItem;
            }}
            rowTextForSelection={item => {
              return item;
            }}
          />
        </View>
        {checkRight !== undefined ? (
          <>
            {iconVisibleFill ? (
              circleFill ? (
                <View style={styles.circleView}>
                  <Image source={Images.CheckCircleGreen} />
                </View>
              ) : (
                <View style={styles.circleView}
                >
                  <Image source={Images.CheckCircle} />
                </View>
              )
            ) : null}

          </>
        ) : null}
      </View>
      {/* {helperText !== '' ? (
        <Text style={styles.helperText}>{helperText}</Text>
      ) : null} */}
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {
    borderRadius: 4,
    backgroundColor: Color.BASE_COLOR_WHITE,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: Color.BORDER_COLOR_LIGHTGRAY,
  },
  iconView: {
    width: width * 0.1,
    height: '100%',
    backgroundColor: Color.BASE_COLOR_WHITE,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingStart: 7,
    flexDirection: 'column',


  },
  helperText: {
    width: '90%',
    fontFamily: Font.CALIBRE,
    fontSize: 12,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 16,
    letterSpacing: 0,
    color: Color.COMMUNITY_ORANGE,

  },
  circleView: {
    justifyContent: 'center',
    marginLeft: 10,
  },
  // dropDownUpIcon: {
  //   width: 10,
  //   height: 11,
  //   tintColor: Color.TEXT_COLOR_PASSWORD,
  //   transform: [{ rotateX: '180deg' }],
  // },
  // dropDownIcon: {
  //   width: 10,
  //   height: 11,
  //   tintColor: Color.TEXT_COLOR_PASSWORD,
  // },
  triangleShapeCSS: {
    width: 0,
    height: 0,
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderBottomWidth: 8,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: Color.TEXT_COLOR_PASSWORD,
    transform: [{ rotateX: '180deg' }],
    marginTop: '9%',

  },
  triangleShapeUpCSS: {
    width: 0,
    height: 0,
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderBottomWidth: 8,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: Color.TEXT_COLOR_PASSWORD,
  },
});

export default Dropdown;

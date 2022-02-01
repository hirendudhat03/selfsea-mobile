import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Color from '../theme/colors';
import Images from '../theme/images';
import SelectDropdown from 'react-native-select-dropdown';
// @ts-ignore

interface OptionListType {
  title: string;
  value: string;
}

interface Props {
  defaultButtonText: string;
  onSelect: (item: string, index: number) => void;
  optionList: OptionListType[];
  style?: {};
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
  rowTextStyle,
  checkRight,
  iconVisibleFill,
  circleFill,
}: Props) => {
  return (
    <View>
      <View style={styles.dropDownViewStyle}>
        <View>
          <SelectDropdown
            renderDropdownIcon={() => (
              <View style={[styles.iconView]}>
                <View style={styles.triangleShapeUpCSS} />
                <View style={styles.triangleShapeCSS} />
              </View>
            )}
            rowTextStyle={rowTextStyle}
            defaultButtonText={defaultButtonText}
            buttonTextStyle={styles.buttonTextStyle}
            buttonStyle={[styles.Container, style]}
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
                <View style={styles.circleView}>
                  <Image source={Images.CheckCircle} />
                </View>
              )
            ) : null}
          </>
        ) : null}
      </View>
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
    height: '100%',
    backgroundColor: Color.BASE_COLOR_WHITE,
    justifyContent: 'center',
    alignItems: 'flex-end',
    flexDirection: 'column',
  },

  circleView: {
    justifyContent: 'center',
    marginLeft: 10,
  },

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
    marginTop: '25%',
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
  dropDownViewStyle: { flexDirection: 'row' },
  buttonTextStyle: { textAlign: 'left', fontSize: 16 },
});

export default Dropdown;

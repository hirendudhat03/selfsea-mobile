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
import SelectDropdown from 'react-native-select-dropdown';
// @ts-ignore

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

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
}

const Dropdown = ({
  optionList,
  onSelect,
  defaultButtonText,
  style,
  icon,
  helperText,
}: Props) => {
  return (
    <View>
      <SelectDropdown
        renderDropdownIcon={() => (
          <View style={styles.iconView}>
            <Image source={icon} />
          </View>
        )}
        defaultButtonText={defaultButtonText}
        buttonStyle={[styles.Container, style]}
        data={optionList.map(item => item.title)}
        onSelect={onSelect}
        buttonTextAfterSelection={selectedItem => {
          return selectedItem;
        }}
        rowTextForSelection={item => {
          return item;
        }}
      />
      {helperText !== undefined ? (
        <Text style={styles.helperText}>{helperText}</Text>
      ) : null}
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
    height: height * 0.06,
    backgroundColor: Color.BASE_COLOR_WHITE,
    borderStyle: 'solid',
    borderLeftColor: Color.BORDER_COLOR_LIGHTGRAY,
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftWidth: 1,
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
});

export default Dropdown;

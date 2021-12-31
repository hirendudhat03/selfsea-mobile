import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';
import Color from '../theme/colors';
import Constant from '../theme/constant';
import fonts from '../theme/fonts';
import Font from '../theme/fonts';

interface Props {
  type?: string;
  label?: string;
  leftIcon?: ImageSourcePropType;
  rightIcon?: ImageSourcePropType;
  text?: string;
  onPress: () => void;
  underlinetext?: string;
  style?: {};
}

const Header = ({
  type,
  rightIcon,
  label,
  leftIcon,
  text,
  underlinetext,
  style,
  onPress,
}: Props) => {
  return (
    <>
      {type === Constant.navigatioHeader.PAGE_HEADER ? (
        <View style={[styles.primaryPageHeaderView, style]}>
          <View style={styles.primaryPageHeaderRow}>
            <TouchableOpacity onPress={onPress}>
              <Image source={leftIcon} />
            </TouchableOpacity>
            <Text style={styles.primaryPageHeaderText}>{label}</Text>
            <TouchableOpacity>
              <Image source={rightIcon} />
            </TouchableOpacity>
          </View>
        </View>
      ) : null}
      {type === Constant.navigatioHeader.POST ? (
        <View style={[styles.createPostView, style]}>
          <TouchableOpacity>
            <Image source={leftIcon} />
          </TouchableOpacity>
          <Text style={styles.createPostText}>
            {label} <Text style={styles.createPostTextSmall}>{text}</Text>
          </Text>
          <View style={styles.downView}>
            <Text style={styles.underlineText}>{underlinetext}</Text>
            <TouchableOpacity>
              <Image source={rightIcon} style={styles.downIconStyle} />
            </TouchableOpacity>
          </View>
        </View>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  primaryPageHeaderView: {
    padding: 20,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    backgroundColor: Color.BASE_COLOR_LIGHT_BLUE,
    height: 120,
    shadowColor: Color.BASE_COLOR_LIGHTGRAY,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 0,
    shadowOpacity: 1,
  },
  primaryPageHeaderRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    // paddingTop: 50,
  },
  primaryPageHeaderText: {
    fontFamily: Font.CALIBRE,
    fontSize: 24,
    fontWeight: 'bold',
    fontStyle: 'normal',
    lineHeight: 24,
    letterSpacing: 0,
    textAlign: 'center',
    color: Color.BASE_COLOR_WHITE,
  },
  createPostView: {
    padding: 20,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    backgroundColor: Color.BASE_COLOR_LIGHT_BLUE,
    paddingTop: 80,
  },
  createPostText: {
    fontFamily: Font.CALIBRE,
    fontSize: 24,
    fontWeight: 'bold',
    fontStyle: 'normal',
    lineHeight: 24,
    letterSpacing: 0,
    color: Color.COLOR_LIGHT,
    marginVertical: 14,
  },
  createPostTextSmall: {
    fontFamily: Font.CALIBRE,
    fontSize: 24,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 24,
    letterSpacing: 0,
    color: Color.BASE_COLOR_WHITE,
  },
  underlineText: {
    fontFamily: fonts.CALIBRE,
    fontSize: 30,
    fontWeight: 'bold',
    fontStyle: 'normal',
    lineHeight: 30,
    letterSpacing: 0,
    color: Color.BASE_COLOR_WHITE,
    textDecorationLine: 'underline',
  },
  downView: {
    flexDirection: 'row',
  },
  downIconStyle: {
    margin: 5,
  },
  communityHeaderView: {
    padding: 20,
    paddingTop: 80,
  },
  communityHeaderText: {
    fontFamily: Font.CALIBRE,
    fontSize: 24,
    fontWeight: 'bold',
    fontStyle: 'normal',
    lineHeight: 24,
    letterSpacing: 0,
    color: Color.CONTENT_COLOR_BLACK_TEXT,
  },
  communityText: {
    fontFamily: Font.CALIBRE,
    fontSize: 18,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: Color.CONTENT_COLOR_BLACK_TEXT,
  },
});

export default Header;

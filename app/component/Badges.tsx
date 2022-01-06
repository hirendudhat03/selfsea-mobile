import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';
import Color from '../theme/colors';
import Constant from '../theme/constant';
import Font from '../theme/fonts';

interface Props {
  type: string;
  leftIcon?: ImageSourcePropType;
  rigthIcon?: ImageSourcePropType;
  text: string;
  onPress: () => void;
}

const Badges = ({ type, leftIcon, rigthIcon, text, onPress }: Props) => {
  return (
    <View
      style={
        type === Constant.badges.MENTOR_BADGE
          ? styles.mentorView
          : type === Constant.badges.CONTENT
            ? styles.contentView
            : type === Constant.badges.COMMENTS
              ? styles.commentsView
              : type === Constant.badges.ACTIVE
                ? styles.activeView
                : type === Constant.badges.INACTIVE
                  ? styles.inActiveView
                  : type === Constant.badges.DESCRIPTOR
                    ? styles.descriptorView
                    : type === Constant.badges.MULTISELECT
                      ? styles.multiSelectView
                      : null
      }>
      {leftIcon ? (
        <TouchableOpacity><Image source={leftIcon} style={styles.leftIconStyle} /></TouchableOpacity>
      ) : null}

      <Text
        style={
          type === Constant.badges.MENTOR_BADGE
            ? styles.mentorText
            : type === Constant.badges.CONTENT
              ? styles.contentText
              : type === Constant.badges.COMMENTS
                ? styles.commentsText
                : type === Constant.badges.ACTIVE
                  ? styles.activeText
                  : type === Constant.badges.INACTIVE
                    ? styles.inActiveText
                    : type === Constant.badges.DESCRIPTOR
                      ? styles.descriptorText
                      : type === Constant.badges.MULTISELECT
                        ? styles.multiSelectText
                        : null
        }>
        {text}
      </Text>
      {rigthIcon ? (
        <TouchableOpacity onPress={onPress}><Image source={rigthIcon} style={styles.rightIconStyle} /></TouchableOpacity>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  mentorView: {
    alignSelf: 'baseline',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 11,
    backgroundColor: Color.COMMUNITY_DARK_BLUE,
    justifyContent: 'center',
  },
  mentorText: {
    fontFamily: Font.CALIBRE,
    fontSize: 15,
    fontWeight: 'bold',
    fontStyle: 'normal',
    lineHeight: 15,
    letterSpacing: 0,
    textAlign: 'center',
    color: Color.BASE_COLOR_WHITE,
  },
  contentView: {
    alignSelf: 'baseline',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 14,
    backgroundColor: Color.BASE_COLOR_WHITE,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: Color.BASE_COLOR_BORDER_GRAY,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentText: {
    fontFamily: Font.CALIBRE,
    fontSize: 16,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 24,
    letterSpacing: 0,
    color: Color.CONTENT_COLOR_BLACK_TEXT,
  },
  commentsView: {
    alignSelf: 'baseline',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 14,
    backgroundColor: Color.BASE_COLOR_BORDER_GRAY,
    justifyContent: 'center',
  },
  commentsText: {
    textAlign: 'center',
    fontFamily: Font.CALIBRE,
    fontSize: 16,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 24,
    letterSpacing: 0,
    color: Color.BASE_COLOR_GRAY,
  },
  activeView: {
    alignSelf: 'baseline',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 2,
    backgroundColor: Color.BASE_COLOR_GREEN,
    justifyContent: 'center',
  },
  activeText: {
    fontFamily: Font.CALIBRE,
    fontSize: 15,
    fontWeight: 'bold',
    fontStyle: 'normal',
    lineHeight: 15,
    letterSpacing: 0,
    textAlign: 'center',
    color: Color.BASE_COLOR_WHITE,
  },
  inActiveView: {
    alignSelf: 'baseline',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 2,
    backgroundColor: Color.BASE_COLOR_LIGHTGRAY,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: Color.BORDER_COLOR_GRAY,
    justifyContent: 'center',
  },
  inActiveText: {
    fontFamily: Font.CALIBRE,
    fontSize: 15,
    fontWeight: 'bold',
    fontStyle: 'normal',
    lineHeight: 15,
    letterSpacing: 0,
    textAlign: 'center',
    color: Color.TEXT_COLOR,
  },
  descriptorView: {
    alignSelf: 'baseline',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 18,
    backgroundColor: Color.BASE_COLOR_WHITE,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: Color.BORDER_COLOR_LIGHTGRAY,
    justifyContent: 'center',
    alignItems: 'center',
  },
  descriptorText: {
    textAlign: 'center',
    fontFamily: Font.CALIBRE,
    fontSize: 16,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 24,
    letterSpacing: 0,
    color: Color.DESCRIPTION_COLOR_TEXT,
  },
  multiSelectView: {
    alignSelf: 'baseline',
    paddingVertical: 3,
    paddingHorizontal: 9,
    borderRadius: 18,
    backgroundColor: Color.BASE_COLOR_WHITE,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: Color.BORDER_COLOR_LIGHTGRAY,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2
  },
  multiSelectText: {
    fontFamily: Font.CALIBRE,
    fontSize: 16,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 24,
    letterSpacing: 0,
    color: Color.BASE_COLOR_GRAY,
  },
  leftIconStyle: {
    marginHorizontal: 5,
    marginVertical: 0,
  },
  rightIconStyle: {
    alignSelf: 'center',
    marginLeft: 9,
  },
});

export default Badges;

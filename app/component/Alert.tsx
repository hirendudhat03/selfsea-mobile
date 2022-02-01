import Images from '../theme/images';
import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Color from '../theme/colors';
import Constant from '../theme/constant';
import Font from '../theme/fonts';
interface Props {
  type: string;
  text: string;
}

const Alert = ({ type, text }: Props) => {
  return (
    <View
      style={
        type === Constant.alert.MENTOR
          ? styles.mentorView
          : type === Constant.alert.URGENT
          ? styles.modUrgentView
          : type === Constant.alert.WARNING
          ? styles.modWarning
          : type === Constant.alert.SUCCESS
          ? styles.actionSuccessView
          : type === Constant.alert.MENTEE
          ? styles.actionSuccessView
          : type === Constant.alert.MENTEE_FADE
          ? styles.actionRemoveMenteeView
          : type === Constant.alert.INFO
          ? styles.actionInfoView
          : null
      }>
      <View style={[{flexDirection:"row"}]}>
        <View style={[(type === Constant.alert.MENTEE || type === Constant.alert.MENTEE_FADE) ? {width:"90%"}: {width:"100%"}]}>
          <Text
            style={
              type === Constant.alert.MENTOR
                ? styles.mentorText
                : type === Constant.alert.URGENT
                ? styles.modUrgentText
                : type === Constant.alert.WARNING
                ? styles.modWarningText
                : type === Constant.alert.MENTEE_FADE
                ? styles.actionFadeText
                : type === Constant.alert.SUCCESS
                ? styles.actionSuccessText
                : type === Constant.alert.INFO
                ? styles.actionInfoText
                : null
            }>
            {text}
          </Text>
        </View>
        {(type === Constant.alert.MENTEE || type === Constant.alert.MENTEE_FADE)    &&
          <View style={[styles.touchableStyle, {width:"10%"}]} >
            <Image source={Images.Infocircle} />
          </View>
        }
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mentorView: {
    padding: 10,
    borderRadius: 4,
    backgroundColor: Color.BASE_COLOR_DARK_BLUE,
    justifyContent: 'center',
  },
  mentorText: {
    fontFamily: Font.CALIBRE,
    fontSize: 20,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 30,
    letterSpacing: 0,
    textAlign: 'center',
    color: Color.BASE_COLOR_WHITE,
  },
  modUrgentView: {
    paddingVertical: 5,
    paddingHorizontal: 35,
    alignSelf: 'baseline',
    borderRadius: 4,
    borderStyle: 'solid',
    backgroundColor: Color.BASE_COLOR_ORANGE,
    borderWidth: 1,
    borderColor: Color.BASE_COLOR_ORANGE,
    justifyContent: 'center',
  },
  modUrgentText: {
    fontFamily: Font.CALIBRE,
    fontSize: 16,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 24,
    letterSpacing: 0,
    textAlign: 'center',
    color: Color.BASE_COLOR_WHITE,
  },
  modWarning: {
    alignSelf: 'baseline',
    paddingVertical: 5,
    paddingHorizontal: 35,
    borderRadius: 4,
    backgroundColor: Color.BASE_COLOR_DARK_WARNING,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: Color.BORDER_COLOR_WARNING,
    justifyContent: 'center',
  },
  modWarningText: {
    fontFamily: Font.CALIBRE,
    fontSize: 16,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 24,
    letterSpacing: 0,
    textAlign: 'center',
    color: Color.BASE_COLOR_WHITE,
  },
  actionSuccessView: {
    paddingVertical: 12,
    borderRadius: 4,
    backgroundColor: Color.BASE_COLOR_DARK_SUCCESS,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: Color.BORDER_COLOR_SUCCESS,
    justifyContent: 'center',
    paddingLeft: 15,
  },
  actionMenteeView: {
    paddingVertical: 10,
    borderRadius: 4,
    backgroundColor: Color.BASE_COLOR_DARK_SUCCESS,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: Color.BORDER_COLOR_SUCCESS,
    justifyContent: 'center',
    paddingLeft: 15,
  },
  actionRemoveMenteeView: {
    paddingVertical: 10,
    borderRadius: 4,
    backgroundColor: Color.BORDER_COLOR_GRAY,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: Color.BORDER_COLOR_SUCCESS,
    justifyContent: 'center',
    paddingLeft: 15,
    textAlign:"center"
  },
  actionSuccessText: {
    fontFamily: 'HelveticaNeue',
    fontSize: 16,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 24,
    letterSpacing: 0,
    color: Color.BASE_COLOR_DARK_SUCCESSTEXT,
  },
  actionFadeText: {
    fontFamily: 'HelveticaNeue',
    fontSize: 16,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 24,
    letterSpacing: 0,
    color: Color.CONTENT_COLOR_BLACK_TEXT,
  },
  actionInfoView: {
    paddingVertical: 12,
    borderRadius: 4,
    backgroundColor: Color.BASE_COLOR_DARK_INFO,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: Color.BORDER_COLOR_INFO,
    justifyContent: 'center',
    paddingLeft: 15,
  },
  actionInfoText: {
    fontFamily: 'HelveticaNeue',
    fontSize: 16,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 24,
    letterSpacing: 0,
    color: Color.BASE_COLOR_DARK_INFOTEXT,
  },
  touchableStyle: {
    justifyContent: 'center',
    flex: 1
  },
});

export default Alert;

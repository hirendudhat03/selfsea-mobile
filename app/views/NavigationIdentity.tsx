import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Constant from '../theme/constant';
import Color from '../theme/colors';
// import Font from '../theme/fonts';
import Images from '../theme/images';
import Font from '../theme/fonts';
import ModalPicker from './ModalPickerConfirm';

import LinearGradient from 'react-native-linear-gradient';
import Header from '../component/Header';
import Button from '../component/Button';
import Badges from '../component/Badges';

const DATA = [{}, {}, {}, {}];

const descriptionData = [
  {
    title:
      'selfsea was designed together with young people, as a place where yourself reflected when a supportive and inclusive community that prioritizes your identity and expirience. ',
  },
  {
    title:
      "you have the option of selecting content warnings if there are topics you'd prefer not to see. when you select a content warning, any posts containing that warning will be greyed out. you can add and edit content warnings in your profile settings.",
  },
];
const NavigationIdentity = ({ navigation }) => {
  const renderItem = () => (
    <View style={styles.viewStyle}>
      <View style={styles.inputView}>
        <View style={styles.textView}>
          <Text style={styles.titleText} onPress={() => alert('ok')}>
            @litliy
          </Text>
          <Text style={styles.titleTextSmall}>(they/them)</Text>
          <TouchableOpacity onPress={() => alert('settings')}>
            <Image source={Images.Dots} style={styles.imageView} />
          </TouchableOpacity>
        </View>

        <Text style={styles.descriptionText} numberOfLines={8}>
          Need help telling my parents that I want to change my name after
          coming out
        </Text>

        <Text style={styles.descriptionSmallText}>
          I recently came out as non-binary and my parents didn't take it super
          great at first, but in the end were sort of supportive. I want to
        </Text>
        <View style={styles.badgesView}>
          <Badges
            style={styles.commentBadges}
            type={Constant.badges.COMMENTS}
            text={'5 comments'}
          />
          <Badges
            style={styles.warnBadges}
            type={Constant.badges.CONTENT}
            text={'homiophobia'}
            leftIcon={Images.Warning}
          />
          <Text style={styles.timeText}>2:48pm</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header
        type={Constant.navigatioHeader.COMMUNITY_HEADER}
        leftIcon={Images.Arrowsquare}
        label={'navigating identity'}
        rightIcon={Images.Dots}
        descriptionText={
          'a community to discuss questions and situations related to gender identity, sexual orientation, raceand ethnicity'
        }
        onPress={() => navigation.goBack()}
        onPressRight={() => alert('setting')}
      />
      <LinearGradient
        colors={['rgba(255, 255, 255, 0.22)', Color.COLOR_LIGHT]}
        style={styles.linearGradient}>
        <FlatList data={DATA} renderItem={renderItem} />
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
  container: {
    flex: 1,
    backgroundColor: Color.COMMUNITY_MAROON,
  },
  viewStyle: {
    paddingVertical: 12,
    flexDirection: 'row',
    borderRadius: 6,
    backgroundColor: Color.BASE_COLOR_WHITE,
    marginVertical: 5,
  },
  headerView: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    shadowColor: Color.BASE_COLOR_LIGHT_BLUE,
  },
  inputView: {
    flex: 6,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  buttonView: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  iconStyle: {
    tintColor: Color.COMMUNITY_MAROON,
    height: 30,
    width: 20,
  },
  titleText: {
    fontFamily: Font.CALIBRE,
    fontSize: 18,
    fontWeight: 'bold',
    fontStyle: 'normal',
    lineHeight: 24,
    letterSpacing: 0,
    color: Color.CONTENT_COLOR_BLACK_TEXT,
    flexDirection: 'row',
    marginHorizontal: 10,
    textDecorationLine: 'underline',
  },
  titleTextSmall: {
    fontFamily: Font.CALIBRE,
    fontSize: 15,
    fontStyle: 'normal',
    lineHeight: 24,
    letterSpacing: 0,
    color: Color.PLACEHOLDER_TEXT,
    // alignContent: 'space-between',
  },
  descriptionText: {
    marginVertical: 5,
    fontFamily: Font.CALIBRE,
    fontSize: 18,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: Color.CONTENT_COLOR_BLACK_TEXT,
    marginHorizontal: 10,
  },
  descriptionSmallText: {
    fontFamily: Font.CALIBRE,
    fontSize: 15,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: Color.CONTENT_COLOR_BLACK_TEXT,
    marginHorizontal: 10,
  },

  descriptionTextStyle: {
    width: 90,
    marginHorizontal: 5,
  },
  imageView: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginHorizontal: 190,
    tintColor: Color.BASE_COLOR_LIGHTGRAY,
  },
  badgesView: {
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'baseline',
    marginHorizontal: 5,
  },
  timeText: {
    alignItems: 'flex-end',
    color: Color.BORDER_COLOR_GRAY,
    fontSize: 12,
    marginHorizontal: 50,
  },
  textView: {
    flexDirection: 'row',
  },
  commentBadges: {
    fontSize: 14,
  },
  warnBadges: {
    marginHorizontal: 7,
  },
});

export default NavigationIdentity;

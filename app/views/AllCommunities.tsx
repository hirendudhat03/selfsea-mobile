import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  Image,
  FlatList,
  SafeAreaView,
} from 'react-native';
import ModalPicker from './ModalPickerConfirm';

import Constant from '../theme/constant';
import Color from '../theme/colors';
import Font from '../theme/fonts';
import Images from '../theme/images';

import Header from '../component/Header';
import Button from '../component/Button';

import LinearGradient from 'react-native-linear-gradient';

const DATA = [{}, {}, {}, {}];

const AllCommunities = ({ navigation }) => {
  const renderItem = () => (
    <View style={styles.viewStyle}>
      <View style={styles.imageView}>
        <Image source={Images.LogoTab} style={styles.iconStyle} />
      </View>
      <View style={styles.inputView}>
        <Text style={styles.titleText}>navigating identity</Text>
        <Text style={styles.descriptionText} numberOfLines={4}>
          a community to discuss questions and situations related to gender
          identity, sexual orientation, race and ethnicity
        </Text>
      </View>
      <View style={styles.buttonView}>
        <Button
          type={Constant.buttons.CLOSE}
          text={'join'}
          style={{ paddingVertical: 12 }}
        />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header
        type={Constant.navigatioHeader.PAGE_HEADER}
        label={'selfsea communities'}
        style={styles.headerView}
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
  container: {
    flex: 1,
    backgroundColor: Color.BASE_COLOR_LIGHT_BLUE,
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

  imageView: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 8,
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
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'normal',
    lineHeight: 24,
    letterSpacing: 0,
    color: Color.CONTENT_COLOR_BLACK_TEXT,
  },
  descriptionText: {
    marginVertical: 5,
    fontFamily: Font.CALIBRE,
    fontSize: 18,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: Color.CONTENT_COLOR_BLACK_TEXT,
  },
  linearGradient: {
    flex: 1,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
  descriptionTextStyle: {
    textAlign: 'left',
  },
});

export default AllCommunities;

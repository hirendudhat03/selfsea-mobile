import React, { useState } from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import ModalPicker from './ModalPickerConfirm';

import Color from '../theme/colors';
import Font from '../theme/fonts';
import Images from '../theme/images';
import Constant from '../theme/constant';
import LinearGradient from 'react-native-linear-gradient';

const DATA = [{}, {}, {}, {}];

const CommunitiesHome = () => {
  const [isModalVisible, setIsMoalVisiable] = useState(false);
  const changeModalVisibility = (bool: boolean) => {
    setIsMoalVisiable(bool);
  };

  const descriptionData = [
    {
      title:
        "several mentors will be online during each live session, so you'll get much quicker reply to your post, and can have a real time conversation if you'd like.",
    },
  ];

  const renderItem = () => (
    <View style={styles.viewStyle}>
      <View style={styles.contentView}>
        <View style={styles.imageView}>
          <Image source={Images.LogoTab} style={styles.iconStyle} />
        </View>
        <View style={styles.inputView}>
          <Text style={styles.titleText}>navigating identity</Text>
          <Text style={styles.descriptionText}>
            a community to discuss questions and situations related to gender
            identity, sexual orientation, race and ethnicity
          </Text>
        </View>
      </View>
      <View style={styles.liveSessionStyle}>
        <Text style={styles.sessionText}>
          live session today from 4pm-7pm EST
        </Text>
        <TouchableOpacity onPress={() => changeModalVisibility(true)}>
          <Image
            source={Images.infoCircleFill}
            style={styles.sessionIconStyle}
          />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['rgba(255, 255, 255, 0.22)', Color.COLOR_LIGHT]}
        style={styles.linearGradient}>
        <FlatList data={DATA} renderItem={renderItem} />
      </LinearGradient>
      <Modal
        transparent={false}
        animationType="fade"
        visible={isModalVisible}
        onRequestClose={() => changeModalVisibility(false)}>
        <ModalPicker
          changeModalVisibility={changeModalVisibility}
          type={Constant.modal.MODAL}
          textTitle={'live sessions'}
          descriptionData={descriptionData}
          numberOfLines={5}
          button={Constant.buttons.CLOSE}
          text={'close'}
        />
      </Modal>
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
    paddingRight: 16,
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
  liveSessionStyle: {
    padding: 5,
    width: '94%',
    flexDirection: 'row',
    borderRadius: 4,
    backgroundColor: Color.BASE_COLOR_DARK_SUCCESS,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: Color.BORDER_COLOR_SUCCESS,
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  sessionText: {
    fontFamily: Font.CALIBRE,
    fontSize: 18,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 25,
    letterSpacing: 0,
    paddingHorizontal: 15,
    textAlign: 'center',
    color: Color.SESSION_TEXT_COLOR,
  },
  sessionIconStyle: {
    alignSelf: 'center',
    marginRight: 6,
    tintColor: Color.SESSION_ICON_COLOR,
  },
  contentView: { flexDirection: 'row' },
});

export default CommunitiesHome;

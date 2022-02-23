import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  Image,
  FlatList,
  Alert,
} from 'react-native';
import Constant from '../theme/constant';
import Color from '../theme/colors';
import Images from '../theme/images';
import Font from '../theme/fonts';
import ModalPicker from './ModalPickerConfirm';

import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';
import Badges from '../components/Badges';

const DATA = [{}, {}, {}, {}];

const NavigationIdentity = ({ navigation }) => {
  useEffect(() => {
    changeModalVisibility(true);
  }, []);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const changeModalVisibility = (bool: boolean) => {
    setIsModalVisible(bool);
  };

  const renderItem = () => (
    <View style={styles.viewStyle}>
      <View style={styles.bottomView}>
        <View style={styles.inputView}>
          {/* cspell:disable-next-line */}
          <Text style={styles.titleText}>@litliy </Text>

          <Text style={styles.titleTextSmall}>(they/them)</Text>
        </View>
        <View style={styles.iconView}>
          <Image source={Images.Dots} style={styles.imageView} />
        </View>
      </View>
      <View style={styles.descriptionView}>
        <Text style={styles.descriptionText}>
          Need help telling my parents that I want to change my name after
          coming out
        </Text>

        <Text style={styles.descriptionSmallText}>
          I recently came out as non-binary and my parents didn't take it super
          great at first, but in the end were sort of supportive. I want to
        </Text>
      </View>

      <View style={styles.bottomView}>
        <View style={styles.badgesView}>
          <Badges
            type={Constant.badges.COMMENTS}
            text={'0 Comments'}
            style={styles.badgeCommentStyle}
          />

          <Badges
            type={Constant.badges.CONTENT}
            text={'homophobia'}
            leftIcon={Images.Warning}
            style={styles.badgeContentStyle}
          />
        </View>
        <View style={styles.timeView}>
          <Text style={styles.endTimeText}>2:48pm</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header
        type={Constant.navigationHeader.COMMUNITY_HEADER}
        leftIcon={Images.ArrowSquare}
        label={'navigating identity'}
        rightIcon={Images.Dots}
        descriptionText={
          'a community to discuss questions and situations related to gender identity, sexual orientation, race and ethnicity'
        }
        onPress={() => navigation.goBack()}
        onPressRight={() => Alert.alert('setting')}
      />
      <LinearGradient
        colors={['rgba(255, 255, 255, 0.22)', Color.COLOR_LIGHT]}
        style={styles.linearGradient}>
        <FlatList data={DATA} renderItem={renderItem} />
      </LinearGradient>
      <Modal
        transparent={true}
        animationType="fade"
        visible={isModalVisible}
        onRequestClose={() => changeModalVisibility(false)}>
        <ModalPicker
          changeModalVisibility={changeModalVisibility}
          type={Constant.modal.MODAL_SUCCESS}
          textTitle={'congrats on joining your first community!'}
          smallText={
            "selfsea was designed together with young people, as a place where you'll see yourself reflected within a supportive and inclusive community that prioritizes your identity and experiences."
          }
          smallTextParagraph={
            "you have the option of selecting content warnings if there are topics you'd prefer not to see. when you select a content warning, any posts containing that warning will be greyed out. you can add and edit content warnings in your profile settings."
          }
          firstType={Constant.buttons.CLOSE}
          firstText={'setting'}
          secondText={'view community'}
          secondType={Constant.buttons.PRIMARY}
        />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  container: {
    flex: 1,
    backgroundColor: Color.COMMUNITY_MAROON,
  },
  viewStyle: {
    borderRadius: 6,
    backgroundColor: Color.BASE_COLOR_WHITE,
    marginVertical: 5,
    padding: 18,
  },
  inputView: {
    flex: 1.5,
    flexDirection: 'row',
  },
  titleText: {
    fontFamily: Font.CALIBRE,
    fontSize: 18,
    fontWeight: 'bold',
    fontStyle: 'normal',
    lineHeight: 24,
    letterSpacing: 0,
    color: Color.CONTENT_COLOR_BLACK_TEXT,
    textDecorationLine: 'underline',
  },
  titleTextSmall: {
    fontFamily: Font.CALIBRE,
    fontSize: 15,
    fontStyle: 'normal',
    lineHeight: 24,
    letterSpacing: 0,
    color: Color.PLACEHOLDER_TEXT,
  },
  descriptionText: {
    marginTop: 10,
    marginVertical: 5,
    fontFamily: Font.CALIBRE,
    fontSize: 19,
    fontWeight: '500',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: Color.DESCRIPTION_COLOR_TEXT,
  },
  descriptionSmallText: {
    fontFamily: Font.CALIBRE,
    fontSize: 18,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    marginBottom: 16,
    color: Color.TEXT_COLOR,
  },

  imageView: {
    alignSelf: 'center',
    tintColor: Color.BORDER_COLOR_DARKGRAY,
  },

  timeText: {
    alignItems: 'flex-end',
    color: Color.BORDER_COLOR_GRAY,
    fontSize: 12,
    marginHorizontal: 50,
  },
  endTimeText: {
    color: 'grey',
    alignSelf: 'flex-end',
    fontSize: 12,
  },
  timeView: {
    justifyContent: 'center',
    flex: 0.31,
  },
  iconView: {
    justifyContent: 'flex-end',
    flex: 0.1,
  },
  bottomView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  badgesView: {
    flex: 0.95,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  descriptionView: {
    flex: 7,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  badgeCommentStyle: { paddingVertical: 3 },
  badgeContentStyle: { paddingVertical: 2 },
});

export default NavigationIdentity;

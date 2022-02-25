import React, { useEffect, useState } from 'react';
import { View, Text, Modal, StyleSheet, Image, FlatList } from 'react-native';
import ModalPicker from './ModalPickerConfirm';

import Constant from '../theme/constant';
import Color from '../theme/colors';
import Font from '../theme/fonts';
import Images from '../theme/images';

import Header from '../components/Header';
import Button from '../components/Button';

import LinearGradient from 'react-native-linear-gradient';
import { useDispatch } from 'react-redux';
import { Theme } from '../styles';
import { HomeRequest } from '../redux/actions/HomeAction';
import { AcceptRequest } from '../redux/actions/AcceptTermAction';
import { useTypedSelector } from '../redux';

// import Loader from '../components/Loader';

const DATA = [{}, {}, {}, {}];

const descriptionData = [
  {
    title:
      'I will not give out my personal info, or share the personal info of others.',
  },
  {
    title:
      'I commit to supporting a safe/ brave space by being kind, respectful, and not judging others.',
  },
  {
    title: 'I will not use harmful or offensive language',
  },
  {
    title:
      'I will enter this space to learn and support others, rather than to assert my own opinions.',
  },
  {
    title:
      'I understand that this space is not intended for emergency support or to replace medical advice or professional treatment.',
  },
];

const CommunitiesHome = ({ navigation }) => {
  const [title, setTitle] = useState('');
  // const [content, setContent] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const dispatch = useDispatch();

  const homeResponse = useTypedSelector(state => state.HomeReducer);
  console.log('HomeReducer123 : ', JSON.stringify(homeResponse));

  useEffect(() => {
    dispatch(HomeRequest());
  }, [dispatch]);

  useEffect(() => {
    if (homeResponse.data) {
      console.log('homeResponse.data if: ', homeResponse.data);
      setTitle(homeResponse.data.currentTermsAndConditions.title);
      // setContent(homeResponse.data.currentTermsAndConditions.content);
      setIsModalVisible(!homeResponse.data.currentUser.hasAcceptedLatestTerms);
    } else {
      console.log('homeResponse.data : ', homeResponse.data);
    }
  }, [homeResponse]);

  const changeModalVisibility = (bool: boolean) => {
    setIsModalVisible(bool);
  };

  const renderItem = () => (
    <View style={styles.viewStyle}>
      {/* <Loader value={loginRes.loader} /> */}

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
          style={styles.buttonStyle}
          onPress={() => dispatch(HomeRequest(navigation))}
        />
      </View>
    </View>
  );

  console.log('Theme', Theme);

  return (
    <View style={styles.container}>
      <Header
        type={Constant.navigationHeader.PAGE_HEADER}
        label={'selfsea communities'}
        style={styles.headerView}
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
          type={Constant.modal.MODAL}
          textTitle={title}
          // smallText={content}
          descriptionData={descriptionData}
          style={styles.descriptionTextStyle}
          numberOfLines={4}
          button={Constant.buttons.PRIMARY}
          text={'I agree to the terms of use'}
          onPress={() => {
            dispatch(AcceptRequest());
            changeModalVisibility(false);
          }}
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
  buttonStyle: { paddingVertical: 12 },
});

export default CommunitiesHome;

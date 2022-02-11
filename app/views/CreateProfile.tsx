import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image,
  TextInput,
  Modal,
  KeyboardAvoidingView,
} from 'react-native';
import ModalPicker from './ModalPickerConfirm';

import Constant from '../theme/constant';
import Font from '../theme/fonts';
import Color from '../theme/colors';
import Images from '../theme/images';

import Header from '../component/Header';
import Dropdown from '../component/Dropdown';
import Button from '../component/Button';
import Badges from '../component/Badges';
import { useDispatch, useSelector } from 'react-redux';
import { CreateProfileRequest } from '../redux/actions/CreateProfileAction';

import Loader from '../component/Loader';
import { DropDownRequest } from '../redux/actions/MenuAction';
import axios from 'react-native-axios';

const height = Dimensions.get('window').height;

const countries = ['visible to everyone', 'visible only to mentors'];

const descriptionData = [
  {
    title:
      'visible to everyone means all other users can see your profile fields and post history. ',
  },
  {
    title:
      'visible only to mentors means only our trained mentors can see your profile fields and post history.',
  },
  {
    title: 'no one will be able to see your email address!',
  },
];

const CreateProfile = ({ navigation }) => {
  const dispatch = useDispatch();
  const menuResponse = useSelector(state => state.MenuReducer);
  console.log('MenuReducer : ', JSON.stringify(menuResponse));

  const onPressDispatch = () => {
    dispatch(
      CreateProfileRequest(
        profile,
        selectPronounsDropDown,
        selectOrientationDropDown,
        selectGenderDropDown,
        selectRaceDropDown,
        selectLocationDropDown,
        navigation,
      ),
    );
  };

  // const pronounsResponse = useSelector(state => state.PronounsReducer);
  // console.log('ProunounsResponse::: ', JSON.stringify(pronounsResponse));
  // const sectionDispatch = () => {

  // };
  useEffect(() => {
    console.log('menuResponse : ', menuResponse);
    if (menuResponse.pronouns !== null) {
      setPronounsDropDown(menuResponse.pronouns);
      setOrientationDropDown(menuResponse.orientations);
      setGenderDropDown(menuResponse.genders);
      setRaceDropDown(menuResponse.ethnicities);
    } else {
      dispatch(DropDownRequest());
    }
  }, [dispatch, menuResponse]);

  const [profile, setProfile] = useState('');

  const [isModalVisible, setIsMoalVisiable] = useState(false);
  const changeModalVisibility = (bool: boolean) => {
    setIsMoalVisiable(bool);
  };

  const [pronouns, setPronouns] = useState('');
  const [pronounsDropDown, setPronounsDropDown] = useState([]);
  const [selectPronounsDropDown, setSelectPronounsDropDown] = useState([]);

  const clickDropDownItem = (item, val) => {
    setPronouns('');

    if (val === 'add') {
      var temp = selectPronounsDropDown;
      temp.push(item);
      setSelectPronounsDropDown([...temp]);

      const newData = pronounsDropDown.filter(
        itemdata => itemdata.name !== item.name,
      );
      setPronounsDropDown([...newData]);
    } else {
      var temp = pronounsDropDown;
      temp.push(item);
      setPronounsDropDown([...temp]);

      const temp1 = selectPronounsDropDown.filter(
        itemdata => itemdata.name !== item.name,
      );
      setSelectPronounsDropDown([...temp1]);
    }
  };

  const [orientation, setOrientation] = useState('');
  const [orientationDropDown, setOrientationDropDown] = useState([]);
  const [selectOrientationDropDown, setSelectOrientationDropDown] = useState(
    [],
  );

  const orientationDropDownItem = (item, val) => {
    setOrientation('');

    if (val === 'add') {
      var temp = selectOrientationDropDown;
      temp.push(item);
      setSelectOrientationDropDown([...temp]);

      const newData = orientationDropDown.filter(
        itemData => itemData.name !== item.name,
      );
      setOrientationDropDown([...newData]);
    } else {
      var temp = orientationDropDown;
      temp.push(item);
      setOrientationDropDown([...temp]);

      const temp1 = selectOrientationDropDown.filter(
        itemData => itemData.name !== item.name,
      );
      setSelectOrientationDropDown([...temp1]);
    }
  };

  const [gender, setGender] = useState('');
  const [genderDropDown, setGenderDropDown] = useState([]);
  const [selectGenderDropDown, setSelectGenderDropDown] = useState([]);

  const genderDropDownItem = (item, val) => {
    setGender('');

    if (val === 'add') {
      var temp = selectGenderDropDown;
      temp.push(item);
      setSelectGenderDropDown([...temp]);

      const newData = genderDropDown.filter(
        itemData => itemData.name !== item.name,
      );
      setGenderDropDown([...newData]);
    } else {
      var temp = genderDropDown;
      temp.push(item);
      setGenderDropDown([...temp]);

      const temp1 = selectGenderDropDown.filter(
        itemData => itemData.name !== item.name,
      );
      setSelectGenderDropDown([...temp1]);
    }
  };

  const [race, setRace] = useState('');
  const [raceDropDown, setRaceDropDown] = useState([]);
  const [selectRaceDropDown, setSelectRaceDropDown] = useState([]);

  const raceDropDownItem = (item, val) => {
    setRace('');

    if (val === 'add') {
      var temp = selectRaceDropDown;
      temp.push(item);
      setSelectRaceDropDown([...temp]);

      const newData = raceDropDown.filter(
        itemData => itemData.name !== item.name,
      );
      setRaceDropDown([...newData]);
    } else {
      var temp = raceDropDown;
      temp.push(item);
      setRaceDropDown([...temp]);

      const temp1 = selectRaceDropDown.filter(
        itemData => itemData.name !== item.name,
      );
      setSelectRaceDropDown([...temp1]);
    }
  };

  const [location, setLocation] = useState('');
  const [locationDropDown, setLocationDropDown] = useState([
    // { name: '<city>' },
    // { name: '<state>' },
  ]);
  const [selectLocationDropDown, setSelectLocationDropDown] = useState([]);

  const getLocationApi = val => {
    setLocation(val);
    console.log('fetchAddLatLog : ', val);
    if (val !== '') {
      console.log('value : ', val);
      axios({
        url:
          'https://maps.googleapis.com/maps/api/place/autocomplete/json?input=' +
          val +
          '&key=AIzaSyDWJ8cC97oQYX2itSwNl1tb8Dr4T7P3AI4&sessiontoken=1234567890',
        method: 'get',
      })
        .then(res => {
          console.log('axios : ', val);
          if (res.status === 200) {
            console.log('res : ', res.data.predictions);
            setLocationDropDown(res.data.predictions);
          } else {
            console.log('reselse : ', res);
          }
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      setLocationDropDown([]);
    }
  };

  const locationDropDownItem = (item, val) => {
    setLocation('');

    if (val === 'add') {
      var temp = selectLocationDropDown;
      temp.push(item);
      setSelectLocationDropDown([...temp]);
      console.log('newDatatemp', temp);

      const newData = locationDropDown.filter(
        itemData => itemData.description !== item.description,
      );
      console.log('newData', newData);
      setLocationDropDown([...newData]);
    } else {
      var temp = locationDropDown;
      temp.push(item);
      setLocationDropDown([...temp]);
      console.log('temp', temp);

      const temp1 = selectLocationDropDown.filter(
        itemData => itemData.description !== item.description,
      );
      console.log('temp1', temp1);
      setSelectLocationDropDown([...temp1]);
    }
  };

  const removeAllPronouns = () => {
    var temp = selectPronounsDropDown;
    setSelectPronounsDropDown([]);

    setPronounsDropDown([...temp, ...pronounsDropDown]);
  };
  const removeAllOrientation = () => {
    var temp = selectOrientationDropDown;
    setSelectOrientationDropDown([]);

    setOrientationDropDown([...temp, ...orientationDropDown]);
  };

  const removeAllGender = () => {
    var temp = selectGenderDropDown;
    setSelectGenderDropDown([]);

    setGenderDropDown([...temp, ...genderDropDown]);
  };

  const removeAllRace = () => {
    var temp = selectRaceDropDown;
    setSelectRaceDropDown([]);

    setRaceDropDown([...temp, ...raceDropDown]);
  };

  const removeAllLocation = () => {
    var temp = selectLocationDropDown;
    setSelectLocationDropDown([]);

    setLocationDropDown([...temp, ...locationDropDown]);
  };

  return (
    <View style={styles.container}>
      <Loader value={menuResponse.loader} />

      <Header
        type={Constant.navigatioHeader.PAGE_HEADER}
        leftIcon={Images.Arrowsquare}
        label={'create your profile'}
        onPress={() => navigation.goBack()}
      />
      <KeyboardAvoidingView style={styles.contentView} behavior={'padding'}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.textViewStyle}>
            <Text
              style={styles.descriptionText}
              numberOfLines={5}
              ellipsizeMode="middle">
              we can't wait for you to join our community! if you want to tell
              others about yourself, you can add optional details below. no one
              will be able to see your email address, so you'll still
              participate anonymously!
            </Text>
          </View>
          <View style={styles.profileView}>
            <View style={styles.rowView}>
              <Text style={styles.profileText}>profile visibility</Text>
              <TouchableOpacity
                style={styles.touchableStyle}
                onPress={() => changeModalVisibility(true)}>
                <Image source={Images.Infocircle} style={styles.infoIcon} />
              </TouchableOpacity>
            </View>

            <Dropdown
              optionList={countries}
              onSelect={value => setProfile(value)}
              defaultButtonText={'visible to everyone'}
              icon={Images.DropdownIcon}
              rowTextStyle={styles.rowTextStyle}
            />

            <Text style={styles.labelText}>pronouns</Text>

            <View style={styles.viewStyle}>
              <View style={styles.inputView}>
                {selectPronounsDropDown.map(item => {
                  return (
                    <Badges
                      type={Constant.badges.MULTISELECT}
                      text={item.name}
                      rigthIcon={Images.Circle}
                      onPress={() => clickDropDownItem(item)}
                    />
                  );
                })}
                <TextInput
                  value={pronouns}
                  style={styles.textInputStyle}
                  placeholder={
                    selectPronounsDropDown.length !== 0
                      ? ''
                      : 'she/her,he/him/they/them'
                  }
                  onChangeText={
                    selectPronounsDropDown.length < 3
                      ? val => setPronouns(val)
                      : null
                  }
                />
              </View>
              <View style={styles.imageView}>
                <TouchableOpacity
                  onPress={() =>
                    selectPronounsDropDown.length !== 0
                      ? removeAllPronouns()
                      : setPronouns(' ')
                  }
                  style={styles.touchableStyle}>
                  <Image
                    source={
                      selectPronounsDropDown.length !== 0
                        ? Images.xCircle
                        : Images.plusCircle
                    }
                    style={styles.passwordIcon}
                  />
                </TouchableOpacity>
              </View>
            </View>
            {pronouns !== '' ? (
              <View style={styles.menuListView}>
                {pronounsDropDown.map(item => {
                  return (
                    <Text
                      onPress={() => clickDropDownItem(item, 'add')}
                      style={styles.menuTextStyle}>
                      {item.name}
                    </Text>
                  );
                })}
              </View>
            ) : null}

            <Text style={styles.labelText}>sexual orientation</Text>

            <View style={styles.viewStyle}>
              <View style={styles.inputView}>
                {selectOrientationDropDown.map(item => {
                  return (
                    <Badges
                      type={Constant.badges.MULTISELECT}
                      text={item.name}
                      rigthIcon={Images.Circle}
                      onPress={() => orientationDropDownItem(item)}
                    />
                  );
                })}
                <TextInput
                  value={orientation}
                  style={styles.textInputStyle}
                  placeholder={
                    selectOrientationDropDown.length !== 0
                      ? ''
                      : 'lesbian/gay,bisexual,asexual'
                  }
                  onChangeText={
                    selectOrientationDropDown.length < 3
                      ? val => setOrientation(val)
                      : null
                  }
                />
              </View>
              <View style={styles.imageView}>
                <TouchableOpacity
                  onPress={() =>
                    selectOrientationDropDown.length !== 0
                      ? removeAllOrientation()
                      : setOrientation(' ')
                  }
                  style={styles.touchableStyle}>
                  <Image
                    source={
                      selectOrientationDropDown.length !== 0
                        ? Images.xCircle
                        : Images.plusCircle
                    }
                    style={styles.passwordIcon}
                  />
                </TouchableOpacity>
              </View>
            </View>

            {orientation !== '' ? (
              <View style={styles.menuListView}>
                {orientationDropDown.map(item => {
                  return (
                    <Text
                      onPress={() => orientationDropDownItem(item, 'add')}
                      style={styles.menuTextStyle}>
                      {item.name}
                    </Text>
                  );
                })}
              </View>
            ) : null}

            <Text style={styles.labelText}>gender identity</Text>

            <View style={styles.viewStyle}>
              <View style={styles.inputView}>
                {selectGenderDropDown.map(item => {
                  return (
                    <Badges
                      type={Constant.badges.MULTISELECT}
                      text={item.name}
                      rigthIcon={Images.Circle}
                      onPress={() => genderDropDownItem(item)}
                    />
                  );
                })}
                <TextInput
                  value={gender}
                  style={styles.textInputStyle}
                  placeholder={
                    selectGenderDropDown.length !== 0
                      ? ''
                      : 'genderfluid, non-binary, cisgender'
                  }
                  onChangeText={
                    selectGenderDropDown.length < 3
                      ? val => setGender(val)
                      : null
                  }
                />
              </View>
              <View style={styles.imageView}>
                <TouchableOpacity
                  onPress={() =>
                    selectGenderDropDown.length !== 0
                      ? removeAllGender()
                      : setGender(' ')
                  }
                  style={styles.touchableStyle}>
                  <Image
                    source={
                      selectGenderDropDown.length !== 0
                        ? Images.xCircle
                        : Images.plusCircle
                    }
                    style={styles.passwordIcon}
                  />
                </TouchableOpacity>
              </View>
            </View>
            {gender !== '' ? (
              <View style={styles.menuListView}>
                {genderDropDown.map(item => {
                  return (
                    <Text
                      onPress={() => genderDropDownItem(item, 'add')}
                      style={styles.menuTextStyle}>
                      {item.name}
                    </Text>
                  );
                })}
              </View>
            ) : null}

            <Text style={styles.labelText}>race/ethnicity</Text>

            <View style={styles.viewStyle}>
              <View style={styles.inputView}>
                {selectRaceDropDown.map(item => {
                  return (
                    <Badges
                      type={Constant.badges.MULTISELECT}
                      text={item.name}
                      rigthIcon={Images.Circle}
                      onPress={() => raceDropDownItem(item)}
                    />
                  );
                })}
                <TextInput
                  value={race}
                  style={styles.textInputStyle}
                  placeholder={
                    selectRaceDropDown.length !== 0
                      ? ''
                      : 'asian american, arab, native hawaiian'
                  }
                  onChangeText={
                    selectRaceDropDown.length < 3 ? val => setRace(val) : null
                  }
                />
              </View>
              <View style={styles.imageView}>
                <TouchableOpacity
                  onPress={() =>
                    selectRaceDropDown.length !== 0
                      ? removeAllRace()
                      : setRace(' ')
                  }
                  style={styles.touchableStyle}>
                  <Image
                    source={
                      selectRaceDropDown.length !== 0
                        ? Images.xCircle
                        : Images.plusCircle
                    }
                    style={styles.passwordIcon}
                  />
                </TouchableOpacity>
              </View>
            </View>

            {race !== '' ? (
              <View style={styles.menuListView}>
                {raceDropDown.map(item => {
                  return (
                    <Text
                      onPress={() => raceDropDownItem(item, 'add')}
                      style={styles.menuTextStyle}>
                      {item.name}
                    </Text>
                  );
                })}
              </View>
            ) : null}

            <Text style={styles.labelText}>location</Text>

            <View style={styles.viewStyle}>
              <View style={styles.inputView}>
                {selectLocationDropDown.map(item => {
                  return (
                    <Badges
                      type={Constant.badges.MULTISELECT}
                      text={item.description}
                      rigthIcon={Images.Circle}
                      onPress={() => locationDropDownItem(item)}
                    />
                  );
                })}
                <TextInput
                  value={location}
                  style={styles.textInputStyle}
                  placeholder={
                    selectLocationDropDown.length !== 0
                      ? ''
                      : 'type in a City or State'
                  }
                  onChangeText={
                    // val => getLocationApi(val)
                    selectLocationDropDown.length < 1
                      ? val => getLocationApi(val)
                      : null
                  }
                />
              </View>
              <View style={styles.imageView}>
                <TouchableOpacity
                  onPress={() =>
                    selectLocationDropDown.length !== 0
                      ? removeAllLocation()
                      : setLocation('')
                  }
                  style={styles.touchableStyle}>
                  <Image
                    source={
                      selectLocationDropDown.length !== 0
                        ? Images.xCircle
                        : Images.plusCircle
                    }
                    style={styles.passwordIcon}
                  />
                </TouchableOpacity>
              </View>
            </View>

            {location !== '' ? (
              <View style={styles.menuListView}>
                {locationDropDown.map(item => {
                  return (
                    <Text
                      onPress={() => locationDropDownItem(item, 'add')}
                      style={styles.menuTextStyle}>
                      {item.description}
                    </Text>
                  );
                })}
              </View>
            ) : null}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      <View style={styles.bottomView}>
        <Button
          onPress={() => onPressDispatch()}
          type={Constant.buttons.PRIMARY}
          text={'take me to selfsea'}
          style={[
            styles.buttonStyle,
            // selectPronounsDropDown.length === 0 ||
            // selectOrientationDropDown.length === 0 ||
            // selectGenderDropDown.length === 0 ||
            // selectRaceDropDown.length === 0 ||
            // selectLocationDropDown.length === 0
            //   ? { backgroundColor: Color.BUTTON_DISABLE_COLOR }
            //   : { backgroundColor: Color.BASE_COLOR_ORANGE },
          ]}
          // disabled={
          //   selectPronounsDropDown.length === 0 ||
          //   selectOrientationDropDown.length === 0 ||
          //   selectGenderDropDown.length === 0 ||
          //   selectRaceDropDown.length === 0 ||
          //   selectLocationDropDown.length === 0
          //     ? true
          //     : false
          // }
        />
      </View>

      <Modal
        transparent={false}
        animationType="fade"
        visible={isModalVisible}
        onRequestClose={() => changeModalVisibility(false)}>
        <ModalPicker
          changeModalVisibility={changeModalVisibility}
          type={Constant.modal.MODAL}
          textTitle={'selfsea profile visibility'}
          descriptionData={descriptionData}
          numberOfLines={0}
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
    backgroundColor: Color.BASE_COLOR_WHITE,
  },

  contentView: {
    flex: 4,
    alignItems: 'center',
  },
  infoIcon: {
    alignSelf: 'center',
    marginLeft: 4,
    height: 19,
    width: 19,
  },

  bottomView: {
    flex: 0.7,
    alignItems: 'center',
    borderTopColor: Color.BORDER_COLOR,
    borderTopWidth: 2,
  },
  profileText: {
    fontFamily: Font.CALIBRE,
    fontSize: 18,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 30,
    letterSpacing: 0,
    color: Color.DESCRIPTION_COLOR_TEXT,
  },
  labelText: {
    width: '90%',
    height: height * 0.04,
    fontFamily: Font.CALIBRE,
    fontSize: 18,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 30,
    letterSpacing: 0,
    color: Color.BASE_COLOR_GRAY,
    marginTop: 20,
  },

  profileView: {
    justifyContent: 'space-between',
    alignSelf: 'flex-start',
    marginHorizontal: '5%',
    marginTop: 10,
    width: '90%',
  },
  scrollView: {
    width: '100%',
    marginVertical: 15,
  },
  rowView: {
    width: '90%',
    flexDirection: 'row',
    paddingBottom: 5,
    alignItems: 'center',
    marginTop: '2%',
  },

  descriptionText: {
    fontFamily: Font.CALIBRE,
    fontSize: 16,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: Color.DESCRIPTION_COLOR_TEXT,
  },

  touchableStyle: { justifyContent: 'center' },

  viewStyle: {
    paddingVertical: 10,
    flexDirection: 'row',
    borderRadius: 4,
    backgroundColor: Color.BASE_COLOR_WHITE,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: Color.BORDER_COLOR_LIGHTGRAY,
  },
  inputView: {
    flex: 6,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingLeft: 5,
  },
  textInputStyle: {
    height: 30,
    width: 'auto',
    fontSize: 15,
    paddingVertical: 0,
    paddingHorizontal: 4,
  },
  imageView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuListView: {
    borderRadius: 4,
    backgroundColor: Color.BASE_COLOR_WHITE,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: Color.BORDER_COLOR_LIGHTGRAY,
  },
  menuTextStyle: {
    padding: 10,
  },
  recordView: {
    borderRadius: 4,
    backgroundColor: Color.BASE_COLOR_WHITE,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: Color.BORDER_COLOR_LIGHTGRAY,
    justifyContent: 'center',
    padding: 8,
  },
  rowTextStyle: {
    fontSize: 16,
  },
  textViewStyle: { width: '90%', alignSelf: 'center', padding: 0 },
  buttonStyle: { marginTop: 15 },
});

export default CreateProfile;

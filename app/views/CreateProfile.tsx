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
  Platform,
} from 'react-native';
import { Prediction } from '../types/location';
import ModalPicker from './ModalPickerConfirm';
import Constant from '../theme/constant';
import Font from '../theme/fonts';
import Color from '../theme/colors';
import Images from '../theme/images';

import Header from '../components/Header';
import Dropdown from '../components/Dropdown';
import Button from '../components/Button';
import Badges from '../components/Badges';
import { useDispatch } from 'react-redux';
import { CreateProfileRequest } from '../redux/actions/CreateProfileAction';

import { DropDownRequest } from '../redux/actions/MenuAction';
import axios from 'react-native-axios';
import {
  Ethnicity,
  Gender,
  Pronoun,
  SexualOrientation,
} from 'app/generated/graphql';
import { useTypedSelector } from '../redux';
import config from '../config';

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
  const menuResponse = useTypedSelector(state => state.MenuReducer);

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

  useEffect(() => {
    if (menuResponse.pronouns !== null) {
      setPronounsDropDown(menuResponse.pronouns);
    }

    if (menuResponse.orientations !== null) {
      setOrientationDropDown(menuResponse.orientations);
    }

    if (menuResponse.genders !== null) {
      setGenderDropDown(menuResponse.genders);
    }

    if (menuResponse.ethnicities !== null) {
      setRaceDropDown(menuResponse.ethnicities);
    }
  }, [menuResponse]);

  useEffect(() => {
    dispatch(DropDownRequest());
  }, [dispatch]);

  const [profile, setProfile] = useState('');

  const [isModalVisible, setIsModalVisible] = useState(false);
  const changeModalVisibility = (bool: boolean) => {
    setIsModalVisible(bool);
  };

  const [pronouns, setPronouns] = useState('');
  const [pronounsDropDown, setPronounsDropDown] = useState<Pronoun[]>([]);
  const [selectPronounsDropDown, setSelectPronounsDropDown] = useState<
    Pronoun[]
  >([]);

  const clickDropDownItem = (item: Pronoun, val?: string) => {
    setPronouns('');

    if (val === 'add') {
      setSelectPronounsDropDown([...selectPronounsDropDown, item]);

      const newData = pronounsDropDown.filter(p => p.name !== item.name);
      setPronounsDropDown([...newData]);
    } else {
      setPronounsDropDown([...pronounsDropDown, item]);
      const temp1 = selectPronounsDropDown.filter(p => p.name !== item.name);
      setSelectPronounsDropDown([...temp1]);
    }
  };

  const [orientation, setOrientation] = useState('');
  const [orientationDropDown, setOrientationDropDown] = useState<
    SexualOrientation[]
  >([]);
  const [selectOrientationDropDown, setSelectOrientationDropDown] = useState<
    SexualOrientation[]
  >([]);

  const orientationDropDownItem = (item: SexualOrientation, val?: string) => {
    setOrientation('');

    if (val === 'add') {
      setSelectOrientationDropDown([...selectOrientationDropDown, item]);

      const newData = orientationDropDown.filter(
        itemData => itemData.name !== item.name,
      );
      setOrientationDropDown([...newData]);
    } else {
      setOrientationDropDown([...orientationDropDown, item]);

      const temp1 = selectOrientationDropDown.filter(
        itemData => itemData.name !== item.name,
      );
      setSelectOrientationDropDown([...temp1]);
    }
  };

  const [gender, setGender] = useState('');
  const [genderDropDown, setGenderDropDown] = useState<Gender[]>([]);
  const [selectGenderDropDown, setSelectGenderDropDown] = useState<Gender[]>(
    [],
  );

  const genderDropDownItem = (item: Gender, val?: string) => {
    setGender('');

    if (val === 'add') {
      setSelectGenderDropDown([...selectGenderDropDown, item]);

      const newData = genderDropDown.filter(
        itemData => itemData.name !== item.name,
      );
      setGenderDropDown([...newData]);
    } else {
      setGenderDropDown([...genderDropDown, item]);

      const temp1 = selectGenderDropDown.filter(
        itemData => itemData.name !== item.name,
      );
      setSelectGenderDropDown([...temp1]);
    }
  };

  const [race, setRace] = useState('');
  const [raceDropDown, setRaceDropDown] = useState<Ethnicity[]>([]);
  const [selectRaceDropDown, setSelectRaceDropDown] = useState<Ethnicity[]>([]);

  const raceDropDownItem = (item: Ethnicity, val?: string) => {
    setRace('');

    if (val === 'add') {
      setSelectRaceDropDown([...selectRaceDropDown, item]);

      const newData = raceDropDown.filter(
        itemData => itemData.name !== item.name,
      );
      setRaceDropDown([...newData]);
    } else {
      setRaceDropDown([...raceDropDown, item]);

      const temp1 = selectRaceDropDown.filter(
        itemData => itemData.name !== item.name,
      );
      setSelectRaceDropDown([...temp1]);
    }
  };

  const [location, setLocation] = useState('');
  const [locationDropDown, setLocationDropDown] = useState<Prediction[]>([]);
  const [selectLocationDropDown, setSelectLocationDropDown] = useState<
    Prediction[]
  >([]);

  const getLocationApi = val => {
    setLocation(val);
    console.log('fetchAddLatLog : ', val);
    if (val !== '') {
      console.log('value : ', val);
      axios({
        url:
          'https://maps.googleapis.com/maps/api/place/autocomplete/json?input=' +
          val +
          // cspell:disable-next-line
          `&key=${config.config.PLACES_API_KEY}&sessiontoken=${config.config.PLACES_SESSION_TOKEN}`,
        method: 'get',
      })
        .then(res => {
          console.log('axios : ', val);
          if (res.status === 200) {
            console.log('res : ', res.data.predictions);
            setLocationDropDown(res.data.predictions);
          } else {
            console.log('res else : ', res);
          }
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      setLocationDropDown([]);
    }
  };

  const locationDropDownItem = (item: Prediction, val?: string) => {
    setLocation('');

    if (val === 'add') {
      setSelectLocationDropDown([...selectLocationDropDown, item]);

      const newData = locationDropDown.filter(
        itemData => itemData.description !== item.description,
      );
      console.log('newData', newData);
      setLocationDropDown([...newData]);
    } else {
      setLocationDropDown([...locationDropDown, item]);
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
      {/*{menuResponse.loader && <Loader value={menuResponse.loader} />}*/}

      <Header
        type={Constant.navigationHeader.PAGE_HEADER}
        leftIcon={Images.ArrowSquare}
        label={'create your profile'}
        onPress={() => navigation.goBack()}
      />
      <KeyboardAvoidingView
        style={styles.contentView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
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
                <Image source={Images.InfoCircle} style={styles.infoIcon} />
              </TouchableOpacity>
            </View>

            <Dropdown
              optionList={countries}
              onSelect={value => setProfile(value)}
              defaultButtonText={'visible to everyone'}
              rowTextStyle={styles.rowTextStyle}
            />

            <Text style={styles.labelText}>pronouns</Text>

            <View style={styles.viewStyle}>
              <View style={styles.inputView}>
                {selectPronounsDropDown.map(item => {
                  return (
                    <Badges
                      type={Constant.badges.MULTI_SELECT}
                      text={item.name}
                      rightIcon={Images.Circle}
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
                      : undefined
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
                      type={Constant.badges.MULTI_SELECT}
                      text={item.name}
                      rightIcon={Images.Circle}
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
                      : undefined
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
                      type={Constant.badges.MULTI_SELECT}
                      text={item.name}
                      rightIcon={Images.Circle}
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
                      : undefined
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
                      type={Constant.badges.MULTI_SELECT}
                      text={item.name}
                      rightIcon={Images.Circle}
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
                    selectRaceDropDown.length < 3
                      ? val => setRace(val)
                      : undefined
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
                      type={Constant.badges.MULTI_SELECT}
                      text={item.description}
                      rightIcon={Images.Circle}
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
                      : undefined
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
          style={[styles.buttonStyle]}
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

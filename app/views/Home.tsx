import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

import Images from '../theme/images';

import Switch from '../component/Switch';
import CheckBox from '../component/Checkbox';
import Radio from '../component/Radio';
import Button from '../component/Button';
import Alert from '../component/Alert';
import Badges from '../component/Badges';
import Constant from '../theme/constant';
import Dropdown from '../component/Dropdown';
import TextInput from '../component/CustomTextInput';
import Header from '../component/Header';
import Color from '../theme/colors';

import { useDispatch, useSelector } from 'react-redux';

const Home = ({ navigation }) => {
  const loginRes = useSelector(state => state.LoginReducer);
  console.log('loginRes : ', JSON.stringify(loginRes));

  const [isSelectedCheckBox, setISSelectionCheckBox] = useState(false);

  const selectCheckBox = () => {
    if (isSelectedCheckBox) {
      setISSelectionCheckBox(false);
    } else {
      setISSelectionCheckBox(true);
    }
  };

  const [isSelectedRadioButton, setISSelectedRadioButton] = useState(false);

  const selectRadioButton = () => {
    if (isSelectedRadioButton) {
      setISSelectedRadioButton(false);
    } else {
      setISSelectedRadioButton(true);
    }
  };

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const countries = [
    {
      title: 'Menu Item',
      value: 'Menu Item',
    },
    {
      title: 'Menu Item',
      value: 'Menu Item',
    },
    {
      title: 'Menu Item',
      value: 'Menu Item',
    },
  ];

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text style={{ fontSize: 20 }} onPress={() => navigation.goBack()}>
            SECOND SCREEN
          </Text>

          <Alert
            type={Constant.alert.MENTOR}
            text={'mentor related alert badge '}
          />
          <Alert type={Constant.alert.URGENT} text={'Urgent'} />
          <Alert type={Constant.alert.WARNING} text={'Warning'} />

          <Alert
            type={Constant.alert.SUCCESS}
            text={'This is a success alert—check it out! '}
          />
          <Alert
            type={Constant.alert.INFO}
            text={'This is a info alert—check it out!  '}
          />

          <Badges type={Constant.badges.MENTOR_BADGE} text={'mentor'} />
          <Badges
            type={Constant.badges.CONTENT}
            text={'[content warning]'}
            leftIcon={Images.Warning}
          />
          <Badges type={Constant.badges.COMMENTS} text={'4 Comments'} />
          <Badges type={Constant.badges.ACTIVE} text={'Active'} />
          <Badges type={Constant.badges.INACTIVE} text={'inactive'} />
          <Badges type={Constant.badges.DESCRIPTOR} text={'[profile item]'} />
          <Badges
            type={Constant.badges.MULTISELECT}
            text={'they/them'}
            rigthIcon={Images.Circle}
          />
          <Button type={Constant.buttons.DESKTOP} text={'Primary Button'} />
          <Button type={Constant.buttons.SECONDARY} text={'Secondary'} />
          <Button type={Constant.buttons.MOBILE} text={'reply'} />

          <Button type={Constant.buttons.PRIMARY} text={'primary button'} />

          <Button type={Constant.buttons.CLOSE} text={'Close'} />
          <Button type={Constant.buttons.SELFSEASEND} icon={Images.Send} />

          <Radio
            onPressRadioButton={selectRadioButton}
            isSelectedRadioButton={isSelectedRadioButton}
            text={'Radio'}
          />
          <CheckBox
            onPressCheckbox={selectCheckBox}
            isSelectedCheckBox={isSelectedCheckBox}
            text={'checkbox'}
          />

          <Switch
            isEnabled={isEnabled}
            text={'online'}
            onEnableToggle={toggleSwitch}
          />

          <TextInput
            type={Constant.textInput.LARGE_INPUT}
            placeholder={'Placeholder'}
            label={'label'}
            helperText={'Helper Text'}
          />
          <TextInput
            type={Constant.textInput.LARGE_TEXT_AREA}
            placeholder={'Placeholder'}
          />

          <Dropdown
            optionList={countries}
            onSelect={() => {}}
            defaultButtonText={'selfsea'}
            icon={Images.DropdownIcon}
          />

          <Header
            type={Constant.navigatioHeader.PAGE_HEADER}
            leftIcon={Images.Pencil}
            rightIcon={Images.Gear}
            label={'page title'}
            style={{ backgroundColor: Color.COMMUNITY_MAROON }}
          />
          <Header
            type={Constant.navigatioHeader.PAGE_HEADER}
            leftIcon={Images.Pencil}
            rightIcon={Images.Gear}
            label={'page title'}
            style={{ backgroundColor: Color.COMMUNITY_YELLOW }}
          />

          <Header
            type={Constant.navigatioHeader.PAGE_HEADER}
            leftIcon={Images.Pencil}
            rightIcon={Images.Gear}
            label={'page title'}
          />
          <Header
            type={Constant.navigatioHeader.COMMUNITY_HEADER}
            leftIcon={Images.Arrowsquare}
            rightIcon={Images.Dots}
            label={'navigating identityasdda'}
            descriptionText={
              'a community to discuss questions and situations related to gender identity, sexual orientation, race and ethnicity'
            }
            style={{ backgroundColor: Color.COMMUNITY_GREEN }}
          />

          <Header
            type={Constant.navigatioHeader.POST}
            leftIcon={Images.Arrow}
            text={'in'}
            label={'create a post'}
            rightIcon={Images.Downarrow}
            underlinetext={'select a community'}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  logo: {
    alignSelf: 'center',
    marginVertical: 40,
  },
});
export default Home;

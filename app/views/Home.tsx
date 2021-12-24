import React, { useState } from "react";
import { View, Text, Image, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

import Warning from '../assets/images/pngs/exclamation-triangle.png';
import Circle from '../assets/images/pngs/x-circle.png';

import Send from '../assets/images/pngs/logo-s-red-1.png'

import Alert from '../component/Alert'
import Badges from '../component/Badges'
import Button from '../component/Button'
import TextInput from '../component/CustomTextInput'
import Dropdown from '../component/dropdownComponent'
import Radio from '../component/Radio'
import Constant from '../theme/constant'
import CheckBox from "app/component/Checkbox";

const countries = ["Menu Item","Menu Item1","Menu Item2","Menu Item3"]


const Home = ({ navigation }) => {

  const [isSelectedCheckBox, setISSelectionCheckBox] = useState(true);

  const selectCheckBox = () => {
    if (isSelectedCheckBox) {
      setISSelectionCheckBox(false);
    } else {
      setISSelectionCheckBox(true);
    }
  }

  const [isSelectedRadioButton, setISSelectedRadioButton] = useState(false);

  const selectRadioButton = () => {
    if (isSelectedRadioButton) {
      setISSelectedRadioButton(false);
    } else {
      setISSelectedRadioButton(true);
    }
  }

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);


  return (
    <SafeAreaView>
      <ScrollView>
      <View style={styles.container}>
        <Alert type={Constant.MENTOR} text={'mentor related alert badge '} />
        <Alert type={Constant.URGENT} text={'Urgent'} />
        <Alert type={Constant.WARNING} text={'Warning'} />

        <Alert type={Constant.SUCCESS} text={'This is a success alert—check it out! '} />
        <Alert type={Constant.INFO} text={'This is a info alert—check it out!  '} />


        <Badges type={Constant.MENTOR_BADGE}
          text={'mentor'}
        />
        <Badges type={Constant.CONTENT}
          text={'[content warning]'}
          leftIcon={Warning}
        />
        <Badges type={Constant.COMMENTS}
          text={'4 Comments'}

        />
        <Badges type={Constant.ACTIVE}
          text={'Active'}

        />
        <Badges type={Constant.INACTIVE}
          text={'inactive'}

        />
        <Badges type={Constant.DESCRIPTOR}
          text={'[profile item]'}

        />
        <Badges type={Constant.MULTISELECT}
          text={'they/them'}
          rigthIcon={Circle}
        />
        <Button type={Constant.DESKTOP}
          text={"Primary Button"} />
        <Button type={Constant.SECONDARY}
          text={"Secondary"} />
        <Button type={Constant.MOBILE}
          text={"reply"} />
       
        <Button type={Constant.PRIMARY}
          text={"primary button"} />

        <Button type={Constant.CLOSE}
          text={"Close"} />
        <Button type={Constant.SELFSEASEND}
          icon={Send} />

        <Radio  onPressRadioButton={selectRadioButton}
          isSelectedRadioButton={isSelectedRadioButton} text={"Radio"} enable={true} />
        <CheckBox  onPressCheckbox={selectCheckBox}
          isSelectedCheckBox={isSelectedCheckBox} text={"checkbox"} enable={true}/>

        <TextInput type={Constant.LARGEINPUT}
          placeholder={"Placeholder"}
          label={'label'}
          helperText={'Helper Text'}
        />
        <TextInput type={Constant.LARGETEXTAREA}
          placeholder={"Placeholder"} />

        <TextInput type={Constant.SWITCHBUTTON} onEnableToggle={toggleSwitch} isEnabled={isEnabled} text={"online"} />


        <Dropdown data={countries} defaultButtonText="DropDown" onSelect={(selectedItem, index) => {
                            console.log(selectedItem, index)
                        }}/>


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

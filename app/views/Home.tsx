import React from "react";
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';

import Background from '../assets/images/pngs/background.png';
import Warning from '../assets/images/pngs/exclamation-triangle.png';
import Circle from '../assets/images/pngs/x-circle.png';

import Send from '../assets/images/pngs/logo-s-red-1.png'

import Alert from '../component/Alert'
import Badges from '../component/Badges'
import Button from '../component/Button'
import Form from '../component/formComponent'
import Constant from '../theme/constant'

const Home = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Alert type={Constant.MENTOR} text={'mentor related alert badge '} />
        <Alert type={Constant.URGENT} text={'Urgent'} />
        <Alert type={Constant.WARNING} text={'Warning'} />

        <Alert type={Constant.SUCCESS} text={'This is a success alert—check it out! '} />
        <Alert type={Constant.INFO} text={'This is a info alert—check it out!  '} />

        {/* 
          <Badges type={Constant.MENTORBADGES}
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
          /> */}
        <Button type={Constant.DESKTOP}
          text={"Primary Button"} />
        <Button type={Constant.SECONDARY}
          text={"Secondary"} />
        <Button type={Constant.MOBILE}
          text={"reply"} />
        <Button type={"MobileSwitch"}
          text={"Offline"} />
        <Button type={Constant.PRIMARY}
          text={"primary button"} />

        <Button type={Constant.CLOSE}
          text={"Close"} />
        <Button type={Constant.SELFSEASEND}
          icon={Send} />


        <Form type={Constant.LARGEINPUT}
          placeholder={"Placeholder"} />
        <Form type={Constant.LARGETEXTAREA}
          placeholder={"Placeholder"} />
        <Form type="Checkbox" />


      </View>
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

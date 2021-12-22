import React from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, View } from 'react-native';
import Background from '../assets/images/pngs/background.png';
import Warning from '../assets/images/pngs/exclamation-triangle.png';
import Circle from '../assets/images/pngs/x-circle.png';
import Alert from '../component/Alert';
import Badges from '../component/Badges';
import Button from '../component/Button';
import Send from '../assets/images/pngs/logo-s-red-1.png';

const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ImageBackground
          source={Background}
          resizeMode="cover"
          style={styles.image}>
          <Alert type={'Mentor'} text={'mentor related alert badge '} />
          <Alert type={'Urgent'} text={'Urgent'} />
          <Alert type={'Warning'} text={'Warning'} />

          <Alert
            type={'Success'}
            text={'This is a success alert—check it out! '}
          />
          <Alert type={'Info'} text={'This is a info alert—check it out!  '} />

          <Badges type={'Mentor'} text={'mentor'} />
          <Badges
            type={'Content'}
            text={'[content warning]'}
            leftIcon={Warning}
          />
          <Badges type={'Comments'} text={'4 Comments'} />
          <Badges type={'Active'} text={'Active'} />
          <Badges type={'Inactive'} text={'inactive'} />
          <Badges type={'Descriptor'} text={'[profile item]'} />
          <Badges type={'Multi-Select'} text={'they/them'} rigthIcon={Circle} />
          <Button type={'Desktop'} text={'Primary Button'} />
          <Button type={'Mobile'} text={'reply'} />
          <Button type={'MobileSwitch'} text={'Offline'} />
          <Button type={'Primary'} text={'primary button'} />

          <Button type={'Close'} text={'Close'} />
          <Button type={'selfseaSend'} icon={Send} />
        </ImageBackground>
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

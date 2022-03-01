import React from 'react';
import { View, SafeAreaView, Platform } from 'react-native';
import Color from '../theme/colors';
import LinearGradient from 'react-native-linear-gradient';
import { Theme } from '../styles';
import Button from '../components/Button';
import Constant from '../theme/constant';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Settings = ({ navigation }) => {
  var theme = Theme();
  console.log(navigation);
  const onPress = async () => {
    if (auth().currentUser !== null) {
      await auth().signOut();
    }

    if (Platform.OS === 'ios') {
      // await AsyncStorage.getAllKeys().then(AsyncStorage.multiRemove);
    } else {
      await AsyncStorage.clear();
    }

    navigation.replace('Login');
  };

  return (
    <SafeAreaView style={theme.container}>
      <LinearGradient
        colors={['rgba(255, 255, 255, 0.22)', Color.COLOR_LIGHT]}
        style={theme.linearGradient}>
        <View style={[theme.allComJoin]}>
          <Button
            type={Constant.buttons.PRIMARY}
            text={'logout'}
            onPress={onPress}
          />
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};
export default Settings;

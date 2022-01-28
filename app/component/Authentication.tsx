import React, { useEffect } from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Color from '../theme/colors';
// @ts-ignore
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import Constant from '../theme/constant';

interface Props {
  text: string;
  icon?: ImageSourcePropType;
  type: string;
}

const Authentication = ({ text, icon, type }: Props) => {
  useEffect(() => {
    GoogleSignin.configure({
      // Mandatory method to call before calling signIn()
      // scopes: ['https://www.googleapis.com/auth/drive.readonly'],
      // Repleace with your webClientId
      // Generated from Firebase console
      webClientId:
        '651815828852-ieos3aa4gougfirdnf52carf51q8v52v.apps.googleusercontent.com',
    });
  }, []);

  const _signIn = async () => {
    console.log('handlePressGoogleLogin');
    try {
      await GoogleSignin.hasPlayServices({
        // Check if device has Google Play Services installed
        // Always resolves to true on iOS
        showPlayServicesUpdateDialog: true,
      });
      console.error('GoogleSignin');
      const userInfo = await GoogleSignin.signIn();
      console.error('User Info --> ', userInfo);
    } catch (error) {
      console.error('Message', JSON.stringify(error));
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        Alert.alert('User Cancelled the Login Flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        Alert.alert('Signing In');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        Alert.alert('Play Services Not Available or Outdated');
      } else {
        Alert.alert(error.message);
      }
    }
  };

  const authLogin = () => {
    console.log('key : ', type);

    if (type === Constant.authLogin.GOOGLE) {
      _signIn();
    } else if (type === Constant.authLogin.INSTAGRAM) {
      Alert.alert('instagram');
    } else if (type === Constant.authLogin.APPLE) {
      Alert.alert('Apple');
    } else {
      Alert.alert('null');
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={() => authLogin()}>
      <Image style={styles.image} source={icon} />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '90%',
    padding: 13,
    borderRadius: 2,
    backgroundColor: Color.BASE_COLOR_WHITE,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: Color.BORDER_COLOR_LIGHTGRAY,
    justifyContent: 'center',
    flexDirection: 'row',
    marginVertical: 8,
    shadowColor: 'rgba(0, 0, 0, 0.24)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 1,
    shadowOpacity: 1,
  },
  image: {
    height: 19,
    width: 19,
    alignSelf: 'center',
  },
  text: {
    marginHorizontal: 10,
    fontSize: 16,
    color: Color.BORDER_COLOR_DARKGRAY,
    textAlign: 'center',
    fontWeight: '600',
  },
});

export default Authentication;

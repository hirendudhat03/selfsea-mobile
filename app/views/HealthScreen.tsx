import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';

import Constant from '../theme/constant';
import Color from '../theme/colors';
// import Font from '../theme/fonts';
import Images from '../theme/images';

import LinearGradient from 'react-native-linear-gradient';
import Header from '../component/Header';

import { useDispatch, useSelector } from 'react-redux';

const HealthScreen = ({ navigation }) => {
  const homeResponse = useSelector(state => state.HomeReducer);
  console.log(' homeResponse: ', JSON.stringify(homeResponse));

  return (
    <LinearGradient
      colors={[Color.COMMUNITY_GREEN, Color.COLOR_LIGHT]}
      style={styles.linearGradient}>
      <Header
        type={Constant.navigatioHeader.COMMUNITY_HEADER}
        leftIcon={Images.Arrowsquare}
        rightIcon={Images.Dots}
        label={'BIPOC+ mental health'}
        descriptionText={
          'a place to discuss mental health and share how these identities play a pivotal role in  experiences and access to resources.'
        }
        onPress={() => navigation.goBack()}
        onPressRight={() => alert('setting')}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
});

export default HealthScreen;

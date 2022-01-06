import React from 'react';
import { Text, StyleSheet, } from 'react-native';


import Constant from '../theme/constant';
import Color from '../theme/colors';
// import Font from '../theme/fonts';
import Images from '../theme/images';

import LinearGradient from 'react-native-linear-gradient';
import Header from '../component/Header';






const HealthScreen = ({ navigation }) => {



    return (
        <LinearGradient colors={[Color.COMMUNITY_GREEN, Color.COLOR_LIGHT]} style={styles.linearGradient}>
            <Header type={Constant.navigatioHeader.COMMUNITY_HEADER}
                leftIcon={Images.Arrowsquare}
                rightIcon={Images.Dots}
                label={'BIPOC+ mental health'}
                descriptionText={'a place to discuss mental health and share how these identities play a pivotal role in  experiences and access to resources.'}
                onPress={() => navigation.goBack()}
            />
        </LinearGradient>


    )
}

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
    },

});

export default HealthScreen; 
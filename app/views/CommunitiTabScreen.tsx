import React from 'react';
import {  Text, StyleSheet,  } from 'react-native';


// import Constant from '../theme/constant';
import Color from '../theme/colors';
// import Font from '../theme/fonts';
// import Images from '../theme/images';

import LinearGradient from 'react-native-linear-gradient';
  






const CommunitiesTab = () => {



    return (
            <LinearGradient colors={[  Color.COMMUNITY_GREEN,Color.COLOR_LIGHT]} style={styles.linearGradient}>
                {/* <Text style={styles.buttonText}>
                    Sign in with Facebook
                </Text> */}
            </LinearGradient>

           
    )
}

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
    },
 
});

export default CommunitiesTab; 
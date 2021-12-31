import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    SafeAreaView
} from 'react-native';

import Constant from '../theme/constant';
import Fonts from "../theme/fonts";
import Color from "../theme/colors";
import Images from '../theme/images';

import Header from '../component/Header';


const CreateProfile = ({ navigation }) => {
    return(
        <View style={styles.container}>
        <SafeAreaView>
          <Header type={Constant.navigatioHeader.PAGE_HEADER} leftIcon={Images.Arrowsquare}
                label={'create your profile'} onPress={() => navigation.goBack()} />
        </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});


export default CreateProfile;
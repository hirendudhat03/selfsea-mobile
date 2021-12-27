
import React from "react";
import { Text, View, Dimensions, StyleSheet, TextInput, Switch, Image, TouchableOpacity, } from 'react-native'
import Color from '../theme/colors';
import Constant from '../theme/constant'
import fonts from "../theme/fonts";
import Font from '../theme/fonts'
import Images from '../theme/images';

interface Props {

    type: string;
    label: string;
    leftIcon?: ImageSourcePropType;
    rightIcon?: ImageSourcePropType;
    text: string;
    underlinetext: string;

}


const MobileNavigation = ({ type, rightIcon, label, leftIcon, text, underlinetext }: Props) => {


    return (
        <>
            {type === Constant.navigatioHeader.PAGE_HEADER ? (
                <View
                    style={styles.primaryPageHeaderView}>
                    <View style={styles.primaryPageHeaderRow}>
                        <TouchableOpacity><Image source={leftIcon} /></TouchableOpacity>
                        <Text style={styles.primaryPageHeaderText}>{label}</Text>
                        <TouchableOpacity><Image source={rightIcon} /></TouchableOpacity>
                    </View>
                </View>
            ) :
                null}
            {type === Constant.navigatioHeader.POST ? (
                <View style={styles.createPostView}>
                    <TouchableOpacity><Image source={leftIcon} /></TouchableOpacity>
                    <Text style={styles.createPostText}>{label} <Text style={styles.createPostTextSmall}>{text}</Text></Text>
                    <View style={styles.downView}><Text style={styles.underlineText} >{underlinetext}</Text>
                        <TouchableOpacity><Image source={rightIcon} style={styles.downIconStyle} /></TouchableOpacity>
                    </View>
                </View>
            ) :
                null}




        </>

    );
}


const styles = StyleSheet.create({
    primaryPageHeaderView: {
        padding: 20,
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
        backgroundColor: Color.BASE_COLOR_LIGHT_BLUE,

    },
    primaryPageHeaderRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 50,
    },
    primaryPageHeaderText: {
        fontFamily: Font.CALIBRE,
        fontSize: 24,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 24,
        letterSpacing: 0,
        textAlign: "center",
        color: Color.BASE_COLOR_WHITE,
        paddingHorizontal: "30%",
    },
    createPostView: {
        padding: 20,
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
        backgroundColor: Color.BASE_COLOR_LIGHT_BLUE,
        paddingTop: 80,

    },
    createPostText: {
        fontFamily: Font.CALIBRE,
        fontSize: 24,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 24,
        letterSpacing: 0,
        color: Color.COLOR_LIGHT,
        marginVertical: 14,
    },
    createPostTextSmall: {
        fontFamily: Font.CALIBRE,
        fontSize: 24,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 24,
        letterSpacing: 0,
        color: Color.BASE_COLOR_WHITE,
    },
    underlineText: {
        fontFamily: fonts.CALIBRE,
        fontSize: 30,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 30,
        letterSpacing: 0,
        color: Color.BASE_COLOR_WHITE,
        textDecorationLine: 'underline',
    },
    downView: {
        flexDirection: 'row',
    },
    downIconStyle: {
        margin: 5,
    }


});




export default MobileNavigation;

import React from "react";
import { Text, View, Dimensions, StyleSheet, TouchableOpacity, Image } from 'react-native'
import Color from '../theme/colors';
import Constant from '../theme/constant'
import Font from '../theme/fonts'
import Right from '../assets/images/pngs/Vector.png'


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

interface Props {
    text: string;
    enable: boolean;
    isSelectedCheckBox: boolean;
    onPressCheckbox: () => void;
}





const CheckBox = ({ text, isSelectedCheckBox, onPressCheckbox, enable }: Props) => {


    return (

        enable ? (
            <View style={styles.checBoxView}>

                <View
                    style={isSelectedCheckBox ? styles.checkBoxViewEnableClick : styles.checkBoxDisableView}>
                    {
                        isSelectedCheckBox ? (
                            <Image style={styles.checkBoxImage} source={Right} ></Image>
                        ) : null
                    }
                </View>
                {text !== undefined ? (<Text style={styles.checkBoxLabelText}>{text}</Text>) : null}
            </View>
        ) : (
            <View style={styles.checBoxView}>
                <TouchableOpacity
                    onPress={onPressCheckbox}
                    style={isSelectedCheckBox ? styles.checkBoxViewEnable : styles.checkBoxDisableView}>
                    {
                        isSelectedCheckBox ? (
                            <Image source={Right} ></Image>
                        ) : null
                    }

                </TouchableOpacity>
                {text !== undefined ? (<Text style={styles.checkBoxLabelText}>{text}</Text>) : null}
            </View>
        )

    );
}
const styles = StyleSheet.create({

    checBoxView: {
        alignSelf: 'baseline',
        height: height * 0.03,
        width: width * 0.25,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',

    },

    checkBoxDisableView: {
        width: width * 0.04,
        height: height * 0.02,
        borderRadius: 3,
        backgroundColor: Color.BASE_COLOR_WHITE,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: Color.FORM_BORDER_COLOR,
        justifyContent: 'center',

    },
    checkBoxViewEnable: {
        width: width * 0.04,
        height: height * 0.02,
        borderRadius: 3,
        backgroundColor: Color.BASE_COLOR_SKYBLUE,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: Color.BASE_COLOR_SKYBLUE,
        justifyContent: 'center',
    },
    checkBoxViewEnableClick: {
        width: width * 0.04,
        height: height * 0.02,
        borderRadius: 3,
        backgroundColor: Color.BASE_COLOR_WHITE,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: Color.FORM_BORDER_COLOR,
        justifyContent: 'center',
    },

    checkBoxLabelText: {
        fontFamily: Font.CALIBRE,
        fontSize: 16,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 24,
        letterSpacing: 0,
        color: Color.DESCRIPTION_COLOR_TEXT
    },
    checkBoxImage: {
        tintColor:Color.DISABLE_ICON_COLOR,


    },



});

export default CheckBox;
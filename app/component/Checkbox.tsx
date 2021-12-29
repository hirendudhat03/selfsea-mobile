import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import Color from '../theme/colors';
import Font from '../theme/fonts';
import Images from '../theme/images';
// @ts-ignore
// import Right from '../assets/images/pngs/Vector.png';

interface Props {
    text: string;
    enable: boolean;
    isSelectedCheckBox: boolean;
    onPressCheckbox: () => void;
    style: {};
}

const CheckBox = ({ text, isSelectedCheckBox, onPressCheckbox, enable, style }: Props) => {


    return (

        enable ? (
            <View style={[styles.checkBoxView, style]}>
                <View
                    style={isSelectedCheckBox ? styles.checkBoxViewEnableClick : styles.checkBoxDisableView}>
                    {
                        isSelectedCheckBox ? (
                            <Image style={styles.checkBoxImage} source={Images.Right} ></Image>
                        ) : null
                    }
                </View>
                {text !== undefined ? (<Text style={styles.checkBoxLabelText}>{text}</Text>) : null}
            </View>
        ) : (
            <View style={[styles.checkBoxView, style]}>
                <TouchableOpacity
                    onPress={onPressCheckbox}
                    style={isSelectedCheckBox ? styles.checkBoxViewEnable : styles.checkBoxDisableView}>
                    {
                        isSelectedCheckBox ? (
                            <Image source={Images.Right} ></Image>
                        ) : null
                    }
                </TouchableOpacity>
                {text !== undefined ? (<Text style={styles.checkBoxLabelText}>{text}</Text>) : null}
            </View>
        )

    );
}


const styles = StyleSheet.create({
    checkBoxView: {
        alignSelf: 'baseline',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
    },
    checkBoxViewDisabled: {
        alignSelf: 'baseline',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
        opacity: 0.5,
    },
    checkBoxDisableView: {
        borderRadius: 3,
        backgroundColor: Color.BASE_COLOR_WHITE,
        borderStyle: 'solid',
        borderWidth: 1,
        padding: 8,
        borderColor: Color.FORM_BORDER_COLOR,
        justifyContent: 'center',
    },
    checkBoxViewEnable: {
        borderRadius: 3,
        backgroundColor: Color.BASE_COLOR_SKYBLUE,
        borderStyle: 'solid',
        borderWidth: 1,
        padding: 2,
        borderColor: Color.BASE_COLOR_SKYBLUE,
        justifyContent: 'center',
    },
    checkBoxLabelText: {
        fontFamily: Font.CALIBRE,
        fontSize: 17,
        marginLeft: 5,
        fontWeight: 'normal',
        fontStyle: 'normal',
        lineHeight: 24,
        letterSpacing: 0,
        color: Color.DESCRIPTION_COLOR_TEXT,
    },

    checkBoxViewEnableClick: {
        borderRadius: 3,
        backgroundColor: Color.BASE_COLOR_WHITE,
        borderStyle: 'solid',
        borderWidth: 1,
        padding: 2,
        borderColor: Color.FORM_BORDER_COLOR,
        justifyContent: 'center',
    },

    checkBoxImage: {
        tintColor: Color.DISABLE_ICON_COLOR,
    },

});

export default CheckBox;

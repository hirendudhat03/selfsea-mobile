import React from "react";
import { Text, View, Dimensions, StyleSheet, TouchableOpacity } from 'react-native'
import Color from '../theme/colors';
import Constant from '../theme/constant'


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
interface Props {
    text: string;
    enable: boolean;
    isSelectedRadioButton: boolean;
    onPressRadioButton: () => void;

}


const Radio = ({ text, enable, isSelectedRadioButton, onPressRadioButton }: Props) => {


    return (
        enable ? (
            isSelectedRadioButton ? (
                <View style={styles.radioButtonView}>
                    <View
                        style={styles.radioButtonEnableClick}>

                    </View>
                    {text !== undefined ? (<Text style={styles.checkBoxLabelText}>{text}</Text>) : null}
                </View>
            ) : (
                <View style={styles.radioButtonView}>
                    <View
                        style={styles.radioButtonDisableView}>

                    </View>
                    {text !== undefined ? (<Text style={styles.checkBoxLabelText}>{text}</Text>) : null}
                </View>
            )
        ) : (
            isSelectedRadioButton ? (
                <View style={styles.radioButtonView}>
                    <TouchableOpacity
                        onPress={onPressRadioButton}
                        style={styles.radioButtonEnableView}>

                    </TouchableOpacity>
                    {text !== undefined ? (<Text style={styles.checkBoxLabelText}>{text}</Text>) : null}
                </View>
            ) : (
                <View style={styles.radioButtonView}>
                    <TouchableOpacity
                        onPress={onPressRadioButton}
                        style={styles.radioButtonDisableView}>

                    </TouchableOpacity>
                    {text !== undefined ? (<Text style={styles.checkBoxLabelText}>{text}</Text>) : null}
                </View>
            )
        )


    );
}
const styles = StyleSheet.create({

    radioButtonView: {
        alignSelf: 'baseline',
        height: height * 0.03,
        width: width * 0.2,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
    },
    radioButtonDisableView: {
        width: width * 0.042,
        height: height * 0.020,
        backgroundColor: Color.BASE_COLOR_WHITE,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: Color.FORM_BORDER_COLOR,
        borderRadius: 14
    },
    radioButtonEnableView: {
        width: width * 0.042,
        height: height * 0.020,
        backgroundColor: Color.BASE_COLOR_WHITE,
        borderStyle: "solid",
        borderWidth: 6,
        borderColor: Color.BASE_COLOR_SKYBLUE,
        borderRadius: 14,
    },
    radioButtonEnableClick:{
        width: width * 0.042,
        height: height * 0.020,
        backgroundColor: Color.BASE_COLOR_WHITE,
        borderStyle: "solid",
        borderWidth: 6,
        borderColor: Color.DISABLE_ICON_COLOR,
        borderRadius: 14,
    },
    checkBoxLabelText: {
        fontFamily: "Calibre",
        fontSize: 16,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 24,
        letterSpacing: 0,
        color: Color.DESCRIPTION_COLOR_TEXT,
    },




});

export default Radio;
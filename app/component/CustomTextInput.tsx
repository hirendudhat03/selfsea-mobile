import React, { useState } from "react";
import { Text, View, Dimensions, StyleSheet, TextInput, Image, Switch, TouchableOpacity, } from 'react-native'
import Color from '../theme/colors';
import Constant from '../theme/constant'
import Right from '../assets/images/pngs/Vector.png'


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

interface Props {
    type: string;
    text: string;
    placeholder: string;
    helperText: string;
    label: string;
    isSelectedCheckBox: boolean;
    isSelectedRadioButton: boolean;
    isEnabled: boolean;
    onPressCheckbox: () => void;
    onPressRadioButton: () => void;
    onEnableToggle: () => void;
}


const formComponent = ({ type, text, placeholder, helperText, label, isSelectedCheckBox, isSelectedRadioButton, isEnabled, onEnableToggle, onPressCheckbox, onPressRadioButton }: Props) => {


    return (
        <>
            {type === Constant.LARGEINPUT ? (
                <>
                    {label !== undefined ? (<Text style={styles.labelText}>{label}</Text>) : null}

                    <TextInput
                        style={styles.largeInputView}
                        placeholder={placeholder}
                    />
                    {helperText !== undefined ? (<Text style={styles.helperText}>{helperText}</Text>) : null}
                </>
            ) :
                null}
            {type === Constant.LARGETEXTAREA ? (
                <TextInput
                    style={styles.largeTextareaView}
                    placeholder={placeholder}
                />)
                :
                null}
           
          
            {type === Constant.SWITCHBUTTON ? (
                <View style={styles.container}>
                    {text !== undefined ? (<Text style={styles.toggleLabel}>{text}</Text>) : null}
                    <Switch
                        trackColor={{ false: "#ffffff", true: "#008400" }}
                        thumbColor={Color.BASE_COLOR_WHITE}
                        ios_backgroundColor="#ffffff"
                        onValueChange={onEnableToggle}
                        value={isEnabled}
                    />
                </View>
            ) :
                null}

        </>

    );
}
const styles = StyleSheet.create({
    largeInputView: {
        width: width * 0.78,
        height: height * 0.064,
        borderRadius: 4,
        backgroundColor: Color.BASE_COLOR_WHITE,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: Color.BORDER_COLOR_LIGHTGRAY
    },

    largeTextareaView: {
        width: width * 0.78,
        height: height * 0.11,
        borderRadius: 4,
        backgroundColor: Color.BASE_COLOR_WHITE,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: Color.BORDER_COLOR_LIGHTGRAY
    },
        
    labelText: {
        width: width * 0.78,
        height: height * 0.04,
        fontFamily: "Calibre",
        fontSize: 20,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 30,
        letterSpacing: 0,
        color: Color.BASE_COLOR_GRAY,
    },
    helperText: {
        width: width * 0.78,
        height: height * 0.02,
        fontFamily: "Calibre",
        fontSize: 12,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 16,
        letterSpacing: 0,
        color: Color.PLACEHOLDER_TEXT
    },
    toggleLabel: {
        fontFamily: "Calibre",
        fontSize: 18,
        fontWeight: "bold",
        fontStyle: "normal",
        textAlign: "right",
        color: Color.BASE_COLOR_WHITE,
        alignSelf:'center',
        marginHorizontal:3,
    },
    container: {
        width: width * 0.78,
        height: height * 0.05,
        alignItems: "center",
        flexDirection: 'row',
    
    },



});

export default formComponent;
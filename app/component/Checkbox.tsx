import React from "react";
import { Text, View, Dimensions, StyleSheet, TouchableOpacity,Image } from 'react-native'
import Color from '../theme/colors';
import Constant from '../theme/constant'
import Font from '../theme/fonts'
import Right from '../assets/images/pngs/Vector.png'


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

interface Props {
    type: string;
    text: string;
    status: string;
    isSelectedCheckBox: boolean;
    onPressCheckbox: () => void;
}





const CheckBox = ({ type, text, isSelectedCheckBox, onPressCheckbox,status }: Props) => {


    return (
        <>
            {type === Constant.CHECKBOX ? (

                <View style={status !== Constant.ENABLE ? styles.checBoxView : styles.checBoxView1}>
                    <TouchableOpacity
                        onPress={status !== Constant.ENABLE ?onPressCheckbox : null}
                        style={isSelectedCheckBox ? styles.checkBoxViewEnable : styles.checkBoxDisableView}>
                        {
                            isSelectedCheckBox ? (
                                <Image style={status !== Constant.ENABLE ? {tintColor :'#ffffff'} : {tintColor:'#212529'}}   source={Right} ></Image>
                            ) : null
                        }

                    </TouchableOpacity>
                    {text !== undefined ? (<Text style={styles.checkBoxLabelText}>{text}</Text>) : null}
                </View>

            ) :
                null}
        </>

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
    checBoxView1: {
        alignSelf: 'baseline',
        height: height * 0.03,
        width: width * 0.25,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
        opacity:0.5
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
    checkBoxLabelText: {
        fontFamily: Font.CALIBRE,
        fontSize: 16,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 24,
        letterSpacing: 0,
        color: Color.DESCRIPTION_COLOR_TEXT
    },
    checkBoxImage:{
        tintColor:'red',
        

    },



});

export default CheckBox;
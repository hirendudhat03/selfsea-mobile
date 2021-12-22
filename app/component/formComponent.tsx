import React, { useState } from "react";
import { Text, View, Dimensions, StyleSheet, TextInput, } from 'react-native'
import Color from '../theme/colors';
import Constant from '../theme/constant'
import CheckBox from "react-native-check-box";


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
console.log("height : ", height)

interface Props {
    type: string;
    text: string;
    placeholder: string;
}



const formComponent = ({ type, text, placeholder }: Props) => {

    const [isSelected, setSelection] = useState(false);
    return (
        <>
            {type === Constant.LARGEINPUT ? (
                <TextInput
                    style={styles.largeInputView}
                    placeholder={placeholder}
                />)
                :
                null}
            {type === Constant.LARGETEXTAREA ? (
                <TextInput
                    style={styles.largeTextareaView}
                    placeholder={placeholder}
                />)
                :
                null}
            {/* {type == 'Checkbox' ? (
             <CheckBox/>
           
            )
                :
                null} */}



        </>

    );
}
const styles = StyleSheet.create({
    largeInputView: {
        width: 320,
        height: 48,
        borderRadius: 4,
        backgroundColor: "#ffffff",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#ced4da"
    },

    largeTextareaView: {
        width: 320,
        height: 86,
        borderRadius: 4,
        backgroundColor: "#ffffff",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#ced4da"
    },

});

export default formComponent;
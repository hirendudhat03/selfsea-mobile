import React from 'react';
import {  Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Color from '../theme/colors';
// @ts-ignore


interface Props {
    text: string;
    icon: string;
    onPress: string;
}



const Authentication = ({ text, icon, onPress }: Props) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image style={styles.image} source={icon} />
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    container: {
        width: '77%',
        padding: 15,
        borderRadius: 4,
        backgroundColor: Color.BASE_COLOR_WHITE,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: Color.BORDER_COLOR_LIGHTGRAY,
        justifyContent: 'center',
        flexDirection: 'row',
        marginVertical: 8,

    },
    image: {
        height: 18, 
        width: 18,
    },
    text: {
        marginHorizontal: 10,
        fontSize: 16,
        color: Color.BORDER_COLOR_DARKGRAY,
    },




});

export default Authentication;

import React from "react";
import { View, StyleSheet, Text, Dimensions, } from "react-native";

import Font from '../theme/fonts';
import Color from '../theme/colors';
import Constant from '../theme/constant';

import Button from '../component/Button';


interface Props {
    changeModalVisibility: () => void;
}


const ModalPicker = ({ changeModalVisibility }: Props) => {




    return (

        <View

            style={styles.container}>
            <View style={styles.modal}>
                <Text style={styles.textTitle}>selfsea usernames</Text>
                <Text style={styles.smallText}
                    numberOfLines={3}
                    ellipsizeMode='middle'>your username will need to be approved by a
                    moderator before your first post or comment can be approved. it cannot be changed after that.</Text>
                <Text style={styles.descriptionText}
                    numberOfLines={2}
                    ellipsizeMode='middle'>usernames cannot contain any personal identifiers (e.g. name, location, school, age)
                </Text>
                <Text style={styles.descriptionText}
                    numberOfLines={2}
                    ellipsizeMode='middle'>
                    usernames cannot contain any harmful or offensive language
                </Text>
                <Text style={styles.descriptionText}
                    numberOfLines={5}
                    ellipsizeMode='middle'>
                    usernames can only contain letters and numbers (no emojis)</Text>
                <Button type={Constant.buttons.CLOSE}
                    text={"Close"} style={{ marginVertical: 10, width: '100%' }} onPress={() => changeModalVisibility(false)} />
            </View>
        </View>
    )
}
const width = Dimensions.get('window').width - 50;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        paddingHorizontal: 30,
        // opacity: -8,
    },
    modal: {

        backgroundColor: Color.BASE_COLOR_WHITE,
        borderRadius: 10,
        height: 'auto',
        width: width,
        padding: 15,

    },
    textTitle: {
        fontFamily: Font.CALIBRE,
        fontSize: 24,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 24,
        letterSpacing: 0,
        textAlign: "center",
        color: Color.CONTENT_COLOR_BLACK_TEXT,
    },
    smallText: {
        fontFamily: Font.CALIBRE,
        fontSize: 16,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 24,
        letterSpacing: 0,
        textAlign: "center",
        color: Color.TEXT_COLOR_PASSWORD,
        marginVertical: 10
    },
    descriptionText: {
        fontFamily: Font.CALIBRE,
        fontSize: 18,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        textAlign: "center",
        color: Color.CONTENT_COLOR_BLACK_TEXT,
        marginVertical: 10
    },


})
export default ModalPicker;
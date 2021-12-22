import React from "react";
import { Text, View, Dimensions, StyleSheet } from 'react-native'
import Color from '../theme/colors';
import Constant from '../theme/constant'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
console.log("height : ", height)

interface Props {
    type: string;
    text: string;
}

const Alert = ({ type, text }: Props) => {

    return (

        <View style={
            type == Constant.MENTOR ? styles.mentorView :
                type == Constant.URGENT ? styles.modUrgentView :
                    type == Constant.WARNING ? styles.modWarning :
                        type == Constant.SUCCESS ? styles.actionSuccessView :
                            type == Constant.INFO ? styles.actionInfoView :
                                null}
        >
            <Text style={
                type == Constant.MENTOR ? styles.mentorText :
                    type == Constant.URGENT ? styles.modUrgentText :
                        type == Constant.WARNING ? styles.modWarningText :
                            type == Constant.SUCCESS ? styles.actionSuccessText :
                                type == Constant.INFO ? styles.actionInfoText :
                                    null}
            >
                {text}
            </Text>
        </View>


    );
};
const styles = StyleSheet.create({


    mentorView: {
        width: width,
        height: height / 14,
        borderRadius: 4,
        backgroundColor: Color.BASE_COLOR_DARK_BLUE,
        justifyContent: 'center',
    },
    mentorText: {
        fontFamily: 'Calibre',
        fontSize: 20,
        fontWeight: 'normal',
        fontStyle: 'normal',
        lineHeight: 30,
        letterSpacing: 0,
        textAlign: 'center',
        color: Color.BASE_COLOR_WHITE,
    },
    modUrgentView: {
        width: width * 0.3,
        height: height * 0.04,
        borderRadius: 4,
        borderStyle: 'solid',
        backgroundColor: Color.BASE_COLOR_ORANGE,
        borderWidth: 1,
        borderColor: Color.BASE_COLOR_ORANGE,
        justifyContent: 'center',
    },
    modUrgentText: {
        fontFamily: 'Calibre',
        fontSize: 16,
        fontWeight: 'normal',
        fontStyle: 'normal',
        lineHeight: 24,
        letterSpacing: 0,
        textAlign: 'center',
        color: Color.BASE_COLOR_WHITE,
    },
    modWarning: {
        width: width * 0.3,
        height: height * 0.04,
        borderRadius: 4,
        backgroundColor: Color.BASE_COLOR_DARK_WARNING,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: Color.BORDER_COLOR_WARNING,
        justifyContent: 'center',
    },
    modWarningText: {
        fontFamily: 'Calibre',
        fontSize: 16,
        fontWeight: 'normal',
        fontStyle: 'normal',
        lineHeight: 24,
        letterSpacing: 0,
        textAlign: 'center',
        color: Color.BASE_COLOR_WHITE,
    },
    actionSuccessView: {
        width: width,
        height: height * 0.07,
        borderRadius: 4,
        backgroundColor: Color.BASE_COLOR_DARK_SUCCESS,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: Color.BORDER_COLOR_SUCCESS,
        justifyContent: 'center',
        paddingLeft: 15,
    },
    actionSuccessText: {
        fontFamily: 'HelveticaNeue',
        fontSize: 16,
        fontWeight: 'normal',
        fontStyle: 'normal',
        lineHeight: 24,
        letterSpacing: 0,
        color: Color.BASE_COLOR_DARK_SUCCESSTEXT,
    },
    actionInfoView: {
        width: width,
        height: height * 0.07,
        borderRadius: 4,
        backgroundColor: Color.BASE_COLOR_DARK_INFO,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: Color.BORDER_COLOR_INFO,
        justifyContent: 'center',
        paddingLeft: 15,
    },
    actionInfoText: {
        fontFamily: 'HelveticaNeue',
        fontSize: 16,
        fontWeight: 'normal',
        fontStyle: 'normal',
        lineHeight: 24,
        letterSpacing: 0,
        color: Color.BASE_COLOR_DARK_INFOTEXT,
    },

});

export default Alert;

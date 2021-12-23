import React from 'react';
import {
    Text,
    View,
    Dimensions,
    Image,
    StyleSheet,
    ImageSourcePropType,
} from 'react-native';
import Color from '../theme/colors';
import Constant from '../theme/constant'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

interface Props {
    type: string;
    leftIcon?: ImageSourcePropType;
    rigthIcon?: ImageSourcePropType;
    text: string;
}

const Badges = ({ type, leftIcon, rigthIcon, text }: Props) => {


    return (


        <View style={
            type === Constant.MENTOR_BADGE ? styles.mentorView :
                type === Constant.CONTENT ? styles.contentView :
                    type === Constant.COMMENTS ? styles.commentsView :
                        type === Constant.ACTIVE ? styles.activeView :
                            type === Constant.INACTIVE ? styles.inActiveView :
                                type === Constant.DESCRIPTOR ? styles.descriptorView :
                                    type === Constant.MULTISELECT ? styles.multiSelectView :
                                        null}
        >
            {leftIcon ? (<Image source={leftIcon} style={styles.leftIconStyle} />) : null}

            <Text style={
                type === Constant.MENTOR_BADGE ? styles.mentorText :
                    type === Constant.CONTENT ? styles.contentText :
                        type === Constant.COMMENTS ? styles.commentsText :
                            type === Constant.ACTIVE ? styles.activeText :
                                type === Constant.INACTIVE ? styles.inActiveText :
                                    type === Constant.DESCRIPTOR ? styles.descriptorText :
                                        type === Constant.MULTISELECT ? styles.multiSelectText :
                                            null}
            >

                {text}
            </Text>
            {rigthIcon ? (<Image source={rigthIcon} style={styles.rightIconStyle} />) : null}
        </View>


    );


};

const styles = StyleSheet.create({
    mentorView: {
        width: width * 0.2,
        height: height * 0.03,
        borderRadius: 11,
        backgroundColor: Color.COMMUNITY_DARK_BLUE,
        justifyContent: 'center',
    },
    mentorText: {
        fontFamily: 'Calibre',
        fontSize: 15,
        fontWeight: 'bold',
        fontStyle: 'normal',
        lineHeight: 15,
        letterSpacing: 0,
        textAlign: 'center',
        color: Color.BASE_COLOR_WHITE,

    },
    contentView: {
        width: width * 0.4,
        height: height * 0.04,
        borderRadius: 14,
        backgroundColor: Color.BASE_COLOR_WHITE,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: Color.BASE_COLOR_BORDER_GRAY,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentText: {
        fontFamily: 'Calibre',
        fontSize: 16,
        fontWeight: 'normal',
        fontStyle: 'normal',
        lineHeight: 24,
        letterSpacing: 0,
        color: Color.CONTENT_COLOR_BLACK_TEXT,
    },
    commentsView: {
        width: width * 0.3,
        height: height * 0.04,
        borderRadius: 14,
        backgroundColor: Color.BASE_COLOR_BORDER_GRAY,
        justifyContent: 'center',
    },
    commentsText: {
        textAlign: 'center',
        fontFamily: 'Calibre',
        fontSize: 16,
        fontWeight: 'normal',
        fontStyle: 'normal',
        lineHeight: 24,
        letterSpacing: 0,
        color: Color.BASE_COLOR_GRAY,
    },
    activeView: {
        width: width * 0.2,
        height: height * 0.03,
        borderRadius: 2,
        backgroundColor: Color.BASE_COLOR_GREEN,
        justifyContent: 'center',
    },
    activeText: {
        fontFamily: 'Calibre',
        fontSize: 15,
        fontWeight: 'bold',
        fontStyle: 'normal',
        lineHeight: 15,
        letterSpacing: 0,
        textAlign: 'center',
        color: Color.BASE_COLOR_WHITE,
    },
    inActiveView: {
        width: width * 0.2,
        height: height * 0.03,
        borderRadius: 2,
        backgroundColor: Color.BASE_COLOR_LIGHTGRAY,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: Color.BORDER_COLOR_GRAY,
        justifyContent: 'center',
    },
    inActiveText: {
        fontFamily: 'Calibre',
        fontSize: 15,
        fontWeight: 'bold',
        fontStyle: 'normal',
        lineHeight: 15,
        letterSpacing: 0,
        textAlign: 'center',
        color: Color.TEXT_COLOR,
    },
    descriptorView: {
        width: width * 0.3,
        height: height * 0.035,
        borderRadius: 14,
        backgroundColor: Color.BASE_COLOR_WHITE,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: Color.BORDER_COLOR_LIGHTGRAY,
        justifyContent: 'center',
        alignItems: 'center'
    },
    descriptorText: {
        textAlign: 'center',
        fontFamily: 'Calibre',
        fontSize: 16,
        fontWeight: 'normal',
        fontStyle: 'normal',
        lineHeight: 24,
        letterSpacing: 0,
        color: Color.DESCRIPTION_COLOR_TEXT,
    },
    multiSelectView: {
        width: width * 0.3,
        height: height * 0.035,
        borderRadius: 14,
        backgroundColor: Color.BASE_COLOR_WHITE,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: Color.BORDER_COLOR_LIGHTGRAY,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    multiSelectText: {
        fontFamily: 'Calibre',
        fontSize: 16,
        fontWeight: 'normal',
        fontStyle: 'normal',
        lineHeight: 24,
        letterSpacing: 0,
        color: Color.BASE_COLOR_GRAY,
    },
    leftIconStyle: {
        width: width * 0.045,
        height: height * 0.02,
        marginHorizontal: 5,
        marginVertical: 0,
    },
    rightIconStyle: {
        width: width * 0.045,
        height: height * 0.02,
        alignSelf: 'center',
        marginLeft: 9
    },
});

export default Badges;

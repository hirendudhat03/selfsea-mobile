import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
} from 'react-native';


import Button from '../component/Button';
import TextInput from '../component/CustomTextInput';
import Header from '../component/Header';

import Constant from '../theme/constant';
import Images from '../theme/images';
import Font from '../theme/fonts';
import Color from '../theme/colors';



const ForgotPassword = ({ navigation }) => {

    const [email, setEmail] = useState(null);
    const [emailError, setEmailError] = useState('');

    const [circleFillEmail, setCircleFillEmail] = useState<boolean>();


    const selectFill = (text) => {
        setEmail(text);
        if (text === '') {

            setCircleFillEmail(false);
            setEmailBorder(Color.COMMUNITY_ORANGE)
            setEmailError('Please enter email address. ');
        } else if (text.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) === null) {
            setEmailBorder(Color.COMMUNITY_ORANGE)
            setEmailError('Please enter a valid email address. ');
            setCircleFillEmail(false);

        }
        else {
            setCircleFillEmail(true);
            setEmailBorder(Color.BORDER_COLOR_LIGHTGRAY)
            setEmailError('');
        }
    };

    const [emailBorder, setEmailBorder] = useState('')
    const handleTouch = () => {

        setEmailBorder(Color.BASE_COLOR_LIGHT_BLUE)

    }
    return (
        <View style={styles.container}>
            <Header
                type={Constant.navigatioHeader.PAGE_HEADER}
                leftIcon={Images.Arrowsquare}
                label={'forgot password'}
                onPress={() => navigation.goBack()}
            />
            <View style={styles.contentView}>
                <Text
                    style={styles.descriptionText}
                    ellipsizeMode="middle">
                    type in your email below to reset your password.
                </Text>
                <View style={{flex:1,justifyContent:'center',}}>
                <TextInput
                    type={Constant.textInput.LARGE_INPUT}
                    placeholder={'email@address.com'}
                    label={'email'}
                    style={{ fontSize: 18, }}
                    onChangeText={(text) => {
                        selectFill(text);
                    }}
                    value={email}
                    helperText={emailError}
                    circleFill={circleFillEmail}
                    onTouchStart={() => handleTouch()}
                    borderColor={emailBorder}
                    viewStyle={{ width:'100%'}}
                    
                />
                </View>
            </View>

            <View style={styles.bottomView}>
                <Button
                    type={Constant.buttons.PRIMARY}
                    text={'send password reset email'}
                    style={[{ marginTop: 15 }]}
                onPress={() => navigation.navigate('CreateNewPassword')}
                />
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.BASE_COLOR_WHITE,
    },
    headerView: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    descriptionText: {
        fontFamily: Font.CALIBRE,
        fontSize: 18,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        textAlign: "center",
        color: Color.CONTENT_COLOR_BLACK_TEXT,
        marginTop: 25,

    },
    bottomView: {
        flex: 0.7,
        alignItems: 'center',
        borderTopColor: Color.BORDER_COLOR,
        borderTopWidth: 2,
    },
    contentView: {
        flex: 4,
        alignItems: 'center',
    },

});
export default ForgotPassword;

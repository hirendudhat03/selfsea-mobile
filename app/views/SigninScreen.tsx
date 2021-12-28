import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
} from 'react-native';

import Constant from '../theme/constant';
import Fonts from "../theme/fonts";
import Color from "../theme/colors";
import Images from '../theme/images';

import Button from '../component/Button';
import Auth from '../component/Authentication';
import TextInput from '../component/CustomTextInput';
import CheckBox from "../component/Checkbox";
import Header from '../component/Header';





const Signin = ({ navigation }) => {


    const [isSelectedCheckBox, setISSelectionCheckBox] = useState(false);

    const selectCheckBox = () => {
        if (isSelectedCheckBox) {
            setISSelectionCheckBox(false);
        } else {
            setISSelectionCheckBox(true);
        }
    }



    return (

        <View style={styles.container}>
            <Header type={Constant.navigatioHeader.PAGE_HEADER} leftIcon={Images.Arrowsquare}
                label={'sign in'} />
            <ScrollView>
                <View style={styles.contentView}>

                    <TextInput type={Constant.textInput.LARGE_INPUT}
                        placeholder={"email@address.com"}
                        label={'email'}
                        style={{fontSize:18}}
                    />

                   
                        <TextInput type={Constant.textInput.LARGE_INPUT}
                            label={'password'}
                            style={{fontSize:18}}
                        />
                    <Text style={styles.contentText}>forgot your password? </Text>
                    <CheckBox onPressCheckbox={selectCheckBox} style={styles.checkBox}
                        isSelectedCheckBox={isSelectedCheckBox} text={"keep me signed in"} />

                    <Button type={Constant.buttons.PRIMARY} text={"sign in"} style={{ marginTop: 10 ,marginBottom:10}} onPress={() => navigation.navigate('Signup')} />

                    <View style={{ flexDirection: 'row' }}>

                    </View>

                </View>
                <View style={styles.bottomView}>
                    <Text style={styles.bottomText}>or</Text>
                    <Auth text={"Continue with Google"} icon={Images.Google} type={Constant.authLogin.GOOGLE} />
                    <Auth text={"Continue with Instagram"} icon={Images.Instagram} type={Constant.authLogin.INSTAGRAM} />
                    <Auth text={"Continue with Apple"} icon={Images.Apple} type={Constant.authLogin.APPLE} />
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    headerView: {
        flex: 0.5,
        // alignItems: 'center',
        backgroundColor: Color.BASE_COLOR_DARK_BLUE,

    },
    contentView: {
        flex: 1.5,
        alignItems: 'center',
        paddingTop: 18,
    },

    bottomView: {
        flex: 1.5,
        alignItems: 'center',
        marginTop: 20,

    },
    bottomText: {
        fontFamily: Fonts.CALIBRE,
        marginBottom: 10,
        color: Color.CONTENT_COLOR_BLACK_TEXT,
        fontWeight: 'bold',
    },
    contentText: {
        fontFamily: Fonts.CALIBRE,
        fontSize: 17,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 30,
        letterSpacing: 0,
        color: Color.TEXT_COLOR_PASSWORD,
        textDecorationLine: 'underline',
        alignSelf: 'flex-start',
        marginHorizontal: 20,
    },
    checkBox: {
        marginHorizontal: 20,
        marginVertical: 10,
    }

});


export default Signin;

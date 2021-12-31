import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, Modal } from 'react-native';

import ModalPicker from './ModalPicker';

import Button from '../component/Button'
import TextInput from '../component/CustomTextInput'
import Header from '../component/Header'

import Constant from "../theme/constant";
import Images from '../theme/images';
import Font from '../theme/fonts';
import Color from '../theme/colors';
import Dropdown from "../component/Dropdown";

const height = Dimensions.get('window').height;


const countries = [
    {
        title: 'Menu Item',
        value: 'Menu Item',
    },
    {
        title: 'Menu Item',
        value: 'Menu Item',
    },
    {
        title: 'Menu Item',
        value: 'Menu Item',
    },
];



const Signup = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    const [Password, setPassword] = useState('');
    const [PasswordError, setPasswordError] = useState('');

    const [userName, setUserName] = useState('');
    const [userNameError, setUserNameError] = useState('');

    const [birthMonth, setBirthMonth] = useState('');
    const [birthMonthError, setBirthMonthError] = useState('');

    const [birthYear, setBirthYear] = useState('');
    const [birthYearError, setBirthYearError] = useState('');


    const [focus, setFocus] = useState(undefined);

    const selectFocus = () => {
        if (focus) {
            setFocus(false);
        } else {
            setFocus(true);
        }
    }
    const [isModalVisible, setIsMoalVisiable] = useState(false);
    const changeModalVisibility = (bool) => {
        setIsMoalVisiable(bool)
    }


    const signupValidation = () => {

        if (!email && !Password && birthMonth === '' && birthYear === '' && !userName) {
            setEmailError('Email Required')
            setPasswordError('Password Required')
            setBirthMonthError('Birth month Required')
            setBirthYearError('Birth year Required')
            setUserNameError('UserName Required')
        }
        else if (!email) {
            setEmailError('Email Required')
        }
        else if (email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) === null) {
            setEmailError('Valid email Required')
        }
        else if (!Password) {
            setPasswordError('Password Required')
        }

        else if (birthMonth === '') {
            setBirthMonthError('Birth Month Required')
        }
        else if (birthYear === '') {
            setBirthYearError('Birth Year Required')
        }
        else if (!userName) {
            setUserNameError('UserName Required')
        }
        else {
            navigation.navigate('CreateProfile')
        }
    }



    return (

        <View style={styles.container}>
            <Header type={Constant.navigatioHeader.PAGE_HEADER} leftIcon={Images.Arrowsquare}
                label={'sign up with email'} onPress={() => navigation.goBack()} />

            <View style={styles.contentView}>

                <TextInput type={Constant.textInput.LARGE_INPUT}
                    placeholder={"email@address.com"}
                    label={'email'}
                    style={{ fontSize: 18, }}
                    onChangeText={text => { setEmail(text); setEmailError(' ') }}
                    value={email}
                    helperText={emailError}
                />


                <TextInput type={Constant.textInput.LARGE_INPUT}
                    label={'password'}
                    style={{ fontSize: 18 }}
                    onChangeText={text => { setPassword(text); setPasswordError(' ') }}
                    value={Password}
                    helperText={PasswordError}
                    iconVisible={true}
                    secureTextEntry={focus === undefined ? true : focus}
                    secureTextEntryChange={selectFocus}
                />

                <View style={styles.monthView}>
                    <View style={styles.rowView}>
                        <Text style={styles.birthMonthText}>birth month</Text>
                        <TouchableOpacity style={styles.touchableStyle}
                            onPress={() => changeModalVisibility(true)}><Image source={Images.Infocircle} style={styles.infoIcon} /></TouchableOpacity>
                    </View>
                    <View style={styles.yearText}>
                        <Text style={styles.birthMonthText}>birth year</Text>

                    </View>


                </View>
                <View style={styles.monthView}>
                    <View style={styles.rowView}>
                        <Dropdown
                            optionList={countries}
                            onSelect={(value) => { setBirthMonth(value); setBirthMonthError('') }}
                            defaultButtonText={'select one'}
                            icon={Images.DropdownIcon}
                            helperText={birthMonthError} />
                    </View>
                    <View style={styles.yearDropdown}>
                        <Dropdown
                            optionList={countries}
                            onSelect={(value) => { setBirthYear(value); setBirthYearError(' ') }}
                            defaultButtonText={'select one'} style={{ width: 150 }}
                            icon={Images.DropdownIcon}
                            helperText={birthYearError} />
                    </View>

                </View>

                <View style={styles.userName}>
                    <Text style={styles.birthMonthText}>username</Text>
                    <TouchableOpacity style={styles.touchableStyle}
                        onPress={() => changeModalVisibility(true)}
                    ><Image source={Images.Infocircle} style={styles.iconStyle} /></TouchableOpacity>
                </View>
                <TextInput type={Constant.textInput.LARGE_INPUT}
                    placeholder={"@"}
                    style={{ fontSize: 18 }}
                    onChangeText={text => { setUserName(text); setUserNameError(' ') }}
                    helperText={userNameError}
                />
            </View>
            <View style={styles.bottomView}>
                <Button type={Constant.buttons.PRIMARY} text={"create account"} style={{ marginTop: 15 }}
                    onPress={() => signupValidation()} />
            </View>
            <Modal
                transparent={false}
                animationType='fade'
                visible={isModalVisible}
                nRequestClose={() => changeModalVisibility(false)}
            >
                <ModalPicker
                    changeModalVisibility={changeModalVisibility}></ModalPicker>
            </Modal>

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerView: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    contentView: {
        flex: 4,
        alignItems: 'center',
    },
    infoIcon: {
        alignSelf: 'center', marginLeft: 4
    },

    bottomView: {
        flex: 0.7,
        alignItems: 'center',
        borderTopColor: Color.BORDER_COLOR,
        borderTopWidth: 2,


    },
    monthView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: "flex-start",
        marginHorizontal: 20,
        marginTop: 10
    },
    rowView: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    yearText: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginLeft: 98,
    },
    yearDropdown: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginLeft: 10,
    },
    birthMonthText: {
        fontFamily: Font.CALIBRE,
        fontSize: 18,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 30,
        letterSpacing: 0,
        color: Color.DESCRIPTION_COLOR_TEXT,
        alignSelf: 'flex-start',
    },
    iconStyle: {
        alignSelf: 'center',
        marginLeft: 5,
    },
    userName: {
        width: '90%',
        flexDirection: 'row',
        marginTop: 9,

    },
    largeInputView: {
        width: '101%',
        height: height * 0.064,
        borderRadius: 4,
        backgroundColor: Color.BASE_COLOR_WHITE,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: Color.BORDER_COLOR_LIGHTGRAY,
        marginTop: 5,
        paddingHorizontal: 16,
        fontSize: 17,

    },
    largeImageView: {
        width: '10%',
        height: '300%',
        borderRadius: 4,
        backgroundColor: Color.BASE_COLOR_WHITE,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: Color.BORDER_COLOR_LIGHTGRAY,
        marginTop: 10,
        paddingHorizontal: 16,
        fontSize: 17,

    },
    touchableStyle: {
        justifyContent: 'center'
    }

});
export default Signup;

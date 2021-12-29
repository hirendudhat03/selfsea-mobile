import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native';
import Button from '../component/Button'
import TextInput from '../component/CustomTextInput'
import Header from '../component/Header'

import Constant from "../theme/constant";
import Images from '../theme/images';
import Font from '../theme/fonts';
import Color from '../theme/colors';
import Dropdown from "../component/Dropdown";

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



    return (

        <View style={styles.container}>
            <Header type={Constant.navigatioHeader.PAGE_HEADER} leftIcon={Images.Arrowsquare}
                label={'sign up with email'} onPress={() => navigation.goBack()} />

            <View style={styles.contentView}>

                <TextInput type={Constant.textInput.LARGE_INPUT}
                    placeholder={"email@address.com"}
                    label={'email'}
                    style={{ fontSize: 18, }}
                />

                <TextInput type={Constant.textInput.LARGE_INPUT}
                    label={'password'}
                    style={{ fontSize: 18 }}
                />

                <View style={styles.viewStyle}>
                    <View style={styles.passwordStyle}></View>
                    <View style={styles.passwordStyle}></View>
                    <View style={styles.passwordStyle}></View>
                    <View style={styles.passwordStyle}></View>

                </View>
                <View style={styles.monthView}>
                    <View style={styles.rowView}>
                        <Text style={styles.birthMonthText}>birth month</Text>
                        <Image source={Images.Infocircle} style={styles.infoIcon} />
                    </View>
                    <View style={styles.yearText}>
                        <Text style={styles.birthMonthText}>birth year</Text>

                    </View>


                </View>
                <View style={styles.monthView}>
                    <View style={styles.rowView}>
                        <Dropdown
                            optionList={countries}
                            onSelect={() => { }}
                            defaultButtonText={'select one'}
                            icon={Images.DropdownIcon} />
                    </View>
                    <View style={styles.yearDropdown}>
                        <Dropdown
                            optionList={countries}
                            onSelect={() => { }}
                            defaultButtonText={'select one'} style={{ width: 150 }}
                            icon={Images.DropdownIcon} />
                    </View>

                </View>

                <View style={styles.userName}>
                    <Text style={styles.birthMonthText}>username</Text>
                    <Image source={Images.Infocircle} style={styles.iconStyle} />
                </View>
                <TextInput type={Constant.textInput.LARGE_INPUT}
                    placeholder={"@"}
                    style={{ fontSize: 18 }}
                />
            </View>
            <View style={styles.bottomView}>
                <Button type={Constant.buttons.PRIMARY} text={"create account"} style={{ marginTop: 15 }} onPress={() => navigation.navigate('DrawerNavigator')} />
            </View>

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
    passwordView: {
        // width:'100%',
        // marginTop:20
    },
    viewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: "89%",
        marginVertical: 10,
    },
    passwordStyle: {
        borderColor: Color.BORDER_COLOR,
        width: '22%',
        height: 6,
        backgroundColor: "#d8d8d8",
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

    }

});
export default Signup;

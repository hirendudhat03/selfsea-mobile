import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    SafeAreaView,
    TouchableOpacity,
    Dimensions,
    Image,
    TextInput
} from 'react-native';

import Constant from '../theme/constant';
import Font from "../theme/fonts";
import Color from "../theme/colors";
import Images from '../theme/images';

import Header from '../component/Header';
import Dropdown from '../component/Dropdown';
import Button from '../component/Button';
import Badges from '../component/Badges';

// import TextInput from '../component/CustomTextInput';



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



const CreateProfile = ({ navigation }) => {

    const [pronouns, setPronouns] = useState('');
    const [pronounsDropDown, setPronounsDropDown] = useState([{ name: 'A' }, { name: 'BC' }, { name: 'DEF' }, { name: 'GHIJ' }]);
    const [selectPronounsDropDown, setselectpronounsDropDown] = useState([]);


    const clickDropDownItem = (item, val) => {

        setPronouns('')

        if (val === 'add') {

            var temp = selectPronounsDropDown;

            temp.push(item)

            setselectpronounsDropDown([...temp])
        }


    }

    return (
        <View style={styles.container}>
            <Header
                type={Constant.navigatioHeader.PAGE_HEADER}
                leftIcon={Images.Arrowsquare}
                label={'sign up with email'}
                onPress={() => navigation.goBack()}
            />

            <View style={styles.contentView}>

                <Text
                    style={styles.descriptionText}
                    numberOfLines={4}
                    ellipsizeMode="middle">
                    we can't wait for you to join our community! if you want to tell others about yourself, you can add optional details below.
                    no one will be able to see your email address, so you'll still participate anonymously!
                </Text>





                <View style={styles.profileView}>
                    <View style={styles.rowView}>
                        <Text style={styles.profileText}>profile visibility</Text>
                        <TouchableOpacity
                            style={styles.touchableStyle}
                        >
                            <Image source={Images.Infocircle} style={styles.infoIcon} />
                        </TouchableOpacity>
                    </View>
                    <Dropdown
                        optionList={countries}
                        onSelect={() => { }}
                        defaultButtonText={'select one'}
                        icon={Images.DropdownIcon}
                    />
                    {/* <Text style={styles.labelText}>pronouns</Text> */}
                    {/* <View style={styles.largeInputView}>
                        <TextInput
                            style={styles.textInputStyle}
                            placeholder={"placeholder"}
                        // onChangeText={onChangeText}
                        // secureTextEntry={secureTextEntry}
                        // value={value}
                        />


                        <TouchableOpacity
                            style={styles.touchableStyle}>
                            <Image
                                source={Images.plusCircle}
                                style={styles.passwordIcon}
                            />
                        </TouchableOpacity>

                    </View> */}

                    {/* <Text style={styles.labelText}>pronouns</Text>

                    <View style={styles.mainView}>
                    <View style={styles.View}>
                        {
                            selectPronounsDropDown.map((item) => {
                                return (
                                  
                                    <Badges
                                        type={Constant.badges.MULTISELECT}
                                        text={item.name}
                                        rigthIcon={Images.Circle}
                                    />
                                )
                            })
                        }
                        <TextInput value={pronouns} style={{ height: 30, backgroundColor: 'blue', width: 100 }} onChangeText={(val) => setPronouns(val)} />
                     
                    </View>
                    <View style={{justifyContent:'center'}}>
                    <TouchableOpacity
                            style={styles.touchableStyle}>
                            <Image
                                source={Images.plusCircle}
                                style={styles.passwordIcon}
                            />
                        </TouchableOpacity>
                    </View>
                    </View>
                    {pronouns !== '' ? (<View style={{ backgroundColor: 'green' }}>
                        {pronounsDropDown.map((item) => {

                            return (
                                <Text onPress={() => clickDropDownItem(item, 'add')} style={{ paddingVertical: 10 }}>{item.name}</Text>
                            )
                        })}

                    </View>) : null} */}
                    {/* <View style={styles.View}>
                        {
                            selectPronounsDropDown.map((item) => {
                                return (
                                  
                                    <Badges
                                        type={Constant.badges.MULTISELECT}
                                        text={item.name}
                                        rigthIcon={Images.Circle}
                                    />
                                )
                            })
                        }
                        <TextInput value={pronouns} style={{ height: 30, backgroundColor: 'blue', width: 100 }} onChangeText={(val) => setPronouns(val)} />
                        <TouchableOpacity
                            style={styles.touchableStyle}>
                            <Image
                                source={Images.plusCircle}
                                style={styles.passwordIcon}
                            />
                        </TouchableOpacity>
                    </View>
                    {pronouns !== '' ? (<View style={{ backgroundColor: 'green' }}>
                        {pronounsDropDown.map((item) => {

                            return (
                                <Text onPress={() => clickDropDownItem(item, 'add')} style={{ paddingVertical: 10 }}>{item.name}</Text>
                            )
                        })}

                    </View>) : null} */}

                    <Text style={styles.labelText}>pronouns</Text>

                    <View style={{
                        paddingVertical: 10, backgroundColor: 'white', flexDirection: 'row', borderRadius: 4,
                        backgroundColor: Color.BASE_COLOR_WHITE,
                        borderStyle: 'solid',
                        borderWidth: 1,
                        borderColor: Color.BORDER_COLOR_LIGHTGRAY,
                    }}>
                        <View style={{ flex: 6, flexDirection: 'row', flexWrap: 'wrap', paddingLeft: 5 }}>

                            {
                                selectPronounsDropDown.map((item) => {
                                    return (
                                        <Badges
                                            type={Constant.badges.MULTISELECT}
                                            text={item.name}
                                            rigthIcon={Images.Circle}
                                        />
                                    )
                                })
                            }
                            <TextInput value={pronouns} style={{ height: 30, width: 100 }} onChangeText={(val) => setPronouns(val)} />
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity
                                style={styles.touchableStyle}>
                                <Image
                                    source={Images.plusCircle}
                                    style={styles.passwordIcon}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    {pronouns !== '' ? (<View style={{
                        borderRadius: 4,
                        backgroundColor: Color.BASE_COLOR_WHITE,
                        borderStyle: 'solid',
                        borderWidth: 1,
                        borderColor: Color.BORDER_COLOR_LIGHTGRAY,
                        
                    }}>
                        {pronounsDropDown.map((item) => {

                            return (
                                <Text onPress={() => clickDropDownItem(item, 'add')} style={{ padding: 10, }}>{item.name}</Text>
                            )
                        })}

                    </View>) : null}



                    {/* <View style={{ backgroundColor: 'red', marginTop: 50, flexDirection: 'row', flexWrap: 'wrap' }}>
                        {
                            selectPronounsDropDown.map((item) => {
                                return (
                                    <View style={{ height: 30, backgroundColor: 'yellow', margin: 5, paddingHorizontal: 20 }}>
                                        <Text style={{ textAlign: 'center' }}>{item.name}</Text>
                                    </View>
                                )
                            })
                        }
                        <TextInput value={pronouns} style={{ height: 30, backgroundColor: 'blue', width: 100 }} onChangeText={(val) => setPronouns(val)} />
                    </View>
                    {pronouns !== '' ? (<View style={{ backgroundColor: 'green' }}>
                        {pronounsDropDown.map((item) => {

                            return (
                                <Text onPress={() => clickDropDownItem(item, 'add')} style={{ paddingVertical: 10 }}>{item.name}</Text>
                            )
                        })}

                    </View>) : null} */}

                </View>







            </View>
            <View style={styles.bottomView}>
                <Button
                    type={Constant.buttons.PRIMARY}
                    text={'create account'}
                    style={{ marginTop: 15 }}

                />
            </View>

        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    contentView: {
        flex: 4,
        alignItems: 'center',
    },
    infoIcon: {
        alignSelf: 'center',
        marginLeft: 4,
    },

    bottomView: {
        flex: 0.7,
        alignItems: 'center',
        borderTopColor: Color.BORDER_COLOR,
        borderTopWidth: 2,
    },
    profileText: {
        fontFamily: Font.CALIBRE,
        fontSize: 20,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 30,
        letterSpacing: 0,
        color: Color.DESCRIPTION_COLOR_TEXT

    },
    labelText: {
        width: '90%',
        height: height * 0.04,
        fontFamily: Font.CALIBRE,
        fontSize: 20,
        fontWeight: 'normal',
        fontStyle: 'normal',
        lineHeight: 30,
        letterSpacing: 0,
        color: Color.BASE_COLOR_GRAY,
        marginTop: 25,
    },
    textInputStyle: {
        fontSize: 17,
        height: height * 0.064,
        width: '90%',
        paddingHorizontal: 16,
    },

    profileView: {
        justifyContent: 'space-between',
        alignSelf: 'flex-start',
        marginHorizontal: '5%',
        marginTop: 10,
        width: '90%',
    },
    rowView: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },

    descriptionText: {
        fontFamily: Font.CALIBRE,
        fontSize: 16,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        textAlign: "center",
        color: Color.DESCRIPTION_COLOR_TEXT,
        marginHorizontal: 17,
        marginVertical: 15,
    },

    touchableStyle: { justifyContent: 'center' },

    largeInputView: {
        width: '100%',
        height: height * 0.064,
        borderRadius: 4,
        backgroundColor: Color.BASE_COLOR_WHITE,
        borderStyle: 'solid',
        //borderWidth: 1,
        //borderColor: Color.BORDER_COLOR_LIGHTGRAY,
        flexDirection: 'row',


    },
    passwordIcon: {
        // height: 25,
        // width: 25,
        // alignSelf: 'flex-end',
    },
    View: {

        // marginTop: 50, 
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderRadius: 4,
        backgroundColor: Color.BASE_COLOR_WHITE,
        borderStyle: 'solid',
        // borderWidth: 1,
        // borderColor: Color.BORDER_COLOR_LIGHTGRAY,
        padding: 5,


    },
    mainView: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderRadius: 4,
        backgroundColor: Color.BASE_COLOR_WHITE,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: Color.BORDER_COLOR_LIGHTGRAY,
        padding: 5,


    },

});



export default CreateProfile;
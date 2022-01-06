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
    const [pronounsDropDown, setPronounsDropDown] = useState([{ name: 'she/her' }, { name: 'he/him' }, { name: 'they/them' },]);
    const [selectPronounsDropDown, setSelectPronounsDropDown] = useState([]);

    const clickDropDownItem = (item, val) => {
        setPronouns('')

        if (val === 'add') {

            var temp = selectPronounsDropDown;
            temp.push(item)
            setSelectPronounsDropDown([...temp])

            const newData = pronounsDropDown.filter(itemdata => itemdata.name !== item.name);
            setPronounsDropDown([...newData])


        }
        else {

            var temp = pronounsDropDown;
            temp.push(item)
            setPronounsDropDown([...temp])


            const temp1 = selectPronounsDropDown.filter(itemdata => itemdata.name !== item.name);
            setSelectPronounsDropDown([...temp1])

        }


    }

    const [orientation, setOrientation] = useState('');
    const [orientationDropDown, setOrientationDropDown] = useState([{ name: 'lesbian/gay' }, { name: 'bisexual' }, { name: 'asexual' },]);
    const [selectOrientationDropDown, setSelectOrientationDropDown] = useState([]);

    const orientationDropDownItem = (item, val) => {

        setOrientation('')

        if (val === 'add') {

            var temp = selectOrientationDropDown;
            temp.push(item)
            setSelectOrientationDropDown([...temp])

            const newData = orientationDropDown.filter(itemData => itemData.name !== item.name);
            setOrientationDropDown([...newData])
        }
        else {
            var temp = orientationDropDown;
            temp.push(item)
            setOrientationDropDown([...temp])

            const temp1 = selectOrientationDropDown.filter(itemData => itemData.name !== item.name);
            setSelectOrientationDropDown([...temp1])
        }


    }




    return (
        <View style={styles.container}>
            <Header
                type={Constant.navigatioHeader.PAGE_HEADER}
                leftIcon={Images.Arrowsquare}
                label={'create your profile'}
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


                    <Text style={styles.labelText}>pronouns</Text>

                    <View style={styles.viewStyle}>
                        <View style={styles.inputView}>

                            {
                                selectPronounsDropDown.map((item) => {
                                    return (
                                        <Badges
                                            type={Constant.badges.MULTISELECT}
                                            text={item.name}
                                            rigthIcon={Images.Circle}
                                            onPress={() => clickDropDownItem(item)}
                                        />
                                    )
                                })
                            }
                            <TextInput value={pronouns} style={styles.textInputStyle}
                                placeholder="she/her,he/him/they/them"
                                onChangeText={(val) => setPronouns(val)} />
                        </View>
                        <View style={styles.imageView}>
                            <TouchableOpacity

                                style={styles.touchableStyle}>
                                <Image
                                    source={Images.plusCircle}
                                    style={styles.passwordIcon}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    {pronouns !== '' ? (
                        <View style={styles.menuListView}>

                            {pronounsDropDown.map((item) => {

                                return (
                                    <Text onPress={() => clickDropDownItem(item, 'add')} style={styles.menuTextStyle}>{item.name}</Text>
                                )
                            })}

                        </View>
                    ) : null}










                    <Text style={styles.labelText}>sexual orientation</Text>

                    <View style={styles.viewStyle}>
                        <View style={styles.inputView}>

                            {
                                selectOrientationDropDown.map((item) => {
                                    return (
                                        <Badges
                                            type={Constant.badges.MULTISELECT}
                                            text={item.name}
                                            rigthIcon={Images.Circle}
                                            onPress={() => orientationDropDownItem(item)}
                                        />
                                    )
                                })
                            }
                            <TextInput value={orientation} style={styles.textInputStyle}
                                placeholder="lesbian/gay,bisexual,asexual"
                                onChangeText={(val) => setOrientation(val)} />
                        </View>
                        <View style={styles.imageView}>
                            <TouchableOpacity
                                style={styles.touchableStyle}>
                                <Image
                                    source={Images.plusCircle}
                                    style={styles.passwordIcon}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>

                    {orientation !== '' ? (
                        <View style={styles.menuListView}>
                            {orientationDropDown.map((item) => {

                                return (
                                    <Text onPress={() => orientationDropDownItem(item, 'add')} style={styles.menuTextStyle}>{item.name}</Text>
                                )
                            })}

                        </View>) : (
                        orientationDropDown === null ? (
                            <View style={styles.recordView}>
                                <Text>No Record Found</Text>
                            </View>
                        ) : null


                    )
                    }




                </View>







            </View>
            <View style={styles.bottomView}>
                <Button
                    onPress={() => navigation.navigate('TabNavigator')}
                    type={Constant.buttons.PRIMARY}
                    text={'take me to selfsea'}
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

    viewStyle: {
        paddingVertical: 10,
        flexDirection: 'row',
        borderRadius: 4,
        backgroundColor: Color.BASE_COLOR_WHITE,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: Color.BORDER_COLOR_LIGHTGRAY,
    },
    inputView: {
        flex: 6,
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingLeft: 5
    },
    textInputStyle: {
        height: 30,
        width: 'auto',
        fontSize: 15,
        paddingVertical: 0,
    },
    imageView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    menuListView: {
        borderRadius: 4,
        backgroundColor: Color.BASE_COLOR_WHITE,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: Color.BORDER_COLOR_LIGHTGRAY,

    },
    menuTextStyle: {
        padding: 10,

    },
    recordView: {

        borderRadius: 4,
        backgroundColor: Color.BASE_COLOR_WHITE,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: Color.BORDER_COLOR_LIGHTGRAY,
        justifyContent: 'center',
        padding: 8,
    },





});



export default CreateProfile;
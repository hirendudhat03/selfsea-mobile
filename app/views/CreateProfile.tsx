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
    TextInput,
    Modal
} from 'react-native';
import ModalPicker from './ModalPicker';

import Constant from '../theme/constant';
import Font from "../theme/fonts";
import Color from "../theme/colors";
import Images from '../theme/images';

import Header from '../component/Header';
import Dropdown from '../component/Dropdown';
import Button from '../component/Button';
import Badges from '../component/Badges';

// import TextInput from '../component/CustomTextInput';
import { useDispatch, useSelector } from 'react-redux';
import { CreateProfileRequest } from '../redux/actions/CreateProfileAction'



const height = Dimensions.get('window').height;



const countries = [
    "visible to everyone",
    'visible only to mentors',


];

const descriptionData = [
    {
        title: "visible to everyone means all other users can see your profile fields and post history."
    },
    {
        title: 'visible only to mentors means only our trained mentors can see your profile fields and post history.'
    },
    {
        title: 'no one will be able to see your email address!'
    },

];



const CreateProfile = ({ navigation }) => {

    const dispatch = useDispatch()


    const onPressDispatch = () => {
        dispatch(CreateProfileRequest(profile, selectPronounsDropDown, selectOrientationDropDown, navigation))
    }

    const signupRes = useSelector(state => state.SignupReducer)
    console.log('signupRes123 : ', JSON.stringify(signupRes))

    const [profile, setProfile] = useState('');


    const [pronouns, setPronouns] = useState('');
    const [pronounsDropDown, setPronounsDropDown] = useState([{ name: 'she/her/ella' }, { name: ' he/him/his' },
    { name: 'they/them/theirs' }, { name: 'ze/hir/hirs' }, { name: 'ze/zir/zirs' },]);
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









    const [race, setRace] = useState('');
    const [raceDropDown, setRaceDropDown] = useState([{ name: 'American Indian' }, { name: 'Mixed Race / Mixed Ethnicity' },
    { name: 'Native American' }, { name: 'Alaska Native' },
    { name: ' Asian or Asian American' }, { name: 'Black or African American' }, { name: 'Hispanic' }, { name: 'Latino' },
    { name: 'Latina' }, { name: 'Latine' }, { name: 'Latinx' }, { name: 'Middle Eastern or North African' }, { name: 'Native Hawaiian or Pacific Islander' },
    { name: 'White' }, { name: 'something else' },]);
    const [selectRaceDropDown, setSelectRaceDropDown] = useState([]);

    const raceDropDownItem = (item, val) => {

        setRace('')

        if (val === 'add') {

            var temp = selectRaceDropDown;
            temp.push(item)
            setSelectRaceDropDown([...temp])

            const newData = raceDropDown.filter(itemData => itemData.name !== item.name);
            setRaceDropDown([...newData])
        }
        else {
            var temp = raceDropDown;
            temp.push(item)
            setRaceDropDown([...temp])

            const temp1 = selectRaceDropDown.filter(itemData => itemData.name !== item.name);
            setSelectRaceDropDown([...temp1])
        }


    }

    const [isModalVisible, setIsMoalVisiable] = useState(false);
    const changeModalVisibility = (bool: boolean) => {
        setIsMoalVisiable(bool);
    };



    const [gender, setGender] = useState('');
    const [genderDropDown, setGenderDropDown] = useState([{ name: 'cisgender' }, { name: 'genderqueer' },
    { name: 'gender non-binary' },
    { name: 'gender fluid' }, { name: 'man/boy' }, { name: 'transgender' },
    { name: "woman/girl" }, { name: 'something else' },]);
    const [selectGenderDropDown, setSelectGenderDropDown] = useState([]);

    const genderDropDownItem = (item, val) => {

        setGender('')

        if (val === 'add') {

            var temp = selectGenderDropDown;
            temp.push(item)
            setSelectGenderDropDown([...temp])

            const newData = genderDropDown.filter(itemData => itemData.name !== item.name);
            setGenderDropDown([...newData])
        }
        else {
            var temp = genderDropDown;
            temp.push(item)
            setGenderDropDown([...temp])

            const temp1 = selectGenderDropDown.filter(itemData => itemData.name !== item.name);
            setSelectGenderDropDown([...temp1])
        }


    }

    const [orientation, setOrientation] = useState('');
    const [orientationDropDown, setOrientationDropDown] = useState([{ name: 'gay/lesbian' }, { name: 'heterosexual/straight' }, { name: 'bisexual' }, { name: 'asexual' }, { name: 'pansexual' }, { name: 'queer' }, { name: 'something else' },]);
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

    const [location, setLocation] = useState('');
    const [locationDropDown, setLocationDropDown] = useState([{ name: '<city>' }, { name: '<state>' },]);
    const [selectLocationDropDown, setSelectLocationDropDown] = useState([]);

    const locationDropDownItem = (item, val) => {

        setLocation('')

        if (val === 'add') {

            var temp = selectLocationDropDown;
            temp.push(item)
            setSelectLocationDropDown([...temp])

            const newData = locationDropDown.filter(itemData => itemData.name !== item.name);
            setLocationDropDown([...newData])
        }
        else {
            var temp = locationDropDown;
            temp.push(item)
            setLocationDropDown([...temp])

            const temp1 = selectLocationDropDown.filter(itemData => itemData.name !== item.name);
            setSelectLocationDropDown([...temp1])
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
                <ScrollView>
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
                                onPress={() => changeModalVisibility(true)}
                            >
                                <Image source={Images.Infocircle} style={styles.infoIcon} />
                            </TouchableOpacity>
                        </View>
                        <Dropdown
                            optionList={countries}
                            onSelect={(value) => setProfile(value)}
                            defaultButtonText={'visible to everyone'}
                            icon={Images.DropdownIcon}
                            rowTextStyle={styles.rowTextStyle}
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
                                    onPress={() => pronouns !== '' ? setPronouns('') : setPronouns(' ')}
                                    style={styles.touchableStyle}>
                                    <Image
                                        source={pronouns !== '' ? Images.xCircle : Images.plusCircle}
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
                                    onPress={() => orientation !== '' ? setOrientation('') : setOrientation(' ')}
                                    style={styles.touchableStyle}>
                                    <Image
                                        source={orientation !== '' ? Images.xCircle : Images.plusCircle}
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
                            </View>
                        ) : (
                            orientationDropDown === null ? (
                                <View style={styles.recordView}>
                                    {/* {orientation !== '' ? ( */}
                                    <Text>No Record Found</Text>
                                    {/* ) :
                                        null} */}
                                </View>
                            ) :
                                null
                        )
                        }


                        <Text style={styles.labelText}>gender identity</Text>

                        <View style={styles.viewStyle}>
                            <View style={styles.inputView}>

                                {
                                    selectGenderDropDown.map((item) => {
                                        return (
                                            <Badges
                                                type={Constant.badges.MULTISELECT}
                                                text={item.name}
                                                rigthIcon={Images.Circle}
                                                onPress={() => genderDropDownItem(item)}
                                            />
                                        )
                                    })
                                }
                                <TextInput value={gender} style={styles.textInputStyle}
                                    placeholder="genderfluid, non-binary, cisgender"
                                    onChangeText={(val) => setGender(val)} />
                            </View>
                            <View style={styles.imageView}>
                                <TouchableOpacity
                                    onPress={() => gender !== '' ? setGender('') : setGender(' ')}
                                    style={styles.touchableStyle}>
                                    <Image
                                        source={gender !== '' ? Images.xCircle : Images.plusCircle}
                                        style={styles.passwordIcon}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                        {gender !== '' ? (
                            <View style={styles.menuListView}>

                                {genderDropDown.map((item) => {

                                    return (
                                        <Text onPress={() => genderDropDownItem(item, 'add')} style={styles.menuTextStyle}>{item.name}</Text>
                                    )
                                })}

                            </View>
                        ) : null}




                        <Text style={styles.labelText}>race/ethnicity</Text>

                        <View style={styles.viewStyle}>
                            <View style={styles.inputView}>

                                {
                                    selectRaceDropDown.map((item) => {
                                        return (
                                            <Badges
                                                type={Constant.badges.MULTISELECT}
                                                text={item.name}
                                                rigthIcon={Images.Circle}
                                                onPress={() => raceDropDownItem(item)}
                                            />
                                        )
                                    })
                                }
                                <TextInput value={race} style={styles.textInputStyle}
                                    placeholder="asian american, arab, native hawaiian"
                                    onChangeText={(val) => setRace(val)} />
                            </View>
                            <View style={styles.imageView}>
                                <TouchableOpacity
                                    onPress={() => race !== '' ? setRace('') : setRace(' ')}
                                    style={styles.touchableStyle}>
                                    <Image
                                        source={race !== '' ? Images.xCircle : Images.plusCircle}
                                        style={styles.passwordIcon}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>

                        {race !== '' ? (
                            <View style={styles.menuListView}>
                                {raceDropDown.map((item) => {

                                    return (
                                        <Text onPress={() => raceDropDownItem(item, 'add')} style={styles.menuTextStyle}>{item.name}</Text>
                                    )
                                })}
                            </View>
                        ) : (
                            raceDropDown === null ? (
                                <View style={styles.recordView}>
                                    {/* {orientation !== '' ? ( */}
                                    <Text>No Record Found</Text>
                                    {/* ) :
                null} */}
                                </View>
                            ) :
                                null
                        )
                        }


                        <Text style={styles.labelText}>location</Text>

                        <View style={styles.viewStyle}>
                            <View style={styles.inputView}>

                                {
                                    selectLocationDropDown.map((item) => {
                                        return (
                                            <Badges
                                                type={Constant.badges.MULTISELECT}
                                                text={item.name}
                                                rigthIcon={Images.Circle}
                                                onPress={() => locationDropDownItem(item)}
                                            />
                                        )
                                    })
                                }
                                <TextInput value={location} style={styles.textInputStyle}
                                    placeholder="type in a City or State"
                                    onChangeText={(val) => setLocation(val)} />
                            </View>
                            <View style={styles.imageView}>
                                <TouchableOpacity
                                    onPress={() => location !== '' ? setLocation('') : setLocation(' ')}
                                    style={styles.touchableStyle}>
                                    <Image
                                        source={location !== '' ? Images.xCircle : Images.plusCircle}
                                        style={styles.passwordIcon}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>

                        {location !== '' ? (
                            <View style={styles.menuListView}>
                                {locationDropDown.map((item) => {

                                    return (
                                        <Text onPress={() => locationDropDownItem(item, 'add')} style={styles.menuTextStyle}>{item.name}</Text>
                                    )
                                })}
                            </View>
                        ) : null
                        }


                    </View>

                </ScrollView>

            </View>
            <View style={styles.bottomView}>
                <Button
                    onPress={() => onPressDispatch()}
                    type={Constant.buttons.PRIMARY}
                    text={'take me to selfsea'}
                    style={{ marginTop: 15 }}

                />

            </View>

            <Modal
                transparent={false}
                animationType="fade"
                visible={isModalVisible}
                onRequestClose={() => changeModalVisibility(false)}>
                <ModalPicker changeModalVisibility={changeModalVisibility}
                    textTitle={'selfsea Profile Visibility'}
                    smallText={'your Profile Visibility will need to be approved by a moderator before your first post or comment can be approved. it cannot be changed after that.'}
                    descriptionData={descriptionData}
                    numberOfLines={2}
                    button={Constant.buttons.CLOSE}
                    text={'close'}
                />
            </Modal>

        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.BASE_COLOR_WHITE,

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
        marginTop: 20,
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
    rowTextStyle: {
        fontSize: 16,
    }





});



export default CreateProfile;
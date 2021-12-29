import React, { useState } from "react";
import { ImageBackground, Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";


import Color from '../theme/colors';
import Font from '../theme/fonts';
import Images from '../theme/images';

import { DrawerItem } from "@react-navigation/drawer";
import { SafeAreaView } from "react-native-safe-area-context";



const Drawer = (props) => {
    const [focus, setFocus] = useState('1')


    const [UserItem, setUserItem] = useState(false);
    const [QueueItem, setQueueItem] = useState(false);
    const [AccountItem, setAccountItem] = useState(false);



    const NestedDrawerItemM = () => {
        if (UserItem == true) {
            setUserItem(false)
        }
        else {
            setUserItem(true)

        }
    }
    const NestedDrawerItemQueue = () => {
        if (QueueItem == true) {
            setQueueItem(false)
        }
        else {
            setQueueItem(true)

        }
    }
    const NestedDrawerItemAccount = () => {
        if (AccountItem == true) {
            setAccountItem(false)
        }
        else {
            setAccountItem(true)

        }
    }




    return (
        <SafeAreaView>
            <View style={{ flexDirection: 'column', }}>
                <View style={styles.imageView}>
                    <Image source={Images.DrawerLogo} style={styles.image} />
                    <Text style={styles.managementText}>Management</Text>


                </View>

                <ScrollView>
                    <View>
                        <DrawerItem
                            style={styles.communites}
                            label={() =>

                                <View style={styles.communityText}>

                                    <Text style={styles.menuText}>Communities</Text>

                                </View>
                            } />
                        <DrawerItem
                            style={styles.drawerItem}
                            focused={focus == 1 ? true : false}

                            label={({ focused }) =>
                                <View style={styles.drawerView}>

                                    <Text style={styles.menuText}>Users</Text>
                                    {UserItem == true &&
                                        <Image source={Images.MenuDropdown} style={{transform: [{rotateX: '180deg'}], marginRight: 15 }} />
                                    }
                                    {UserItem == false &&
                                        <Image source={Images.MenuDropdown} style={{ marginRight: 15 }} />
                                    }

                                </View>

                            }
                            onPress={() => {
                                setFocus('1');
                                NestedDrawerItemM()
                            }}
                        />

                        {UserItem == true &&
                            <>
                                <DrawerItem

                                    label={({ focused }) =>
                                        <View style={[styles.subView, focus === 'All' ? { borderLeftColor: Color.BASE_COLOR_ORANGE, borderLeftWidth: 6 } : null]}>

                                            <Text style={[styles.subMenuText, focus === 'All' ? { color: Color.BASE_COLOR_ORANGE } : null]}>All (2,381)</Text>
                                        </View>}
                                    onPress={() => {
                                        setFocus('All');
                                        props.navigation.navigate('All')
                                    }}
                                />
                                <DrawerItem

                                    label={({ focused }) =>
                                        <View style={[styles.subView, focus === 'Mentees' ? { borderLeftColor: Color.BASE_COLOR_ORANGE, borderLeftWidth: 6 } : null]}>

                                            <Text style={[styles.subMenuText, focus === 'Mentees' ? { color: Color.BASE_COLOR_ORANGE } : null]}>Mentees (2,342)</Text>
                                        </View>}
                                    onPress={() => {
                                        setFocus('Mentees');
                                        props.navigation.navigate('Mentees')
                                    }}
                                />
                                <DrawerItem

                                    label={({ focused }) =>
                                        <View style={[styles.subView, focus === 'Mentors' ? { borderLeftColor: Color.BASE_COLOR_ORANGE, borderLeftWidth: 6 } : null]}>

                                            <Text style={[styles.subMenuText, focus === 'Mentors' ? { color: Color.BASE_COLOR_ORANGE } : null]}>Mentors (25)</Text>
                                        </View>}
                                    onPress={() => {
                                        setFocus('Mentors');
                                        alert('Mentors')
                                    }}
                                />
                                <DrawerItem

                                    label={({ focused }) =>
                                        <View style={[styles.subView, focus === 'Moderators' ? { borderLeftColor: Color.BASE_COLOR_ORANGE, borderLeftWidth: 6 } : null]}>

                                            <Text style={[styles.subMenuText, focus === 'Moderators' ? { color: Color.BASE_COLOR_ORANGE } : null]}>Moderators (10)</Text>
                                        </View>}
                                    onPress={() => {
                                        setFocus('Moderators');
                                        alert('Moderators')
                                    }}
                                />
                                <DrawerItem

                                    label={({ focused }) =>
                                        <View style={[styles.subView, focus === 'Admins' ? { borderLeftColor: Color.BASE_COLOR_ORANGE, borderLeftWidth: 6 } : null]}>

                                            <Text style={[styles.subMenuText, focus === 'Admins' ? { color: Color.BASE_COLOR_ORANGE } : null]}>Admins (5)</Text>
                                        </View>}
                                    onPress={() => {
                                        setFocus('Admins');
                                        alert('Admins')
                                    }}
                                />
                            </>
                        }

                        <DrawerItem
                            style={styles.drawerItem}
                            focused={focus == 1 ? true : false}

                            label={({ focused }) =>
                                <View style={styles.drawerView}>

                                    <Text style={styles.menuText}>Moderation Queue</Text>
                                    {QueueItem == true &&
                                        <Image source={Images.MenuDropdown} style={{transform: [{rotateX: '180deg'}], marginRight: 15 }} />
                                    }
                                    {QueueItem == false &&
                                        <Image source={Images.MenuDropdown} style={{ marginRight: 15 }} />
                                    }

                                </View>

                            }
                            onPress={() => {
                                setFocus('1');
                                NestedDrawerItemQueue()
                            }}
                        />

                        {QueueItem == true &&
                            <>
                                <DrawerItem

                                    label={({ focused }) =>
                                        <View style={[styles.subView, focus === 'AllQ' ? { borderLeftColor: Color.BASE_COLOR_ORANGE, borderLeftWidth: 6 } : null]}>

                                            <Text style={[styles.subMenuText, focus === 'AllQ' ? { color: Color.BASE_COLOR_ORANGE } : null]}>All </Text>
                                        </View>}
                                    onPress={() => {
                                        setFocus('AllQ');
                                        alert('AllQ')
                                    }}
                                />
                                <DrawerItem

                                    label={({ focused }) =>
                                        <View style={[styles.subView, focus === 'Comments' ? { borderLeftColor: Color.BASE_COLOR_ORANGE, borderLeftWidth: 6 } : null]}>

                                            <Text style={[styles.subMenuText, focus === 'Comments' ? { color: Color.BASE_COLOR_ORANGE } : null]}>Comments</Text>
                                        </View>}
                                    onPress={() => {
                                        setFocus('Comments');
                                        alert('Comments')
                                    }}
                                />
                                <DrawerItem

                                    label={({ focused }) =>
                                        <View style={[styles.subView, focus === 'Post' ? { borderLeftColor: Color.BASE_COLOR_ORANGE, borderLeftWidth: 6 } : null]}>

                                            <Text style={[styles.subMenuText, focus === 'Post' ? { color: Color.BASE_COLOR_ORANGE } : null]}>Post</Text>
                                        </View>}
                                    onPress={() => {
                                        setFocus('Post');
                                        alert('Post')
                                    }}
                                />
                                <DrawerItem

                                    label={({ focused }) =>
                                        <View style={[styles.subView, focus === 'Reports' ? { borderLeftColor: Color.BASE_COLOR_ORANGE, borderLeftWidth: 6 } : null]}>

                                            <Text style={[styles.subMenuText, focus === 'Reports' ? { color: Color.BASE_COLOR_ORANGE } : null]}>Reports</Text>
                                        </View>}
                                    onPress={() => {
                                        setFocus('Reports');
                                        alert('Reports')
                                    }}
                                />
                                <DrawerItem

                                    label={({ focused }) =>
                                        <View style={[styles.subView, focus === 'Usernames' ? { borderLeftColor: Color.BASE_COLOR_ORANGE, borderLeftWidth: 6 } : null]}>

                                            <Text style={[styles.subMenuText, focus === 'Usernames' ? { color: Color.BASE_COLOR_ORANGE } : null]}>Usernames</Text>
                                        </View>}
                                    onPress={() => {
                                        setFocus('Usernames');
                                        alert('Usernames')
                                    }}
                                />
                            </>
                        }
                        <DrawerItem
                            style={styles.drawerItem}
                            focused={focus == 1 ? true : false}

                            label={({ focused }) =>
                                <View style={styles.drawerView}>

                                    <Text style={styles.menuText}>My Account</Text>
                                    {AccountItem == true &&
                                        <Image source={Images.MenuDropdown} style={{transform: [{rotateX: '180deg'}], marginRight: 15 }} />
                                    }
                                    {AccountItem == false &&
                                        <Image source={Images.MenuDropdown} style={{ marginRight: 15 }} />
                                    }

                                </View>

                            }
                            onPress={() => {
                                setFocus('1');
                                NestedDrawerItemAccount()
                            }}
                        />

                        {AccountItem == true &&
                            <>
                                <DrawerItem

                                    label={({ focused }) =>
                                        <View style={[styles.subView, focus === 'Settings' ? { borderLeftColor: Color.BASE_COLOR_ORANGE, borderLeftWidth: 6 } : null]}>

                                            <Text style={[styles.subMenuText, focus === 'Settings' ? { color: Color.BASE_COLOR_ORANGE } : null]}>Settings </Text>
                                        </View>}
                                    onPress={() => {
                                        setFocus('Settings');
                                        alert('Settings')
                                    }}
                                />
                                <DrawerItem

                                    label={({ focused }) =>
                                        <View style={[styles.subView, focus === 'Terms' ? { borderLeftColor: Color.BASE_COLOR_ORANGE, borderLeftWidth: 6 } : null]}>

                                            <Text style={[styles.subMenuText, focus === 'Terms' ? { color: Color.BASE_COLOR_ORANGE } : null]}>Terms of Service</Text>
                                        </View>}
                                    onPress={() => {
                                        setFocus('Terms');
                                        alert('Terms')
                                    }}
                                />
                                <DrawerItem

                                    label={({ focused }) =>
                                        <View style={[styles.subView, focus === 'Privacy' ? { borderLeftColor: Color.BASE_COLOR_ORANGE, borderLeftWidth: 6 } : null]}>

                                            <Text style={[styles.subMenuText, focus === 'Privacy' ? { color: Color.BASE_COLOR_ORANGE } : null]}>Privacy Policy</Text>
                                        </View>}
                                    onPress={() => {
                                        setFocus('Privacy');
                                        alert('Privacy')
                                    }}
                                />

                            </>
                        }
                    </View>
                </ScrollView>



                {/* </DrawerContentScrollView> */}

                {/* </View> */}
                {/* <View style={{height:106,}}  onPress={()=>alert("logout")}>
                    <TouchableOpacity   onPress={()=>alert("logout")}>
                     <Text style={styles.logoutText}>Logout</Text></TouchableOpacity>
                     <View style={{borderColor:Color.BASE_COLOR_LIGHTGRAY,borderWidth:1,}}></View>

                     </View> */}
            </View>

        </SafeAreaView>

    )
}


const styles = StyleSheet.create({
    managementText: {
        fontFamily: Font.CALIBRE,
        fontSize: 18,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 18,
        letterSpacing: 0,
        textAlign: "center",
        color: Color.CONTENT_COLOR_BLACK_TEXT,
        marginTop: 20,
    },
    menuText: {
        fontFamily: "Calibre",
        fontSize: 20,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 24,
        letterSpacing: 0,
        color: "#868e9d",
        marginLeft: 15,
    },
    logoutText: {
        fontFamily: "Calibre",
        fontSize: 20,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 24,
        letterSpacing: 0,
        color: "#868e9d",
        marginVertical: 15,
        marginHorizontal: 20,
    },
    subMenuText: {
        fontFamily: "Calibre",
        fontSize: 20,
        // fontWeight:'bold',
        fontStyle: "normal",
        lineHeight: 24,
        letterSpacing: 0,
        color: '#868e9d',
        paddingLeft: 20,
    },
    imageView: {
        height: 150, justifyContent: 'center', alignItems: 'center',
    },
    image: { 
        width: '73%', 
        height: '20%' 
    },
    communites:{ height: 50, borderBottomWidth: 2, borderBottomColor: Color.BASE_COLOR_LIGHTGRAY, width: '100%', marginLeft: 0, padding: 0, margin: 0, },

    communityText:{ height: 50, width: '121%', marginLeft: -8, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', margin: 0, marginVertical: 0, marginTop: -12 },
    drawerItem:{ height: 50, borderBottomWidth: 2, borderBottomColor: Color.BASE_COLOR_LIGHTGRAY, backgroundColor: 'white', width: '100%', marginLeft: 0, padding: 0, margin: 0, },

    subView:{ height: 50, width: '121%', marginLeft: -8, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', margin: 0, marginVertical: 0, marginTop: -12 },
    drawerView:{ height: 50, width: '121%', marginLeft: -8, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', margin: 0, marginVertical: 0, marginTop: -12 },
});
export default Drawer;
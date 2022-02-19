import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import Color from '../theme/colors';
import Font from '../theme/fonts';
import Images from '../theme/images';

import { DrawerItem } from '@react-navigation/drawer';
import { SafeAreaView } from 'react-native-safe-area-context';

interface Props {
  props: () => void;
}

const Drawer = ({ props }: Props) => {
  const [focus, setFocus] = useState('1');

  const [UserItem, setUserItem] = useState(false);
  const [QueueItem, setQueueItem] = useState(false);
  const [AccountItem, setAccountItem] = useState(false);

  const NestedDrawerItemM = () => {
    if (UserItem === true) {
      setUserItem(false);
    } else {
      setUserItem(true);
    }
  };
  const NestedDrawerItemQueue = () => {
    if (QueueItem === true) {
      setQueueItem(false);
    } else {
      setQueueItem(true);
    }
  };
  const NestedDrawerItemAccount = () => {
    if (AccountItem === true) {
      setAccountItem(false);
    } else {
      setAccountItem(true);
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.viewStyle}>
        <View style={styles.imageView}>
          <Image source={Images.DrawerLogo} style={styles.image} />
          <Text style={styles.managementText}>Management</Text>
        </View>

        <ScrollView>
          <View>
            <DrawerItem
              style={styles.communities}
              label={() => (
                <View style={styles.communityText}>
                  <Text style={styles.menuText}>Communities</Text>
                </View>
              )}
            />
            <DrawerItem
              style={styles.drawerItem}
              focused={focus === 1 ? true : false}
              label={() => (
                <View style={styles.drawerView}>
                  <Text style={styles.menuText}>Users</Text>
                  {UserItem === true && (
                    <Image
                      source={Images.MenuDropdown}
                      style={styles.imageStyle}
                    />
                  )}
                  {UserItem === false && (
                    <Image
                      source={Images.MenuDropdown}
                      style={styles.imageDropStyle}
                    />
                  )}
                </View>
              )}
              onPress={() => {
                setFocus('1');
                NestedDrawerItemM();
              }}
            />

            {UserItem === true && (
              <>
                <DrawerItem
                  label={() => (
                    <View
                      style={[
                        styles.subView,
                        focus === 'All' ? styles.drawerFocusStyle : null,
                      ]}>
                      <Text
                        style={[
                          styles.subMenuText,
                          focus === 'All'
                            ? { color: Color.BASE_COLOR_ORANGE }
                            : null,
                        ]}>
                        All (2,381)
                      </Text>
                    </View>
                  )}
                  onPress={() => {
                    setFocus('All');
                    props.navigation.navigate('All');
                  }}
                />
                <DrawerItem
                  label={() => (
                    <View
                      style={[
                        styles.subView,
                        focus === 'Mentees' ? styles.drawerFocusStyle : null,
                      ]}>
                      <Text
                        style={[
                          styles.subMenuText,
                          focus === 'Mentees'
                            ? { color: Color.BASE_COLOR_ORANGE }
                            : null,
                        ]}>
                        Mentees (2,342)
                      </Text>
                    </View>
                  )}
                  onPress={() => {
                    setFocus('Mentees');
                    props.navigation.navigate('Mentees');
                  }}
                />
                <DrawerItem
                  label={() => (
                    <View
                      style={[
                        styles.subView,
                        focus === 'Mentors' ? styles.drawerFocusStyle : null,
                      ]}>
                      <Text
                        style={[
                          styles.subMenuText,
                          focus === 'Mentors'
                            ? { color: Color.BASE_COLOR_ORANGE }
                            : null,
                        ]}>
                        Mentors (25)
                      </Text>
                    </View>
                  )}
                  onPress={() => {
                    setFocus('Mentors');
                  }}
                />
                <DrawerItem
                  label={() => (
                    <View
                      style={[
                        styles.subView,
                        focus === 'Moderators' ? styles.drawerFocusStyle : null,
                      ]}>
                      <Text
                        style={[
                          styles.subMenuText,
                          focus === 'Moderators'
                            ? { color: Color.BASE_COLOR_ORANGE }
                            : null,
                        ]}>
                        Moderators (10)
                      </Text>
                    </View>
                  )}
                  onPress={() => {
                    setFocus('Moderators');
                  }}
                />
                <DrawerItem
                  label={() => (
                    <View
                      style={[
                        styles.subView,
                        focus === 'Admins' ? styles.drawerFocusStyle : null,
                      ]}>
                      <Text
                        style={[
                          styles.subMenuText,
                          focus === 'Admins'
                            ? { color: Color.BASE_COLOR_ORANGE }
                            : null,
                        ]}>
                        Admins (5)
                      </Text>
                    </View>
                  )}
                  onPress={() => {
                    setFocus('Admins');
                  }}
                />
              </>
            )}

            <DrawerItem
              style={styles.drawerItem}
              focused={focus === 1 ? true : false}
              label={() => (
                <View style={styles.drawerView}>
                  <Text style={styles.menuText}>Moderation Queue</Text>
                  {QueueItem === true && (
                    <Image
                      source={Images.MenuDropdown}
                      style={styles.imageStyle}
                    />
                  )}
                  {QueueItem === false && (
                    <Image
                      source={Images.MenuDropdown}
                      style={styles.imageDropStyle}
                    />
                  )}
                </View>
              )}
              onPress={() => {
                setFocus('1');
                NestedDrawerItemQueue();
              }}
            />

            {QueueItem === true && (
              <>
                <DrawerItem
                  label={() => (
                    <View
                      style={[
                        styles.subView,
                        focus === 'AllQ' ? styles.drawerFocusStyle : null,
                      ]}>
                      <Text
                        style={[
                          styles.subMenuText,
                          focus === 'AllQ'
                            ? { color: Color.BASE_COLOR_ORANGE }
                            : null,
                        ]}>
                        All{' '}
                      </Text>
                    </View>
                  )}
                  onPress={() => {
                    setFocus('AllQ');
                  }}
                />
                <DrawerItem
                  label={() => (
                    <View
                      style={[
                        styles.subView,
                        focus === 'Comments' ? styles.drawerFocusStyle : null,
                      ]}>
                      <Text
                        style={[
                          styles.subMenuText,
                          focus === 'Comments'
                            ? { color: Color.BASE_COLOR_ORANGE }
                            : null,
                        ]}>
                        Comments
                      </Text>
                    </View>
                  )}
                  onPress={() => {
                    setFocus('Comments');
                  }}
                />
                <DrawerItem
                  label={() => (
                    <View
                      style={[
                        styles.subView,
                        focus === 'Post' ? styles.drawerFocusStyle : null,
                      ]}>
                      <Text
                        style={[
                          styles.subMenuText,
                          focus === 'Post'
                            ? { color: Color.BASE_COLOR_ORANGE }
                            : null,
                        ]}>
                        Post
                      </Text>
                    </View>
                  )}
                  onPress={() => {
                    setFocus('Post');
                  }}
                />
                <DrawerItem
                  label={() => (
                    <View
                      style={[
                        styles.subView,
                        focus === 'Reports' ? styles.drawerFocusStyle : null,
                      ]}>
                      <Text
                        style={[
                          styles.subMenuText,
                          focus === 'Reports'
                            ? { color: Color.BASE_COLOR_ORANGE }
                            : null,
                        ]}>
                        Reports
                      </Text>
                    </View>
                  )}
                  onPress={() => {
                    setFocus('Reports');
                  }}
                />
                <DrawerItem
                  label={() => (
                    <View
                      style={[
                        styles.subView,
                        focus === 'Usernames' ? styles.drawerFocusStyle : null,
                      ]}>
                      <Text
                        style={[
                          styles.subMenuText,
                          focus === 'Usernames'
                            ? { color: Color.BASE_COLOR_ORANGE }
                            : null,
                        ]}>
                        Usernames
                      </Text>
                    </View>
                  )}
                  onPress={() => {
                    setFocus('Usernames');
                  }}
                />
              </>
            )}
            <DrawerItem
              style={styles.drawerItem}
              focused={focus === 1 ? true : false}
              label={() => (
                <View style={styles.drawerView}>
                  <Text style={styles.menuText}>My Account</Text>
                  {AccountItem === true && (
                    <Image
                      source={Images.MenuDropdown}
                      style={styles.imageStyle}
                    />
                  )}
                  {AccountItem === false && (
                    <Image
                      source={Images.MenuDropdown}
                      style={styles.imageDropStyle}
                    />
                  )}
                </View>
              )}
              onPress={() => {
                setFocus('1');
                NestedDrawerItemAccount();
              }}
            />

            {AccountItem === true && (
              <>
                <DrawerItem
                  label={() => (
                    <View
                      style={[
                        styles.subView,
                        focus === 'Settings' ? styles.drawerFocusStyle : null,
                      ]}>
                      <Text
                        style={[
                          styles.subMenuText,
                          focus === 'Settings'
                            ? { color: Color.BASE_COLOR_ORANGE }
                            : null,
                        ]}>
                        Settings{' '}
                      </Text>
                    </View>
                  )}
                  onPress={() => {
                    setFocus('Settings');
                  }}
                />
                <DrawerItem
                  label={() => (
                    <View
                      style={[
                        styles.subView,
                        focus === 'Terms' ? styles.drawerFocusStyle : null,
                      ]}>
                      <Text
                        style={[
                          styles.subMenuText,
                          focus === 'Terms'
                            ? { color: Color.BASE_COLOR_ORANGE }
                            : null,
                        ]}>
                        Terms of Service
                      </Text>
                    </View>
                  )}
                  onPress={() => {
                    setFocus('Terms');
                  }}
                />
                <DrawerItem
                  label={() => (
                    <View
                      style={[
                        styles.subView,
                        focus === 'Privacy' ? styles.drawerFocusStyle : null,
                      ]}>
                      <Text
                        style={[
                          styles.subMenuText,
                          focus === 'Privacy'
                            ? { color: Color.BASE_COLOR_ORANGE }
                            : null,
                        ]}>
                        Privacy Policy
                      </Text>
                    </View>
                  )}
                  onPress={() => {
                    setFocus('Privacy');
                  }}
                />
              </>
            )}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  managementText: {
    fontFamily: Font.CALIBRE,
    fontSize: 18,
    fontWeight: 'bold',
    fontStyle: 'normal',
    lineHeight: 18,
    letterSpacing: 0,
    textAlign: 'center',
    color: Color.CONTENT_COLOR_BLACK_TEXT,
    marginTop: 20,
  },
  menuText: {
    fontFamily: 'Calibre',
    fontSize: 20,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 24,
    letterSpacing: 0,
    color: Color.DRAWER_TEXT_COLOR,
    marginLeft: 15,
  },
  logoutText: {
    fontFamily: 'Calibre',
    fontSize: 20,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 24,
    letterSpacing: 0,
    color: Color.DRAWER_TEXT_COLOR,
    marginVertical: 15,
    marginHorizontal: 20,
  },
  subMenuText: {
    fontFamily: 'Calibre',
    fontSize: 20,
    fontStyle: 'normal',
    lineHeight: 24,
    letterSpacing: 0,
    color: Color.DRAWER_TEXT_COLOR,
    paddingLeft: 20,
  },
  imageView: {
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '73%',
    height: '20%',
  },
  communities: {
    height: 50,
    borderBottomWidth: 2,
    borderBottomColor: Color.BASE_COLOR_LIGHTGRAY,
    width: '100%',
    marginLeft: 0,
    padding: 0,
    margin: 0,
  },

  communityText: {
    height: 50,
    width: '121%',
    marginLeft: -8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 0,
    marginVertical: 0,
    marginTop: -12,
  },
  drawerItem: {
    height: 50,
    borderBottomWidth: 2,
    borderBottomColor: Color.BASE_COLOR_LIGHTGRAY,
    backgroundColor: 'white',
    width: '100%',
    marginLeft: 0,
    padding: 0,
    margin: 0,
  },

  subView: {
    height: 50,
    width: '121%',
    marginLeft: -8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 0,
    marginVertical: 0,
    marginTop: -12,
  },
  drawerView: {
    height: 50,
    width: '121%',
    marginLeft: -8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 0,
    marginVertical: 0,
    marginTop: -12,
  },
  viewStyle: { flexDirection: 'column' },
  imageStyle: {
    transform: [{ rotateX: '180deg' }],
    marginRight: 15,
  },
  imageDropStyle: { marginRight: 15 },
  drawerFocusStyle: {
    borderLeftColor: Color.BASE_COLOR_ORANGE,
    borderLeftWidth: 6,
  },
});
export default Drawer;

import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';

import Color from '../theme/colors';
import Font from '../theme/fonts';
import Images from '../theme/images';

import Switch from '../component/Switch';

import LinearGradient from 'react-native-linear-gradient';

const DATA = [{}, {}];

const MentorCommunity = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const [mentorCommunity] = useState([DATA]);

  const renderItem = () => (
    <View style={styles.viewStyle}>
      <View style={styles.imageView}>
        <Image source={Images.LogoTab} style={styles.iconStyle} />
      </View>
      <View style={styles.inputView}>
        <Text style={styles.titleText}>navigating identity</Text>
        <Text style={styles.descriptionText} numberOfLines={6}>
          a community to discuss questions and situations related to gender
          identity, sexual orientation, race and ethnicity
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.primaryPageHeaderView}>
        <View style={styles.primaryPageHeaderRow}>
          <Text style={styles.headerTextStyle}>my communities</Text>
          <Switch
            isEnabled={isEnabled}
            text={isEnabled === true ? 'online' : 'offline'}
            onEnableToggle={toggleSwitch}
            ios_backgroundColor="rgba(255, 255, 255, 0.22)"
          />
        </View>
      </View>
      {mentorCommunity.length === 0 ? (
        <LinearGradient
          colors={[Color.BASE_COLOR_LIGHT_BLUE, Color.COLOR_LIGHT]}
          style={styles.linearGradientHeader}>
          <View style={styles.contentView}>
            <View style={styles.blankViewStyle}>
              <Text style={styles.textStyle}>
                you haven't been assigned to any communities yet.
              </Text>
            </View>
          </View>
        </LinearGradient>
      ) : (
        <LinearGradient
          colors={['rgba(255, 255, 255, 0.22)', Color.COLOR_LIGHT]}
          style={styles.linearGradient}>
          <FlatList data={DATA} renderItem={renderItem} />
        </LinearGradient>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.BASE_COLOR_LIGHT_BLUE,
  },
  viewStyle: {
    paddingVertical: 12,
    flexDirection: 'row',
    borderRadius: 6,
    backgroundColor: Color.BASE_COLOR_WHITE,
    marginVertical: 5,
  },
  headerView: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    shadowColor: Color.BASE_COLOR_LIGHT_BLUE,
  },
  inputView: {
    flex: 6,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  imageView: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 8,
  },

  iconStyle: {
    tintColor: Color.COMMUNITY_MAROON,
    height: 30,
    width: 20,
  },
  titleText: {
    fontFamily: Font.CALIBRE,
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'normal',
    lineHeight: 24,
    letterSpacing: 0,
    color: Color.CONTENT_COLOR_BLACK_TEXT,
  },
  descriptionText: {
    marginVertical: 5,
    fontFamily: Font.CALIBRE,
    fontSize: 18,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: Color.CONTENT_COLOR_BLACK_TEXT,
    paddingRight: 16,
  },
  linearGradient: {
    flex: 1,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
  linearGradientHeader: {
    flex: 1,
  },
  primaryPageHeaderView: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    height: 120,
  },
  primaryPageHeaderRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  headerTextStyle: {
    fontFamily: Font.CALIBRE,
    fontSize: 22,
    fontWeight: 'bold',
    fontStyle: 'normal',
    lineHeight: 34,
    letterSpacing: 0,
    color: Color.BASE_COLOR_WHITE,
  },
  contentView: {
    flex: 0.8,
    justifyContent: 'center',
  },
  blankViewStyle: {
    borderRadius: 4,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: Color.COLOR_LIGHT,
    marginHorizontal: 16,
  },
  textStyle: {
    padding: 20,
    fontFamily: Font.CALIBRE,
    fontSize: 19,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: Color.COLOR_LIGHT,
  },
});

export default MentorCommunity;

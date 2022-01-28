import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, FlatList } from 'react-native';

import Constant from '../theme/constant';
import Color from '../theme/colors';
import Font from '../theme/fonts';
import Images from '../theme/images';

import LinearGradient from 'react-native-linear-gradient';
import Header from '../component/Header';
import Button from '../component/Button';
import Badges from '../component/Badges';

import { useSelector } from 'react-redux';

const DATA = [{}, {}, {}, {}];
const HealthScreen = ({ navigation }) => {
  const homeResponse = useSelector(state => state.HomeReducer);
  console.log(' homeResponse: ', JSON.stringify(homeResponse));

  const [health] = useState([DATA]);

  const renderItem = () => (
    <View style={styles.viewStyleFlatlist}>
      <Button
        type={Constant.buttons.DESKTOP}
        text={'this post need a responed'}
        style={styles.desktopStyle}
        textStyle={styles.buttonTextStyle}
      />

      <View style={styles.headerTextView}>
        <Text style={styles.headerTextStyle}>@romanticpokemon4</Text>
        <Image source={Images.Dots} style={styles.iconStyle} />
      </View>
      <View style={styles.descriptionView}>
        <Text style={styles.titleTextStyle}>None of it was your fault</Text>
        <Text style={styles.descriptionsText}>
          In case someone who is struggling needs to hear this: we are a product
          of our circumstances and genetics.
        </Text>
        <View style={styles.viewDescriptionStyle}>
          <Text style={styles.descriptionsText}>
            Be compassionate with yourself, healing will come later.
          </Text>
        </View>
      </View>
      <View style={styles.bottomView}>
        <View style={styles.badgesView}>
          <Badges
            type={Constant.badges.COMMENTS}
            text={'0 Comments'}
            style={styles.badgeCommentStyle}
          />

          <Badges
            type={Constant.badges.CONTENT}
            text={'[example cw]'}
            leftIcon={Images.Warning}
            style={styles.badgeContentStyle}
          />
        </View>
        <View style={styles.timeView}>
          <Text style={styles.endTimeText}>2:48pm</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header
        type={Constant.navigatioHeader.COMMUNITY_HEADER}
        leftIcon={Images.Arrowsquare}
        rightIcon={Images.Dots}
        label={'BIPOC+ mental health'}
        descriptionText={
          'a place to discuss mental health and share how these identities play a pivotal role in  experiences and access to resources.'
        }
        onPress={() => navigation.goBack()}
      />
      <LinearGradient
        colors={[Color.COMMUNITY_GREEN, Color.COLOR_LIGHT]}
        style={styles.linearGradient}>
        {health.length !== 0 ? (
          <LinearGradient
            colors={['rgba(255, 255, 255, 0.22)', Color.COLOR_LIGHT]}
            style={styles.linearGradientFlatlist}>
            <View style={styles.sessionStyle}>
              <Text style={styles.sessionText}>
                live session today from 4pm-7pm EST
              </Text>
              <Image source={Images.infoCircleFill} style={styles.infoIcon} />
            </View>

            <FlatList
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              data={DATA}
              renderItem={renderItem}
            />
          </LinearGradient>
        ) : (
          <View style={styles.contentView}>
            <View style={styles.viewStyle}>
              <Text style={styles.textStyle} numberOfLines={3}>
                this community doesn't have any posts yet; ask a question or
                share an experience to get the conversation started!
              </Text>
            </View>
          </View>
        )}
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.COMMUNITY_GREEN,
  },
  linearGradient: {
    flex: 1,
  },
  contentView: {
    flex: 0.8,
    justifyContent: 'center',
  },
  viewStyle: {
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
  sessionStyle: {
    padding: 9,
    paddingHorizontal: 16,
    flexDirection: 'row',
    borderRadius: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.22)',
    justifyContent: 'space-between',
    marginVertical: 3,
  },
  desktopStyle: {
    width: '100%',
  },
  headerTextView: {
    paddingVertical: 15,
    flexDirection: 'row',
  },
  iconStyle: {
    tintColor: 'grey',
  },
  headerTextStyle: {
    flex: 9,
    fontFamily: Font.CALIBRE,
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'normal',
    textDecorationLine: 'underline',
    lineHeight: 24,
    color: Color.CONTENT_COLOR_BLACK_TEXT,
  },
  linearGradientFlatlist: {
    flex: 1,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  badgesView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoIcon: {
    tintColor: Color.BASE_COLOR_WHITE,
    alignSelf: 'center',
  },
  sessionText: {
    textAlign: 'center',
    fontFamily: Font.CALIBRE,
    fontSize: 20,
    letterSpacing: 0,
    color: Color.BASE_COLOR_WHITE,
  },
  endTimeText: {
    color: 'grey',
    alignSelf: 'flex-end',
    fontSize: 12,
  },
  timeView: {
    justifyContent: 'center',
    flex: 0.31,
  },
  bottomView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  viewStyleFlatlist: {
    borderRadius: 6,
    backgroundColor: Color.BASE_COLOR_WHITE,
    marginVertical: 5,
    padding: 18,
  },
  titleTextStyle: {
    fontFamily: Font.CALIBRE,
    fontSize: 19,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 24,
    letterSpacing: 0,
    color: Color.CONTENT_COLOR_BLACK_TEXT,
  },
  descriptionsText: {
    marginVertical: 5,
    fontFamily: Font.CALIBRE,
    fontSize: 17,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: Color.CONTENT_COLOR_BLACK_TEXT,
  },
  descriptionView: {
    flex: 7,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  badgeCommentStyle: { paddingVertical: 3 },
  badgeContentStyle: { paddingVertical: 2 },
  viewDescriptionStyle: { marginVertical: 10 },
  buttonTextStyle: { fontSize: 19 },
});

export default HealthScreen;

import Color from '../../theme/colors';
import { StyleSheet } from 'react-native';
import Font from '../../theme/fonts';
export const theme = () => {
  return StyleSheet.create({
    width100p: {
      width: '100%',
    },
    width90p: {
      width: '90%',
    },
    width10p: { width: '10%' },
    container: {
      flex: 1,
      backgroundColor: Color.BASE_COLOR_LIGHT_BLUE,
    },
    row: {
      flexDirection: 'row',
    },
    communityCardView: {
      paddingVertical: 12,
      // flexDirection: 'row',
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
    marginHorizontal10: {
      marginHorizontal: 10,
    },
    allComJoin: {
      paddingRight: '5%',
      paddingVertical: '10%',
    },
    marginTop8: {
      marginTop: 8,
    },
  });
};

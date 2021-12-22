import React from "react";
import { Text, View, Dimensions, Image,StyleSheet} from 'react-native'
import Color from '../theme/colors';


const width = Dimensions.get('window').width ;
    const height = Dimensions.get('window').height ;


    interface Props {
        type: string;
        leftIcon: string;
        rigthIcon: string;
        text: string;
      }

const Badges = ({type,leftIcon,rigthIcon,text} : Props) => {

    return(
<>
       
            <View style={
                type == 'Mentor' ? styles.mentorView :  
                type == 'Content' ? styles.contentView : 
                type == 'Comments' ?styles.commentsView : 
                type == 'Active'  ? styles.activeView : 
                type == 'Inactive'  ? styles.inActiveView : 
                type == 'Descriptor' ? styles.descriptorView : 
                type == 'Multi-Select' ? styles.multiSelectView : 
                null}
            >
                {leftIcon != undefined ? (<Image source={leftIcon} style={{ width: 16,height: 16,marginHorizontal:5,marginVertical:5}} />) : null}
                
                <Text style={
                    type == 'Mentor' ? styles.mentorText :  
                    type == 'Content' ? styles.contentText : 
                    type == 'Comments' ?styles.commentsText : 
                    type == 'Active'  ? styles.activeText : 
                    type == 'Inactive'  ? styles.inActiveText : 
                    type == 'Descriptor' ? styles.descriptorText : 
                    type == 'Multi-Select' ? styles.MultiSelectText : 
                    null}
                >
                
                {text}
                </Text>
                {rigthIcon != undefined ? (<Image source={rigthIcon} style={{ width: 16,height: 16,alignSelf:'center',marginLeft:9}} />) : null}
            </View>
       
        </>      
    );
}

const styles = StyleSheet.create({
    mentorView: {
        width: width * 0.2,
        height: height * 0.03,
        borderRadius: 11,
        backgroundColor: Color.COMMUNITY_DARK_BLUE,
        justifyContent:'center'
    },
    mentorText: {
        fontFamily: "Calibre",
        fontSize: 15,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 15,
        letterSpacing: 0,
        textAlign: "center",
        color: Color.BASE_COLOR_WHITE
    },
    contentView:{ width: width * 0.4,
        height: height * 0.04,
        borderRadius: 14,
        backgroundColor: Color.BASE_COLOR_WHITE,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: Color.BASE_COLOR_BORDER_GRAY,
        flexDirection:'row',
    },
    contentText:{
        fontFamily: "Calibre",
        fontSize: 16,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 24,
        letterSpacing: 0,
        color: Color.CONTENT_COLOR_BLACK_TEXT
    },
    commentsView:{
        width: width * 0.3,
        height: height * 0.04,
        borderRadius: 14,
        backgroundColor: Color.BASE_COLOR_BORDER_GRAY,
        justifyContent:'center'
    },
    commentsText:{
        textAlign:'center',
        fontFamily: "Calibre",
        fontSize: 16,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 24,
        letterSpacing: 0,
        color: Color.BASE_COLOR_GRAY
    },
    activeView:{
        width: width * 0.2,
        height: height * 0.03,
        borderRadius: 2,
        backgroundColor: Color.BASE_COLOR_GREEN,
        justifyContent:'center'
    },
    activeText:{ 
        fontFamily: "Calibre",
        fontSize: 15,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 15,
        letterSpacing: 0,
        textAlign: "center",
        color: Color.BASE_COLOR_WHITE
    },
    inActiveView:{
        width: width * 0.2,
        height: height * 0.03,
        borderRadius: 2,
        backgroundColor: Color.BASE_COLOR_LIGHTGRAY,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: Color.BORDER_COLOR_GRAY,
        justifyContent:'center'
    },
    inActiveText:{ 
        fontFamily: "Calibre",
        fontSize: 15,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 15,
        letterSpacing: 0,
        textAlign: "center",
        color: Color.TEXT_COLOR
    },
    descriptorView:{
        width: width * 0.3,
        height: height * 0.035,
        borderRadius: 14,
        backgroundColor: Color.BASE_COLOR_WHITE,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: Color.BORDER_COLOR_LIGHTGRAY
    },
    descriptorText:{
        textAlign:'center',
        fontFamily: "Calibre",
        fontSize: 16,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 24,
        letterSpacing: 0,
        color: Color.DESCRIPTION_COLOR_TEXT
    },
    multiSelectView:{
        width: width * 0.3,
        height: height * 0.035,
        borderRadius: 14,
        backgroundColor: Color.BASE_COLOR_WHITE,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: Color.BORDER_COLOR_LIGHTGRAY,
        flexDirection:'row',
        justifyContent:'center'
    },
    MultiSelectText:{
        fontFamily: "Calibre",
        fontSize: 16,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 24,
        letterSpacing: 0,
        color: Color.BASE_COLOR_GRAY
    },
  });

export default Badges;
import React from "react";
import { Text, View, Dimensions,StyleSheet, Image} from 'react-native'
import Color from '../theme/colors';

const width = Dimensions.get('window').width ;
    const height = Dimensions.get('window').height ;
 console.log("height : ", height)

 interface Props {
    type: string;
    text: string;
    icon:string;
  }

const Button = ({type,text,icon} : Props) => {

  
    return(
<>
            <View style={
                type == 'Desktop' ? styles.desktopView : 
                type == 'Mobile' ? styles.mobileView : 
                type == 'Primary' ?styles.primaryView : 
                type == 'Close'  ? styles.closeButtonView : 
                type == 'selfseaSend' ? styles.selfseaSendView : 
                null}
                >
                {icon != undefined ? (<Image style={styles.selfseaSendImage} source={icon}/>) : (
                    <Text style={
                        type == 'Desktop' ? styles.desktopText : 
                        type == 'Mobile' ? styles.mobileText : 
                        type == 'Primary' ?styles.primaryText :
                        type == 'Close'  ? styles.closeButtonText : 
                        null}
                        >
                        {text}</Text>
                )}
                
            </View>
       
        </>      
    );
}
const styles = StyleSheet.create({
    desktopView: {
        width: width * 0.32,
        height: height * 0.053,
        borderRadius: 4,
        backgroundColor:Color.BASE_COLOR_DARK_BLUE,
        justifyContent:'center'
    },
    desktopText: {
        fontFamily: "Calibre",
        fontSize: 16,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 24,
        letterSpacing: 0,
        textAlign: "center",
        color: Color.BASE_COLOR_WHITE
    },
    mobileView:{
        width: width * 0.18,
        height: height * 0.043,
        borderRadius: 18,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: Color.BORDER_COLOR_DARKGRAY,
        justifyContent:'center'
    },
    mobileText:{
        fontFamily: "Calibre",
        fontSize: 20,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 30,
        letterSpacing: 0,
        textAlign: "center",
        color: Color.CONTENT_COLOR_BLACK_TEXT
    },
    primaryView:{
        width: width * 0.77,
        height: height * 0.065,
        borderRadius: 4,
        backgroundColor: Color.BASE_COLOR_ORANGE,
        justifyContent:'center'      
    },
    primaryText:{
        fontFamily: "Calibre",
        fontSize: 20,
        fontWeight: "500",
        fontStyle: "normal",
        lineHeight: 21,
        letterSpacing: 0,
        textAlign: "center",
        color: Color.BASE_COLOR_WHITE
    },
    closeButtonView:{
        width: width * 0.77,
        height: height * 0.065,
        borderRadius: 4,
        backgroundColor:Color.BASE_COLOR_WHITE,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: Color.BORDER_COLOR_LIGHTGRAY,
        justifyContent:'center'      
    },
    closeButtonText:{
        fontFamily: "Calibre",
        fontSize: 20,
        fontWeight: "500",
        fontStyle: "normal",
        lineHeight: 21,
        letterSpacing: 0,
        textAlign: "center",
        color: Color.TEXT_COLOR
    },
    selfseaSendView:{
        width: width * 0.13,
        height: height * 0.06,
        borderRadius: 4,
        backgroundColor: Color.BASE_COLOR_ORANGE,
        justifyContent:'center',
        
    },
    selfseaSendImage:{
       alignSelf:'center'
    }

  
});

export default Button;
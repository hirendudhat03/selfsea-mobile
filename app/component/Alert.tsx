import React from "react";
import { Text, View, Dimensions,StyleSheet} from 'react-native'

const width = Dimensions.get('window').width ;
    const height = Dimensions.get('window').height ;
 console.log("height : ", height)


const Alert = (props) => {

    return(
<>
            <View style={props.type == 'Mentor' ? styles.MentorView :  props.type == 'Urgent' ? styles.ModUrgentView : props.type == 'Warning' ?styles.ModWarning : props.type == 'Success'  ? styles.ActionSuccessView : 
        props.type == 'Info' ? styles.ActionInfoView : null}>
                <Text style={props.type == 'Mentor' ? styles.MentorText :  props.type == 'Urgent' ? styles.ModUrgentText : props.type == 'Warning' ?styles.ModWarningText : props.type == 'Success'  ? styles.ActionSuccessText : 
        props.type == 'Info' ? styles.ActionInfoText : null}>{props.text}</Text>
            </View>
      
        </>      
    );
}
const styles = StyleSheet.create({
    MentorView: {
        width: width,
        height: height /14 ,
        borderRadius: 4,
        backgroundColor:'#003275',
        justifyContent:'center'
    },
    MentorText: {
    fontFamily: "Calibre",
    fontSize: 20,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 30,
    letterSpacing: 0,
    textAlign: "center",
    color: "#ffffff"
    },
    ModUrgentView:{ 
        width: width * 0.3,
        height: height * 0.04,
        borderRadius: 4,
        borderStyle: "solid",
        backgroundColor:'rgba(255, 152, 41, 0.8)',
        borderWidth: 1,
        borderColor: "#ff9829",
        justifyContent:'center'
    },
    ModUrgentText:{
        fontFamily: "Calibre",
        fontSize: 16,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 24,
        letterSpacing: 0,
        textAlign: "center",
        color: "#ffffff"
    },
    ModWarning:{
        width: width * 0.3,
        height: height * 0.04,
        borderRadius: 4,
        backgroundColor: "rgba(238, 79, 39, 0.8)",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#ee4f27"
    },
    ModWarningText:{
        fontFamily: "Calibre",
        fontSize: 16,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 24,
        letterSpacing: 0,
        textAlign: "center",
        color: "#ffffff"
    },
    ActionSuccessView:{
        width: width,
        height: height * 0.07,
        borderRadius: 4,
        backgroundColor: "#d4edda",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#c3e6cb",
        justifyContent:'center'
    },
    ActionSuccessText:{
        fontFamily: "HelveticaNeue",
                       fontSize: 16,
                       fontWeight: "normal",
                       fontStyle: "normal",
                       lineHeight: 24,
                       letterSpacing: 0,
                       color: "#155724"
    },
    ActionInfoView:{
        width: width,
        height: height * 0.07,
        borderRadius: 4,
        backgroundColor: "rgba(36, 124, 178, 0.22)",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#003275",
        justifyContent:'center'
    },
    ActionInfoText:{
        fontFamily: "HelveticaNeue",
        fontSize: 16,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 24,
        letterSpacing: 0,
        color: "#072c44"
    },
});

export default Alert;
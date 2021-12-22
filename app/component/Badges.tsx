import React from "react";
import { Text, View, Dimensions, Image,StyleSheet} from 'react-native'


const width = Dimensions.get('window').width ;
    const height = Dimensions.get('window').height ;


const Badges = (props) => {

    return(
<>
       
            <View style={
                props.type == 'Mentor' ? styles.MentorView :  
                props.type == 'Content' ? styles.ContentView : 
                props.type == 'Comments' ?styles.CommentsView : 
                props.type == 'Active'  ? styles.ActiveView : 
                props.type == 'Inactive'  ? styles.inActiveView : 
                props.type == 'Descriptor' ? styles.DescriptorView : 
                props.type == 'Multi-Select' ? styles.MultiSelectView : 
                null}
            >
                {props.leftIcon != undefined ? (<Image source={props.leftIcon} style={{ width: 16,height: 16,marginHorizontal:5,marginVertical:5}} />) : null}
                
                <Text style={
                    props.type == 'Mentor' ? styles.MentorText :  
                    props.type == 'Content' ? styles.ContentText : 
                    props.type == 'Comments' ?styles.CommentsText : 
                    props.type == 'Active'  ? styles.ActiveText : 
                    props.type == 'Inactive'  ? styles.inActiveText : 
                    props.type == 'Descriptor' ? styles.DescriptorText : 
                    props.type == 'Multi-Select' ? styles.MultiSelectText : 
                    null}
                >
                
                {props.text}
                </Text>
                {props.rigthIcon != undefined ? (<Image source={props.rigthIcon} style={{ width: 16,height: 16,alignSelf:'center',marginLeft:9}} />) : null}
            </View>
       
        </>      
    );
}

const styles = StyleSheet.create({
    MentorView: {
        width: width * 0.2,
        height: height * 0.03,
        borderRadius: 11,
        backgroundColor: "#003275",
        justifyContent:'center'
    },
    MentorText: {
        fontFamily: "Calibre",
        fontSize: 15,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 15,
        letterSpacing: 0,
        textAlign: "center",
        color: "#ffffff"
    },
    ContentView:{ width: width * 0.4,
        height: height * 0.04,
        borderRadius: 14,
        backgroundColor: "#ffffff",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#ececec",
        flexDirection:'row'},
    ContentText:{
        fontFamily: "Calibre",
        fontSize: 16,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 24,
        letterSpacing: 0,
        color: "#000000"},
    CommentsView:{
        width: width * 0.3,
        height: height * 0.04,
        borderRadius: 14,
        backgroundColor: "#ececec",
        justifyContent:'center'
    },
    CommentsText:{
        textAlign:'center',
        fontFamily: "Calibre",
        fontSize: 16,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 24,
        letterSpacing: 0,
        color: "#212529"
    },
    ActiveView:{
        width: width * 0.2,
        height: height * 0.03,
        borderRadius: 2,
        backgroundColor: "#28a745",
        justifyContent:'center'
    },
    ActiveText:{ 
        fontFamily: "Calibre",
        fontSize: 15,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 15,
        letterSpacing: 0,
        textAlign: "center",
        color: "#ffffff"
    },
    inActiveView:{
        width: width * 0.2,
        height: height * 0.03,
        borderRadius: 2,
        backgroundColor: "#d6d8d9",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#c6c8ca",
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
  color: "#111111"
    },
    DescriptorView:{
        width: width * 0.3,
        height: height * 0.035,
        borderRadius: 14,
        backgroundColor: "#ffffff",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#ced4da"
    },
    DescriptorText:{
        textAlign:'center',
        fontFamily: "Calibre",
        fontSize: 16,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 24,
        letterSpacing: 0,
        color: "#212529"
    },
    MultiSelectView:{
        width: width * 0.3,
        height: height * 0.035,
        borderRadius: 14,
        backgroundColor: "#ffffff",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#ced4da",
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
        color: "#212529"
    },
  });

export default Badges;
import React, { useState } from "react";
import { Text, View,Switch, Dimensions,StyleSheet, Image} from 'react-native'

const width = Dimensions.get('window').width ;
    const height = Dimensions.get('window').height ;
 console.log("height : ", height)

const Button = (props) => {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
   
    return(
<>
        {props.type == 'Desktop' ? (
            <View style={styles.DesktopView}>
                <Text style={styles.DesktopText}>{props.text}</Text>
            </View>
        ) : null}

        {props.type == 'Mobile' ? (
            <View style={styles.MobileView}>
                    <Text style={styles.MobileText}>{props.text}</Text>
            </View>
        ) : null}

        {props.type == 'MobileSwitch' ? (
              <View style={{width:50}}>
              <Switch
                trackColor={{ false: "white", true: "green" }}
                thumbColor={isEnabled ? "white" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
        ) : null}
          {props.type == 'MobileButton' ? (
              <View style={styles.MobileButtonView}>
                <Text style={styles.MobileButtonText}>{props.text}</Text>
            </View>
        ) : null}
         {props.type == 'MobileselfseaSend' ? (
              <View style={styles.MobileselfseaSendView}>
                <Image style={styles.MobileselfseaSendImage} source={props.icon}/>
            </View>
        ) : null}
        </>      
    );
}
const styles = StyleSheet.create({
    DesktopView: {
        width: width * 0.32,
        height: height * 0.053,
        borderRadius: 4,
        backgroundColor:'#003275',
        justifyContent:'center'
    },
    DesktopText: {
        fontFamily: "Calibre",
        fontSize: 16,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 24,
        letterSpacing: 0,
        textAlign: "center",
        color: "#ffffff"
    },
    MobileView:{
        width: 70,
        height: 36,
        borderRadius: 18,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#6c757d"
    },
    MobileText:{
        fontFamily: "Calibre",
        fontSize: 20,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 30,
        letterSpacing: 0,
        textAlign: "center",
        color: "#000000"
    },
    MobileButtonView:{
        width: width * 0.77,
        height: height * 0.065,
        borderRadius: 4,
        backgroundColor: "#ff9829",
        justifyContent:'center'      
    },
    MobileButtonText:{
        fontFamily: "Calibre",
        fontSize: 20,
        fontWeight: "500",
        fontStyle: "normal",
        lineHeight: 21,
        letterSpacing: 0,
        textAlign: "center",
        color: "#ffffff"
    },
    MobileselfseaSendView:{
        width: 48,
        height: 48,
        borderRadius: 4,
        backgroundColor: "#ff9829",
        justifyContent:'center'

    },
    MobileselfseaSendImage:{
        alignSelf:'center'
    }

  
});

export default Button;
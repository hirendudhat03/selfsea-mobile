import React from "react";
import {  View, Dimensions, StyleSheet, Image } from 'react-native'
import Color from '../theme/colors';
import SelectDropdown from 'react-native-select-dropdown'
import DropdownIcon from '../assets/images/pngs/dropdown-button-carot-down.png'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;



interface Props {
    data: [];
    onSelect: () => void;
    defaultButtonText:string;
}


const dropdownComponent = ({ data,onSelect,defaultButtonText }: Props) => {

    return (
       
              
                    <SelectDropdown
                        renderDropdownIcon={() => (
                            <View style={styles.iconView}>
                            <Image source={DropdownIcon} />
                            </View>
                        )}
                        defaultButtonText={defaultButtonText}
                        buttonStyle={styles.Container}
                        data={data}
                        onSelect={onSelect}
                        // buttonTextAfterSelection={(selectedItem, index) => {
                        //     return selectedItem
                        // }}
                        // rowTextForSelection={(item, index) => {

                        //     return item
                        // }}
                    />
            
          
    );
};
const styles = StyleSheet.create({

    Container: {
        borderRadius: 4,
        backgroundColor: Color.BASE_COLOR_WHITE,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: Color.BORDER_COLOR_LIGHTGRAY
    },
    iconView:{
        width: width * 0.1,
        height: height * 0.06,
        backgroundColor: Color.BASE_COLOR_WHITE,
        borderStyle: "solid",
        borderLeftColor: Color.BORDER_COLOR_LIGHTGRAY,
        justifyContent:'center',
        alignItems:'center',
        borderLeftWidth:1
    
    }
  


});

export default dropdownComponent;

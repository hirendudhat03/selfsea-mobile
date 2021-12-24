import React from "react";
import { Text, View, Dimensions, StyleSheet, Image } from 'react-native'
import Color from '../theme/colors';
import Constant from '../theme/constant'
import SelectDropdown from 'react-native-select-dropdown'
import DropdownIcon from '../assets/images/pngs/dropdown-button-carot-down.png'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
console.log("height : ", height)

interface Props {
    type: string;
    text: string;
}

const countries = ["Menu Item","Menu Item","Menu Item","Menu Item"]


const dropdownComponent = ({ type, text }: Props) => {

    return (
        <>
            {type === Constant.DROPDOWN ? (
                <View style={{}}>
                    <SelectDropdown
                        renderDropdownIcon={() => (
                            <View style={styles.iconView}>
                            <Image source={DropdownIcon} />
                            </View>
                        )}
                        defaultButtonText="DropDown"
                        buttonStyle={styles.Container}
                        data={countries}
                        onSelect={(selectedItem, index) => {
                            console.log(selectedItem, index)
                        }}
                        buttonTextAfterSelection={(selectedItem, index) => {
                            return selectedItem
                        }}
                        rowTextForSelection={(item, index) => {

                            return item
                        }}
                    />
                </View>
            ) :
                null}

        </>
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

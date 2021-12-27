import React, { useState } from "react";
import { View,Text } from 'react-native';
import ModalView from "app/component/Modal";

const countries = [
    {
        title: 'Menu Item',
        value: 'Menu Item',
    },
    {
        title: 'Menu Item',
        value: 'Menu Item',
    },
    {
        title: 'Menu Item',
        value: 'Menu Item',
    },
];

const Signup = () => {

    const [modalVisible, setmodalVisible] = useState(false);


    return (
        <View style={{ flex: 1 }}>
            <Text onPress={() => setmodalVisible(true)}>open modal</Text>
            <ModalView headertext={'[modal title]'} placeholder={'[modal description]'} 
            data={countries} text={'Primary'} visible={modalVisible} closeModal={() => setmodalVisible(false)}/>

            

        </View>
    );
}

export default Signup;

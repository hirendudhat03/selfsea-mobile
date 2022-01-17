
import React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';


import Font from '../theme/fonts';
import Color from '../theme/colors';
import Constant from '../theme/constant';

import Button from '../component/Button';

interface Props {
  changeModalVisibility: (bool: boolean) => void;
  textTitle: string;
  smallText: string;
  button: string;
  text: string;
  descriptionData: [];
  numberOfLines: number;


}

const ModalPicker = ({ changeModalVisibility, textTitle, smallText, button, text, descriptionData,numberOfLines }: Props) => {
  return (
    
    <View style={styles.container}>
      <View style={styles.modal}>
        <Text style={styles.textTitle}>{textTitle}

        </Text>
        <Text style={styles.smallText} numberOfLines={3} ellipsizeMode="middle">
          {smallText}
        </Text>
        <View style={{flexDirection:'row'}}>
        <Button
          type={Constant.buttons.CLOSE}
          text={text}
          style={{ marginVertical: 10, width: '50%' }}
          onPress={() => changeModalVisibility(false)}
        />
         <Button
          type={Constant.buttons.CLOSE}
          text={text}
          style={{ marginVertical: 10, width: '50%' }}
          onPress={() => changeModalVisibility(false)}
        />
        </View>
      </View>
    </View>
  );
};
const width = Dimensions.get('window').width - 50;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    paddingHorizontal: 30,
    // opacity: -8,
  },
  modal: {
    backgroundColor: Color.BASE_COLOR_WHITE,
    borderRadius: 10,
    height: 'auto',
    width: width,
    padding: 15,
  },
  textTitle: {
    fontFamily: Font.CALIBRE,
    fontSize: 24,
    fontWeight: 'bold',
    fontStyle: 'normal',
    lineHeight: 24,
    letterSpacing: 0,
    textAlign: 'center',
    color: Color.CONTENT_COLOR_BLACK_TEXT,
  },
  smallText: {
    fontFamily: Font.CALIBRE,
    fontSize: 16,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 24,
    letterSpacing: 0,
    textAlign: 'center',
    color: Color.TEXT_COLOR_PASSWORD,
    marginVertical: 10,
  },
  descriptionText: {
    fontFamily: Font.CALIBRE,
    fontSize: 18,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: Color.CONTENT_COLOR_BLACK_TEXT,
    marginVertical: 10,
  },
});
export default ModalPicker;

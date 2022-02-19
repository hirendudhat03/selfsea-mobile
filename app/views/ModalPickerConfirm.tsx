import React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';

import Font from '../theme/fonts';
import Color from '../theme/colors';
import Constant from '../theme/constant';

import Button from '../components/Button';

interface IDescriptionItem {
  title: string;
}

interface Props {
  changeModalVisibility: (bool: boolean) => void;
  textTitle: string;
  smallText?: string;
  smallTextParagraph?: string;
  firstText?: string;
  secondText?: string;
  type: string;
  text?: string;
  descriptionData?: IDescriptionItem[];
  numberOfLines?: number;
  style?: {};
  button?: string;
  secondType?: string;
  firstType?: string;
  onPress?: () => void;
  onPressPrimary?: () => void;
}

const ModalPicker = ({
  type,
  changeModalVisibility,
  textTitle,
  smallText,
  smallTextParagraph,
  secondText,
  firstText,
  button,
  text,
  descriptionData,
  numberOfLines,
  style,
  secondType,
  firstType,
  onPress,
  onPressPrimary,
}: Props) => {
  return (
    <>
      {type === Constant.modal.MODAL_SUCCESS ? (
        <View style={styles.container}>
          <View style={styles.modalSuccess}>
            <Text style={styles.textTitle}>{textTitle}</Text>
            <Text
              style={styles.smallText}
              numberOfLines={7}
              ellipsizeMode="middle">
              {smallText}
            </Text>
            {smallTextParagraph !== undefined ? (
              <Text
                style={styles.smallText}
                numberOfLines={7}
                ellipsizeMode="middle">
                {smallTextParagraph}
              </Text>
            ) : null}
            <View style={styles.buttonContentView}>
              <Button
                type={firstType}
                text={firstText}
                style={styles.closeButtonStyle}
                onPress={onPress || (() => changeModalVisibility(false))}
              />
              <Button
                type={secondType}
                text={secondText}
                style={styles.primaryButtonStyle}
                onPress={onPressPrimary || (() => changeModalVisibility(false))}
              />
            </View>
          </View>
        </View>
      ) : null}
      {type === Constant.modal.MODAL ? (
        <View style={styles.container}>
          <View style={styles.modal}>
            <Text style={styles.textTitle}>{textTitle}</Text>
            {smallText !== undefined ? (
              <Text
                style={styles.smallText}
                numberOfLines={3}
                ellipsizeMode="middle">
                {smallText}
              </Text>
            ) : null}

            {descriptionData?.map(item => {
              return (
                <Text
                  style={[styles.descriptionText, style]}
                  numberOfLines={numberOfLines}
                  ellipsizeMode="middle">
                  {item.title}
                </Text>
              );
            })}
            <Button
              type={button}
              text={text}
              style={styles.buttonStyle}
              onPress={onPress || (() => changeModalVisibility(false))}
            />
          </View>
        </View>
      ) : null}
    </>
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
  },
  modal: {
    backgroundColor: Color.BASE_COLOR_WHITE,
    borderRadius: 10,
    height: 'auto',
    width: width,
    padding: 19,
  },
  modalSuccess: {
    backgroundColor: Color.BASE_COLOR_WHITE,
    borderRadius: 10,
    height: 'auto',
    width: width,
    padding: 20,
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
    marginTop: 10,
    marginBottom: 15,
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
  primaryButtonStyle: {
    padding: 12,
    width: '60%',
  },
  closeButtonStyle: { padding: 12, width: '35%' },
  buttonContentView: { flexDirection: 'row', justifyContent: 'space-between' },
  buttonStyle: { marginVertical: 10, width: '100%' },
});
export default ModalPicker;

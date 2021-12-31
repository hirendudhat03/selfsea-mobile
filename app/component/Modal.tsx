import React from 'react';
import {
  Dimensions,
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Modal,
} from 'react-native';
import Color from '../theme/colors';
import Images from '../theme/images';
import Constant from '../theme/constant';
// @ts-ignore

import Dropdown from './Dropdown';
import Button from './Button';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

interface Props {
  text: string;
  headertext: string;
  placeholder: string;
  data: [];
  visible: boolean;
  closeModal: () => void;
}

const ModalView = ({
  text,
  headertext,
  placeholder,
  data,
  visible,
  closeModal,
}: Props) => {
  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View style={styles.Container}>
        <View style={styles.headerView}>
          <Text style={styles.headerText}>{headertext}</Text>
          <View
            style={{
              flexDirection: 'row-reverse',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity style={styles.circle} onPress={closeModal}>
              <Image source={Images.Cross} style={styles.circleIcon} />
            </TouchableOpacity>
            <Dropdown
              optionList={data}
              onSelect={() => {}}
              defaultButtonText={'Action'}
              style={styles.dropdownStyle}
            />
          </View>
        </View>
        <View style={styles.lineView} />
        <View style={{ flex: 1 }}>
          <TextInput
            placeholder={placeholder}
            placeholderTextColor={Color.CONTENT_COLOR_BLACK_TEXT}
            multiline={true}
          />
        </View>

        <View style={styles.lineView} />
        <View style={styles.bottomView}>
          <View style={styles.bottomRow}>
            <Button
              type={Constant.buttons.DESKTOP}
              text={text}
              style={styles.primaryButton}
            />
            <Button
              type={Constant.buttons.SECONDARY}
              text={'Close'}
              style={styles.closeButton}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  Container: {
    borderRadius: 4,
    backgroundColor: Color.BASE_COLOR_WHITE,
    alignSelf: 'center',
    paddingVertical: 10,
    width: 410,
    height: 350,
  },
  headerView: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerText: {
    fontFamily: 'Calibre',
    fontSize: 24,
    fontWeight: 'bold',
    fontStyle: 'normal',
    lineHeight: 24,
    letterSpacing: 0,
    color: '#111111',
    paddingRight: 83,
    textAlign: 'center',
  },
  dropdownStyle: {
    alignSelf: 'baseline',
    height: 40,
    width: 140,
  },
  circle: {
    width: width * 0.065,
    height: height * 0.035,
    backgroundColor: Color.CIRCLE_ICON_COLOR,
    borderStyle: 'solid',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftWidth: 1,
    marginHorizontal: 13,
  },
  circleIcon: {
    height: height * 0.03,
    width: width * 0.03,
    tintColor: 'white',
  },
  lineView: {
    borderColor: Color.BORDER_COLOR_GRAY,
    borderWidth: 0.5,
    marginVertical: 0,
  },
  bottomView: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'flex-end',
  },
  bottomRow: {
    flexDirection: 'row-reverse',
  },
  primaryButton: {
    paddingHorizontal: 60,
    paddingVertical: 8,
  },
  closeButton: {
    marginRight: 15,
  },
});

export default ModalView;

import React from 'react';
import { View, ActivityIndicator, StyleSheet, Modal } from 'react-native';

interface Props {
  value: boolean;
}

const Loader = ({ value }: Props) => {
  return (
    <Modal
      animationType={'fade'}
      transparent={true}
      visible={value}
      onRequestClose={() => {
        console.log('Modal has been closed.');
      }}>
      <View style={styles.Container}>
        <ActivityIndicator size="large" color="black" />
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Loader;

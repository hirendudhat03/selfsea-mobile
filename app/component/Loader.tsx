import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

interface Props {
  value: Boolean;
}

const Loader = ({ value }: Props) => {
  return (
    // <Modal
    //   animationType={'fade'}
    //   transparent={true}
    //   visible={true}
    //   onRequestClose={() => {
    //     console.log('Modal has been closed.');
    //   }}>
    value ? (
      <View style={styles.Container}>
        <ActivityIndicator size="large" color="black" />
      </View>
    ) : null

    // </Modal>
  );
};
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Loader;
